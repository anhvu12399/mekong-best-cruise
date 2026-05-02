"use client"

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0, // Stops almost immediately after wheel stops
      wheelMultiplier: 1.0, // Standard scroll distance
      touchMultiplier: 2.0,
      infinite: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Scroll Reveal Luxury Animations
    const applyRevealAnimations = () => {
      // 1. Fade up for generic sections
      const revealElements = document.querySelectorAll('.reveal-on-scroll')
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 85%", // Triggers when top of element hits 85% down the viewport
              toggleActions: "play none none reverse", // play forward, reverse when scrolling back up
            },
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          }
        )
      })

      // 2. Parallax Image Reveal
      const imageContainers = document.querySelectorAll('.reveal-image-container')
      imageContainers.forEach((container) => {
        const img = container.querySelector('img')
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15, transformOrigin: 'center center' },
            {
              scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5, // 0.5 as requested by user
              },
              scale: 1,
              ease: "none",
            }
          )
        }
      })

      // 3. Vertical Parallax (Images trôi chậm hơn văn bản)
      const parallaxElements = document.querySelectorAll('[data-parallax]')
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax-speed') || "0.2")
        gsap.to(el, {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement, 
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5, // Scrubbing mượt mà
          }
        })
      })
    }

    // Small delay to ensure DOM is fully rendered before applying ScrollTrigger
    setTimeout(() => {
      applyRevealAnimations()
      ScrollTrigger.refresh()
    }, 100)

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return null
}
