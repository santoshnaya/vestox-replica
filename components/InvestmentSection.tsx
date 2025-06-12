'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const InvestmentSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Animate title on scroll
    gsap.fromTo('.investment-title',
      { 
        opacity: 0, 
        y: 100 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate description
    gsap.fromTo('.investment-description',
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate decorative elements
    gsap.fromTo('.investment-decorative',
      { 
        opacity: 0, 
        scale: 0.8,
        rotation: -10
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-muted to-background relative overflow-hidden" id="how-it-works">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="investment-decorative absolute top-20 left-10 w-2 h-2 bg-primary rounded-full"></div>
        <div className="investment-decorative absolute bottom-32 right-20 w-6 h-6 bg-accent/20 rounded-full"></div>
        <div className="investment-decorative absolute top-1/2 left-1/4 text-4xl text-primary/20">*</div>
        <div className="investment-decorative absolute top-1/3 right-1/3 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="mb-16">
            <h2 className="investment-title text-5xl lg:text-8xl font-black text-white leading-none mb-8">
              <div>INVESTMENT</div>
              <div>F∅R THE</div>
              <div className="flex items-center">
                <span className="italic mr-8">FUTURE</span>
                {/* Decorative chart line */}
                <div className="investment-decorative flex-1 max-w-md">
                  <svg className="w-full h-20" viewBox="0 0 300 80" fill="none">
                    <path 
                      d="M0 60 Q50 40 100 45 T200 35 T300 25" 
                      stroke="#f97316" 
                      strokeWidth="2" 
                      fill="none"
                    />
                    <circle cx="50" cy="45" r="3" fill="#f97316" />
                    <circle cx="150" cy="40" r="3" fill="#f97316" />
                    <circle cx="250" cy="30" r="3" fill="#f97316" />
                    <circle cx="300" cy="25" r="3" fill="#f97316" />
                  </svg>
                </div>
              </div>
            </h2>

            <div className="investment-description max-w-2xl">
              <p className="text-lg text-muted-foreground mb-4">
                We provide live capital to traders
              </p>
            </div>
          </div>

          {/* Description Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Decorative element */}
            <div className="investment-decorative">
              <div className="relative">
                <div className="w-32 h-32 bg-accent/10 rounded-full blur-xl absolute -top-8 -left-8"></div>
                <div className="glass-effect p-8 rounded-3xl relative">
                  <div className="w-16 h-16 bg-muted rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">A</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Investment Analytics
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Main content */}
            <div className="investment-description">
              <p className="text-lg lg:text-xl text-white leading-relaxed">
                The company provides real capital to our traders who demonstrate that they can be consistently profitable. We will open a trading account for you to trade without risk to your capital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestmentSection 