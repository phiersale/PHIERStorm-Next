'use client';

import { newsData } from '@/app/data/newsData';

export default function NewsflashContent() {
  const getTagClass = (color: string) => {
    switch (color) {
      case 'red': return 'bg-red-500/20 text-red-400';
      case 'teal': return 'bg-teal-500/20 text-teal-400';
      case 'amber': return 'bg-amber-500/20 text-amber-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* MASTHEAD */}
      <div className="bg-black px-6 py-8 md:px-8 relative border-b border-white/10">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500" />
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="font-mono text-xs text-green-500 tracking-wider">PHIERS.org // News Flash</div>
          <div className="font-mono text-xs text-gray-500">Issue #{newsData.issueNumber} · {newsData.date}<br />Organized leverage.</div>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-black leading-tight mb-3">
          The courts won't save us.<br />
          <em className="text-green-400 not-italic">We already built what will.</em>
        </h1>
        <div className="text-sm text-gray-400 border-t border-white/10 pt-4 max-w-2xl">
          The Voting Rights Act is gutted. An illegal war is being funded by one Democrat's deciding vote. The protests are real — but the strategy they're missing is already built. Here's why 1,500 organized people per district is the only move that matters right now.
        </div>
      </div>

      {/* BREAKING BAND */}
      <div className="bg-red-700 px-6 py-3 flex gap-3 items-baseline">
        <span className="font-mono text-[10px] tracking-wider text-white/70 uppercase">Breaking</span>
        <span className="text-sm font-medium text-white">{newsData.breaking}</span>
      </div>

      {/* LEDE */}
      <div className="bg-black px-6 py-6 md:px-8 border-b border-white/10">
        <div className="font-mono text-[10px] text-green-500 tracking-wider mb-2">Why now</div>
        <div className="font-serif text-xl md:text-2xl font-bold text-white mb-4 border-b border-white/10 pb-4">{newsData.ledePunch}</div>
        {newsData.ledeParagraphs.map((para, idx) => (
          <p key={idx} className="text-gray-300 text-sm leading-relaxed mb-3">{para}</p>
        ))}
      </div>

      {/* MAIN BODY */}
      <div className="px-6 py-8 md:px-8 bg-white text-gray-900">
        {/* Proof of Concept Card */}
        <div className="bg-black text-white mb-8 relative rounded-none">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500" />
          <div className="p-5 pl-6">
            <div className="font-mono text-[10px] text-green-500 tracking-wider mb-2">Target #1 — Pennsylvania</div>
            <h2 className="font-serif text-2xl font-bold mb-4">{newsData.poc.title}</h2>
            <div className="flex items-start gap-4 mb-4 bg-black/40 p-3">
              <span className="font-serif text-4xl font-black text-green-500">{newsData.poc.voteMargin}</span>
              <span className="text-xs text-gray-400 leading-relaxed">{newsData.poc.voteDesc}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">{newsData.poc.body1}</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">{newsData.poc.body2}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{newsData.poc.body3}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-[10px] font-mono px-2 py-1 bg-green-500/20 text-green-400 rounded-full uppercase tracking-wider">Replicable model</span>
              <span className="text-[10px] font-mono px-2 py-1 bg-red-500/20 text-red-400 rounded-full uppercase tracking-wider">Immediate target</span>
            </div>
          </div>
        </div>

        {/* Pull Quote */}
        <div className="bg-black text-white -mx-6 md:-mx-8 px-6 py-8 text-center my-8">
          <p className="font-serif text-xl md:text-2xl font-bold mb-2">"Any senator who votes against their constituents faces the same organized, documented consequence. That's how we change Congress without waiting two years."</p>
          <cite className="font-mono text-[10px] text-green-500 not-italic tracking-wider">The PHIERS Approach</cite>
        </div>

        {/* Strategic Advantage */}
        <div className="border-t border-gray-200 pt-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="font-mono text-[10px] text-gray-400 tracking-wider uppercase">The Strategic Advantage</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="border border-gray-200 p-5">
            <h3 className="font-serif text-xl font-bold mb-4">Why PHIERS sidesteps what everyone else is stuck on</h3>
            <ul className="space-y-3">
              {newsData.strategicAdvantages.map((adv, idx) => (
                <li key={idx} className="flex gap-2 text-sm">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sections */}
        {newsData.sections.map((section, idx) => (
          <div key={idx} className="border-t border-gray-200 py-6">
            <div className="flex justify-between items-start gap-4 mb-2">
              <h3 className="font-serif text-lg font-bold">{section.title}</h3>
              <span className={`text-[10px] font-mono px-2 py-1 rounded-full uppercase whitespace-nowrap ${getTagClass(section.tagColor)}`}>
                {section.tag}
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">{section.content}</p>
            {section.phiersNote && (
              <div className="mt-3 p-3 bg-teal-50 border-l-3 border-teal-600 rounded-r text-sm text-teal-800">
                <strong className="block font-semibold mb-1">What PHIERS does about it</strong>
                {section.phiersNote}
              </div>
            )}
          </div>
        ))}

        {/* CTA */}
        <div className="bg-black text-white -mx-6 md:-mx-8 px-6 py-10 text-center mt-8 relative">
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400" />
          <div className="font-mono text-[10px] text-green-500 tracking-wider mb-2">The only thing missing is you</div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">1,500 people.<br />One district.<br />Real consequences.</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">One plan. Addresses the voting rights crisis, the war, the healthcare gap, the housing collapse — without waiting for courts, midterms, or permission.</p>
          <div className="font-serif text-6xl md:text-7xl font-black text-white mb-1">1,500</div>
          <div className="font-mono text-[11px] text-green-400 tracking-wider mb-6">Signatures to get the ball rolling</div>
          <a href="/petition" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded transition">Sign the Petition at PHIERS.org →</a>
          <div className="text-xs text-gray-500 mt-4">Tell us the issues you want addressed. This plan gets stronger when more people shape it.</div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-black/90 px-6 py-4 flex flex-col md:flex-row justify-between gap-3 text-xs text-gray-500 border-t border-white/5">
        <div>PHIERS.org — <a href="/" className="text-green-500 hover:underline">phiers.org</a><br />Not protest. Leverage.</div>
        <div className="italic">Forward this to five people who are ready to act.</div>
      </div>
    </div>
  );
}