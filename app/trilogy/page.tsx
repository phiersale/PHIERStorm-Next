// app/trilogy/page.tsx
// A clean, cinematic landing page for the PHIERS trilogy

export default function TrilogyPage() {
  return (
    <div className="min-h-screen bg-[#0d0f14] text-white px-6 py-16 md:px-12 lg:px-24">

      {/* Hero */}
      <section className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Three truths. One direction.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A journey for those who’ve carried more than their share —<br />
          and are ready to remember who they are.
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
            Your presence is not an accident. Your impact is real.
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
            You are still here, still building, still rising.
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
            What becomes possible when we move together.<br />
            Momentum. Direction. A future shaped by intention.
          </p>
          <a href="/unstoppable" className="text-green-400 font-semibold hover:underline inline-flex items-center gap-1">
            → Read UNSTOPPABLE
          </a>
        </div>

      </section>

      {/* How to read */}
      <section className="max-w-3xl mx-auto mb-24 text-center">
        <h3 className="text-2xl font-semibold mb-4">How to read the trilogy</h3>
        <p className="text-gray-300 mb-6">You can start anywhere. But if you want the full emotional arc:</p>
        <div className="space-y-3 text-left max-w-md mx-auto">
          <div className="border-l-4 border-green-500 pl-4">📖 <strong>UNFORGETTABLE</strong> — You matter.</div>
          <div className="border-l-4 border-green-500/60 pl-4">📖 <strong>UNBREAKABLE</strong> — You’re stronger than what tried to break you.</div>
          <div className="border-l-4 border-green-500/30 pl-4">📖 <strong>UNSTOPPABLE</strong> — Together, we move.</div>
        </div>
      </section>

      {/* Why this exists */}
      <section className="max-w-3xl mx-auto mb-24 text-center">
        <h3 className="text-2xl font-semibold mb-4">Why this exists</h3>
        <p className="text-gray-300 leading-relaxed">
          Because too many of us were taught to carry everything alone.<br />
          Because too many of us were told nothing will change.<br />
          Because too many of us stopped expecting anything better.
        </p>
        <p className="text-gray-200 mt-6 text-lg font-medium">
          You are not invisible.<br />
          You are not alone.<br />
          You are not done.
        </p>
      </section>

      {/* Primary CTA */}
      <section className="text-center">
        <a
          href="/unforgettable"
          className="inline-block bg-green-500 text-black font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-green-400 transition"
        >
          ✦ Start the trilogy ✦
        </a>
      </section>

    </div>
  )
}