// FILE: components/EarlyStageModal.tsx
// VERSION: 6.0 – Quiet orientation, math removed, inquiry-first

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
          position: 'relative',
          maxWidth: '460px',
          width: '100%',
          backgroundColor: '#0b0b0b',
          border: '1px solid rgba(61, 220, 132, 0.3)',
          borderRadius: '16px',
          boxShadow: '0 0 40px rgba(61, 220, 132, 0.15)',
          padding: '2rem 1.75rem',
          animation: 'fadeInUp 0.3s ease-out',
        }}
      >
        {/* Close X button */}
        <button
          onClick={onLater}
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#6b7280',
            fontSize: '1.25rem',
            cursor: 'pointer',
            padding: '4px 8px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#9ca3af')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
        >
          ✕
        </button>

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
          Most people first hear about PHIERS from someone they already know.
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
          Most new ideas spread quietly at first — in kitchens, union halls, barbershops, group chats, and trusted circles long before most people even hear about them.
        </p>

        <p
          style={{
            color: '#e5e7eb',
            fontSize: '0.95rem',
            lineHeight: '1.55',
            marginBottom: '1.25rem',
            textAlign: 'center',
          }}
        >
          Most movements people later call "massive" began with surprisingly small circles of trust.
        </p>

        <p
          style={{
            color: '#9ca3af',
            fontSize: '0.9rem',
            lineHeight: '1.55',
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          Most people are still hearing about this for the first time.
        </p>

        <p
          style={{
            color: '#9ca3af',
            fontSize: '0.85rem',
            fontStyle: 'italic',
            textAlign: 'center',
            marginBottom: '1.5rem',
          }}
        >
          Right now, this is still a conversation more than a campaign.
        </p>

        {/* Curiosity-first invitation */}
        <div
          style={{
            backgroundColor: 'rgba(61, 220, 132, 0.05)',
            borderLeft: '2px solid #3ddc84',
            padding: '1rem 1rem',
            marginBottom: '1.25rem',
            borderRadius: '4px',
          }}
        >
          <p
            style={{
              color: '#d1d5db',
              fontSize: '0.9rem',
              lineHeight: '1.55',
              textAlign: 'center',
              margin: 0,
            }}
          >
            We're not asking for commitment. Just curiosity.
          </p>
        </div>

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
              backgroundColor: '#2a8f5a',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3ddc84')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2a8f5a')}
          >
            → Ask a question here
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

        {/* Credibility link (optional) */}
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