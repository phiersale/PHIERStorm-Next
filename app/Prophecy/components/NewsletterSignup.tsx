// FILE: app/4daBros/components/NewsletterSignup.tsx
// VERSION: 2.0.0

'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // TODO: Replace with your real endpoint (Mailchimp, Formspree, ConvertKit, etc.)
    // Example using Formspree:
    // const response = await fetch('https://formspree.io/f/your-form-id', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email })
    // })
    // if (response.ok) setStatus('success') else setStatus('error')

    await new Promise(resolve => setTimeout(resolve, 800)) // simulate
    console.log('Newsletter signup:', { name, email })
    setStatus('success')
    setName('')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <div className="mt-12 pt-6 border-t border-[#222]">
      <h3 className="text-white text-lg font-semibold mb-2">Stay connected</h3>
      <p className="text-[#999999] text-sm mb-4">A private note when something matters. No spam. No noise.</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 bg-[#111] border border-[#333] rounded text-white placeholder:text-[#666] focus:outline-none focus:border-white"
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 bg-[#111] border border-[#333] rounded text-white placeholder:text-[#666] focus:outline-none focus:border-white"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-2 bg-white text-black font-medium rounded hover:bg-[#e0e0e0] transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending…' : 'Subscribe'}
        </button>
        {status === 'success' && <p className="text-green-400 text-sm">Thank you. You're on the list.</p>}
        {status === 'error' && <p className="text-red-400 text-sm">Something went wrong. Try again?</p>}
      </form>
    </div>
  )
}

// END FILE: app/4daBros/components/NewsletterSignup.tsx