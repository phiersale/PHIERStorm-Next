interface StatBlockProps {
  number: string
  label: string
}

export default function StatBlock({ number, label }: StatBlockProps) {
  return (
    <div className="stat-card">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
