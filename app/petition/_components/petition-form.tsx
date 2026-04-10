'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, AlertCircle, ChevronRight, ChevronLeft } from 'lucide-react'
import { toast } from 'sonner'

const CONCERNS = [
  'End the War',
  'Article 25 / Presidential Fitness',
  'Healthcare Costs',
  'Jobs & Economy',
  'Food Security',
  'Housing Affordability',
  'International Trade',
  'Congressional Accountability',
]

const SOLUTIONS = [
  'TeleCARE ($600/yr healthcare)',
  'PHIERSale (cooperative marketplace)',
  'PHIERWorks (2.3M jobs)',
  'Food Security (failed farms)',
  'Affordable Housing (pre-fab)',
  'Fair International Trade',
]

const POSITIONS = ['Strongly Support', 'Support', 'Neutral', 'Oppose', 'Strongly Oppose']

export function PetitionForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Step 1: Identity
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [zipCode, setZipCode] = useState('')

  // Step 2: Concerns
  const [topConcerns, setTopConcerns] = useState<string[]>([])

  // Step 3: Positions
  const [endWar, setEndWar] = useState('')
  const [article25, setArticle25] = useState('')
  const [investigations, setInvestigations] = useState('')

  // Step 4: Solutions & Organize
  const [solutions, setSolutions] = useState<string[]>([])
  const [willOrganize, setWillOrganize] = useState(false)
  const [canContact, setCanContact] = useState(false)

  const toggleConcern = (c: string) => {
    setTopConcerns((prev: string[]) =>
      (prev ?? [])?.includes(c) ? (prev ?? [])?.filter((x: string) => x !== c) : [...(prev ?? []), c]
    )
  }

  const toggleSolution = (s: string) => {
    setSolutions((prev: string[]) =>
      (prev ?? [])?.includes(s) ? (prev ?? [])?.filter((x: string) => x !== s) : [...(prev ?? []), s]
    )
  }

  const canProceed = () => {
    if (step === 1) return (name?.trim?.()?.length ?? 0) > 0 && (email?.trim?.()?.length ?? 0) > 0 && (zipCode?.trim?.()?.length ?? 0) >= 5
    if (step === 2) return (topConcerns?.length ?? 0) > 0
    if (step === 3) return (endWar?.length ?? 0) > 0 && (article25?.length ?? 0) > 0 && (investigations?.length ?? 0) > 0
    return true
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/petition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, email, zipCode,
          topConcerns, endWar, article25, investigations,
          solutions, willOrganize, canContact,
        }),
      })
      if (!res?.ok) {
        const data = await res?.json?.().catch(() => ({}))
        throw new Error(data?.error ?? 'Failed to submit')
      }
      toast.success('Petition signed successfully!')
      router.push('/thank-you')
    } catch (e: any) {
      setError(e?.message ?? 'Something went wrong')
      console.error('Petition submit error:', e)
    } finally {
      setLoading(false)
    }
  }

  const RadioGroup = ({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) => (
    <div className="mb-6">
      <p className="font-medium text-white mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {POSITIONS?.map((pos: string) => (
          <button
            key={pos}
            type="button"
            onClick={() => onChange?.(pos)}
            className={`px-4 py-2 rounded-lg text-sm transition-all border ${
              value === pos
                ? 'bg-[#3ddc84]/20 border-[#3ddc84] text-[#3ddc84]'
                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
            }`}
          >
            {pos}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="bg-[#0f1729] rounded-2xl border border-white/10 p-6 md:p-8">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s: number) => (
          <div key={s} className="flex-1">
            <div className={`h-1.5 rounded-full transition-all ${
              s <= step ? 'bg-[#3ddc84]' : 'bg-white/10'
            }`} />
            <p className={`text-xs mt-1 ${s <= step ? 'text-[#3ddc84]' : 'text-gray-600'}`}>
              {s === 1 ? 'Identity' : s === 2 ? 'Concerns' : s === 3 ? 'Positions' : 'Solutions'}
            </p>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-2">Sign the Petition</h2>
              <p className="text-sm text-gray-400 mb-4">Your information is used only to verify district residency.</p>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e: any) => setName(e?.target?.value ?? '')}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-[#3ddc84] focus:outline-none focus:ring-1 focus:ring-[#3ddc84] transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e: any) => setEmail(e?.target?.value ?? '')}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-[#3ddc84] focus:outline-none focus:ring-1 focus:ring-[#3ddc84] transition-colors"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Zip Code *</label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e: any) => setZipCode(e?.target?.value ?? '')}
                  maxLength={10}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-[#3ddc84] focus:outline-none focus:ring-1 focus:ring-[#3ddc84] transition-colors"
                  placeholder="12345"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-2">What Are Your Top Concerns?</h2>
              <p className="text-sm text-gray-400 mb-4">Select all that apply.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CONCERNS?.map((c: string) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleConcern(c)}
                    className={`px-4 py-3 rounded-lg text-sm text-left transition-all border ${
                      (topConcerns ?? [])?.includes(c)
                        ? 'bg-[#3ddc84]/20 border-[#3ddc84] text-[#3ddc84]'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                    }`}
                  >
                    <span className="mr-2">{(topConcerns ?? [])?.includes(c) ? '\u2713' : '\u25CB'}</span>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Your Position on Key Actions</h2>
              <RadioGroup label="End the current war immediately" value={endWar} onChange={setEndWar} />
              <RadioGroup label="Invoke Article 25 (Presidential fitness)" value={article25} onChange={setArticle25} />
              <RadioGroup label="Launch Congressional investigations" value={investigations} onChange={setInvestigations} />
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold mb-2">Solutions & Organizing</h2>
              <p className="text-sm text-gray-400 mb-4">Which PHIERS solutions interest you?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {SOLUTIONS?.map((s: string) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleSolution(s)}
                    className={`px-4 py-3 rounded-lg text-sm text-left transition-all border ${
                      (solutions ?? [])?.includes(s)
                        ? 'bg-[#3ddc84]/20 border-[#3ddc84] text-[#3ddc84]'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                    }`}
                  >
                    <span className="mr-2">{(solutions ?? [])?.includes(s) ? '\u2713' : '\u25CB'}</span>
                    {s}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setWillOrganize(!willOrganize)}
                  className={`w-full px-4 py-3 rounded-lg text-sm text-left transition-all border ${
                    willOrganize
                      ? 'bg-[#3ddc84]/20 border-[#3ddc84] text-[#3ddc84]'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                  }`}
                >
                  <span className="mr-2">{willOrganize ? '\u2713' : '\u25CB'}</span>
                  I&apos;m willing to help organize in my district
                </button>
                <button
                  type="button"
                  onClick={() => setCanContact(!canContact)}
                  className={`w-full px-4 py-3 rounded-lg text-sm text-left transition-all border ${
                    canContact
                      ? 'bg-[#3ddc84]/20 border-[#3ddc84] text-[#3ddc84]'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                  }`}
                >
                  <span className="mr-2">{canContact ? '\u2713' : '\u25CB'}</span>
                  PHIERS can contact me about organizing
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Error */}
      {error && (
        <div className="mt-4 flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-1 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
        ) : <div />}

        {step < 4 ? (
          <button
            onClick={() => canProceed() && setStep(step + 1)}
            disabled={!canProceed()}
            className={`flex items-center gap-1 px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
              canProceed()
                ? 'bg-[#3ddc84] text-[#080d1a] hover:bg-[#34c474]'
                : 'bg-white/10 text-gray-600 cursor-not-allowed'
            }`}
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-2 px-8 py-3 bg-[#3ddc84] text-[#080d1a] font-bold rounded-lg hover:bg-[#34c474] transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
            Submit Petition & Survey
          </button>
        )}
      </div>
    </div>
  )
}
