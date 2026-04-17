// components/CrisisSpiral.tsx
'use client'

export default function CrisisSpiral() {
  const steps = [
    { icon: "🔥", title: "WAR / MILITARY ESCALATION", color: "red", desc: "No congressional authorization. Unilateral action." },
    { icon: "🛢️", title: "OIL PRICE SHOCK / SUPPLY CHAIN", color: "red", desc: "Strait of Hormuz threatened → inflation across everything." },
    { icon: "💊", title: "HEALTHCARE COSTS SPIKE", color: "gold", desc: "Medical supplies, pharma, equipment all rise." },
    { icon: "👷", title: "WORKERS SICKER / MORE PRESSURE", color: "gold", desc: "Wages flat, expenses up, productivity drops." },
    { icon: "📉", title: "ECONOMY CONTRACTS", color: "gold", desc: "Jobs lost, tax revenue falls, social services strained." },
    { icon: "⚡", title: "DESPERATION & EXTREMISM RISE", color: "red", desc: "Political instability, scapegoating, authoritarian risks." },
  ]

  return (
    <div className="my-6 rounded-xl bg-[#0a0a1a] p-4 border border-green-500/30">
      <h3 className="text-center text-green-400 text-lg md:text-xl font-bold mb-2">🌀 THE CRISIS SPIRAL</h3>
      <p className="text-center text-gray-400 text-xs md:text-sm mb-6">Each failure feeds the next – a loop that repeats until interrupted.</p>

      <div className="space-y-3">
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            <div className={`flex items-start gap-3 p-3 rounded-lg border-l-4 ${
              step.color === 'red' 
                ? 'bg-red-500/10 border-red-500' 
                : 'bg-yellow-500/10 border-yellow-500'
            }`}>
              <span className="text-2xl md:text-3xl">{step.icon}</span>
              <div className="flex-1">
                <p className={`font-bold text-sm md:text-base ${
                  step.color === 'red' ? 'text-red-400' : 'text-yellow-400'
                }`}>
                  {step.title}
                </p>
                <p className="text-gray-300 text-xs md:text-sm mt-1">{step.desc}</p>
              </div>
            </div>
            {/* Arrow down (except last) */}
            {idx < steps.length - 1 && (
              <div className="flex justify-center my-1">
                <span className="text-gray-500 text-xl">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Loop closure */}
      <div className="mt-6 text-center border-t border-green-500/30 pt-4">
        <div className="inline-block bg-green-500/20 rounded-full px-4 py-2">
          <p className="text-green-400 font-bold text-xs md:text-sm">
            🔄 LOOP REPEATS → More war risk → back to top
          </p>
        </div>
        <p className="text-gray-400 text-xs mt-3">
          Without organized pressure, this spiral accelerates.
        </p>
      </div>
    </div>
  )
}