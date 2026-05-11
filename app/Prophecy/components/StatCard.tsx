// FILE: components/Prophecy/StatCard.tsx
// VERSION: 1.0.0
// Dark background stat card

interface StatCardProps {
  children: React.ReactNode;
}

export default function StatCard({ children }: StatCardProps) {
  return (
    <div className="bg-black text-white p-6 rounded-lg text-center my-8">
      <div className="text-xl md:text-2xl font-bold leading-relaxed">
        {children}
      </div>
    </div>
  );
}
// END FILE: components/Prophecy/StatCard.tsx