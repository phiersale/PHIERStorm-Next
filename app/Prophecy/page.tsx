// app/Prophecy/page.tsx
'use client';

import { useState } from 'react';

export default function ProphecyPage() {
  const [invitationOpen, setInvitationOpen] = useState(false);

  return (
    <>
      {/* Hero Image */}
      <div className="w-full bg-black flex justify-center">
        <img
          src="/images/trilogy/You_Are_Not_Powerless_Bro.jpg"
          alt="You are not powerless"
          className="w-full max-w-screen-lg object-contain max-h-[70vh] md:max-h-[80vh]"
          fetchPriority="high"
          onError={(e) => console.error('Hero image failed:', (e.target as HTMLImageElement).src)}
        />
      </div>
      <main className="min-h-screen bg-white py-12">
      {/* DEBUG PANEL – remove after fix */}
      <div className="bg-yellow-100 border-2 border-red-500 p-4 my-4 max-w-3xl mx-auto">
        <p className="font-bold text-black">🔍 IMAGE DEBUG (remove me later)</p>
        <div className="flex flex-col gap-2 mt-2 text-sm">
          <div>
            <span className="font-mono">/images/trilogy/400-years-prophesy_sentence-served.jpg</span>
            <img src="/images/trilogy/400-years-prophesy_sentence-served.jpg" style={{width:100, display:'inline-block', marginLeft:8}} onError={(e)=>{console.error('PROPHECY IMAGE 404', e.target.src); e.currentTarget.style.border='2px solid red'}} onLoad={()=>console.log('PROPHECY IMAGE LOADED')} />
          </div>
          <div>
            <span className="font-mono">/images/trilogy/He_aint_heavy.webp</span>
            <img src="/images/trilogy/He_aint_heavy.webp" style={{width:100, display:'inline-block', marginLeft:8}} onError={(e)=>{console.error('HE AINT HEAVY IMAGE 404', e.target.src); e.currentTarget.style.border='2px solid red'}} onLoad={()=>console.log('HE AINT HEAVY LOADED')} />
          </div>
          <p className="text-gray-700 mt-2">✅ If you see red borders, check browser console for 404 errors.</p>
        </div>
      </div>

        {/* Opening lines */}
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <p className="text-2xl md:text-3xl font-bold text-black">You are not alone.</p>
        <div className="mt-10 space-y-6 text-left max-w-2xl mx-auto">
          <p className="text-gray-800 text-lg leading-relaxed">
            This space was built for Black men.<br />
            Not to perform. Not to protest. Not to explain ourselves to people who have never had to carry what we carry.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            To remember. To see clearly. To move with purpose.
          </p>
        </div>
      </div>

      {/* Invitation section – concise and dignified */}
      <div className="max-w-3xl mx-auto px-6 py-4 bg-white">
        <p className="text-gray-800 text-lg leading-relaxed">
          If this is your lived experience — you belong here.<br />
          If it is not — read with care and respect.
        </p>
      </div>

      {/* Prophecy section – Genesis, image, Sankofa, Matthew */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <p className="text-gray-800 text-lg leading-relaxed">
          Four hundred years.<br />
          That was the word.<br />
          A people taken to a foreign land.<br />
          Enslaved.<br />
          Scattered.<br />
          Stripped of name, language, and inheritance.<br />
          Told they were nothing.<br />
          Treated as property.<br />
          Blamed for surviving.
        </p>
        <div className="italic text-gray-700 border-l-4 border-gray-400 pl-4 my-6">
          <p>“Know certainly that your descendants will be strangers in a land that is not theirs, and will serve them, and they will afflict them four hundred years… and afterward they shall come out with great substance.”</p>
          <p className="text-sm text-gray-500 mt-2">— Genesis 15:13–14</p>
        </div>

        {/* 400 Years: Sentence Served image */}
        <div className="relative my-8 -mx-6 md:mx-0 animate-fadeInSlow">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/trilogy/400-years-prophesy_sentence-served.jpg"
              alt="400 Years: Sentence Served – a chain breaking, sparks flying"
              className="phiers-image object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"></div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-3 uppercase tracking-wide">The prophecy fulfilled.</p>
        </div>

        <p className="text-gray-800 text-lg leading-relaxed mt-4">
          The sentence is served. Now the work begins.<br />
          This is not the end of our story.<br />
          This is the beginning of our response.
        </p>

        <p className="text-gray-800 text-lg leading-relaxed mt-8">
          Sankofa.<br />
          We look back so we can see what comes next.<br />
          Memory is not nostalgia — it is strategy.
        </p>

        <p className="text-gray-800 text-lg leading-relaxed mt-8">
          We learned the game.<br />
          The last becoming first does not happen by accident.<br />
          It happens because those who survived the fire learned something the comfortable never had to learn.
        </p>
        <div className="italic text-gray-700 border-l-4 border-gray-400 pl-4 my-6">
          <p>“The last will be first, and the first last.”</p>
          <p className="text-sm text-gray-500 mt-2">— Matthew 20:16</p>
        </div>
      </div>

      {/* Accordion – detailed lived experiences (restored) */}
      <div className="max-w-3xl mx-auto px-6 py-4">
        <button
          onClick={() => setInvitationOpen(!invitationOpen)}
          className="text-gray-600 text-sm uppercase tracking-wider hover:text-black transition flex items-center gap-2 font-semibold"
        >
          {invitationOpen ? '−' : '▶'} The record: what we have survived <span className="text-gray-400 text-xs normal-case">(read when ready)</span>
        </button>
        {invitationOpen && (
          <div className="mt-4 p-6 bg-gray-50 rounded-lg text-gray-800 text-base leading-relaxed space-y-3">
            <p>
              The Voting Rights Act — won with blood on the Edmund Pettus Bridge — was weakened in 2013.
              Last week, the final pillar collapsed.
              The protections that once stopped racial vote dilution were effectively stripped away, clearing the path for aggressive redistricting and the further erosion of Black political power.
            </p>
            <p>The school-to-prison pipeline targeting Black boys before they are teenagers. Same behavior. Different punishment. Documented.</p>
            <p>Convict leasing — slavery by another name — ran in most Southern states until 1941. Nearly 80 years after emancipation.</p>
            <p>Redlining. Federal policy that blocked Black families from the housing wealth that built the white middle class. By design.</p>
            <p>The GI Bill. Black veterans came home from WWII and found the benefits administered by local officials who refused to give them to Black men. By design.</p>
            <p><strong>The crack epidemic and the war on drugs</strong> — engineered to criminalize us, destroy our families, and lock us away for generations. Mass incarceration was the sequel.</p>
            <p><strong>Kicked out of our own homes</strong> — tossed from the marital house, treated as disposable fathers, blamed for the very structures collapsing around us.</p>
            <p><strong>Scapegoated and hated</strong> — by people who should have been allies. Pushed aside, demonized, made into the face of every problem while being excluded from every solution.</p>
            <p><strong>Straight Black men</strong> — deemed by a gynocratic, misandric society to be a cancer on humanity. Not because of what we did. Because we exist. Because we will not disappear.</p>
            <p>Blamed for everything. Credited for nothing. Still here. Still building.</p>
          </div>
        )}
      </div>

      {/* The truth we don't say out loud (new) */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">The truth we do not say out loud</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          We are the most downtrodden. The most targeted. The most lied about. The most punished for things we never did. And somehow — after everything — we are the ones holding a plan that could help humanity breathe again. We do not say that with arrogance. We say it because we feel it in our bones. It feels like destiny — not the mystical kind, but the kind forged through four hundred years of fire. Those who carry this lineage will understand.
        </p>
      </div>

      {/* The Mindset (new) */}
      <div className="max-w-3xl mx-auto px-6 py-8 bg-gray-50 rounded-lg my-8">
        <h2 className="text-2xl font-bold mb-4">The Mindset</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          We are not claiming to be chosen. We are not claiming to be destined by the stars. We are not claiming to be more than any other people. We are saying something simpler — and heavier.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed mt-4">
          We have a proven track record of surviving what was designed to break us. We have a proven track record of creating value out of nothing. We have a proven track record of carrying burdens no one else could survive. And because of that — because of what we have lived through, because of what we have learned, because of what we have built in the dark — we feel built for this moment.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed mt-4">
          Not by myth. Not by magic. By experience. By endurance. By clarity. By fire. That is the mindset.
        </p>
      </div>

      {/* He ain't heavy image */}
      <div className="max-w-3xl mx-auto px-6 py-4">
        <img
          src="/images/trilogy/He_aint_heavy.webp"
          alt="He ain't heavy"
          className="phiers-image rounded-lg shadow-md"
          loading="lazy"
          onError={(e) => console.error('He ain\'t heavy failed:', (e.target as HTMLImageElement).src)}
        />
        <p className="text-center text-gray-500 text-sm mt-2">He ain't heavy — he's my brother.</p>
      </div>

      {/* Cinematic divider */}
      <div className="w-full h-px bg-neutral-200 my-16"></div>

      {/* Where we go from here */}
      <div className="max-w-3xl mx-auto px-6 py-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Where we go from here</h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
          Before you enter the Trilogy, you need the architecture that makes it make sense.
        </p>
        <a
          href="/Prophecy/movement"
          className="block w-full text-center bg-black text-white py-4 rounded-lg mt-4 hover:bg-neutral-800 transition"
        >
          Enter the Movement →
        </a>
      </div>
    </main>
    </>
  );
}