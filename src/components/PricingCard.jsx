const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2.5" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export default function PricingCard({ plan, price, desc, cta, ctaClass, features, missing, featured, billing }) {
  const displayPrice = billing === 'yearly' ? price.yearly : price.monthly

  return (
    <div
      className={`pricing-card${featured ? ' pricing-card-featured' : ''}`}
      aria-label={`${plan} plan${featured ? ' - recommended' : ''}`}
    >
      {featured && <div className="pricing-popular-badge" aria-label="Most popular">Most Popular</div>}
      <div className="pricing-plan-name">{plan}</div>
      <div className="pricing-price">
        <span className="pricing-currency">$</span>
        <span className="pricing-amount">{displayPrice}</span>
        <span className="pricing-period">/mo</span>
      </div>
      <p className="pricing-desc">{desc}</p>
      <a href="#download" className={`btn ${ctaClass} btn-full`}>{cta}</a>
      <ul className="pricing-features" role="list">
        {features.map((f) => (
          <li key={f} role="listitem"><CheckIcon />{f}</li>
        ))}
        {(missing || []).map((f) => (
          <li key={f} className="pricing-missing" role="listitem"><XIcon />{f}</li>
        ))}
      </ul>
    </div>
  )
}
