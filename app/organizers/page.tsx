// FILE: app/organizers/page.tsx
// ORGANIZERS PAGE - Complete with design system

'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/Button'
import StatBlock from '@/components/StatBlock'

export default function OrganizersPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Image */}
        <div className="relative w-full h-[250px] md:h-[300px]">
          <Image
            src="/images/A_Peaceful_Warrior.jpg"
            alt="A Peaceful Warrior — Organize for change"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <section className="container section text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white mb-3">You built the movement.<br /><span className="text-green">PHIERS gives it teeth.</span></h1>
          <div className="max-w-[700px] mx-auto space-y-4">
            <p className="text-gray-400">Every movement needs people on the ground — not as volunteers. As partners in a district-level pressure system Congress cannot ignore.</p>
            <p className="text-gray-400">You already know what's missing. It's not people. It's not energy. It's the mechanism that converts that energy into something Congress can't wait out.</p>
            <p className="font-condensed text-xl text-green font-bold">You fill their cup. PHIERS is what they do with the energy the morning after the rally.</p>
          </div>
          
          <div className="max-w-[500px] mx-auto my-6">
            <Image
              src="/images/We_Gotz_Teeth_for_No_Kings.jpg"
              alt="We Got Teeth for No Kings — Power concedes nothing without a demand"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-green/20"
            />
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Anchor Line */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <div className="bg-bg-card border-l-4 border-gold p-5 max-w-[600px] mx-auto">
              <p className="text-body text-lg mb-2">Nothing changes until ignoring people costs more than responding to them.</p>
              <p className="font-condensed text-xl text-green font-bold">PHIERS is how we raise that cost. Your organization is how we reach the threshold.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Your Role */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">Your Role</span>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-bg-card border border-green/20 rounded-xl p-5">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-condensed font-bold text-xl text-gold mb-2">DISTRICT CAPTAIN</h3>
              <p className="text-body text-sm">Lead the district-level pressure block. Coordinate signature collection. Build your team. Hit the 1,500 threshold that forces your representative to respond publicly — on the record.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5">
              <div className="text-3xl mb-2">🏛️</div>
              <h3 className="font-condensed font-bold text-xl text-gold mb-2">TOWN HALL COORDINATOR</h3>
              <p className="text-body text-sm">Plan and execute the accountability event. Secure the venue. Coordinate media. Create the moment where your representative must answer to the people they represent. No spin. No escape. On the record.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5">
              <div className="text-3xl mb-2">📝</div>
              <h3 className="font-condensed font-bold text-xl text-gold mb-2">SIGNATURE COLLECTOR</h3>
              <p className="text-body text-sm">Go door-to-door. Attend community events. Gather the names that build district leverage. Every signature moves the needle. Every district closer to the threshold.</p>
            </div>
            <div className="bg-bg-card border border-green/20 rounded-xl p-5">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-condensed font-bold text-xl text-gold mb-2">DIGITAL ORGANIZER</h3>
              <p className="text-body text-sm">Spread the message. Build awareness. Connect people who already care but haven't been counted yet. Your network is the cascade.</p>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* What Your Organization Gets */}
        <section className="bg-bg-dark border-y border-green/10 section">
          <div className="container text-center">
            <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">What Your Organization Gets</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatBlock number="$9,400+" label="Annual savings per member (climbing as war drives up costs)" />
              <StatBlock number="1,500" label="Signatures triggers mandatory public town hall — less than 0.5% of most districts" />
              <StatBlock number="$0" label="Cost to partner with PHIERS" />
              <StatBlock number="3.5%" label="The threshold that has never failed in 323 campaigns" />
            </div>
            
            <div className="max-w-[500px] mx-auto my-6">
              <Image
                src="/images/Power of the People Stronger than People in Power.jpg"
                alt="Power of the People Stronger than People in Power"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg border border-green/20"
              />
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* The Ask */}
        <section className="container section">
          <span className="font-condensed font-bold text-green text-sm uppercase tracking-wider block mb-3">The Ask — Three Things</span>
          <div className="space-y-4 max-w-[600px] mx-auto">
            <div className="flex gap-4 items-start">
              <div className="font-display text-2xl text-green">01</div>
              <div><p className="text-white font-bold">Send your members the petition link.</p><p className="text-body text-sm">One email. You know how to reach them.</p></div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="font-display text-2xl text-green">02</div>
              <div><p className="text-white font-bold">Tell them why in your words.</p><p className="text-body text-sm">Your credibility is what they trust. The math does the rest.</p></div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="font-display text-2xl text-green">03</div>
              <div><p className="text-white font-bold">Reach out so we can coordinate.</p><p className="text-body text-sm">When your district hits the threshold, your members need to be in the room.</p></div>
            </div>
          </div>
        </section>

        <hr className="border-green/20" />

        {/* Final CTA */}
        <section className="container section text-center">
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
            <p className="font-condensed text-lg text-gold font-bold mb-3">District counts begin compiling immediately.</p>
            <p className="text-body mb-4">Start building your district. Add your name. Check "I'm willing to organize." We'll connect you directly with your district team.</p>
            <Button href="/petition" variant="primary" fullWidth>ADD MY NAME + VOLUNTEER</Button>
            <p className="text-gray-500 text-sm mt-4">📧 info@phiers.org · 📞 (916) 306-8967<br />We respond to every organizer inquiry.</p>
          </div>
        </section>
      </main>

      <Footer />

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>

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
