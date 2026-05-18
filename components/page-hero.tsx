'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

export function PageHero({
  icon: Icon,
  title,
  subtitle,
  children,
}: {
  icon?: LucideIcon
  title: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {Icon && <Icon className="w-10 h-10 text-[#3ddc84] mx-auto mb-4" />}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
