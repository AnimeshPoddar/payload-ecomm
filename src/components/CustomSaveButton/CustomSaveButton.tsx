import React, { CSSProperties } from 'react'
import type { SaveButtonServerProps } from 'payload'

export function CustomSaveButton(props: SaveButtonServerProps) {
  const buttonStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 24px',
    borderRadius: '14px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '15px',
    letterSpacing: '0.5px',
    color: 'white',
    background: 'linear-gradient(90deg, #34d399, #06b6d4, #2563eb)',
    boxShadow: '0 4px 15px rgba(56,189,248,0.45)',
    transition: 'all 0.3s ease',
  }

  return (
    <button style={buttonStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ stroke: 'white', filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))' }}
      >
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
        <polyline points="17 21 17 13 7 13 7 21" />
        <polyline points="7 3 7 8 15 8" />
      </svg>

      <span style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Save</span>
    </button>
  )
}
