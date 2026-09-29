import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UsageTracking from './components/UsageTracking'
import WebHabits from './components/WebHabits'
import DeepFocus from './components/DeepFocus'
import MindfulIntervention from './components/MindfulIntervention'
import PrivacyStory from './components/PrivacyStory'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  // Smooth scroll offset adjustment for sticky navbar
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (href === '#' || !href) return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      const headerHeight = 64
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="min-h-screen bg-[#F7F7F2] font-body text-[#151515] antialiased selection:bg-[#C7F36B] selection:text-[#151515]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <UsageTracking />
        <WebHabits />
        <DeepFocus />
        <MindfulIntervention />
        <PrivacyStory />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
