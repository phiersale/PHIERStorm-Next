// FILE: app/4daBros/trilogy/about/page.tsx
// VERSION: 2.0.0

'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function TrilogyAbout() {
  useEffect(() => {
    document.body.style.backgroundColor = '#000000'
    return () => { document.body.style.backgroundColor = '' }
  }, [])

  return (
    <div className="min-h-screen bg-black text-[#e0e0e0] font-sans fade-in">
      <main className="max-w-[640px] mx-auto px-5 py-12 md:py-20">

        <h1 className="text-[28px] md:text-[32px] font-bold text-white mb-8">
          Why I Built This For You
        </h1>

        <div className="space-y-5 text-[18px] leading-[1.8]">
          <p>I built this because I know what it feels like to move through a world that treats you like you’re supposed to shrink.</p>
          <p>A world that takes your strength but questions your worth.<br />That uses your ideas but doesn’t say your name.<br />That expects you to carry everything and complain about nothing.</p>
          <p>I know that feeling because I lived it.<br />And I know you’ve lived it too.</p>
          <p>For years, I carried the weight quietly.<br />Be strong.<br />Don’t slip.<br />Don’t show it.<br />Figure it out.<br />Survive it.</p>
          <p>All while watching protections get rolled back.<br />Support get thinner.<br />Language about equity get pushed out of the room.<br />Doors that were barely open start to close again.</p>
          <p>At some point, I realized something simple:</p>
          <p>We are not the problem.<br />We are the warning.<br />We are the solution.</p>
          <p>Not in a slogan way.<br />In a structural way.</p>
          <p>We’ve always been the ones holding things together.<br />We build under pressure.<br />We adapt when the rules change.<br />We survive what would break other people.<br />And we still find ways to create, protect, and love.</p>
          <p>But we rarely get spaces that speak to us directly.<br />Without performance.<br />Without translation.<br />Without pretending things are better than they are.</p>
          <p>So I built one.</p>
          <p>Not for the cameras.<br />Not for the headlines.<br />Not for people who only see us as a talking point.</p>
          <p>For you.<br />For us.</p>
          <p>A place where you don’t have to prove anything.<br />Where you don’t have to defend your existence.<br />Where you can sit with the truth of this moment — the fear, the anger, the hope, the vision — and not feel like you’re carrying it alone.</p>
          <p>This trilogy isn’t here to tell you what to think.<br />It isn’t here to tell you what to do.<br />It’s here to say:</p>
          <p>You matter.<br />Your mind matters.<br />Your presence matters.<br />Your future matters.</p>
          <p>And whatever happens next, we don’t have to move through it small.</p>
          <p className="text-[#999999]">— Phier</p>
        </div>

        <div className="mt-10">
          <Link href="/4daBros/trilogy" className="text-[#999999] text-sm hover:text-white transition">
            ← Back to the trilogy
          </Link>
        </div>

        <footer className="mt-12 pt-6 border-t border-[#222] text-sm text-[#999999] text-center space-y-2">
          <p>Built on PHIERS — Persevering. Hopeful. Innovative. Enduring. Resilient. Steady under pressure.</p>
          <p><a href="https://phiers.org" className="hover:text-white transition">Go to PHIERS.org →</a></p>
        </footer>
      </main>

      <style jsx global>{`
        .fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        body { background-color: #000000; margin: 0; }
      `}</style>
    </div>
  )
}

// END FILE: app/4daBros/trilogy/about/page.tsx