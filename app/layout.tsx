    /* FILE: app/layout.tsx */

    import type { Metadata } from 'next'
    import './globals.css'
    import SurveyBanner from '@/components/SurveyBanner'
    import ReturningVisitorModal from '@/components/ReturningVisitorModal'

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
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.25, maximum-scale=5.0, user-scalable=yes" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,400;0,600;0,700;1,400&family=Barlow+Condensed:wght@400;600;700;900&display=swap" rel="stylesheet" />
            
            <link rel="preconnect" href="https://www.youtube.com" />
            <link rel="preconnect" href="https://i.ytimg.com" />
            <link rel="preload" as="image" href="https://img.youtube.com/vi/GwfhH8yDZQo/hqdefault.jpg" />

            {/* Preload images */}
            <link rel="preload" as="image" href="/images/PHIERS_Logo.png" />
            <link rel="preload" as="image" href="/images/You_Are_Not_Powerless.jpg" />
            <link rel="preload" as="image" href="/images/Alone_Youre_Easy_To_Ignore-1500_fixes_it.jpg" />

            {/* Additional fonts for newsflash (optional) */}
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
          </head>
          <body>
          <SurveyBanner />
          {children}
          <ReturningVisitorModal />
          </body>
        </html>
      )
    }

    /* FILE: app/layout.tsx */