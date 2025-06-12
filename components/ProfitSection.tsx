'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const ProfitSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo('.profit-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Counter animation for 9.6M
    const counter = section.querySelector('.profit-counter')
    if (counter) {
      gsap.fromTo(counter,
        { innerHTML: 0 },
        {
          innerHTML: 9.6,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 0.1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      )
    }

    // Counter for 328k
    const counter2 = section.querySelector('.clients-counter')
    if (counter2) {
      gsap.fromTo(counter2,
        { innerHTML: 0 },
        {
          innerHTML: 328,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: counter2,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-muted" id="blog">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-4">
              START THIS
            </h2>
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-4">
              ACCEPTY
            </h2>
            <h2 className="text-5xl lg:text-7xl font-black text-white italic">
              ∅UR PR∅FIT
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profit Circle */}
            <div className="profit-card">
              <div className="bg-background rounded-3xl p-8 text-center min-h-[300px] flex flex-col justify-center border border-border">
                <div className="w-48 h-48 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Profit</div>
                    <div className="text-4xl font-black text-white">
                      <span className="profit-counter">0</span>M
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profit Description */}
            <div className="profit-card">
              <div className="bg-background rounded-3xl p-8 min-h-[300px] flex flex-col justify-center border border-border">
                <p className="text-lg text-white leading-relaxed">
                  Your profits will increase thanks to our control over investments in structured companies. We control investments and minimize losses of our clients.
                </p>
                <button className="text-primary font-medium flex items-center space-x-2 mt-8 hover:text-primary/80 transition-colors group">
                  <span>INCREASE PROFITS</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="profit-card">
              <div className="bg-primary rounded-3xl p-8 min-h-[300px] relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-background rounded-tl-full"></div>
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="text-8xl font-black text-background">
                    <span className="clients-counter">0</span>k
                  </div>
                  
                  <div className="text-background/80">
                    <div className="text-sm mb-1">New clients for +8%</div>
                    <div className="text-sm">the 2022 year</div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="bg-background text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold hover:scale-105 transition-transform">
                      →
                    </button>
                  </div>
                </div>
                
                {/* Annual Statistics label */}
                <div className="absolute bottom-4 right-4 bg-background/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-xs text-background font-medium">ANNUAL STATISTICS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfitSection 