// FILE: components/VideoEmbed.tsx
// VERSION: 1.0.0

'use client'

import { useState } from 'react'

interface VideoEmbedProps {
  videoId: string
  title?: string
  thumbnailUrl?: string
}

export default function VideoEmbed({ videoId, title = 'Video', thumbnailUrl }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const thumb = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  return (
    <div
      className="relative w-full aspect-video cursor-pointer rounded-xl overflow-hidden group"
      onClick={() => setIsPlaying(true)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105"
        style={{ backgroundImage: `url(${thumb})` }}
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white text-3xl group-hover:bg-red-700 transition-colors">
          ▶
        </div>
      </div>
    </div>
  )
}