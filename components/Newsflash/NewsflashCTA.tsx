// src/components/Newsflash/NewsflashCTA.tsx
export default function NewsflashCTA() {
  return (
    <div className="nf-cta">
      <h2>The courts won't save us. The maps are already being redrawn.</h2>
      <p>
        One plan. 1,500 signatures per district. Addresses the voting rights crisis, the wars,
        the healthcare gap, the housing collapse — without waiting for midterms, without
        waiting for courts, without asking permission.
      </p>
      <span className="sig-count">1,500</span>
      <span className="sig-label">signatures to get the ball rolling</span>
      <br />
      <a className="nf-btn" href="https://phiers.org">
        Sign the petition at PHIERS.org &rarr;
      </a>
      <p style={{ marginTop: '1rem', fontSize: '13px', color: '#9FE1CB' }}>
        Tell us the issues you want addressed. This plan gets stronger when more people shape it.
      </p>
    </div>
  );
}