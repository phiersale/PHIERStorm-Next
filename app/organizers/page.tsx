// app/organizers/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ValidatedBy from '@/components/validated-by'

export default function OrganizersPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [willModalOpen, setWillModalOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <>
      {/* ── EMERGENCY BANNER ── */}
      <div className="bg-red-600 text-white text-center py-3 px-6 font-condensed font-bold text-base z-50 relative">
        <span className="inline-block bg-black/25 rounded px-2 py-0.5 mr-2 text-xs tracking-wide">URGENT</span>
        Congress is home through April 14. Trump threatened to destroy a civilization. The 25th Amendment is on the table.
        <strong className="mx-1">This is the window. Your members need to act before Congress returns to DC.</strong>
        <Link href="/petition" className="text-white underline font-black ml-1">→ Add Your Name Now</Link>
      </div>

      {/* ── SIMPLE NAV ── */}
      <nav className="sticky top-0 z-50 bg-[#080d1a]/97 backdrop-blur-md border-b border-[#3ddc84]/20 px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-condensed font-bold text-xl text-white tracking-wide">PHIERS.org</Link>
        <Link href="/petition" className="px-5 py-2 bg-red-600 text-white font-condensed font-bold text-sm rounded-lg hover:bg-red-700 transition-all">✍ Be Counted</Link>
      </nav>

      <main>
        {/* ── PEER OPENER HERO ── */}
        <div className="pt-20 pb-8 px-6 max-w-[760px] mx-auto">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">For Organizers, Union Leaders & Coalition Builders</span>
          <h1 className="font-display text-5xl md:text-7xl text-white mt-3 mb-4 leading-tight">You Built The Movement.<br /><span className="text-[#3ddc84]">Now Give It Teeth.</span></h1>
          <p className="font-condensed text-xl text-gray-500 mb-4">
            You've organized the marches. You've built the coalitions. You've kept people engaged through exhaustion and disappointment. You know better than anyone what happens without a mechanism behind the energy.
          </p>
          <p className="font-condensed text-xl text-white mb-4">
            Congress waits it out. The moment passes. Your people have to be re-motivated all over again.
          </p>
          <p className="font-condensed text-xl text-[#3ddc84]">
            PHIERS is the mechanism that changes that permanently — and it works alongside everything you've already built.
          </p>
        </div>

        <hr className="border-[#3ddc84]/20" />

        {/* ── PEER TO PEER BLOCK ── */}
        <section className="py-12 px-6 max-w-[760px] mx-auto">
          <div className="border-l-4 border-[#3ddc84] bg-[#111d35] rounded-r-lg p-7">
            <span className="font-condensed font-bold text-xs text-[#3ddc84] uppercase tracking-wide block mb-3">Organizer to Organizer — No Hype</span>
            <p className="text-white mb-3">You already know what's missing. It's not people. It's not energy. It's not passion. You have all of that in abundance.</p>
            <p className="text-gray-400 mb-3">What's missing is a mechanism that converts that energy into something Congress can't wait out — something with documented, district-level consequences that follow representatives home, that shows up in their primary, that doesn't fade when the news cycle moves on.</p>
            <p className="text-gray-400 mb-3">PHIERS doesn't replace what you do. It doesn't compete with your message or your mission. It's the piece that makes everything you've already built impossible to ignore.</p>
            <p className="font-condensed font-bold text-lg text-[#3ddc84] mt-3">You fill their cup. PHIERS is what they do with the energy the morning after the rally.</p>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* ── WINDOW OF OPPORTUNITY ── */}
        <section className="py-12 px-6 max-w-[760px] mx-auto">
          <div className="border-2 solid border-red-500 bg-red-500/10 rounded-xl p-8">
            <span className="font-condensed font-black text-xs text-red-500 uppercase tracking-wide block mb-3">⚠️ The Window Is Open Right Now</span>
            <h2 className="font-display text-3xl md:text-4xl text-red-500 mb-4">Congress Is Home.<br />Trump Is Isolated.<br />The 25th Is On The Table.</h2>
            <p className="text-white mb-3">Congress is on recess through April 14. Your representatives are in their districts — accessible, visible, and for the first time in years, no longer afraid of the man in the White House.</p>
            <p className="text-white mb-3">A president who threatened to wipe out an entire civilization on live TV has lost the Republican Party's fear. Even MAGA voices are calling for the 25th Amendment. Democrats are demanding an emergency session to vote on war powers.</p>
            <p className="text-white font-bold mb-4">This is the most politically open window for organized constituent pressure in a generation.</p>
            <div className="font-display text-2xl md:text-3xl text-[#ffd60a] my-5">
              Congress returns April 14.<br />
              <span className="font-condensed text-lg text-white font-bold">What they hear from organized constituents before then determines everything that happens after.</span>
            </div>
            <p className="text-gray-400">PHIERS gives your members something specific to do with that window — right now, this week, before it closes.</p>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* ── THREE DEMANDS ── */}
        <section className="py-12 px-6 bg-[#0a1628] border-y border-[#3ddc84]/10">
          <div className="max-w-[760px] mx-auto">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">What We're Demanding — Right Now</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Three Demands.<br /><span className="text-[#3ddc84]">One Lever. All At Once.</span></h2>
            <p className="text-gray-400 mb-6">The same organized pressure that forces one demand forces them all. Same people. Same districts. Same consequence for Congress if they refuse. Your members don't have to choose which fight matters most.</p>

            <div className="bg-[#111d35] border-2 border-[#3ddc84]/20 rounded-xl p-6 md:p-8 mb-6">
              <div className="flex gap-4 items-start">
                <div className="text-2xl">⚖️</div>
                <div>
                  <h3 className="font-condensed font-bold text-xl text-[#ffd60a] mb-2">Invoke Article 25 / End the Unauthorized War — NOW</h3>
                  <p className="text-gray-400 mb-2">Congress never voted to authorize this war. The Constitution is unambiguous — Congress declares war. Not the President. Not defense contractors. A president who threatens to eradicate a civilization and destroy civilian infrastructure has crossed every legal and moral line. Congress has the authority to act. They need organized constituents to give them the political cover — and the consequence if they don't.</p>
                  <div className="font-condensed font-bold text-[#3ddc84] text-sm">→ This is the first and most urgent demand. It starts the moment your members put their names on the record.</div>
                </div>
              </div>
            </div>

            <div className="bg-[#111d35] border-2 border-[#3ddc84]/20 rounded-xl p-6 md:p-8 mb-6">
              <div className="flex gap-4 items-start">
                <div className="text-2xl">🏥</div>
                <div>
                  <h3 className="font-condensed font-bold text-xl text-[#ffd60a] mb-2">Open TeleCARE Through the ACA Exchange</h3>
                  <p className="text-gray-400 mb-2">$600 replaces $10,000. Congress already has the authority under the ACA — no new legislation required. Every union member who makes this switch saves $7,400 a year. That frees your bargaining table to fight for wages instead of coverage. The cascade savings fund universal healthcare, jobs, and a monthly check for every American. The money is already there. We're already paying it. We just need to use it right.</p>
                  <div className="font-condensed font-bold text-[#3ddc84] text-sm">→ This is the winnable first domino that proves organized people can force results — fast.</div>
                </div>
              </div>
            </div>

            <div className="bg-[#111d35] border-2 border-[#3ddc84]/20 rounded-xl p-6 md:p-8">
              <div className="flex gap-4 items-start">
                <div className="text-2xl">🗳️</div>
                <div>
                  <h3 className="font-condensed font-bold text-xl text-[#ffd60a] mb-2">Restore Congressional Accountability — or Replace Them</h3>
                  <p className="text-gray-400 mb-2">When 1,500 constituents in a district sign, their representative gets a mandatory public town hall — before the next election, not after. They show up and answer on the record, or they face an organized primary challenge. We don't wait for November. We don't negotiate with silence. Representatives who act get protected. Representatives who don't get replaced by ones who will.</p>
                  <div className="font-condensed font-bold text-[#3ddc84] text-sm">→ This is the consequence that makes everything else real.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* ── WHAT YOUR MEMBERS GET ── */}
        <section className="py-12 px-6 max-w-[760px] mx-auto">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">What Your Members Get — Immediately</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">The Numbers Your Members<br /><span className="text-[#3ddc84]">Need to Hear.</span></h2>
          <p className="text-gray-400 mb-6">This isn't theory. These are the direct, immediate benefits for every member who signs and every organization that partners.</p>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-6">
              <div className="text-2xl mb-2">💊</div>
              <div className="font-display text-3xl text-[#ffd60a] mb-1">$10K+</div>
              <h3 className="font-condensed font-bold text-lg text-[#3ddc84] mb-2">Annual savings per member</h3>
              <p className="text-gray-400 text-sm">$600 telehealth replaces $10,000+ traditional coverage — and that number keeps climbing as the war drives up costs across healthcare, energy, and supply chains. Every member. Immediately when Congress acts.</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-6">
              <div className="text-2xl mb-2">🏛️</div>
              <div className="font-display text-3xl text-[#ffd60a] mb-1">1,500</div>
              <h3 className="font-condensed font-bold text-lg text-[#3ddc84] mb-2">Signatures triggers a town hall</h3>
              <p className="text-gray-400 text-sm">That's less than 0.5% of most districts. Your rep has to show up, answer, and go on the record. Before the election.</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-6">
              <div className="text-2xl mb-2">💼</div>
              <div className="font-display text-3xl text-[#ffd60a] mb-1">$0</div>
              <h3 className="font-condensed font-bold text-lg text-[#3ddc84] mb-2">Cost to your organization</h3>
              <p className="text-gray-400 text-sm">PHIERS partnership costs nothing. You point your people to the mechanism. We handle the coordination, the district tracking, the town halls.</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-6">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-display text-3xl text-[#ffd60a] mb-1">3.5%</div>
              <h3 className="font-condensed font-bold text-lg text-[#3ddc84] mb-2">The threshold that never fails</h3>
              <p className="text-gray-400 text-sm">Harvard research: no sustained campaign at 3.5% participation has ever failed. Unions alone are already close. Together we blow past it.</p>
            </div>
          </div>

          <div className="border-l-4 border-[#3ddc84] bg-[#111d35] rounded-r-lg p-6">
            <p className="font-condensed text-xl text-white leading-relaxed">Your members are already paying the war premium — in gas, groceries, and healthcare costs that keep climbing with every supply chain disruption. PHIERS cuts $10,000+ in annual coverage costs per member right now, and moves healthcare off your bargaining table permanently so your union can fight for wages instead.</p>
            <span className="block text-gray-500 text-sm italic mt-3">— The strategic shift unions have been waiting for — and the war is making it more urgent by the week</span>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* ── PROTEST VS PHIERS ── */}
        <section className="py-12 px-6 bg-[#0a1628] border-y border-[#3ddc84]/10">
          <div className="max-w-[760px] mx-auto">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Why This Is Different</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Visibility Without Accountability<br /><span className="text-red-500">Is Just Noise.</span></h2>
            <p className="text-gray-400 mb-6">You know this. You've lived it. Congress ignores protests because protests don't threaten their jobs. PHIERS changes the math.</p>

            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                <span className="font-condensed font-black text-red-500 text-xs uppercase tracking-wide block mb-3">✗ Protest Alone</span>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Creates visibility and news coverage</li>
                  <li>• Congress waits it out — they have practice</li>
                  <li>• No district-level documentation</li>
                  <li>• No electoral consequence attached</li>
                  <li>• Energy fades. Re-motivation required. Again.</li>
                  <li>• Representatives feel no personal risk</li>
                </ul>
              </div>
              <div className="bg-[#3ddc84]/10 border border-[#3ddc84]/20 rounded-lg p-6">
                <span className="font-condensed font-black text-[#3ddc84] text-xs uppercase tracking-wide block mb-3">✓ Protest + PHIERS</span>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Visibility AND documented leverage</li>
                  <li>• 1,500 signatures triggers mandatory town hall</li>
                  <li>• Every name counted by district, delivered to rep</li>
                  <li>• Organized primary challenge if they refuse</li>
                  <li>• Mechanism doesn't fade — it builds permanently</li>
                  <li>• Representatives face a documented career risk</li>
                </ul>
              </div>
            </div>

            <p className="font-condensed font-bold text-lg text-[#3ddc84] text-center">Power concedes nothing without a demand that has teeth. PHIERS is the teeth.</p>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* ── HOW THE MECHANISM WORKS ── */}
        <section className="py-12 px-6 max-w-[760px] mx-auto">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Mechanism</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">How It Works.<br /><span className="text-[#3ddc84]">Step by Step.</span></h2>
          <p className="text-gray-400 mb-6">This is what happens when your members sign. Not symbolically — mechanically.</p>

          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-lg flex-shrink-0">1</div>
              <div>
                <div className="font-condensed font-bold text-lg text-white mb-1">Your Members Add Their Name</div>
                <div className="text-gray-400 text-sm">Name, email, zip code. Counted in their congressional district — not dumped into a national pile Congress can ignore. This is the district-level record that makes PHIERS different from every petition they've signed before.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-lg flex-shrink-0">2</div>
              <div>
                <div className="font-condensed font-bold text-lg text-white mb-1">We Coordinate District by District</div>
                <div className="text-gray-400 text-sm">We track every district in real time. When a district is approaching the threshold, we notify both the members in that district and reach out directly to the representative. They know what's coming. That pressure starts before the town hall is even scheduled.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-lg flex-shrink-0">3</div>
              <div>
                <div className="font-condensed font-bold text-lg text-white mb-1">1,500 Triggers a Mandatory Public Town Hall</div>
                <div className="text-gray-400 text-sm">We contact every signer in that district directly. Your members are in the room. Their representative has to answer — on the record, publicly, before the next election. Not in a controlled setting. Not with pre-screened questions. A real accountability moment.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-[#3ddc84] text-[#080d1a] flex items-center justify-center font-condensed font-black text-lg flex-shrink-0">4</div>
              <div>
                <div className="font-condensed font-bold text-lg text-white mb-1">They Comply — or They Face the Ballot Box</div>
                <div className="text-gray-400 text-sm">Representatives who act get protected and credited. Representatives who refuse face an organized primary challenge — coordinated, funded, and ready. We do not wait for November. We do not accept silence as an answer.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center font-condensed font-black text-lg flex-shrink-0">5</div>
              <div>
                <div className="font-condensed font-bold text-lg text-red-500 mb-1">Enough Districts = Congress Has No Choice</div>
                <div className="text-gray-400 text-sm">When enough districts hit the threshold simultaneously, the math changes for every member of Congress. This isn't one noisy district they can ignore. It's their colleagues going down. At that point, acting is safer than refusing — and we win.</div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* ── WHY THIS IS CREDIBLE ── */}
        <section className="py-12 px-6 bg-[#0a1628] border-y border-[#3ddc84]/10">
          <div className="max-w-[760px] mx-auto">
            <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">Why This Is Credible</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">Not a New Idea.<br /><span className="text-[#ffd60a]">A 16-Year Plan That Waited for This Moment.</span></h2>
            <p className="text-gray-400 mb-6">Every element of the PHIERS model has been documented, validated, and executed at scale — not by PHIERS alone, but by the businesses and institutions that prove the model works.</p>

        <ValidatedBy defaultExpanded={false} />
            
            <p className="text-gray-400">The country finally caught up to the crisis this plan was built for. The model was ready. The moment is now.</p>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* ── WHAT WE ASK ── */}
        <section className="py-12 px-6 max-w-[760px] mx-auto">
          <span className="font-condensed font-bold text-[#3ddc84] text-sm uppercase tracking-wide">The Partnership Ask</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-4">We Don't Ask You to<br /><span className="text-[#3ddc84]">Become PHIERS.</span></h2>
          <p className="text-gray-400 mb-6">We ask for three things. That's it. Everything else, we handle.</p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 text-center">
              <div className="font-display text-3xl text-[#3ddc84] mb-2">01</div>
              <p><strong className="text-white">Send your members the petition link.</strong> One email. One newsletter. One Slack message. You know how to reach them — we don't need to teach you that.</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 text-center">
              <div className="font-display text-3xl text-[#3ddc84] mb-2">02</div>
              <p><strong className="text-white">Tell them why in your words.</strong> You have credibility with your members that no outside organization can replicate. Use it. The math does the rest.</p>
            </div>
            <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-5 text-center">
              <div className="font-display text-3xl text-[#3ddc84] mb-2">03</div>
              <p><strong className="text-white">Reach out so we can coordinate.</strong> When your district hits the threshold, your members need to be in the room. We make sure that happens — but only if we know you're with us.</p>
            </div>
          </div>

          <div className="bg-[#111d35] border border-[#3ddc84]/20 rounded-lg p-7">
            <h3 className="font-condensed font-bold text-xl text-[#ffd60a] mb-3">What We Handle For You</h3>
            <p className="text-gray-400 text-sm mb-3">District tracking. Signature counting. Representative outreach. Town hall coordination. Primary challenge infrastructure. Media coordination. All of it. You send your people to the mechanism. We run the mechanism.</p>
            <p className="font-condensed font-bold text-[#3ddc84]">This is what PHIERS was built to do. Let us do it.</p>
          </div>
        </section>

        <hr className="border-[#3ddc84]/20" />

        {/* ── FINAL CTA ── */}
        <section className="py-16 px-6 max-w-[760px] mx-auto">
          <div className="border-2 border-[#3ddc84] rounded-xl p-10 text-center bg-gradient-to-br from-[#3ddc84]/5 to-transparent">
            <h2 className="font-display text-3xl md:text-4xl text-[#3ddc84] mb-4">The Window Closes April 14.</h2>
            <p className="text-gray-400 mb-4">Congress goes back to DC in five days. What happens before that determines what's possible after. Your members are home. Their representatives are home. The political pressure has never been higher or more favorable.</p>
            <p className="font-condensed font-bold text-lg text-white mb-6">This is the moment your movement has been building toward. PHIERS is what makes it permanent.</p>
            <div className="flex flex-col gap-3 max-w-[420px] mx-auto">
              <Link href="/petition" className="block px-6 py-3 bg-red-600 text-white font-condensed font-bold rounded-lg text-center hover:bg-red-700 transition-all">⚠️ SIGN NOW — Stop the War First</Link>
              <a href="mailto:info@phiers.org" className="block px-6 py-3 bg-[#3ddc84] text-[#080d1a] font-condensed font-bold rounded-lg text-center hover:bg-[#34c474] transition-all">✉️ Partner With PHIERS — Email Us Now</a>
              <Link href="/unions" className="block px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">💪 See the Full Union Strategy</Link>
              <Link href="/" className="block px-6 py-3 bg-transparent text-[#3ddc84] border border-[#3ddc84] rounded-lg font-condensed font-bold text-center hover:bg-[#3ddc84]/10 transition-all">← Back to PHIERS Main</Link>
            </div>
            <p className="font-condensed font-bold text-[#ffd60a] mt-6">📧 info@phiers.org · 📞 (916) 306-8967<br /><span className="text-gray-500 text-sm">We respond to every organizer inquiry. This movement belongs to all of us.</span></p>
            <p className="text-gray-500 text-sm mt-4">#PHIERdUpNow</p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-12 px-6 border-t border-[#3ddc84]/10 bg-[#0d1525]">
        <Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="mx-auto mb-4 opacity-70" />
        <div className="font-condensed font-bold text-gray-400 mb-1">PHIERS is a people's movement — not a company, not a product.</div>
        <div className="text-sm text-gray-500 mb-4">Built by regular people who are done waiting.</div>
        <div className="max-w-[500px] mx-auto mb-6">
          <p className="font-condensed text-gray-400">Energy without power fails.<br />PHIERStorm is the power.<br /><span className="text-gray-500">PHIERS.org — a catalyst for the change we've been waiting for.</span><br /><span className="text-gray-500">The only thing missing is you.</span></p>
        </div>
        <div className="max-w-[560px] mx-auto p-5 border border-[#3ddc84]/15 rounded-lg mb-6">
          <p className="font-condensed text-gray-500 text-xs uppercase tracking-wide mb-2">Built by</p>
          <p className="font-condensed font-bold text-white">Will Price | Founder &amp; Chief Solutions Architect</p>
          <p className="font-condensed text-gray-400 text-sm mb-3">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending and built the lever to fix it. Building this since 2009.</p>
          <button onClick={() => setWillModalOpen(true)} className="font-condensed text-[#3ddc84] text-sm border-b border-[#3ddc84]/30">👤 Meet the Architect →</button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-6">
          <Link href="/crisis" className="text-gray-500 text-sm hover:text-[#3ddc84]">The Crisis</Link>
          <Link href="/simple-math" className="text-gray-500 text-sm hover:text-[#3ddc84]">Simple Math</Link>
          <Link href="/solutions" className="text-gray-500 text-sm hover:text-[#3ddc84]">5D Solutions</Link>
          <Link href="/telecare" className="text-gray-500 text-sm hover:text-[#3ddc84]">Telehealth</Link>
          <Link href="/no-war" className="text-gray-500 text-sm hover:text-[#3ddc84]">No War / No Draft</Link>
          <Link href="/organizers" className="text-gray-500 text-sm hover:text-[#3ddc84]">Organizers</Link>
          <Link href="/unions" className="text-gray-500 text-sm hover:text-[#3ddc84]">Unions</Link>
          <Link href="/donate" className="text-gray-500 text-sm hover:text-[#3ddc84]">Donate</Link>
          <Link href="/faq" className="text-gray-500 text-sm hover:text-[#3ddc84]">FAQ</Link>
          <Link href="/about" className="text-gray-500 text-sm hover:text-[#3ddc84]">About</Link>
        </div>
        <div className="text-xs text-gray-600">
          Not built for profit. Not built for power. Built for We the People — by people who refused to stop.<br />
          📧 <a href="mailto:info@phiers.org" className="text-[#3ddc84]">info@phiers.org</a> · 📞 (916) 306-8967<br />
          © PHIERS.org — Original Concept Since 2009. All Rights Reserved.<br />
          <span className="text-[0.7rem]">PHIERS™ · PHIERSale™ · PHIERWorks™ · PHIERPlace™ — Protected marks established 2009–2025.</span>
        </div>
      </footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3ddc84] text-[#080d1a] w-11 h-11 rounded-full flex items-center justify-center text-xl hover:bg-[#2ab568] transition-all shadow-lg z-40">↑</button>

      {/* Will Price Modal */}
      <AnimatePresence>
        {willModalOpen && (
         <motion.div className="fixed inset-0 bg-[#080d1a] z-[99998] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setWillModalOpen(false)}>
            <div className="relative max-w-[720px] w-full bg-[#080d1a]/97 border-2 border-[#3ddc84]/35 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setWillModalOpen(false)} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#111d35] text-[#3ddc84] border-2 border-[#3ddc84] flex items-center justify-center text-xl hover:bg-[#3ddc84] hover:text-[#111d35] transition-all z-10">✕</button>
              <div className="flex flex-wrap">
                <div className="w-full md:w-[240px] min-h-[280px] overflow-hidden"><img src="/images/Will_Price.png" alt="Will Price" className="w-full h-full min-h-[260px] object-cover object-[55%_top]" /></div>
                <div className="flex-1 min-w-[240px] p-7 flex flex-col justify-center">
                  <p className="font-condensed text-xs text-[#3ddc84] uppercase tracking-[3px] mb-2">The Architect</p>
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-1">Will Price</h3>
                  <p className="font-condensed text-sm text-[#ffd60a] font-bold mb-4">Founder &amp; Chief Solutions Architect, PHIERS</p>
                  <p className="font-body text-sm text-[#c8d8c8] leading-relaxed">Not a politician. Not a lobbyist. A systems architect who found $2.7 trillion in wasted spending — and built the lever to redirect it toward healthcare, jobs, and a monthly check for every American. Building this since 2009.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-condensed { font-family: 'Barlow Condensed', sans-serif; }
        .font-body { font-family: 'Barlow', sans-serif; }
        details summary { list-style: none; }
        details summary::-webkit-details-marker { display: none; }
      `}</style>
    </>
  )
}
