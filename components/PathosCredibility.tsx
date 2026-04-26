// FILE: components/PathosCredibility.tsx
// VERSION: 6.0 – full credibility sections

'use client'

import { motion } from 'framer-motion'

export default function PathosCredibility() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto px-4 py-12"
    >
      {/* Original video and quote */}
      <div className="text-center mb-12">
        <div className="aspect-video max-w-xl mx-auto mb-6">
          <iframe
            src="https://www.youtube.com/embed/KLu7USN_dao"
            title="Pathos Communications explains why they represent PHIERS"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
        <p className="text-green text-xl md:text-2xl font-semibold italic">
          “If you weren’t legit, we wouldn’t risk putting our name behind yours.”
        </p>
        <p className="text-gray-400 text-base">— Pathos Communications</p>
        <p className="text-gray-300 text-center text-sm mt-4">
          Pathos Communications — a global research and PR agency listed on the London Stock Exchange — conducted multiple multi‑hour interviews with Will Price and publicly explained on video why they chose to represent PHIERS.
        </p>
      </div>

      {/* SECTION: What We Know Works */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-green mb-4">What We Know Works</h2>
        <p className="text-gray-300 text-base mb-3">
          <span className="font-bold text-white">Harvard Kennedy School</span><br />
          Research shows that when about 3.5% of people get involved, things change. Governments move. Congress listens.
        </p>
        <p className="text-gray-300 text-base mb-3">
          <span className="font-bold text-white">Ralph Nader</span><br />
          Decades of work inside Congress point to a clear number: When 1,500 people in a district speak up together, a representative can’t ignore them.
        </p>
        <p className="text-gray-300 text-base italic mt-2">These aren’t theories.<br />They’re patterns that repeat.</p>
      </div>

      {/* SECTION: Who’s Backed the Strategy */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-green mb-4">Who’s Backed the Strategy</h2>
        <p className="text-gray-300 text-base">
          <span className="font-bold text-white">PATHOS</span><br />
          PHIERS’ strategy and message structure have been reviewed and supported by PATHOS, a respected communications firm that handles tough fights, crisis moments, and high‑stakes public influence.
        </p>
        <p className="text-gray-300 text-base mt-2">They don’t sign off on nonsense.<br />Their support means the model is solid.</p>
      </div>

      {/* SECTION: Built for Everyone */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-green mb-4">Built for Everyone</h2>
        <p className="text-gray-300 text-base">
          PHIERS isn’t left or right.<br />
          It’s not red or blue.<br />
          It’s neighbors, workers, parents, veterans, small‑business owners — anyone tired of being ignored.
        </p>
        <p className="text-gray-400 text-lg mt-3 italic">Your district.<br />Your voice.<br />Your leverage.</p>
      </div>

      {/* SECTION: How It Works */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-green mb-4">How It Works</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>You go on the record with your name, email, and ZIP code</li>
          <li>You’re counted in your district</li>
          <li>When your district hits 1,500 people, your rep has to respond</li>
          <li>If they don’t, they risk losing their seat</li>
        </ul>
        <p className="text-green font-semibold mt-3">Not noise.<br />Not outrage.<br />Accountability.</p>
      </div>

      {/* SECTION: Why It Works */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-green mb-4">Why It Works</h2>
        <p className="text-gray-300 text-base">
          Congress doesn’t fear opinions.<br />
          They fear organized people in their own district.
        </p>
        <p className="text-gray-300 text-base mt-3">
          PHIERS gives regular people the same kind of leverage lobbyists use — without money, access, or backroom deals.
        </p>
        <p className="text-gray-300 text-base mt-2">Just numbers.<br />Just neighbors.<br />Just pressure they can’t ignore.</p>
      </div>

      {/* OPTIONAL: Three Pillars Block */}
      <div className="mt-10 pt-6 border-t border-green/20">
        <h3 className="text-xl md:text-2xl font-bold text-green mb-3">The Three Things That Make Leverage Real</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Show up in the district</li>
          <li>Make it public</li>
          <li>Do it together</li>
        </ul>
        <p className="text-gray-400 text-sm mt-2">Works no matter who you voted for — leverage doesn’t care about parties</p>
      </div>
    </motion.div>
  )
}