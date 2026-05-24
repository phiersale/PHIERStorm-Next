// FILE: components/EarlyStageModal.tsx
// VERSION: 4.1 – Final hybrid copy with tweaked opening line

'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type EarlyStageModalProps = {
  isOpen: boolean;
  onContinue: () => void;
  onLater: () => void;
  onViewCredibility?: () => void;
};

export default function EarlyStageModal({ 
  isOpen, 
  onContinue, 
  onLater, 
  onViewCredibility 
}: EarlyStageModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onLater();
      }}
    >
      <div
        style={{
          maxWidth: '420px',
          width: '100%',
          backgroundColor: '#0b0b0b',
          border: '1px solid rgba(61, 220, 132, 0.3)',
          borderRadius: '16px',
          boxShadow: '0 0 40px rgba(61, 220, 132, 0.15)',
          padding: '2rem 1.75rem',
          animation: 'fadeInUp 0.3s ease-out',
        }}
      >
        {/* Green accent line */}
        <div
          style={{
            width: '48px',
            height: '2px',
            backgroundColor: '#3ddc84',
            margin: '0 auto 1.5rem auto',
          }}
        />

        {/* EARLY ACCESS tag */}
        <p
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#3ddc84',
            opacity: 0.7,
            marginBottom: '0.75rem',
            textAlign: 'center',
          }}
        >
          EARLY ACCESS
        </p>

        <p
          style={{
            color: '#e5e7eb',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          PHIERS has only recently launched publicly.
        </p>

        <p
          style={{
            color: '#9ca3af',
            fontSize: '0.9rem',
            lineHeight: '1.55',
            marginBottom: '1.25rem',
            textAlign: 'center',
          }}
        >
          Most people here learned about PHIERS through somebody they trust — a conversation that stuck.
        </p>

        <p
          style={{
            color: '#e5e7eb',
            fontSize: '0.95rem',
            lineHeight: '1.55',
            marginBottom: '0.75rem',
            textAlign: 'center',
          }}
        >
          Real movements rarely begin loudly.
        </p>

        <p
          style={{
            color: '#9ca3af',
            fontSize: '0.9rem',
            lineHeight: '1.55',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}
        >
          They begin in kitchens, union halls, barbershops, group chats, and communities long before most people even hear about them.
        </p>

        <p
          style={{
            color: '#e5e7eb',
            fontSize: '1rem',
            lineHeight: '1.6',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          This does not require millions.
        </p>

        <p
          style={{
            color: '#3ddc84',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '0.5rem',
          }}
        >
          1,500 per district × 435 districts
        </p>

        <p
          style={{
            color: '#e5e7eb',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '0.25rem',
          }}
        >
          ≈ 652,500 people nationwide
        </p>

        <p
          style={{
            color: '#6b7280',
            fontSize: '0.7rem',
            textAlign: 'center',
            marginBottom: '1.25rem',
            letterSpacing: '0.3px',
          }}
        >
          Across 435 congressional districts.
        </p>

        <p
          style={{
            color: '#9ca3af',
            fontSize: '0.85rem',
            lineHeight: '1.5',
            textAlign: 'center',
            marginBottom: '1.25rem',
          }}
        >
          The work has already been reviewed by senior communications professionals and national media figures.
        </p>

        <p
          style={{
            color: '#9ca3af',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            textAlign: 'center',
            marginBottom: '1.75rem',
          }}
        >
          You are witnessing the foundation stage before amplification begins.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            alignItems: 'center',
          }}
        >
          <button
            onClick={onContinue}
            style={{
              width: '100%',
              padding: '0.85rem 1.5rem',
              backgroundColor: '#3ddc84',
              color: '#081018',
              fontWeight: 'bold',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Continue to Petition
          </button>

          <button
            onClick={onLater}
            style={{
              width: '100%',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'transparent',
              color: '#9ca3af',
              fontSize: '0.85rem',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Maybe Later
          </button>
        </div>

        {/* Credibility link */}
        {onViewCredibility && (
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button
              onClick={onViewCredibility}
              style={{
                background: 'none',
                border: 'none',
                color: '#4b5563',
                fontSize: '0.7rem',
                textDecoration: 'underline',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#6b7280')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4b5563')}
            >
              View Credibility & Validation →
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>,
    document.body
  );
}

// FILE: components/EarlyStageModal.tsx