// FILE: components/EarlyStageModal.tsx
// VERSION: 3.0 – Kitchen table / barbershop / union hall tone

'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type EarlyStageModalProps = {
  isOpen: boolean;
  onContinue: () => void;
  onLater: () => void;
};

export default function EarlyStageModal({ isOpen, onContinue, onLater }: EarlyStageModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

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
          maxWidth: '400px',
          width: '100%',
          backgroundColor: '#0b0b0b',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
          boxShadow: '0 0 40px rgba(0, 255, 150, 0.15)',
          padding: '2rem 1.5rem',
          textAlign: 'center',
          animation: 'fadeInUp 0.3s ease-out',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '1px',
            backgroundColor: 'rgba(61, 220, 132, 0.4)',
            margin: '0 auto 1.5rem auto',
          }}
        />

        <p
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(61, 220, 132, 0.7)',
            marginBottom: '0.75rem',
          }}
        >
          Pull up a chair.
        </p>

        <h2
          style={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: 'white',
            lineHeight: '1.2',
            marginBottom: '1rem',
          }}
        >
          You're early.
          <br />
          That's a good thing.
        </h2>

        <div
          style={{
            color: '#9ca3af',
            fontSize: '0.9rem',
            lineHeight: '1.5',
            marginBottom: '1.25rem',
            textAlign: 'left',
          }}
        >
          <p style={{ marginBottom: '0.75rem' }}>
            Most folks coming through right now found this place the same way you did — word of mouth, 
            somebody they trust, a conversation that stuck.
          </p>
          <p style={{ marginBottom: '0.75rem' }}>
            <strong style={{ color: '#3ddc84' }}>Movements don't start loud. They start in kitchens, barbershops, union halls, and group chats.</strong>
          </p>
          <p style={{ marginBottom: '0.75rem' }}>
            Right now, you're seeing the foundation. Not the crowd. The first few people who show up 
            before everybody else figures out something is happening.
          </p>
          <p style={{ marginBottom: '0.75rem' }}>
            <strong style={{ color: '#3ddc84' }}>PHIERS doesn't need millions. It needs people who see the door and walk through.</strong>
          </p>
          <p style={{ color: '#6b7280', fontStyle: 'italic' }}>
            That's what you're doing right now.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '1.5rem',
          }}
        >
          <button
            onClick={onContinue}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3ddc84',
              color: '#081018',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            I'm in
          </button>
          <button
            onClick={onLater}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'transparent',
              color: '#d1d5db',
              fontWeight: 'bold',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Not yet
          </button>
        </div>
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