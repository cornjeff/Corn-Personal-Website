import { NextRequest, NextResponse } from 'next/server'
import { resend, CONTACT_EMAIL } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Hier & Company Website <noreply@hierandcompany.com>',
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `New Inquiry: ${service || 'General'} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1C2E26; padding: 24px 32px; border-bottom: 3px solid #C9902A;">
            <h2 style="color: #C9902A; margin: 0; font-size: 20px;">New Website Inquiry</h2>
            <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 13px;">Hier & Company — hierandcompany.com</p>
          </div>
          <div style="padding: 32px; background: #f9f7f4; border: 1px solid #e8e0d4;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.1em; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1A1F24; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; font-size: 14px; color: #C9902A;"><a href="mailto:${email}" style="color: #C9902A;">${email}</a></td>
              </tr>
              ${phone ? `<tr><td style="padding: 10px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Phone</td><td style="padding: 10px 0; font-size: 14px; color: #1A1F24;">${phone}</td></tr>` : ''}
              ${service ? `<tr><td style="padding: 10px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Service</td><td style="padding: 10px 0; font-size: 14px; color: #1A1F24;">${service}</td></tr>` : ''}
              <tr>
                <td colspan="2" style="padding-top: 16px; border-top: 1px solid #e8e0d4;"></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1A1F24; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 32px; background: #f0ebe3; font-size: 11px; color: #9CA3AF;">
            Sent via hierandcompany.com contact form. Reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
