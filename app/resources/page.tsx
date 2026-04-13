// FILE: app/resources/page.tsx
// RESOURCES PAGE - Resource Hub

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'

export default function ResourcesPage() {
  const [willModalOpen, setWillModalOpen] = useState(false)

  // Video data
  const videos = [
    { title: 'The Bipartisan Solution', duration: '11:11', url: 'https://youtu.be/bEUyDVAYwpk' },
    { title: 'The Math Congress Fears', duration: '1:11', url: 'https://youtu.be/2j-dF3hgdeE' },
    { title: 'The Mechanism', duration: '3:33', url: 'https://youtu.be/jMU6LKEBzbs' },
    { title: 'The Moment', duration: '2:22', url: 'https://youtu.be/eE-TxvI0d4Q' },
    { title: 'The Vision', duration: '4:44', url: 'https://youtu.be/xy3F9ZWbgS8' },
    { title: 'Union Power – Mamdani Strategy', duration: '9:15', url: 'https://vimeo.com/1157760069' },
    { title: 'Pathos Communications Validation', duration: 'DRAFT', url: 'https://youtu.be/KLu7USN_dao' },
    { title: 'A Bold Counterplan — Erica Chenoweth', duration: '3.5% Rule', url: 'https://youtu.be/faF7-En6NWU?si=2IJKzxBfdE0DUD3p&t=312', desc: 'Harvard researcher explains why 3.5% organized is all it takes.' },
    { title: 'The Right Thing at the Right Time', duration: 'Why this moment matters', url: 'https://youtu.be/5KE0JV5hQcs?si=_EoEvzR9K9gU4PnG' },
  ]

  const guides = [
    { title: 'National PHIERS Initiative', desc: '$2.73 trillion annual savings. Complete national framework and Fight Club strategy.', url: 'https://docs.google.com/document/d/1LBnU4KCgnWEuc7fLYU9nYAAtlpZ6wYSm880INmey4NI/edit?usp=sharing' },
    { title: 'California PHIERS Initiative', desc: '$110+ billion annual savings. Bicoastal leadership with Maryland.', url: 'https://docs.google.com/document/d/17abpDTOkbqLjE4BYVye33K7degdkurJBd8Wy--U37jo/edit?usp=sharing' },
    { title: 'Maryland PHIERS Initiative', desc: '$17+ billion annual savings. Congressman Van Hollen\'s vision.', url: 'https://docs.google.com/document/d/1IQdyc4g-PAO50pb_MZOdaTrmsIp7XbxIZjQN_-xHShY/edit?usp=sharing' },
    { title: 'NYC PHIERS Initiative', desc: '$55+ billion annual savings. Urban proof-of-concept.', url: 'https://docs.google.com/document/d/1yMl0kHRmxSCCGdmR8NweSJ6oJS3KPYIjqogmQ4PbSk8/edit?usp=sharing' },
  ]

  const letters = [
    { title: 'Grassroots Organizers', audience: 'Indivisible · No Kings · MoveOn', desc: 'PHIERS gives your organizing infrastructure economic backing. 9 crises solved simultaneously.' },
    { title: 'Union Leaders', audience: 'AFL-CIO · SEIU · AFSCME · IBEW', desc: 'Strengthens union power. $7,900+ saved per member, 2M new union-eligible jobs.' },
    { title: 'Elected Officials', audience: 'Senators · House members · Governors', desc: 'At 3.5%, $1.95B+ per district leverage — 230:1 advantage over corporate lobbying.' },
    { title: 'Civic Law Centers', audience: 'ACLU · NAACP Legal Defense Fund', desc: 'Legal partnership for trademark defense, cooperative structure, civil rights integration.' },
    { title: 'State & Local Leaders', audience: 'Treasurers · Mayors · City councils', desc: 'States can implement without Congress. California + Maryland bicoastal pilot.' },
    { title: 'Healthcare Innovators', audience: 'Telemedicine · Health systems · Tech', desc: 'Your platforms validated at scale. Cooperative partnership, not competition.' },
  ]

  const visuals = [
    { title: '$2.73T Savings Infographic', desc: 'All dimensions connected. Annual savings breakdown.' },
    { title: 'PHIERS Rubik\'s Cube', desc: '5-dimensional interconnection visual.' },
    { title: '80/20 Healthcare Model', desc: 'Telehealth vs Insurance cost comparison.' },
    { title: 'Drug Development Costs', desc: 'Academic vs Big Pharma — why alternatives work.' },
    { title: 'Power of the People', desc: 'Congressional pressure math. 230:1 advantage.' },
    { title: 'Guaranteed Change Map', desc: '3.5% = 11.6M signatures.' },
  ]

  const faqs = [
    { q: 'Is this realistic?', a: 'Yes — because it\'s based on math, not hope. Telehealth is already cheaper and faster. Universal healthcare already saves $2.73T. UBI is funded by redirecting waste, not raising taxes.' },
    { q: 'Why telehealth first?', a: 'Because it\'s the first domino. Telehealth is 10x cheaper, instantly scalable, already working, already nationwide. Once telehealth is authorized, the entire 5D cascade becomes possible.' },
    { q: 'Why 3.5%?', a: 'Harvard research (Erica Chenoweth) shows that when 3.5% of a population organizes, systemic change becomes guaranteed, peaceful, and inevitable. For the U.S., that\'s 11.6 million people.' },
    { q: 'Is this partisan?', a: 'No. Healthcare, stability, jobs, and democracy are not partisan issues. They\'re human issues. This movement includes conservatives, liberals, independents, and apolitical Americans.' },
    { q: 'How is this funded?', a: 'Through the $2.73 trillion we\'re already wasting. No new taxes. No new agencies. Just redirecting money from insurance profits to universal coverage.' },
    { q: 'What if Congress still refuses?', a: 'Then we replace them — peacefully, legally, and at scale. Primaries, general elections, district-level mobilization. No violence. Just organized civic power.' },
  ]

  const toolkits = [
    { title: 'Talking Points by Audience', desc: 'Customize PHIERS messaging for organizers, unions, elected officials, media.' },
    { title: 'Social Media Toolkit', desc: 'Pre-written posts for LinkedIn, Facebook, Twitter. Graphics & hashtags included.' },
    { title: 'Partnership Framework', desc: 'How to collaborate with PHIERS. Governance, benefit-sharing, legal integration.' },
  ]

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <div className="container section text-center pt-32">
          <div className="relative h-[80px] w-auto mb-6 flex justify-center">
            <Image
              src="/images/PHIERS_Logo.png"
              alt="PHIERS.org"
              width={80}
              height={80}
              className="opacity-90"
            />
          </div>
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">One place. Everything you need.</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            PHIERS <span className="text-green">Resource Hub</span>
          </h1>
          <p className="font-condensed text-lg text-gray-400 max-w-[700px] mx-auto">
            State guides, audience letters, videos, infographics, FAQ — all in one place. Download, share, organize.
          </p>
        </div>

        <hr className="border-green/20" />

        {/* Video Library */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4 border-b-2 border-green/30 pb-3">🎥 <span className="text-green">Video Library</span></h2>
          <details className="bg-bg-dark border border-green/20 rounded-lg mb-3">
            <summary className="font-condensed font-semibold text-lg text-white p-4 cursor-pointer list-none flex justify-between items-center bg-green/5 rounded-lg">
              Core explainers & deep dives
              <span className="bg-green/15 text-green text-xs font-semibold px-2 py-0.5 rounded-full ml-2">{videos.length} videos</span>
            </summary>
            <div className="p-5">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((video, i) => (
                  <div key={i} className="bg-bg-card rounded-lg p-4 border border-green/10">
                    <div className="font-condensed font-bold text-white mb-0.5">{video.title}</div>
                    <div className="text-gray-500 text-xs mb-2">{video.duration}</div>
                    <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-green text-sm font-semibold hover:underline">Watch →</a>
                    {video.desc && <p className="text-gray-500 text-xs mt-2">{video.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        <hr className="border-green/20" />

        {/* Implementation Guides */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4 border-b-2 border-green/30 pb-3">📋 <span className="text-green">Implementation Guides</span></h2>
          <details className="bg-bg-dark border border-green/20 rounded-lg mb-3">
            <summary className="font-condensed font-semibold text-lg text-white p-4 cursor-pointer list-none flex justify-between items-center bg-green/5 rounded-lg">
              State & national white papers
              <span className="bg-green/15 text-green text-xs font-semibold px-2 py-0.5 rounded-full ml-2">{guides.length} guides</span>
            </summary>
            <div className="p-5">
              <div className="grid md:grid-cols-2 gap-5">
                {guides.map((guide, i) => (
                  <div key={i} className="bg-bg-card border border-green/20 rounded-lg p-5 hover:border-green transition-all">
                    <h4 className="font-condensed font-bold text-xl text-green mb-2">{guide.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{guide.desc}</p>
                    <a href={guide.url} target="_blank" rel="noopener noreferrer" className="text-green font-semibold hover:underline">Read White Paper →</a>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        <hr className="border-green/20" />

        {/* Audience Letters */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4 border-b-2 border-green/30 pb-3">✍️ <span className="text-green">Audience-Specific Letters</span></h2>
          <p className="text-gray-400 text-sm mb-4">Tailored explanations of PHIERS for different constituencies. Each letter emphasizes our 5-dimensional approach.</p>
          <details className="bg-bg-dark border border-green/20 rounded-lg mb-3">
            <summary className="font-condensed font-semibold text-lg text-white p-4 cursor-pointer list-none flex justify-between items-center bg-green/5 rounded-lg">
              Download letters by audience
              <span className="bg-green/15 text-green text-xs font-semibold px-2 py-0.5 rounded-full ml-2">{letters.length} templates</span>
            </summary>
            <div className="p-5">
              <div className="grid md:grid-cols-2 gap-4">
                {letters.map((letter, i) => (
                  <div key={i} className="bg-bg-card border-l-3 border-l-green rounded-r-lg p-4">
                    <h5 className="font-condensed font-bold text-lg text-white mb-1">{letter.title}</h5>
                    <div className="text-green text-xs uppercase tracking-wide mb-2">{letter.audience}</div>
                    <p className="text-gray-400 text-sm mb-3">{letter.desc}</p>
                    <a href="mailto:info@phiers.org" className="text-green font-semibold text-sm hover:underline">Request letter →</a>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        <hr className="border-green/20" />

        {/* Visual Resources */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4 border-b-2 border-green/30 pb-3">🖼️ <span className="text-green">Visual Resources</span></h2>
          <details className="bg-bg-dark border border-green/20 rounded-lg mb-3">
            <summary className="font-condensed font-semibold text-lg text-white p-4 cursor-pointer list-none flex justify-between items-center bg-green/5 rounded-lg">
              Infographics & shareable assets
              <span className="bg-green/15 text-green text-xs font-semibold px-2 py-0.5 rounded-full ml-2">{visuals.length} assets</span>
            </summary>
            <div className="p-5">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {visuals.map((visual, i) => (
                  <div key={i} className="bg-bg-card border border-green/20 rounded-lg p-5 hover:border-green transition-all">
                    <h4 className="font-condensed font-bold text-lg text-green mb-2">{visual.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{visual.desc}</p>
                    <a href="mailto:info@phiers.org" className="text-green font-semibold hover:underline">Request →</a>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        <hr className="border-green/20" />

        {/* FAQ */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4 border-b-2 border-gold/30 pb-3">❓ <span className="text-gold">Frequently Asked Questions</span></h2>
          <details className="bg-bg-dark border border-green/20 rounded-lg mb-3">
            <summary className="font-condensed font-semibold text-lg text-white p-4 cursor-pointer list-none flex justify-between items-center bg-green/5 rounded-lg">
              Clear answers. No jargon.
              <span className="bg-gold/15 text-gold text-xs font-semibold px-2 py-0.5 rounded-full ml-2">{faqs.length} Q&amp;A</span>
            </summary>
            <div className="p-5">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-bg-card border-l-3 border-l-gold rounded-r-lg p-4 mb-3">
                  <div className="font-condensed font-bold text-lg text-white mb-1">{faq.q}</div>
                  <p className="text-gray-400 text-sm">{faq.a}</p>
                </div>
              ))}
              <p className="text-right mt-4"><Link href="/faq" className="text-green hover:underline">View full FAQ →</Link></p>
            </div>
          </details>
        </section>

        <hr className="border-green/20" />

        {/* Additional Toolkits */}
        <section className="container section">
          <h2 className="font-display text-3xl text-white mb-4 border-b-2 border-green/30 pb-3">📚 <span className="text-green">Additional Toolkits</span></h2>
          <details className="bg-bg-dark border border-green/20 rounded-lg mb-3" open>
            <summary className="font-condensed font-semibold text-lg text-white p-4 cursor-pointer list-none flex justify-between items-center bg-green/5 rounded-lg">
              Resources for deeper organizing
              <span className="bg-green/15 text-green text-xs font-semibold px-2 py-0.5 rounded-full ml-2">{toolkits.length} toolkits</span>
            </summary>
            <div className="p-5">
              <div className="grid md:grid-cols-3 gap-4">
                {toolkits.map((toolkit, i) => (
                  <div key={i} className="bg-bg-card border border-green/20 rounded-lg p-5 hover:border-green transition-all">
                    <h4 className="font-condensed font-bold text-lg text-green mb-2">{toolkit.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{toolkit.desc}</p>
                    <a href="mailto:info@phiers.org" className="text-green font-semibold hover:underline">Request →</a>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">You have the tools.<br /><span className="text-green">Now organize your district.</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/petition" variant="primary">✍ Sign the Petition</Button>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdETA-oNIeOAzEsG4GsYiiws1YBpLunx8ioVJkZac5hzSxaZw/viewform" variant="secondary">📋 Take the Survey</Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Will Price Modal */}
      <AnimatePresence>
        {willModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[99998] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setWillModalOpen(false)}
          >
            <div className="relative max-w-[720px] w-full bg-bg-dark/97 border-2 border-green/35 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setWillModalOpen(false)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-bg-card text-green border-2 border-green flex items-center justify-center text-xl hover:bg-green hover:text-bg-card transition-all z-10"
              >
                ✕
              </button>
              <div className="flex flex-wrap">
                <div className="w-full md:w-[240px] min-h-[280px] overflow-hidden">
                  <Image
                    src="/images/Will_Price.png"
                    alt="Will Price — Founder & Chief Solutions Architect, PHIERS"
                    width={240}
                    height={280}
                    className="w-full h-full min-h-[260px] object-cover object-[55%_top]"
                  />
                </div>
                <div className="flex-1 min-w-[240px] p-7 flex flex-col justify-center">
                  <p className="font-condensed text-xs text-green uppercase tracking-[3px] mb-2">The Architect</p>
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-1">Will Price</h3>
                  <p className="font-condensed text-sm text-gold font-bold mb-4">Founder &amp; Chief Solutions Architect, PHIERS</p>
                  <p className="text-body text-sm">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending — and built the lever to redirect it toward healthcare, jobs, and a monthly check for every American. Building this since 2009.</p>
                </div>
              </div>
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
          background: var(--green);
          color: var(--bg-deep);
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
        details summary {
          list-style: none;
        }
        details summary::-webkit-details-marker {
          display: none;
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

// END FILE: app/resources/page.tsx
