'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Share2, Users, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

export function ThankYouClient() {
  const handleShare = async () => {
    try {
      if (navigator?.share) {
        await navigator.share({
          title: 'PHIERS.org - Sign the Petition',
          text: 'I just signed the petition to demand town halls on April 15th. 1,500 per district. Join me.',
          url: typeof window !== 'undefined' ? window?.location?.origin + '/petition' : '/petition',
        })
      } else {
        await navigator?.clipboard?.writeText?.(
          (typeof window !== 'undefined' ? window?.location?.origin : '') + '/petition'
        )
        toast.success('Link copied to clipboard!')
      }
    } catch (e: any) {
      console.error('Share error:', e)
    }
  }

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen flex items-center">
      <div className="max-w-[600px] mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
        >
          <CheckCircle className="w-16 h-16 text-[#3ddc84] mx-auto mb-6" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            You&apos;re <span className="text-[#3ddc84]">In</span>.
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Your signature has been recorded. Your voice matters. Now help us reach 1,500 in your district.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-6 py-3 bg-[#3ddc84] text-[#080d1a] font-semibold rounded-xl hover:bg-[#34c474] transition-all"
            >
              <Share2 className="w-4 h-4" /> Share the Petition
            </button>
            <Link
              href="/organizers"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              <Users className="w-4 h-4" /> Become an Organizer
            </Link>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1 mt-8 text-sm text-gray-500 hover:text-[#3ddc84] transition-colors"
          >
            Back to Home <ArrowRight className="w-3 h-3" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
