import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import { sendConfirmationEmail, notifyAdmin } from '@/utils/sendEmail';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const existingLead = await prisma.lead.findUnique({
      where: { email },
    });

    if (existingLead) {
      return NextResponse.json(
        { error: 'Este e-mail já está cadastrado.' },
        { status: 409 },
      );
    }

    const newLead = await prisma.lead.create({
      data: { name, email, phone, message },
    });

    await sendConfirmationEmail(email, name);

    await notifyAdmin(email, name, message);

    return NextResponse.json(
      { message: 'Lead salvo e e-mails enviados com sucesso!', lead: newLead },
      { status: 200 },
    );
  } catch (error) {
    console.error('Erro ao salvar lead ou enviar e-mails:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a solicitação.' },
      { status: 500 },
    );
  }
}
