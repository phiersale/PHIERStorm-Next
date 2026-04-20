import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PHIERS.org — The Leverage Congress Can\'t Ignore',
  description: 'Organized people, by district, with real consequences. That\'s how change actually happens.',
  icons: {
    icon: '/images/PHIERS_Logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,400;0,600;0,700;1,400&family=Barlow+Condensed:wght@400;600;700;900&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href="/images/PHIERS_Logo.png" />
        <link rel="preload" as="image" href="/images/You_Are_Not_Powerless.jpg" />
        <link rel="preload" as="image" href="/images/Alone_Youre_Easy_To_Ignore-1500_fixes_it.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}