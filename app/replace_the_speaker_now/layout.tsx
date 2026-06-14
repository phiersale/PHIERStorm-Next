// FILE: app/replace_the_speaker_now/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Replace the Speaker NOW — Congress Sent Home Early',
  description: 'Speaker sent the House home to avoid a vote. 500 signatures in your district is enough to force a meeting.',
  openGraph: {
    title: 'Replace the Speaker NOW',
    description: 'Congress is home. Leadership is vulnerable. Districts matter more than lobbyists.',
    images: ['/images/Alone_Youre_Easy_To_Ignore-1500_fixes_it.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}