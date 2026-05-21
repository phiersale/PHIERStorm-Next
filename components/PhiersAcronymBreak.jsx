// components/PhiersAcronymBreak.tsx
export default function PhiersAcronymBreak() {
  const entries = [
    { letter: "P", word: "Power" },
    { letter: "H", word: "Held" },
    { letter: "I", word: "In" },
    { letter: "E", word: "Every" },
    { letter: "R", word: "Reps" },
    { letter: "S", word: "Seat" },
  ];

  return (
    <div className="my-12 flex justify-center">
      <div className="max-w-md w-full">
        {entries.map(({ letter, word }) => (
          <div key={letter} className="flex items-baseline gap-4 mb-3">
            <div className="text-3xl md:text-4xl font-black text-green-400 tracking-tighter w-12">
              {letter}
            </div>
            <div className="text-base md:text-lg text-gray-300 border-l-2 border-green-500/40 pl-4">
              {word}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// components/PhiersAcronymBreak.tsx