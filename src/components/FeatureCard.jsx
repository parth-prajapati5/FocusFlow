export default function FeatureCard({ iconColor, iconBg, icon, title, description, preview, delay, large }) {
  return (
    <div
      className={`feature-card${large ? ' feature-card-large' : ''}`}
      data-animate="fade-up"
      data-delay={delay}
    >
      <div className="feature-icon-wrap" style={{ '--icon-color': iconColor, '--icon-bg': iconBg }}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {preview}
    </div>
  )
}
