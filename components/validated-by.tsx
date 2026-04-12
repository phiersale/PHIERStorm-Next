'use client'
import { useState } from 'react'

export default function ValidatedBy({ defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <div className="mt-4 text-center border-t border-[#3ddc84]/20 pt-6">
      <h3 className="text-sm text-gray-400 uppercase tracking-wide">Validated by</h3>
      
      <p className="text-gray-400 text-sm mt-2">
        Harvard Kennedy School (Chenoweth research) · Mark Cuban's Cost Plus Drugs · 
        Fortune 500 PR firm · Telehealth platforms (Zortt, Elite Medical) · 
        Pathos Communications · DotComMagazine · 16 years of documented prior art · 
        ACA existing legal authority
      </p>

      {/* Collapsed preview - always visible */}
      <button 
        onClick={() => setExpanded(!expanded)}
        className="text-[#3ddc84] text-xs mt-3 hover:underline focus:outline-none"
      >
        {expanded ? 'Show less ↑' : 'Show full validation history →'}
      </button>

      {/* Expanded content - only shown when expanded */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-[#3ddc84]/20 text-left">
          <p className="text-gray-400 text-sm">
            <strong className="text-white">Over the years, PHIERS has been vetted by independent firms, analysts, and media platforms</strong> — 
            including Pathos Communications and DotCom Magazine — and each time the core mechanism held.
          </p>
          <p className="text-gray-400 text-sm mt-3">
            <strong className="text-white">What changed were the threats.</strong> We adapted so the solution could meet the moment.
          </p>
          <p className="text-gray-400 text-xs mt-3 italic">
            Pathos Communications has publicly reviewed these numbers and endorsed this approach.
          </p>
        </div>
      )}
    </div>
  )
}
