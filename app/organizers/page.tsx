'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function OrganizersPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-[760px] mx-auto px-6 py-12">
          
          {/* HERO IMAGE */}
          <div className="relative w-full h-[250px] md:h-[300px] mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/A_Peaceful_Warrior.jpg"
              alt="A Peaceful Warrior — Organize for change"
              fill
              className="object-cover"
            />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-4">You built the movement.<br /><span className="text-[#3ddc84]">PHIERS gives it teeth.</span></h1>
          
          <div className="space-y-6 text-gray-400 mb-12">
            <p>Every movement needs people on the ground — not as volunteers. As partners in a district-level pressure system Congress cannot ignore.</p>
            <p>You already know what's missing. It's not people. It's not energy. It's the mechanism that converts that energy into something Congress can't wait out.</p>
            <p className="font-condensed text-xl text-[#3ddc84] font-bold">You fill their cup. PHIERS is what they do with the energy the morning after the rally.</p>
          </div>
          
          {/* TEETH IMAGE */}
          <div className="my-8 max-w-[500px] mx-auto">
            <Image
              src="/images/We_Gotz_Teeth_for_No_Kings.jpg"
              alt="We Got Teeth for No Kings — Power concedes nothing without a demand"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-[#3ddc84]/20"
            />
          </div>
          
          <div className="bg-[#0a1628] border-l-4 border-[#ffd60a] p-6 my-8">
            <p className="text-gray-400 text-lg mb-3">Nothing changes until ignoring people costs more than responding to them.</p>
            <p className="font-condensed text-xl text-[#3ddc84] font-bold">PHIERS is how we raise that cost. Your organization is how we reach the threshold.</p>
          </div>
          
          <h2 className="font-display text-3xl text-white mt-12 mb-6">Your Role</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-condensed font-bold text-xl text-[#ffd60a] mb-2">DISTRICT CAPTAIN</h3>
              <p className="text-gray-400 text-sm">Lead the district-level pressure block. Coordinate signature collection. Build your team. Hit the 1,500 threshold that forces your representative to respond publicly — on the record.</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6">
              <div className="text-3xl mb-2">🏛️</div>
              <h3 className="font-condensed font-bold text-xl text-[#ffd60a] mb-2">TOWN HALL COORDINATOR</h3>
              <p className="text-gray-400 text-sm">Plan and execute the accountability event. Secure the venue. Coordinate media. Create the moment where your representative must answer to the people they represent. No spin. No escape. On the record.</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6">
              <div className="text-3xl mb-2">📝</div>
              <h3 className="font-condensed font-bold text-xl text-[#ffd60a] mb-2">SIGNATURE COLLECTOR</h3>
              <p className="text-gray-400 text-sm">Go door-to-door. Attend community events. Gather the names that build district leverage. Every signature moves the needle. Every district closer to the threshold.</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-6">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-condensed font-bold text-xl text-[#ffd60a] mb-2">DIGITAL ORGANIZER</h3>
              <p className="text-gray-400 text-sm">Spread the message. Build awareness. Connect people who already care but haven't been counted yet. Your network is the cascade.</p>
            </div>
          </div>
          
          {/* MOVEMENT IDENTITY BANNER */}
          <div className="my-8 max-w-[500px] mx-auto">
            <Image
              src="/images/PHIERStorm_the_Movement.png"
              alt="PHIERStorm — The Movement"
              width={500}
              height={200}
              className="w-full h-auto opacity-90"
            />
          </div>
          
          <h2 className="font-display text-3xl text-white mt-12 mb-6">What Your Organization Gets</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-4 text-center">
              <div className="font-display text-2xl text-[#ffd60a]">$9,400+</div>
              <p className="text-gray-500 text-xs">Annual savings per member (climbing as war drives up costs)</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-4 text-center">
              <div className="font-display text-2xl text-[#ffd60a]">1,500</div>
              <p className="text-gray-500 text-xs">Signatures triggers mandatory public town hall — less than 0.5% of most districts</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-4 text-center">
              <div className="font-display text-2xl text-[#ffd60a]">$0</div>
              <p className="text-gray-500 text-xs">Cost to partner with PHIERS</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-xl p-4 text-center">
              <div className="font-display text-2xl text-[#ffd60a]">3.5%</div>
              <p className="text-gray-500 text-xs">The threshold that has never failed in 323 campaigns</p>
            </div>
          </div>
          
          {/* POWER OF THE PEOPLE IMAGE */}
          <div className="my-8 max-w-[500px] mx-auto">
            <Image
              src="/images/Power of the People Stronger than People in Power.jpg"
              alt="Power of the People Stronger than People in Power"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-[#3ddc84]/20"
            />
          </div>
          
          <h2 className="font-display text-3xl text-white mt-12 mb-6">The Ask — Three Things</h2>
          
          <div className="space-y-6 mb-12">
            <div className="flex gap-4 items-start">
              <div className="font-display text-2xl text-[#3ddc84]">01</div>
              <div><p className="text-white font-bold">Send your members the petition link.</p><p className="text-gray-400 text-sm">One email. You know how to reach them.</p></div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="font-display text-2xl text-[#3ddc84]">02</div>
              <div><p className="text-white font-bold">Tell them why in your words.</p><p className="text-gray-400 text-sm">Your credibility is what they trust. The math does the rest.</p></div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="font-display text-2xl text-[#3ddc84]">03</div>
              <div><p className="text-white font-bold">Reach out so we can coordinate.</p><p className="text-gray-400 text-sm">When your district hits the threshold, your members need to be in the room.</p></div>
            </div>
          </div>
          
          <div className="bg-[#0a1628] border border-[#3ddc84]/20 rounded-xl p-8 text-center">
            <p className="font-condensed text-lg text-[#ffd60a] font-bold mb-4">District counts begin compiling immediately.</p>
            <p className="text-gray-400 mb-4">Start building your district. Add your name. Check "I'm willing to organize." We'll connect you directly with your district team.</p>
            <Link href="/petition" className="inline-block px-6 py-3 bg-white text-[#0a5c2e] rounded-lg font-condensed font-extrabold text-center hover:bg-gray-100 transition-all">ADD MY NAME + VOLUNTEER</Link>
            <p className="text-gray-500 text-sm mt-4">📧 info@phiers.org · 📞 (916) 306-8967<br />We respond to every organizer inquiry.</p>
          </div>
        </section>
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>
    </>
  )
}
