'use client'

export default function PathosCredibility() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="aspect-video mb-4">
        <iframe
          src="https://www.youtube.com/embed/KLu7USN_dao"
          title="Pathos Communications explains why they represent PHIERS"
          className="w-full h-full"
          allowFullScreen
        />
      </div>
      <p className="text-green text-center text-lg italic">
        “If you weren’t legit, we wouldn’t risk putting our name behind yours.”
      </p>
      <p className="text-gray-400 text-center">— Pathos Communications</p>
      <p className="text-gray-300 text-center text-sm mt-4">
        Pathos Communications — a global research and PR agency listed on the London Stock Exchange — conducted multiple multi‑hour interviews with Will Price and publicly explained on video why they chose to represent PHIERS.
      </p>
    </div>
  )
}