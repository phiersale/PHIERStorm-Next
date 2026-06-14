// FILE: app/replace_the_speaker_now/page.tsx
// VERSION: 1.0 – Direct URL to TransitionModal

'use client'

import TransitionModal from '@/components/TransitionModal'
import { useRouter } from 'next/navigation'

export default function ReplaceSpeakerNowPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black">
      <TransitionModal
        onShowFramework={() => {
          window.location.href = '/the-system?from=replace_speaker'
        }}
        onSkipVideo={() => {
          router.push('/')
        }}
        onSignPetition={() => {
          window.open('https://forms.gle/WrpNNbwdGQG7Ton47', '_blank')
        }}
      />
    </div>
  )
}

// FILE: app/replace_the_speaker_now/page.tsx
