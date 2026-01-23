export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  // Observe all sections except hero (hero is always visible)
  const sections = document.querySelectorAll('section:not(#home)')
  sections.forEach(section => {
    section.classList.add('animate-on-scroll')
    observer.observe(section)
  })

  // Observe other elements that should animate
  const animateElements = document.querySelectorAll('.pricing-card, .gallery-item, .stat-item')
  animateElements.forEach(element => {
    observer.observe(element)
  })
}
