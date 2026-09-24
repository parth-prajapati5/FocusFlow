const ITEMS = [
  {
    label: 'Students',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    label: 'Developers',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: 'Creators',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
  {
    label: 'Professionals',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: 'Remote Teams',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: 'Freelancers',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
]

export default function TrustedBy() {
  return (
    <section className="trusted" aria-label="Trusted by community">
      <div className="container">
        <p className="trusted-label">
          Trusted by over <strong>100,000+</strong> users worldwide
        </p>
        <div className="trusted-logos" role="list">
          {ITEMS.map((item, i) => (
            <>
              <div className="trusted-logo-item" role="listitem" key={item.label}>
                <div className="trusted-icon" aria-hidden="true">{item.icon}</div>
                <span>{item.label}</span>
              </div>
              {i < ITEMS.length - 1 && (
                <div className="trusted-divider" aria-hidden="true" key={`div-${i}`} />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
