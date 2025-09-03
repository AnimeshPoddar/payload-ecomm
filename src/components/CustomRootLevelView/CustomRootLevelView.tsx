import { Gutter } from '@payloadcms/ui'
import { AdminViewServerProps } from 'payload'
import React from 'react'
import { DefaultTemplate } from '@payloadcms/next/templates'

export function MyCustomRootLevelView({
  initPageResult,
  params,
  searchParams,
}: AdminViewServerProps) {
  return (
    <DefaultTemplate
      i18n={initPageResult.req.i18n}
      locale={initPageResult.locale}
      params={params}
      payload={initPageResult.req.payload}
      permissions={initPageResult.permissions}
      searchParams={searchParams}
      user={initPageResult.req.user || undefined}
      visibleEntities={initPageResult.visibleEntities}
    >
      <Gutter>
        <div
          style={{
            padding: '2rem',
            fontFamily: 'Inter, sans-serif',
            background: '#f9fafb',
            minHeight: '100vh',
          }}
        >
          {/* Page Header */}
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: '#1f2937',
            }}
          >
            📊 My Custom Dashboard
          </h1>

          {/* Content Area */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
            }}
          >
            {/* Example Card */}
            <div
              style={{
                background: 'white',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: '#374151',
                }}
              >
                Recent Posts
              </h2>
              <p style={{ color: '#6b7280' }}>
                A quick overview of the latest posts in your collection.
              </p>
            </div>

            {/* Another Example Card */}
            <div
              style={{
                background: 'white',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: '#374151',
                }}
              >
                Analytics
              </h2>
              <p style={{ color: '#6b7280' }}>
                Custom charts, stats, or KPIs can be displayed here.
              </p>
            </div>
          </div>
        </div>
      </Gutter>
    </DefaultTemplate>
  )
}
