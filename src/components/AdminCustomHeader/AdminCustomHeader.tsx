// components/MyCustomHeader.tsx
import React from 'react'

const AdminCustomHeader: React.FC = () => {
  return (
    <header
      style={{
        background: '#1e1e2f',
        color: '#fff',
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>Site name</h1>
      <nav>
        <button>Logout</button>
      </nav>
    </header>
  )
}

export default AdminCustomHeader
