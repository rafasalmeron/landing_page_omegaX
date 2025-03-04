import nodemailer from 'nodemailer';
import { readFile } from 'fs/promises';
import path from 'path';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export const sendConfirmationEmail = async (to: string, name: string) => {
  const templatePath = path.join(
    process.cwd(),
    'src',
    'utils',
    'emailTemplate.html',
  );
  let htmlContent = await readFile(templatePath, 'utf-8');

  htmlContent = htmlContent.replace('{{name}}', name);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Confirmação de Inscrição na Newsletter',
    text: `Olá, ${name}! Obrigado por se inscrever em nossa newsletter!`,
    html: htmlContent,
  };

  await transporter.sendMail(mailOptions);
};

export const notifyAdmin = async (
  userEmail: string,
  userName: string,
  userMessage: string,
) => {
  const adminEmail = process.env.ADMIN_EMAIL;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: adminEmail,
    subject: `Nova mensagem de ${userName}`,
    text: `Você recebeu uma nova mensagem de ${userName} (${userEmail}):\n\n${userMessage}`,
    html: `
      <p>Você recebeu uma nova mensagem de <strong>${userName}</strong> (${userEmail}):</p>
      <p>${userMessage}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
