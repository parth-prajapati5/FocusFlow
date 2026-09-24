import { useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const TESTIMONIALS = [
  {
    featured: true,
    text: '"FocusFlow completely transformed how I work. I used to lose 3+ hours a day to YouTube and Reddit. Now I\'m shipping features faster than ever. The AI Coach feels like having a real productivity mentor."',
    initials: 'MR', gradient: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
    name: 'Marcus R.', role: 'Senior Software Engineer · Berlin', delay: '0',
  },
  {
    text: '"As a CS student, I was drowning in distractions during exam season. FocusFlow\'s Pomodoro timer and site blocking literally saved my GPA."',
    initials: 'PL', gradient: 'linear-gradient(135deg, #22C55E, #06B6D4)',
    name: 'Priya L.', role: 'Computer Science Student · Toronto', delay: '100',
  },
  {
    text: '"Remote work was blurring my work-life balance. FocusFlow\'s daily reports made me realize I was working 10-hour days without realizing it. Game changer."',
    initials: 'JW', gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    name: 'James W.', role: 'Product Manager · Remote', delay: '150',
  },
  {
    text: '"The privacy-first approach is what sold me. I\'ve tried every productivity app out there, but FocusFlow is the only one I trust with my usage data."',
    initials: 'SN', gradient: 'linear-gradient(135deg, #8B5CF6, #4F46E5)',
    name: 'Sofia N.', role: 'Freelance Designer · Madrid', delay: '200',
  },
  {
    text: '"I was skeptical about the AI coach, but it predicted my burnout two weeks before I even noticed it myself. The weekly summaries are incredibly insightful."',
    initials: 'AK', gradient: 'linear-gradient(135deg, #06B6D4, #22C55E)',
    name: 'Alex K.', role: 'Data Scientist · Singapore', delay: '250',
  },
  {
    text: '"Even as a gamer, FocusFlow helped me balance my gaming habits. I use it to make sure I have dedicated time for both work and play guilt-free."',
    initials: 'TH', gradient: 'linear-gradient(135deg, #EF4444, #F59E0B)',
    name: 'Tyler H.', role: 'Content Creator & Gamer · Austin', delay: '300',
  },
]

function TestimonialCard({ featured, text, initials, gradient, name, role, delay }) {
  return (
    <div
      className={`testimonial-card${featured ? ' t-featured' : ''}`}
      data-animate="fade-up"
      data-delay={delay}
    >
      <div className="testimonial-quote" aria-hidden="true">"</div>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <div className="author-avatar" style={{ background: gradient }} aria-hidden="true">
          {initials}
        </div>
        <div>
          <div className="author-name">{name}</div>
          <div className="author-role">{role}</div>
        </div>
        <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section className="testimonials section" ref={ref} aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <div className="section-chip">Testimonials</div>
          <h2 id="testimonials-heading" className="section-title">
            Loved by people who<br /><span className="gradient-text">get things done</span>
          </h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
