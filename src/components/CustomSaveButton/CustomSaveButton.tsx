import React from 'react'
import type { SaveButtonServerProps } from 'payload'

export function CustomSaveButton(props: SaveButtonServerProps) {
  return (
    <>
      {/* <SaveButton label="Saveeee" />) */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {/* <Button buttonStyle="subtle" icon="download">
          Save⬇️
          </Button> */}
        <button
          style={{
            backgroundColor: '#e63946', // softer red
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '10px 18px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
        >
          HELLOOOOO
        </button>
      </div>
    </>
  )
}
