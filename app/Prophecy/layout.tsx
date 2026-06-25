// FILE: app/Prophecy/layout.tsx
// VERSION: 1.2 – Added SurveyBanner and ProphecyReturningModal

export default function ProphecyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-black text-white antialiased">
      {/* Warm gradient overlay – hint of daybreak, never sunlight */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(255, 100, 0, 0.06), transparent 70%)',
        }}
      ></div>
      <div className="relative z-10">
        {/* <SurveyBanner storagePrefix="prophecy_" /> - REMOVED */}
        {children}
      </div>
    </div>
  );
}

// FILE: app/Prophecy/layout.tsx