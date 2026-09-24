import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import DashboardShowcase from './components/DashboardShowcase'
import HowItWorks from './components/HowItWorks'
import AICoach from './components/AICoach'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

export default function App() {
  // Smooth anchor scroll — accounts for sticky navbar height
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16
      window.scrollTo({ top, behavior: 'smooth' })
    }
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <DashboardShowcase />
        <HowItWorks />
        <AICoach />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Blog />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
