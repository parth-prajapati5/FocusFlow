import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to every [data-animate] element
 * inside the given container ref (or document if no ref provided).
 * Adds the "animated" class when the element enters the viewport.
 */
export default function useScrollAnimation(containerRef = null) {
  useEffect(() => {
    const root = containerRef?.current ?? document
    const elements = root.querySelectorAll('[data-animate]')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
