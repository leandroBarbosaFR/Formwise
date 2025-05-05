// src/app/api/contact/route.ts

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const body = await req.json()
  const { firstName, lastName, email, subject, message } = body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  const mailOptions = {
    from: email,
    to: process.env.MAIL_USER,
    subject: `FormWise - ${subject || 'Nouveau message'}`,
    html: `
      <h2>Nouveau message de ${firstName} ${lastName}</h2>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Sujet :</strong> ${subject}</p>
      <p><strong>Message :</strong><br/>${message}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès.' },
      { status: 200 },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l’envoi du message.' },
      { status: 500 },
    )
  }
}
