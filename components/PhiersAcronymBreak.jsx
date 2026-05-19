// components/PhiersAcronymBreak.jsx
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
    <div className="phiers-visual-break">
      <div className="phiers-acronym-block">
        <div className="phiers-definition-grid">
          {entries.map(({ letter, word }) => (
            <React.Fragment key={letter}>
              <div className="phiers-letter">{letter}</div>
              <div className="phiers-word">{word}</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        .phiers-visual-break {
          margin: 2.5rem 0;
          display: flex;
          justify-content: center;
        }
        .phiers-acronym-block {
          max-width: 520px;
          width: 100%;
        }
        .phiers-definition-grid {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1.25rem 1.8rem;
          align-items: baseline;
        }
        .phiers-letter {
          font-size: 2.4rem;
          font-weight: 800;
          color: #1e2b3f;
          background: transparent;
        }
        .phiers-word {
          font-size: 1.2rem;
          font-weight: 500;
          color: #2c3e4e;
          border-left: 2px solid rgba(158, 174, 188, 0.35);
          padding-left: 1rem;
        }
        /* optional subtle separator lines (no background) */
        .phiers-acronym-block::before,
        .phiers-acronym-block::after {
          content: '';
          display: block;
          width: 80px;
          height: 1px;
          background: #d4dee5;
          margin: 0.8rem auto;
          opacity: 0.6;
        }
        .phiers-acronym-block::before { margin-bottom: 1.3rem; }
        .phiers-acronym-block::after { margin-top: 1.3rem; }
        @media (max-width: 640px) {
          .phiers-letter { font-size: 1.9rem; }
          .phiers-word { font-size: 1rem; }
          .phiers-definition-grid { gap: 0.9rem 1.2rem; }
        }
        @media (prefers-color-scheme: dark) {
          .phiers-letter { color: #e5e9f0; }
          .phiers-word { color: #cbd5e1; border-left-color: rgba(129, 146, 166, 0.6); }
          .phiers-acronym-block::before,
          .phiers-acronym-block::after { background: #4a5b6e; }
        }
      `}</style>
    </div>
  );
}