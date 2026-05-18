'use client'
import { useState } from 'react'

export default function ValidatedBy({ defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  const [showPathosFull, setShowPathosFull] = useState(false)
  const [showDotComFull, setShowDotComFull] = useState(false)

  return (
    <div className="mt-8 text-center border-t border-[#3ddc84]/20 pt-6">
      {/* Bold white heading - always visible */}
      <h3 className="text-sm font-bold text-white uppercase tracking-wide">Validated by</h3>
      
      {/* Always visible preview text */}
      <p className="text-gray-400 text-sm mt-2">
        Pathos Communications · DotCom Magazine · Cost Plus Drugs · Harvard Kennedy School
      </p>

      {/* Expand/Collapse button */}
      <button 
        onClick={() => setExpanded(!expanded)}
        className="text-[#3ddc84] text-xs mt-3 hover:underline focus:outline-none"
      >
        {expanded ? 'Show less ↑' : 'Show full validation history →'}
      </button>

      {/* EXPANDED CONTENT - only shown when expanded */}
      {expanded && (
        <div className="mt-6 pt-6 border-t border-[#3ddc84]/20 text-left space-y-8">
          
          {/* PATHOS COMMUNICATIONS */}
          <div className="bg-[#111d35] border-l-4 border-[#ffd60a] rounded-r-lg p-6">
            <h4 className="font-condensed font-bold text-xl text-white mb-1">Pathos Communications</h4>
            <p className="text-gray-400 text-sm mb-2">Fortune 500 PR Firm — London Stock Exchange listed</p>
            <p className="text-gray-400 text-sm mb-3">Backed by Kevin Harrington — an original Shark Tank "Shark" / investor</p>
            <p className="text-gray-300 mb-4">Pathos chose to represent PHIERS and publicly stated why. They believed the idea was credible, timely, and worth putting in front of a national audience.</p>
            
            <div className="space-y-3">
              <button 
                onClick={() => setShowPathosFull(!showPathosFull)}
                className="text-[#3ddc84] text-sm font-condensed font-bold hover:underline"
              >
                {showPathosFull ? '− Show shorter version' : '+ Watch: Why Pathos Chose PHIERS (7:11)'}
              </button>
              {showPathosFull && (
                <div className="relative aspect-video rounded-lg overflow-hidden border border-[#3ddc84]/20">
                  <iframe src="https://www.youtube.com/embed/KLu7USN_dao" title="Pathos Communications - Why We Stand Behind PHIERS" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
                </div>
              )}
              
              <div>
                <a href="https://youtu.be/I-jIjNG06ow" target="_blank" rel="noopener noreferrer" className="text-[#3ddc84] text-sm font-condensed hover:underline block">
                  🎥 Watch the full interview (29 mins) →
                </a>
              </div>
            </div>
          </div>

          {/* DOTCOM MAGAZINE */}
          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-6">
            <h4 className="font-condensed font-bold text-xl text-white mb-1">DotCom Magazine — 2022</h4>
            <p className="text-gray-400 text-sm mb-2">Backed by Kevin O'Leary — an original Shark Tank "Shark" / investor</p>
            <p className="text-gray-300 mb-4">DotCom Magazine selected Will Price for an interview — not as an endorsement, but because the idea was serious enough to feature and amplify nationally.</p>
            
            <div className="space-y-3">
              <button 
                onClick={() => setShowDotComFull(!showDotComFull)}
                className="text-[#3ddc84] text-sm font-condensed font-bold hover:underline"
              >
                {showDotComFull ? '− Show shorter version' : '+ Watch: DotCom Magazine Teaser (3 min)'}
              </button>
              {showDotComFull && (
                <div className="relative aspect-video rounded-lg overflow-hidden border border-[#3ddc84]/20">
                  <iframe src="https://www.youtube.com/embed/pUdlWukaLLY" title="PHIERS — DotCom Magazine Interview" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
                </div>
              )}
              
              <div>
                <a href="https://youtu.be/FwFq87VqZys" target="_blank" rel="noopener noreferrer" className="text-[#3ddc84] text-sm font-condensed hover:underline block">
                  🎥 Watch the full interview (27 mins) →
                </a>
              </div>
            </div>
          </div>

          {/* MARK CUBAN'S COST PLUS DRUGS */}
          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-6">
            <h4 className="font-condensed font-bold text-xl text-white mb-1">Mark Cuban's Cost Plus Drugs</h4>
            <p className="text-gray-400">7 million customers. 80-90% prescription savings. 200+ retail pharmacies operational. <strong className="text-white">Proves cooperative pharmaceutical buying works at scale.</strong></p>
          </div>

          {/* HARVARD KENNEDY SCHOOL */}
          <div className="bg-[#111d35] border-l-4 border-[#3ddc84] rounded-r-lg p-6">
            <h4 className="font-condensed font-bold text-xl text-white mb-1">Harvard Kennedy School</h4>
            <p className="text-gray-400 mb-2">Erica Chenoweth's research on 323 political campaigns (1900-2006). <strong className="text-white">Finding: NO campaign where 3.5% of the population participated in sustained, organized action ever failed.</strong></p>
            <p className="text-gray-400">Translation: Systemic change isn't just possible — it's guaranteed once we reach and sustain 3.5% organized participation.</p>
          </div>

          {/* ADAPTATION LINE */}
          <div className="bg-[#3ddc84]/10 border-l-4 border-[#3ddc84] rounded-r-lg p-6">
            <p className="text-gray-300 italic">
              "Over the years, PHIERS has been vetted by independent firms, analysts, and media platforms — 
              including Pathos Communications and DotCom Magazine — and each time the core mechanism held.
              <strong className="text-white block mt-2">What changed were the threats.</strong> 
              We adapted so the solution could meet the moment."
            </p>
          </div>

          {/* CLOSING LINE */}
          <div className="text-center pt-4">
            <p className="text-gray-500 text-sm">If this feels obvious in hindsight, it's because it is.<br />What's been missing isn't awareness. It's coordination at scale.</p>
          </div>
        </div>
      )}
    </div>
  )
}
