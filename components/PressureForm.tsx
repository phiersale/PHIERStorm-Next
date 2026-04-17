'use client'

import { useState } from 'react'

export default function PressureForm() {
  const [name, setName] = useState('')
  const [zip, setZip] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Just log for now – you can connect to your API later
    console.log({ name, zip })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  if (submitted) {
    return <div className="text-green text-sm">Your name is now counted.</div>
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
      <input
        type="text"
        placeholder="First name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 rounded border border-green/30 bg-bg-card p-2 text-white"
        required
      />
      <input
        type="text"
        placeholder="ZIP"
        value={zip}
        onChange={(e) => setZip(e.target.value.slice(0,5))}
        className="flex-1 rounded border border-green/30 bg-bg-card p-2 text-white"
        required
      />
      <button type="submit" className="rounded bg-green px-4 py-2 font-bold text-bg-deep">
        ADD MY NAME
      </button>
    </form>
  )
}