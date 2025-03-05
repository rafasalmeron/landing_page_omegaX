'use server';

export const submitForm = async (formData: FormData) => {
  const phone = formData.get('phone') as string;
  const cleanedPhone = phone.replace(/\D/g, '');

  if (cleanedPhone.length !== 11) {
    return { error: 'O número de telefone deve conter 11 dígitos.' };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/lead`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      },
    );

    if (!response.ok) {
      return { error: 'Erro: Dados inválidos.' };
    }

    return { success: 'Enviado com sucesso!' };
  } catch {
    return { error: 'Erro ao conectar com o servidor.' };
  }
};
