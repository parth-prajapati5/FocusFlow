import { useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import FeatureCard from './FeatureCard'

const CheckIcon = ({ color = '#22C55E' }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const ScreenTimePreview = () => (
  <div className="feature-preview" aria-hidden="true">
    <div className="preview-bar-list">
      {[
        { name: 'VS Code', w: '75%', color: '#4F46E5', time: '3h 12m' },
        { name: 'Chrome',  w: '45%', color: '#06B6D4', time: '1h 54m' },
        { name: 'Slack',   w: '25%', color: '#22C55E', time: '1h 02m' },
        { name: 'YouTube', w: '20%', color: '#F59E0B', time: '0h 48m' },
      ].map((row) => (
        <div className="preview-bar-item" key={row.name}>
          <span>{row.name}</span>
          <div className="preview-bar">
            <div className="preview-bar-fill" style={{ width: row.w, background: row.color }} />
          </div>
          <span>{row.time}</span>
        </div>
      ))}
    </div>
  </div>
)

const BlockPreview = () => (
  <div className="feature-preview feature-preview-block" aria-hidden="true">
    <div className="block-chips">
      <span className="block-chip blocked">reddit.com</span>
      <span className="block-chip blocked">twitter.com</span>
      <span className="block-chip blocked">youtube.com</span>
      <span className="block-chip allowed">notion.so</span>
      <span className="block-chip allowed">github.com</span>
      <span className="block-chip">+ Add</span>
    </div>
  </div>
)

const FEATURES = [
  {
    large: true, delay: '0',
    iconColor: '#4F46E5', iconBg: '#EEF2FF',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="12" cy="10" r="3"/></svg>,
    title: 'Screen Time Tracking',
    description: 'See exactly where your hours go. Real-time tracking of every app, window, and website — with beautiful visualizations.',
    preview: <ScreenTimePreview />,
  },
  {
    delay: '100',
    iconColor: '#06B6D4', iconBg: '#ECFEFF',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: 'Pomodoro Timer',
    description: 'Built-in focus sessions with customizable work/break intervals. Stay in flow without watching the clock.',
  },
  {
    delay: '150',
    iconColor: '#22C55E', iconBg: '#F0FDF4',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    title: 'Achievement System',
    description: 'Gamified milestones reward consistent healthy habits. Streaks, badges, and weekly goals keep you motivated.',
  },
  {
    delay: '200',
    iconColor: '#8B5CF6', iconBg: '#F5F3FF',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    title: 'AI Productivity Coach',
    description: 'Personalized daily recommendations powered by behavioral AI. Learns your patterns and adapts over time.',
  },
  {
    large: true, delay: '100',
    iconColor: '#EF4444', iconBg: '#FFF1F2',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>,
    title: 'Smart Blocking',
    description: 'Block distracting websites and apps on a schedule or on-demand. Whitelist, allowlists, and custom profiles.',
    preview: <BlockPreview />,
  },
  {
    delay: '250',
    iconColor: '#F59E0B', iconBg: '#FFFBEB',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    title: 'Weekly Analytics',
    description: 'Deep-dive reports with trends, top apps, peak productivity hours, and year-over-year comparisons.',
  },
  {
    delay: '300',
    iconColor: '#06B6D4', iconBg: '#ECFEFF',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    title: 'Daily Reports',
    description: 'Morning briefings and end-of-day summaries delivered as elegant system notifications.',
  },
  {
    delay: '350',
    iconColor: '#22C55E', iconBg: '#F0FDF4',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Privacy First',
    description: '100% local. All your data stays on your device. No cloud uploads, no telemetry, no accounts required.',
  },
  {
    delay: '400',
    iconColor: '#4F46E5', iconBg: '#EEF2FF',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" aria-hidden="true"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"/></svg>,
    title: 'Smart Notifications',
    description: "Gentle nudges when you've exceeded limits. Focus mode silences all distractions automatically.",
  },
  {
    delay: '450',
    iconColor: '#8B5CF6', iconBg: '#F5F3FF',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    title: 'Focus Sessions',
    description: 'Dedicated deep work blocks with optional ambient sounds, progress tracking, and distraction logging.',
  },
]

export default function Features() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section className="features section" id="features" ref={ref} aria-labelledby="features-heading">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <div className="section-chip">Features</div>
          <h2 id="features-heading" className="section-title">
            Everything you need to<br /><span className="gradient-text">reclaim your focus</span>
          </h2>
          <p className="section-subtitle">
            A complete digital wellbeing suite designed for the way you actually work. No bloat, no noise — just what matters.
          </p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
