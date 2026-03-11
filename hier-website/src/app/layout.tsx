import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Hier & Company | Real Estate Development & Property Management | Castle Rock, CO',
    template: '%s | Hier & Company',
  },
  description:
    'Hier & Company is a family-owned real estate development and property management firm serving Castle Rock, Douglas County, and the Front Range since 1974. Full-service brokerage, development, and financial consulting.',
  keywords: [
    'real estate Castle Rock Colorado',
    'property management Castle Rock',
    'real estate development Douglas County',
    'commercial real estate Castle Rock',
    'Hier and Company',
    'Hier & Company',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hierandcompany.com',
    siteName: 'Hier & Company',
    title: 'Hier & Company | Real Estate Development & Property Management',
    description:
      'A family-owned real estate firm serving Douglas County and the Front Range since 1974.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
