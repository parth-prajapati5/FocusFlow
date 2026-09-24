import { useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const POSTS = [
  {
    featured: true,
    gradient: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
    emoji: '🧠',
    tag: 'Productivity',
    title: 'The Science Behind the 90-Minute Focus Block — And Why Your Pomodoro Timer Might Be Wrong',
    excerpt: 'Ultradian rhythms, flow state research, and what 40 hours of tracking revealed about peak performance windows.',
    readTime: '8 min read',
    date: 'July 22, 2026',
    delay: '0',
  },
  {
    gradient: 'linear-gradient(135deg, #22C55E 0%, #06B6D4 100%)',
    emoji: '📊',
    tag: 'Data',
    title: "We Analyzed 10 Million Hours of Screen Time Data — Here's What We Found",
    excerpt: 'Surprising patterns in when, how, and why people lose focus throughout the week.',
    readTime: '6 min read',
    date: 'July 18, 2026',
    delay: '100',
  },
  {
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #4F46E5 100%)',
    emoji: '🔋',
    tag: 'Wellbeing',
    title: 'Digital Burnout Is Real — 5 Signs Your Screen Time Is Hurting Your Mental Health',
    excerpt: 'Recognizing the warning signs before exhaustion hits, and what to do about it.',
    readTime: '5 min read',
    date: 'July 14, 2026',
    delay: '200',
  },
]

function BlogCard({ featured, gradient, emoji, tag, title, excerpt, readTime, date, delay }) {
  return (
    <article
      className={`blog-card${featured ? ' blog-card-featured' : ''}`}
      data-animate="fade-up"
      data-delay={delay}
    >
      <div className="blog-image" style={{ background: gradient }} aria-hidden="true">
        <div className="blog-image-icon">{emoji}</div>
      </div>
      <div className="blog-content">
        <span className="blog-tag">{tag}</span>
        <h3><a href="#">{title}</a></h3>
        <p>{excerpt}</p>
        <div className="blog-meta">
          <span>{readTime}</span>
          <span>{date}</span>
        </div>
      </div>
    </article>
  )
}

export default function Blog() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section className="blog section" id="blog" ref={ref} aria-labelledby="blog-heading">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <div className="section-chip">Blog</div>
          <h2 id="blog-heading" className="section-title">
            Insights on focus,<br /><span className="gradient-text">productivity &amp; wellbeing</span>
          </h2>
        </div>
        <div className="blog-grid">
          {POSTS.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
