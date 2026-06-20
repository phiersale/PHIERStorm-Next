//FILE: app/organizers/page.tsx

'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import UrgencyBanner from '@/components/UrgencyBanner'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import './organizers.css'

export default function OrganizersPage() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="organizers-page">
      <UrgencyBanner />
      <Navigation />

      <main>

        {/* HERO */}
        <div className="page-hero">
          {/* PHIERS Logo — centered like other pages */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/PHIERS_Logo.png"
              alt="PHIERS Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain opacity-90"
            />
          </div>
          <span className="eyebrow font-condensed uppercase tracking-widest text-xs text-green-400">For Organizers Who Know Protests Aren't Enough</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            You built the movement.<br />
            <span className="text-green-400">PHIERS gives it teeth.</span>
          </h1>
          <div className="max-w-2xl space-y-4 mt-4">
            <p className="hero-sub" style={{color:'var(--text-bright)'}}>
              Every movement needs people on the ground — not as volunteers. As partners in a district-level pressure system Congress cannot ignore.
            </p>
            <p className="hero-sub" style={{color:'var(--text-body)'}}>
              You already know what's missing. It's not people. It's not energy. It's the mechanism that converts that energy into something Congress can't wait out.
            </p>
            <p className="hero-sub" style={{color:'var(--green)'}}>
              You fill their cup. PHIERS is what they do with the energy the morning after the rally.
            </p>
          </div>
        </div>

        <hr className="divider" />

        {/* HERO IMAGE — Organized Together. Essential Always. */}
        <section className="w-full">
          <div className="relative w-full overflow-hidden">
            <img
              src="/images/Union_Organizers.jpg"
              alt="Union organizers standing together in solidarity"
              className="w-full h-auto max-h-[60vh] object-cover"
            />
            {/* Deep blue overlay */}
            <div className="absolute inset-0 bg-[#0d1525] opacity-40"></div>
            {/* Green accent gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-400/20 to-transparent"></div>
          </div>
        </section>

        <hr className="divider" />

        <hr className="divider" />

        {/* Congress Is Home Banner */}
        <section className="section py-12 md:py-16">
          <div className="banner-block bg-red-600 text-white text-center p-6 md:p-8 rounded-xl max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
              THE WINDOW IS OPEN
              <br />
              <span className="text-yellow-400 text-xl md:text-2xl font-condensed font-bold">
                Congress is home through June 22
              </span>
            </h2>
            <div className="space-y-2 max-w-2xl mx-auto">
              <p className="font-body text-base md:text-lg text-white/90">
                For one week, representatives are in their districts instead of Washington.
              </p>
              <p className="font-body text-base md:text-lg text-white/90">
                This is when organized constituents have the greatest ability to get noticed.
              </p>
            </div>
            <p className="font-condensed font-bold text-xl md:text-2xl text-yellow-400 mt-4">
              The goal: 500 people in every district.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* No Kings Bridge */}
        <section className="section-alt bg-[#0a1628] border-y border-white/5 py-16 md:py-20">
          <div className="inner max-w-4xl mx-auto px-4 text-center">
            <span className="font-condensed uppercase tracking-widest text-xs text-green-400 block mb-2">The No Kings Bridge</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              The No Kings Rallies Proved
              <br />
              <span className="text-yellow-400">Something Important.</span>
            </h2>

            <div className="grid grid-cols-2 gap-4 my-6 max-w-2xl mx-auto">
              {[
                {icon:'👥', text:'People are ready.'},
                {icon:'🔥', text:'People are angry.'},
                {icon:'⚖️', text:'People want accountability.'},
                {icon:'🗳️', text:'People want representation.'},
              ].map(({icon,text}) => (
                <div key={text} className="bg-[#111d35] border border-white/10 rounded-lg p-5 text-center">
                  <div className="text-4xl mb-1">{icon}</div>
                  <p className="font-body font-bold text-white text-base md:text-lg">{text}</p>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-green-400 pl-4 py-3 my-5">
              <p className="font-condensed text-xl md:text-2xl font-bold text-white">But protests create attention.<br />Organization creates leverage.</p>
            </div>

            <p className="font-body text-lg text-white mt-4">If you helped organize people into the streets,</p>
            <p className="font-body text-lg text-white">help organize them into their districts.</p>
            <p className="font-condensed font-bold text-xl text-green-400 mt-2">That's where Congress feels it.</p>
          </div>
        </section>

        <hr className="divider" />

        {/* THIS WEEK'S OBJECTIVE */}
        <section className="section py-12 md:py-16 max-w-3xl mx-auto px-4">
          <div className="border-2 border-yellow-400 bg-yellow-400/5 rounded-xl p-8 md:p-10 my-8">
            <span className="font-condensed uppercase tracking-widest text-sm text-yellow-400 block mb-2 text-center">
              THIS WEEK'S OBJECTIVE
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-yellow-400 text-center">
              500 People Per District
            </h2>
            <div className="space-y-3 mt-4 text-center">
              <p className="font-body text-base text-gray-300">PHIERS does not need millions all at once.</p>
              <p className="font-body text-base text-gray-300">It needs enough people in enough districts to prove those districts can organize.</p>
              <p className="font-body font-bold text-lg text-white mt-4">500 is not the victory.</p>
              <p className="font-body font-bold text-lg text-white">500 is proof.</p>
            </div>
            <div className="border-l-4 border-green-400 pl-4 py-2 mt-6 max-w-md mx-auto">
              <p className="font-condensed text-xl font-bold text-white">Organized districts create leverage.</p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* THE TWO THINGS THAT MATTER THIS WEEK */}
        <section className="section py-12 md:py-16 max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-8">
            The Two Things That Matter This Week
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green/5 border border-green/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">✍</div>
              <h3 className="font-bold text-white text-lg mb-2">Add Your Name</h3>
              <p className="text-gray-400 text-sm mb-4">Measures who is willing to stand up.</p>
              <a
                href="https://forms.gle/etssgWrko4ejWC6Z6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green text-[#080d1a] font-bold py-2 px-6 rounded-lg hover:bg-green-dim transition"
              >
                Sign The Petition
              </a>
            </div>
            <div className="bg-green/5 border border-green/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-white text-lg mb-2">Complete The Survey</h3>
              <p className="text-gray-400 text-sm mb-4">Measures what your district actually wants.</p>
              <a
                href="https://forms.gle/eDSMYjFbGQwWq96AA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green text-[#080d1a] font-bold py-2 px-6 rounded-lg hover:bg-green-dim transition"
              >
                Take The Survey
              </a>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* Accordions */}
        <div className="accordion-wrapper">
          {/* Instruction */}
          <p className="text-sm text-gray-500 mb-4 text-center">
            Tap any section below to expand.
          </p>

          <details className="accordion group border border-white/10 rounded-lg transition-all duration-200 hover:shadow-sm hover:border-white/20">
            <summary className="cursor-pointer list-none w-full hover:bg-[#0f1a2e] active:opacity-80 transition-colors duration-200 rounded-lg p-4 flex justify-between items-center gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="accordion-title font-condensed text-xs tracking-[0.2em] uppercase font-semibold text-white">Why organizers matter right now</span>
                <span className="accordion-summary text-gray-400 text-sm">Constitutional crisis, social programs, war powers, authoritarian drift, and disappearing accountability.</span>
              </div>
              <span className="text-gray-400 text-lg transition-transform duration-200 group-open:rotate-90 flex-shrink-0">›</span>
            </summary>
            <div className="accordion-body">
              <section className="section" style={{paddingTop:'40px',paddingBottom:'20px'}}>
                <span className="eyebrow">Why Organizers Matter Right Now</span>
                <h2>You Already Know<br /><span className="red">The Stakes.</span></h2>
                <ul style={{listStyle:'none',padding:0,margin:'20px 0'}}>
                  {[
                    'Congress is failing to protect Social Security, Medicare, Medicaid, and SNAP.',
                    'Voting rights are being restricted in state after state.',
                    'War powers are being abused without congressional authorization.',
                    'Presidents of both parties have expanded executive power beyond constitutional limits.',
                    'The 25th Amendment has become a political football instead of a safeguard.',
                    'Corruption, donor capture, and lobbyist influence have replaced representation.',
                    'Authoritarian drift is accelerating.',
                    'Congress avoids votes on issues the public overwhelmingly supports.',
                    'Crises pile up while accountability disappears.',
                  ].map((item, i) => (
                    <li key={i} style={{padding:'10px 0 10px 28px',borderBottom:'1px solid rgba(255,255,255,0.05)',position:'relative',color:'var(--text-body)',fontSize:'0.97rem'}}>
                      <span style={{position:'absolute',left:0,color:'var(--red)'}}>•</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="peer-block" style={{marginTop:'30px'}}>
                  <span className="peer-label">This Isn't a Moment for Spectators</span>
                  <p>It's a moment for organizers.</p>
                  <p>Movements don't fail because people don't care.</p>
                  <p>Movements fail because they don't convert attention into organized, measurable, district-level pressure.</p>
                  <p style={{fontFamily:'var(--font-condensed)',fontWeight:700,fontSize:'1.1rem',color:'var(--green)',marginTop:'8px'}}>That's what PHIERS exists to fix.</p>
                </div>
              </section>
            </div>
          </details>

          <details className="accordion group border border-white/10 rounded-lg transition-all duration-200 hover:shadow-sm hover:border-white/20">
            <summary className="cursor-pointer list-none w-full hover:bg-[#0f1a2e] active:opacity-80 transition-colors duration-200 rounded-lg p-4 flex justify-between items-center gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="accordion-title font-condensed text-xs tracking-[0.2em] uppercase font-semibold text-white">The opportunity</span>
                <span className="accordion-summary text-gray-400 text-sm">Congress is home. District offices are open. This is when organizers can move districts.</span>
              </div>
              <span className="text-gray-400 text-lg transition-transform duration-200 group-open:rotate-90 flex-shrink-0">›</span>
            </summary>
            <div className="accordion-body">
              <section className="section" style={{paddingTop:'40px',paddingBottom:'20px'}}>
                <div className="opportunity-block">
                  <span className="opp-label">⭐ The Opportunity</span>
                  <h2>This Is The Window.</h2>
                  <p>Congress is home. District offices are open. Town halls matter. Local visibility matters. Organized constituents matter.</p>
                  <p style={{color:'var(--text-bright)',fontWeight:700,marginTop:'16px'}}>When Representatives are in Washington, they're insulated.</p>
                  <p style={{color:'var(--text-bright)',fontWeight:700}}>When they're home, they're accountable.</p>
                  <p style={{fontFamily:'var(--font-condensed)',fontWeight:700,fontSize:'1.2rem',color:'var(--gold)',marginTop:'16px'}}>This is when organizers can move districts.</p>
                </div>
              </section>
            </div>
          </details>

          <details className="accordion group border border-white/10 rounded-lg transition-all duration-200 hover:shadow-sm hover:border-white/20">
            <summary className="cursor-pointer list-none w-full hover:bg-[#0f1a2e] active:opacity-80 transition-colors duration-200 rounded-lg p-4 flex justify-between items-center gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="accordion-title font-condensed text-xs tracking-[0.2em] uppercase font-semibold text-white">The math</span>
                <span className="accordion-summary text-gray-400 text-sm">500 proves a district can act together. 1,500 creates sustained leverage.</span>
              </div>
              <span className="text-gray-400 text-lg transition-transform duration-200 group-open:rotate-90 flex-shrink-0">›</span>
            </summary>
            <div className="accordion-body">
              <section className="section-alt" style={{paddingTop:'40px',paddingBottom:'40px'}}>
                <div className="inner">
                  <span className="eyebrow">⭐ The Math</span>
                  <h2>500 People Proves a District<br /><span className="gold">Can Act Together.</span></h2>
                  <div className="math-grid">
                    <div className="math-card">
                      <div className="math-number">500</div>
                      <h3>Proves a district can act together</h3>
                      <p>This is the first milestone. It shows your district can organize around shared demands.</p>
                    </div>
                    <div className="math-card">
                      <div className="math-number">1,500</div>
                      <h3>Creates sustained leverage</h3>
                      <p>This is when representatives can no longer ignore your district.</p>
                    </div>
                  </div>
                  <p style={{fontSize:'1.05rem',color:'var(--text-bright)',marginTop:'16px'}}>At scale, that's how hearings happen.</p>
                  <p style={{fontSize:'1.05rem',color:'var(--text-bright)'}}>That's how votes happen.</p>
                  <p style={{fontSize:'1.05rem',color:'var(--text-bright)'}}>That's how legislation happens.</p>
                  <div className="pull-quote" style={{marginTop:'20px'}}>
                    <p>Districts move Congress.<br />Organizers move districts.</p>
                  </div>
                </div>
              </section>
            </div>
          </details>

          <details className="accordion group border border-white/10 rounded-lg transition-all duration-200 hover:shadow-sm hover:border-white/20">
            <summary className="cursor-pointer list-none w-full hover:bg-[#0f1a2e] active:opacity-80 transition-colors duration-200 rounded-lg p-4 flex justify-between items-center gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="accordion-title font-condensed text-xs tracking-[0.2em] uppercase font-semibold text-white">Your role</span>
                <span className="accordion-summary text-gray-400 text-sm">Every district needs captains, digital organizers, signature collectors, town hall coordinators, and community leads.</span>
              </div>
              <span className="text-gray-400 text-lg transition-transform duration-200 group-open:rotate-90 flex-shrink-0">›</span>
            </summary>
            <div className="accordion-body">
              <section className="section" style={{paddingTop:'40px',paddingBottom:'20px'}}>
                <span className="eyebrow">⭐ Your Role</span>
                <h2>Every District Needs<br /><span className="green">Organizers Like You.</span></h2>
                <div className="role-grid">
                  {[
                    {icon:'🏛️', title:'District Captains', desc:"Lead your district's push to 500 and beyond"},
                    {icon:'📱', title:'Digital Organizers', desc:'Coordinate online outreach and social campaigns'},
                    {icon:'✍️', title:'Signature Collectors', desc:'Turn conversations into signatures'},
                    {icon:'🎤', title:'Town Hall Coordinators', desc:'Pack the room and ask the questions'},
                    {icon:'🤝', title:'Community Leads', desc:'Connect with local groups, unions, and faith communities'},
                  ].map(({icon,title,desc}) => (
                    <div key={title} className="role-card">
                      <div className="role-icon">{icon}</div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="peer-block" style={{marginTop:'20px'}}>
                  <span className="peer-label">You Are Exactly Who This Moment Needs</span>
                  <p>If you've ever organized a march, a rally, a protest, a campus action, a union drive, a mutual aid network, or a community group — you have the skills. You have the network. You have the credibility.</p>
                  <p style={{fontFamily:'var(--font-condensed)',fontWeight:700,fontSize:'1.1rem',color:'var(--green)',marginTop:'8px'}}>This is what you've been training for.</p>
                </div>
              </section>
            </div>
          </details>

          <details className="accordion group border border-white/10 rounded-lg transition-all duration-200 hover:shadow-sm hover:border-white/20">
            <summary className="cursor-pointer list-none w-full hover:bg-[#0f1a2e] active:opacity-80 transition-colors duration-200 rounded-lg p-4 flex justify-between items-center gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="accordion-title font-condensed text-xs tracking-[0.2em] uppercase font-semibold text-white">How to get to 500</span>
                <span className="accordion-summary text-gray-400 text-sm">The quick-win playbook for proving your district can act together.</span>
              </div>
              <span className="text-gray-400 text-lg transition-transform duration-200 group-open:rotate-90 flex-shrink-0">›</span>
            </summary>
            <div className="accordion-body">
              <section className="section-alt" style={{paddingTop:'40px',paddingBottom:'40px'}}>
                <div className="inner">
                  <span className="eyebrow">⭐ The Quick Win Playbook</span>
                  <h2>How to Get to <span className="gold">500</span></h2>
                  <p style={{fontSize:'1.05rem',color:'var(--text-bright)',marginBottom:'20px'}}>500 is the first milestone. It proves your district can act together.</p>

                  {/* Organizer Reach Block */}
                  <div className="peer-block" style={{
                    borderLeftColor: 'var(--gold)',
                    marginBottom: '20px'
                  }}>
                    <span className="peer-label" style={{color:'var(--gold)'}}>
                      Most Organizers Already Have Enough Reach
                    </span>
                    <p>
                      If you manage a mailing list, Facebook group, Discord, union chapter,
                      congregation, activist network, campus group, or community organization,
                      your network may already contain enough people to move your district toward 500.
                    </p>
                    <p>
                      The challenge is coordination, not awareness.
                    </p>
                  </div>

                  <div className="playbook-section">
                    {/* QUICK ACTIONS — visible assets */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <a
                        href="https://forms.gle/etssgWrko4ejWC6Z6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-green/10 border border-green/30 rounded-lg p-4 text-center hover:bg-green/15 transition"
                      >
                        <div className="text-2xl mb-2">✍</div>
                        <p className="font-bold text-white">Share The Petition</p>
                        <p className="text-gray-400 text-sm mt-1">Get your link to distribute</p>
                      </a>
                      <a
                        href="https://forms.gle/eDSMYjFbGQwWq96AA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-green/10 border border-green/30 rounded-lg p-4 text-center hover:bg-green/15 transition"
                      >
                        <div className="text-2xl mb-2">📊</div>
                        <p className="font-bold text-white">Share The Survey</p>
                        <p className="text-gray-400 text-sm mt-1">Get your link to distribute</p>
                      </a>
                    </div>

                    <h3>Here's how organizers get there fast:</h3>
                    <ul>
                      {[
                        'Send the petition + survey to your list',
                        'Send it to your group chats',
                        'Post it in local Facebook groups',
                        'Share it in community Discords',
                        'Share it in neighborhood forums',
                        'Bring it to local events',
                        'Table at campuses, libraries, and community centers',
                        'Coordinate with other organizers in your district',
                        'Run a 48-hour "district push"',
                        'Celebrate milestones publicly',
                      ].map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="pull-quote">
                    <p>500 is not the finish line.<br /><span style={{color:'var(--gold)'}}>It's the signal.</span></p>
                  </div>
                </div>
              </section>
            </div>
          </details>

          <details className="accordion group border border-white/10 rounded-lg transition-all duration-200 hover:shadow-sm hover:border-white/20">
            <summary className="cursor-pointer list-none w-full hover:bg-[#0f1a2e] active:opacity-80 transition-colors duration-200 rounded-lg p-4 flex justify-between items-center gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="accordion-title font-condensed text-xs tracking-[0.2em] uppercase font-semibold text-white">How to get to 1,500</span>
                <span className="accordion-summary text-gray-400 text-sm">The sustained leverage playbook.</span>
              </div>
              <span className="text-gray-400 text-lg transition-transform duration-200 group-open:rotate-90 flex-shrink-0">›</span>
            </summary>
            <div className="accordion-body">
              <section className="section" style={{paddingTop:'40px',paddingBottom:'20px'}}>
                <span className="eyebrow">⭐ The Sustained Leverage Playbook</span>
                <h2>How to Get to <span className="gold">1,500</span></h2>
                <p style={{fontSize:'1.05rem',color:'var(--text-bright)',marginBottom:'20px'}}>
                  1,500 is when your district becomes <span style={{color:'var(--red)',fontWeight:700}}>impossible to ignore.</span>
                </p>
                <div className="playbook-section">
                  <h3>Here's how organizers get there:</h3>
                  <ul>
                    {[
                      'Weekly outreach pushes','Weekly digital blasts','Town hall turnout',
                      'Local visibility actions','Community partnerships','Campus outreach',
                      'Faith community outreach','Union outreach','Local press engagement',
                      'Escalation ladder (below)',
                    ].map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div style={{background:'var(--bg-card)',border:'1px solid var(--green)',borderRadius:'8px',padding:'20px',marginTop:'16px'}}>
                  {[
                    '1,500 is when Representatives start paying attention.',
                    '1,500 is when Senators start paying attention.',
                    '1,500 is when hearings become possible.',
                    '1,500 is when votes become possible.',
                  ].map((item, i) => (
                    <p key={i} style={{margin:0,fontSize:'0.95rem',color:'var(--text-bright)'}}>
                      <span style={{color:'var(--green)',fontWeight:700}}>✓</span> {item}
                    </p>
                  ))}
                </div>
              </section>
            </div>
          </details>

          <details className="accordion group border border-white/10 rounded-lg transition-all duration-200 hover:shadow-sm hover:border-white/20">
            <summary className="cursor-pointer list-none w-full hover:bg-[#0f1a2e] active:opacity-80 transition-colors duration-200 rounded-lg p-4 flex justify-between items-center gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="accordion-title font-condensed text-xs tracking-[0.2em] uppercase font-semibold text-white">Escalation ladder</span>
                <span className="accordion-summary text-gray-400 text-sm">How districts escalate pressure in stages.</span>
              </div>
              <span className="text-gray-400 text-lg transition-transform duration-200 group-open:rotate-90 flex-shrink-0">›</span>
            </summary>
            <div className="accordion-body">
              <section className="section-alt" style={{paddingTop:'40px',paddingBottom:'40px'}}>
                <div className="inner">
                  <span className="eyebrow">⭐ The Escalation Ladder</span>
                  <h2>Districts Escalate<br /><span className="gold">In Stages.</span></h2>
                  <ol className="escalation-list">
                    {[
                      ['Visibility','Make your district known'],
                      ['Town hall turnout','Pack the room'],
                      ['Public questions','Put them on the record'],
                      ['Local press','Make it impossible to ignore'],
                      ['District-wide mobilization','Coordinate across the district'],
                      ['Coalition pressure','Bring in unions, faith groups, community orgs'],
                      ['Accountability moments','Document everything'],
                      ['Hearings + votes','Win'],
                    ].map(([title, desc], i) => (
                      <li key={i}>
                        <span className="escalation-num">{String(i+1).padStart(2,'0')}</span>{' '}
                        <strong>{title}</strong> — {desc}
                      </li>
                    ))}
                  </ol>
                  <div className="pull-quote">
                    <p>Organizers drive every stage.</p>
                  </div>
                </div>
              </section>
            </div>
          </details>

          <details className="accordion group border border-white/10 rounded-lg transition-all duration-200 hover:shadow-sm hover:border-white/20">
            <summary className="cursor-pointer list-none w-full hover:bg-[#0f1a2e] active:opacity-80 transition-colors duration-200 rounded-lg p-4 flex justify-between items-center gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="accordion-title font-condensed text-xs tracking-[0.2em] uppercase font-semibold text-white">Outreach kit</span>
                <span className="accordion-summary text-gray-400 text-sm">Share text, email copy, social copy, and scripts.</span>
              </div>
              <span className="text-gray-400 text-lg transition-transform duration-200 group-open:rotate-90 flex-shrink-0">›</span>
            </summary>
            <div className="accordion-body">
              <section className="section" style={{paddingTop:'40px',paddingBottom:'20px'}}>
                <span className="eyebrow">⭐ Outreach Kit</span>
                <h2>Ready-to-Use<br /><span className="green">Messages.</span></h2>
                {[
                  {title:'Share Text', body:'"Add your name. Tell Congress what our district wants. Help make our district impossible to ignore."'},
                  {title:'Email Copy', body:'"Eight million marched. Now it\'s time to organize. Add your name and complete the district survey so we can show Congress exactly what our district demands."'},
                  {title:'Social Copy', body:'"Congress is home. This is the moment when district-level pressure works. Add your name and help our district be heard."'},
                ].map(({title, body}) => (
                  <div key={title} className="outreach-item">
                    <h4>{title}</h4>
                    <p>{body}</p>
                  </div>
                ))}
                <div className="outreach-item">
                  <h4>Scripts</h4>
                  <ul>
                    <li>"Have you seen the PHIERS petition? It's not a petition — it's a measurement tool."</li>
                    <li>"We're trying to get our district to 500 signatures this week."</li>
                    <li>"This is how we show Congress what our district actually wants."</li>
                  </ul>
                </div>
              </section>
            </div>
          </details>

          <details className="accordion group border border-white/10 rounded-lg transition-all duration-200 hover:shadow-sm hover:border-white/20">
            <summary className="cursor-pointer list-none w-full hover:bg-[#0f1a2e] active:opacity-80 transition-colors duration-200 rounded-lg p-4 flex justify-between items-center gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="accordion-title font-condensed text-xs tracking-[0.2em] uppercase font-semibold text-white">What happens after 500</span>
                <span className="accordion-summary text-gray-400 text-sm">District coordination and pressure begin.</span>
              </div>
              <span className="text-gray-400 text-lg transition-transform duration-200 group-open:rotate-90 flex-shrink-0">›</span>
            </summary>
            <div className="accordion-body">
              <section className="section-alt" style={{paddingTop:'40px',paddingBottom:'40px'}}>
                <div className="inner">
                  <span className="eyebrow">⭐ What Happens After 500</span>
                  <h2>500 Is <span className="gold">The Signal.</span></h2>
                  <div className="happens-grid">
                    <div className="happens-card">
                      <h3>After 500</h3>
                      <ul>
                        <li>District captain coordination begins</li>
                        <li>Town hall pressure intensifies</li>
                        <li>Representative response tracking starts</li>
                        <li>Local visibility actions launch</li>
                        <li>Weekly mobilization pushes commence</li>
                      </ul>
                      <div className="happens-signal">⚡ It shows your district can act together.</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </details>

          <details className="accordion group border border-white/10 rounded-lg transition-all duration-200 hover:shadow-sm hover:border-white/20">
            <summary className="cursor-pointer list-none w-full hover:bg-[#0f1a2e] active:opacity-80 transition-colors duration-200 rounded-lg p-4 flex justify-between items-center gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="accordion-title font-condensed text-xs tracking-[0.2em] uppercase font-semibold text-white">What happens after 1,500</span>
                <span className="accordion-summary text-gray-400 text-sm">Hearings, votes, and legislation become possible.</span>
              </div>
              <span className="text-gray-400 text-lg transition-transform duration-200 group-open:rotate-90 flex-shrink-0">›</span>
            </summary>
            <div className="accordion-body">
              <section className="section" style={{paddingTop:'40px',paddingBottom:'20px'}}>
                <span className="eyebrow">⭐ What Happens After 1,500</span>
                <h2>1,500 Is <span className="gold">Sustained Leverage.</span></h2>
                <div className="happens-grid">
                  <div className="happens-card" style={{borderColor:'var(--green)'}}>
                    <h3>After 1,500</h3>
                    <ul>
                      <li>Hearings become possible</li>
                      <li>Votes become possible</li>
                      <li>Legislation becomes possible</li>
                      <li>National coalition building begins</li>
                      <li>Districts start shaping the national agenda</li>
                    </ul>
                    <div className="happens-signal" style={{color:'var(--red)'}}>🔥 It's when Congress can no longer ignore your district.</div>
                  </div>
                </div>
              </section>
            </div>
          </details>

        </div> {/* end accordion-wrapper */}

        {/* Final CTA */}
        <section className="section py-16 max-w-3xl mx-auto px-4">
          <div className="border-2 border-green-400 rounded-xl p-8 md:p-12 text-center bg-gradient-to-br from-green-400/5 to-transparent">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-green-400">ORGANIZE YOUR DISTRICT</h2>
            <p className="font-body text-base text-gray-300 mt-4 max-w-xl mx-auto">Congress is home right now. This is when local pressure matters most.</p>
            <p className="font-condensed font-bold text-lg text-white mt-3">
              Help your district become impossible to ignore.
            </p>
            {/* PRIMARY ACTIONS */}
            <div style={{display:'flex',flexDirection:'column',gap:'12px',maxWidth:'420px',margin:'24px auto 0'}}>
              <a href="https://forms.gle/etssgWrko4ejWC6Z6" className="btn-primary" target="_blank" rel="noopener noreferrer">✍ Add Your Name — Be Counted</a>
              <a href="https://forms.gle/eDSMYjFbGQwWq96AA" className="btn-primary" target="_blank" rel="noopener noreferrer">📊 Complete The District Survey</a>
            </div>

            {/* SECONDARY ACTIONS */}
            <div style={{display:'flex',flexDirection:'column',gap:'12px',maxWidth:'420px',margin:'12px auto 0'}}>
              <a href="mailto:info@phiers.org" className="btn-secondary">🤝 Partner With PHIERS — Email Us</a>
              <Link href="/" className="btn-secondary">← Back to PHIERS Main</Link>
            </div>
            <p className="font-condensed font-bold text-base text-yellow-400 mt-6">
              📧 <a href="mailto:info@phiers.org" className="text-yellow-400 hover:text-yellow-300 transition">info@phiers.org</a>
              {' '}·{' '}
              📞 (916) 306-8967
            </p>
          </div>
        </section>

      </main>

      <Footer />

      <button
        onClick={scrollToTop}
        className={`back-to-top${showBackToTop ? ' visible' : ''}`}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  )
}

// END FILE: app/organizers/page.tsx
