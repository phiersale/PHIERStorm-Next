// app/unforgettable/page.tsx
// UNFORGETTABLE – The Invitation. The Legacy. The Call.

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function UnforgettablePage() {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const openModal = (src: string) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }
  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = ''
  }

  const playVideo = (videoId: string, src: string) => {
    const wrap = document.getElementById('wrap-' + videoId)
    if (!wrap) return
    wrap.innerHTML = '<iframe width="100%" height="100%" src="' + src +
      '" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ' +
      'style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px"></iframe>'
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <div className="container section text-center pt-32">
          <Image
            src="/images/PHIERS_Logo.png"
            alt="PHIERS Logo"
            width={200}
            height={80}
            className="opacity-70 mx-auto mb-4"
          />
          <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">The Gift. The Invitation. The Legacy.</div>
          <div className="text-gray-600 text-base italic mb-4">We built the lever. Now we need you to pull it with us.</div>
          <div className="text-green-400 text-sm font-mono uppercase tracking-wider mb-2">Part I · UNFORGETTABLE</div>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-[6px] mb-4">UNFORGETTABLE</h1>
          <div className="text-gray-500 text-sm tracking-wide">What we leave behind</div>
        </div>

        {/* Video */}
        <section className="container section">
          <div className="video-container max-w-[720px] mx-auto">
            <div id="wrap-unforgettable" className="video-wrapper cursor-pointer group" onClick={() => playVideo('unforgettable', 'https://www.youtube.com/embed/Ypuu2gOeSOs?autoplay=1&rel=0')}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.youtube.com/vi/Ypuu2gOeSOs/hqdefault.jpg')" }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">▶</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full copy – as written in final version */}
        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">They tried to break us before we even had a chance to stand.</h2>
            <p className="text-gray-400 mb-3">Took our names. Our language. Our families. Our history.</p>
            <p className="text-gray-400 mb-3">Built a country on our backs – then wrote us out of the story.</p>
            <p className="text-gray-400 mb-3">And when that didn’t break us, they tried something else.</p>
            <p className="text-gray-400 mb-3">They misjudged us. Feared us. Labeled us. Underestimated us.</p>
            <p className="text-gray-400 mb-3">Locked us out. Locked us up. Redlined us. Hated us – just for existing.</p>
            <p className="text-gray-400 mb-3">Told the world we were the problem. Told us we were less.</p>
            <p className="text-white font-bold text-xl mb-3">And still…</p>
            <p className="text-gray-400 mb-3">We showed up. We built. We fought. We protected. We created.</p>
            <p className="text-gray-400 mb-3">We led – even when they refused to see it.</p>
            <p className="text-gray-400 mb-3">Every war. Every system. Every struggle this country has faced –</p>
            <p className="text-gray-400 mb-5">We were there. Not because we were welcomed. Because we are built that way.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">What unbreakable means</h2>
          <p className="text-gray-400 mb-3">Unbreakable doesn’t mean untouched. It doesn’t mean unhurt.</p>
          <p className="text-gray-400 mb-2">It means:</p>
          <ul className="list-disc list-inside text-gray-400 mb-4 ml-4">
            <li>we’ve been pushed down – and got back up</li>
            <li>we’ve been written off – and proved otherwise</li>
            <li>we’ve been targeted – and still chose to build</li>
          </ul>
          <p className="text-gray-400 mb-2">Again. And again. And again.</p>
          <p className="text-gray-400 mt-4">We don’t disappear. We don’t fold. We don’t quit.</p>
        </section>

        <hr className="border-green/20" />

        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">What we carry</h2>
            <p className="text-gray-400 mb-3">We carry more than people see.</p>
            <ul className="list-disc list-inside text-gray-400 mb-3 ml-4">
              <li>Expectations that were never fair</li>
              <li>Pressure that was never shared</li>
              <li>Responsibility that was never acknowledged</li>
              <li>The fear of being misunderstood – and the courage to move anyway</li>
            </ul>
            <p className="text-gray-400 mb-3">We carry the memory of everything we’ve survived. And the vision of everything we still want to build.</p>
            <p className="text-gray-400">And somehow, through all of it – we still think. We still create. We still imagine a future worth living in.</p>
            <p className="text-green-300 font-semibold mt-3">That’s not fragility. That’s brilliance under pressure.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">What we build</h2>
          <p className="text-gray-400 mb-3">Black men build things that last.</p>
          <ul className="list-disc list-inside text-gray-400 mb-4 ml-4">
            <li>Families</li>
            <li>Communities</li>
            <li>Ideas that outlive us</li>
            <li>Culture the world copies</li>
            <li>Solutions where nobody expected them</li>
          </ul>
          <p className="text-gray-400 mb-3">We build under pressure. We build without permission.</p>
          <p className="text-gray-400 mb-3">We build with our minds, our hands, and our will.</p>
          <p className="text-green-300 font-semibold">And when we build together – the world has to pay attention.</p>
        </section>

        <hr className="border-green/20" />

        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">The truth they avoid</h2>
            <p className="text-gray-400 mb-3">We are not a problem to be managed.</p>
            <p className="text-gray-400 mb-3">We are a force that has carried more than our share – and still found a way to contribute.</p>
            <p className="text-green-300 font-semibold">This country doesn’t just include us. It depends on us.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">What we built here</h2>
          <p className="text-gray-400 mb-3">We didn’t wait for permission. We built something that works.</p>
          <p className="text-gray-400 mb-3"><span className="font-bold text-green-300">PHIERS</span> is simple: When enough real people in a district go on the record together, their representative has to answer publicly.</p>
          <p className="text-gray-400 mb-2">Not noise. Not opinions. People – counted, connected, undeniable.</p>
          <p className="text-gray-400 mb-2">Real names. Real districts. Real presence.</p>
          <p className="text-gray-400">And when enough of us show up together – ignoring us becomes a decision, not an option. That’s where accountability starts.</p>
        </section>

        <hr className="border-green/20" />

        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">Why this moment matters right now</h2>
            <p className="text-gray-400 mb-3">A lot is happening fast. Big decisions. Real consequences. And most people feel like they have no real say.</p>
            <p className="text-gray-400 mb-3"><span className="font-bold text-red-400">Voting rights are being eroded.</span> <span className="font-bold text-red-400">Civil rights protections are being rolled back.</span></p>
            <p className="text-gray-400 mb-3">Project 2025, DOGE policies, and the current administration’s agenda are systematically dismantling the legal and political tools that were supposed to protect us.</p>
            <p className="text-gray-400 mb-3">The right to vote – hard‑won over generations – is being chipped away. The guardrails that held back outright suppression are weakening. And the people who benefit from our silence are betting that we won’t notice – or that we won’t organize.</p>
            <p className="text-gray-400 mb-3"><span className="font-bold text-white">They are wrong.</span></p>
            <p className="text-gray-400 mb-3">Right now, a war is being fought without Congress’s approval – a war that was never authorized. The Constitution gives Congress – and only Congress – the power to declare war. That authority has not been used. And it won’t be used until the cost of inaction becomes greater than the cost of acting.</p>
            <p className="text-gray-400 mb-3"><span className="font-bold text-green-300">We can make that cost real.</span> Organized, district‑level constituent pressure forces Congress to either end the war or explain publicly why they refuse – just as it forces them to answer for every other issue where they’ve ignored the people.</p>
            <p className="text-gray-400">Moments like this don’t break us – they reveal us. When people move together – clearly, consistently, on the record – power has to respond.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">The invitation</h2>
          <p className="text-gray-400 mb-3">I’m reaching out to you because you understand pressure. Because you’ve had to stand when it wasn’t easy. Because even after everything, you still think about how to make things better – not just for yourself, but for everyone around you.</p>
          <p className="text-gray-400 mb-2">That mindset matters. That heart matters. That strength matters.</p>
          <p className="text-green-300 font-semibold">We built the lever. Now we need you to pull it with us.</p>
        </section>

        <hr className="border-green/20" />

        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">What I’m asking</h2>
            <p className="text-gray-400 mb-3">Not for money. Not for blind support.</p>
            <ul className="list-disc list-inside text-gray-400 mb-4 ml-4">
              <li>Get on the record</li>
              <li>Add your name</li>
              <li>Be counted</li>
            </ul>
            <p className="text-gray-400">One act of courage. One moment of clarity. One step toward something bigger than any of us alone.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4">What this is – and what it isn’t</h2>
          <div className="mb-4">
            <p className="text-white font-semibold mb-1">What this is:</p>
            <ul className="list-disc list-inside text-gray-400 ml-4">
              <li>A way to be seen</li>
              <li>A peaceful, lawful way to be heard</li>
              <li>A record of who we are and what we bring</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">What this isn’t:</p>
            <ul className="list-disc list-inside text-gray-400 ml-4">
              <li>Control over anyone’s vote</li>
              <li>A threat or coercion</li>
              <li>A space that excludes others</li>
            </ul>
          </div>
          <p className="text-gray-400 mt-4">This is about dignity. This is about presence. This is about being counted – finally.</p>
        </section>

        <hr className="border-green/20" />

        <section className="bg-[#111] py-12 px-6 my-8">
          <div className="max-w-[840px] mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">What we can do together</h2>
            <p className="text-gray-400 mb-3">When Black men move with intention – we change the room. We change the conversation. We change what people believe is possible.</p>
            <p className="text-gray-400">We’ve done it before. We can do it again. We can do it better – together.</p>
          </div>
        </section>

        <hr className="border-green/20" />

        <section className="container section text-center">
          <p className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            UNBREAKABLE.<br />
            UNSTOPPABLE.<br />
            <span className="text-green-300">UNFORGETTABLE.</span>
          </p>
        </section>

        <hr className="border-green/20" />

        <section className="container section text-center">
          <div className="bg-[#111] border border-[#222] rounded-lg p-8 my-8">
            <p className="text-white text-xl font-bold mb-4">Your move</p>
            <p className="text-gray-400 mb-5">If you’re ready to stand in your power – if you’re ready to be counted – if you’re ready to move with brothers who see you –</p>
            <p className="text-gray-400 mb-5">Then step forward.</p>
            <p className="text-green-300 font-semibold text-lg mb-6">Your name. Your district. On the record. You belong here.</p>
            <Button href="/action" variant="primary">✊ Take Action</Button>
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <Button href="/petition" variant="secondary">✍ SIGN THE PETITION</Button>
            </div>
          </div>
        </section>

        {/* Trilogy Footer */}
        <div className="border-t border-green/20 py-8 mt-12">
          <div className="container text-center">
            <p className="text-gray-400 text-sm mb-4">The complete story – read in any order</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/unstoppable" className="text-green-400 hover:text-green-300">
                📘 UNSTOPPABLE – The Movement &amp; The Math
              </Link>
              <Link href="/unbreakable" className="text-green-400 hover:text-green-300">
                📖 UNBREAKABLE – The Pattern &amp; The Proof
              </Link>
              <Link href="/unforgettable" className="text-green-400 hover:text-green-300 font-bold border-b border-green-400">
                🌟 UNFORGETTABLE – The Invitation &amp; The Legacy
              </Link>
            </div>
          </div>
        </div>
      {/* Trilogy continuation footer */}
      <div className="border-t border-gray-800 py-8 mt-16 text-center">
        <p className="text-gray-400 text-sm mb-3">If this resonated, there’s more:</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="/unbreakable" className="text-green-400 hover:underline">→ UNBREAKABLE — how we got here</a>
          <a href="/unstoppable" className="text-green-400 hover:underline">→ UNSTOPPABLE — where we go next</a>
        </div>
      </div>
      </main>

      <Footer />

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white text-3xl cursor-pointer hover:text-green transition-colors"
              >
                ✕
              </button>
              <Image
                src={modalImage}
                alt="Enlarged view"
                width={800}
                height={600}
                className="rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>

      <style jsx global>{`
        .back-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: #3ddc84;
          color: #0a1022;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 150ms ease;
          z-index: 999;
          border: none;
        }
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
        .back-to-top:hover {
          background: #2ab568;
          transform: translateY(-2px);
        }
        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 12px;
          border: 2px solid rgba(61, 220, 132, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        }
        .video-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function() {
            var btt = document.getElementById('back-to-top');
            if (btt) {
              if (window.scrollY > 400) {
                btt.classList.add('visible');
              } else {
                btt.classList.remove('visible');
              }
            }
          });
        `
      }} />
    </>
  )
}

// app/unforgettable/page.tsx
