'use client'

import { useState } from 'react'

export default function APITestPage() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testAPI = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/petition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          zipCode: '90210',
          canContact: true
        }),
      })
      
      const data = await response.json()
      setResult({
        status: response.status,
        ok: response.ok,
        data: data
      })
    } catch (error: any) {
      setResult({
        error: true,
        message: error.message
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-2xl mb-4">API Test</h1>
      <button 
        onClick={testAPI}
        disabled={loading}
        className="bg-green-500 px-4 py-2 rounded mb-4"
      >
        {loading ? 'Testing...' : 'Test Petition API'}
      </button>
      
      {result && (
        <pre className="bg-gray-900 p-4 rounded overflow-auto mt-4">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  )
}