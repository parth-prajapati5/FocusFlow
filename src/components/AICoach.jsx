import { useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const AI_FEATURES = [
  { title: 'Daily Recommendations', desc: 'Context-aware tips based on your actual usage, not generic advice.' },
  { title: 'Burnout Detection',      desc: 'Early warning signals when your patterns suggest mental fatigue.' },
  { title: 'Habit Suggestions',      desc: 'Science-backed habit stacks built around your existing routine.' },
  { title: 'Weekly Summaries',       desc: 'Comprehensive reports highlighting wins, areas for improvement, and next week\'s focus plan.' },
  { title: 'Focus Optimization',     desc: 'Identifies your peak performance windows and schedules deep work blocks accordingly.' },
]

const MESSAGES = [
  { dir: 'out', text: "Good morning Alex! Here's your daily briefing 🌅", time: '8:00 AM' },
  { dir: 'out', text: 'Yesterday you spent <strong>2h 40m</strong> on distraction sites — 30% above your weekly average.', time: '8:00 AM' },
  { dir: 'out', text: "💡 Suggestion: Try a 90-minute deep work block before opening email today. I'll block distractions automatically.", time: '8:01 AM' },
  { dir: 'in',  text: 'Yes, start deep work mode now', time: '8:02 AM' },
  { dir: 'out', text: "✅ Deep work mode active. 34 distracting sites blocked. Timer: 90:00. You've got this! 💪", time: '8:02 AM' },
]

export default function AICoach() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section className="ai-coach section" id="ai-coach" ref={ref} aria-labelledby="ai-heading">
      <div className="container">
        <div className="ai-coach-inner">
          {/* Left: copy */}
          <div className="ai-coach-content" data-animate="fade-up">
            <div className="section-chip section-chip-light">AI Coach</div>
            <h2 id="ai-heading" className="section-title" style={{ color: '#F8FAFC' }}>
              Your Personal<br /><span className="gradient-text-light">Productivity Coach.</span>
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(248,250,252,0.7)' }}>
              FocusFlow's AI doesn't just track — it understands. It learns your rhythms, detects burnout
              signals early, and guides you toward sustainable focus every single day.
            </p>
            <ul className="ai-features-list" role="list">
              {AI_FEATURES.map((f) => (
                <li key={f.title} role="listitem">
                  <div className="ai-feature-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#download" className="btn btn-accent btn-lg">
              Try AI Coach Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Right: chat card */}
          <div className="ai-coach-visual" data-animate="fade-up" data-delay="200" aria-hidden="true">
            <div className="ai-chat-card">
              <div className="ai-chat-header">
                <div className="ai-avatar">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <div className="ai-chat-name">FocusFlow AI</div>
                  <div className="ai-chat-status">
                    <span className="ai-online-dot" />Active
                  </div>
                </div>
              </div>

              <div className="ai-messages">
                {MESSAGES.map((msg, i) => (
                  <div key={i} className={`ai-msg ai-msg-${msg.dir}`}>
                    <div
                      className="ai-msg-bubble"
                      dangerouslySetInnerHTML={{ __html: msg.text }}
                    />
                    <div className="ai-msg-time">{msg.time}</div>
                  </div>
                ))}
              </div>

              <div className="ai-input-bar">
                <input type="text" placeholder="Ask your AI coach..." readOnly aria-label="AI coach input" />
                <button aria-label="Send message">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="ai-floating-stat">
              <div>🧠</div>
              <div>
                <div className="af-title">AI Learning</div>
                <div className="af-sub">Adapts to your patterns daily</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
