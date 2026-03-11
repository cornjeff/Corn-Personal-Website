import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@hierandcompany.com'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hierandcompany.com'
