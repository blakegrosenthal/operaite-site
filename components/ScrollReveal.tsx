'use client'

import { useEffect } from 'react'

export function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal-up')
    )

    if (!elements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement

          if (entry.isIntersecting) {
            element.classList.remove('reveal-hidden')
            observer.unobserve(element)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px'
      }
    )

    elements.forEach((element) => {
      const inView =
        element.getBoundingClientRect().top < window.innerHeight * 0.9

      if (inView) {
        return
      }

      element.classList.add('reveal-hidden')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return null
}

