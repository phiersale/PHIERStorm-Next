'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export function CountUp({
  end,
  prefix = '',
  suffix = '',
  duration = 2000,
  className = '',
}: {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count?.toLocaleString?.() ?? '0'}{suffix}
    </span>
  )
}
