import React from 'react'

const CustomRootView: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        backgroundColor: '#f4f6f8',
        minHeight: '100vh',
        padding: '2rem',
        color: '#1a202c',
      }}
    >
      {/* Header Section */}
      <div
        style={{
          backgroundColor: '#1e293b', // same as custom header
          color: 'white',
          padding: '1.5rem 2rem',
          borderRadius: '0.75rem',
          marginBottom: '2rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 600 }}>
          🚀 Welcome to Your Admin Dashboard
        </h1>
        <p style={{ margin: '0.5rem 0 0', opacity: 0.8 }}>
          Manage your content efficiently and beautifully.
        </p>
      </div>

      {/* Cards Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s ease',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>📄 Manage Posts</h2>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#4a5568' }}>
            Create, edit, and publish your blog posts seamlessly.
          </p>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>📚 Manage Pages</h2>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#4a5568' }}>
            Update and customize the main pages of your website.
          </p>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>👥 Manage Users</h2>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#4a5568' }}>
            Control access and manage roles for your team members.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CustomRootView;
