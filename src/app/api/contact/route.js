// /app/api/contact/route.js
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { generateEmailTemplate } from '@/lib/emailTemplate'

// Create transporter outside request handler for reuse
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD, // Use App Password for Gmail
  },
})

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL, // Your email where you want to receive messages
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: generateEmailTemplate({
        name,
        email,
        subject,
        message,
        date: new Date().toLocaleString(),
      }),
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
