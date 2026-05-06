  // app/trilogy/page.tsx
  // Trilogy landing page – with logo, updated copy, March 28 framing

  import TrilogyDisclaimer from '@/components/TrilogyDisclaimer'

  export default function TrilogyPage() {
    return (
      <div className="min-h-screen bg-[#0d0f14] text-white">
        {/* DISCLAIMER – must be first thing rendered */}
        <TrilogyDisclaimer />

        <div className="px-6 py-16 md:px-12 lg:px-24">

        {/* PHIERS Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/PHIERS_Logo.png"
            alt="PHIERS – Power Held In Every Representative's Seat"
            className="w-28 md:w-32 h-auto opacity-80"
          />
        </div>

        {/* Hero */}
        <section className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Three truths. One direction. Real teeth.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A journey for those who’ve carried more than their share — and are ready to do something about it.
          </p>
        </section>

        {/* Three cards */}
        <section className="grid gap-10 md:grid-cols-3 mb-24">

          {/* UNFORGETTABLE */}
          <div className="bg-[#13161d] p-8 rounded-2xl border border-gray-800 shadow-lg hover:border-green-500/50 transition">
            <div className="text-green-400 text-sm font-mono mb-2">Part I</div>
            <h2 className="text-2xl font-bold mb-3">UNFORGETTABLE</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Where you stand in the world — and why it matters.<br />
              Your presence is not an accident. Your impact is not finished.
            </p>
            <a href="/unforgettable" className="text-green-400 font-semibold hover:underline inline-flex items-center gap-1">
              → Read UNFORGETTABLE
            </a>
          </div>

          {/* UNBREAKABLE */}
          <div className="bg-[#13161d] p-8 rounded-2xl border border-gray-800 shadow-lg hover:border-green-500/50 transition">
            <div className="text-green-400 text-sm font-mono mb-2">Part II</div>
            <h2 className="text-2xl font-bold mb-3">UNBREAKABLE</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              What you’ve survived — and what it made you.<br />
              The pattern. The receipts. The proof that we are built different.
            </p>
            <a href="/unbreakable" className="text-green-400 font-semibold hover:underline inline-flex items-center gap-1">
              → Read UNBREAKABLE
            </a>
          </div>

          {/* UNSTOPPABLE */}
          <div className="bg-[#13161d] p-8 rounded-2xl border border-gray-800 shadow-lg hover:border-green-500/50 transition">
            <div className="text-green-400 text-sm font-mono mb-2">Part III</div>
            <h2 className="text-2xl font-bold mb-3">UNSTOPPABLE</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              What becomes possible when we move together — with a plan.<br />
              Not a rally. Not a march. A mechanism with teeth.
            </p>
            <a href="/unstoppable" className="text-green-400 font-semibold hover:underline inline-flex items-center gap-1">
              → Read UNSTOPPABLE
            </a>
          </div>
        </section>

        {/* How to read */}
        <section className="max-w-3xl mx-auto mb-24 text-center">
          <h3 className="text-2xl font-semibold mb-4">How to read the trilogy</h3>
          <p className="text-gray-300 mb-6">You can start anywhere. But if you want the full arc:</p>
          <div className="space-y-3 text-left max-w-md mx-auto">
            <div className="border-l-4 border-green-500 pl-4">📖 <strong>UNFORGETTABLE</strong> — Hope. You matter. There is a reason to stand.</div>
            <div className="border-l-4 border-green-500/60 pl-4">📖 <strong>UNBREAKABLE</strong> — Proof. Here’s the pattern. Here’s what we survived. Here’s what we built.</div>
            <div className="border-l-4 border-green-500/30 pl-4">📖 <strong>UNSTOPPABLE</strong> — Action. Here’s the math. Here’s the mechanism. Here’s your role.</div>
          </div>
        </section>

        {/* Why this exists – March 28 framing */}
        <section className="max-w-3xl mx-auto mb-24 text-center">
          <h3 className="text-2xl font-semibold mb-4">⭐ Why this exists</h3>
          <p className="text-gray-300 leading-relaxed">
            On March 28, 2026, hundreds of thousands of people marched across America.<br />
            They had energy. They had presence. They had speeches.<br />
            Congress went back to work on Monday like nothing happened.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            That is not a failure of the people who showed up.<br />
            That is a failure of the tool.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            You cannot move Congress with a rally that has:<br />
            no verified count by district<br />
            no specific demands on record<br />
            no consequence for ignoring the crowd
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            <span className="text-green-400 font-semibold">PHIERS is what the march was missing.</span>
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            The petition creates the verified count.<br />
            The survey creates the specific demands on record.<br />
            The town hall creates the obligation to respond.<br />
            The replacement threat creates the consequence for refusing.
          </p>
          <p className="text-gray-200 font-semibold mt-4">The next time people show up — they show up with teeth.</p>
          <p className="text-gray-300 mt-4">That’s what this trilogy is about.</p>
        </section>

        {/* Primary CTA */}
        <section className="text-center">
          <div className="mb-6">
            <a href="/petition" className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-full text-lg shadow-md hover:bg-green-700 transition">
              ✍ Ready now? Sign the petition →
            </a>
          </div>
          <a href="/unforgettable" className="inline-block bg-green-500 text-black font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-green-400 transition">
            ✦ Start the trilogy ✦
          </a>
        </section>
        </div>
      </div>
    )
  }

  // app/trilogy/page.tsx
