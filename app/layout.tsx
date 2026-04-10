import { Barlow } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const dynamic = 'force-dynamic'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'PHIERS.org — Leverage Over Congress',
  description: 'A 16-year solutions engine. Get leverage over Congress to make them do their job. 1,500 signatures per district to force town halls April 15th.',
  openGraph: {
    title: 'PHIERS.org — Leverage Over Congress',
    description: 'A 16-year solutions engine. 1,500 signatures per district. Force town halls April 15th.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={`${barlow.variable} font-sans bg-[#080d1a] text-gray-100 min-h-screen`}>
        <SiteHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  )
}
