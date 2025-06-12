'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Animate cards on scroll
    gsap.fromTo('.stats-card',
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Counter animation
    const counters = section.querySelectorAll('.counter')
    counters.forEach((counter, index) => {
      const target = counter as HTMLElement
      const finalValue = target.getAttribute('data-value')
      if (finalValue) {
        gsap.fromTo(target,
          { innerHTML: 0 },
          {
            innerHTML: parseInt(finalValue),
            duration: 2,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            scrollTrigger: {
              trigger: target,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        )
      }
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* $12M Card */}
          <div className="stats-card">
            <div className="bg-primary rounded-3xl p-8 relative overflow-hidden min-h-[300px] flex flex-col justify-between">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute bottom-0 left-0 w-full h-32">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute bottom-0 bg-white"
                      style={{
                        left: `${i * 12.5}%`,
                        width: '2px',
                        height: `${Math.random() * 100 + 20}%`,
                        transform: `skew(${Math.random() * 20 - 10}deg)`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-6xl font-black text-background mb-2">
                  $<span className="counter" data-value="12">0</span>M
                </div>
                <div className="text-background/80 text-sm">
                  Pre-seed assets <span className="text-background">+3%</span>
                  <br />performance
                </div>
              </div>
              
              <div className="relative z-10 flex justify-end">
                <button className="text-background text-sm font-medium flex items-center space-x-2 hover:bg-white/10 px-3 py-1 rounded-lg transition-colors">
                  <span>VIEW 2021 SCORES</span>
                  <span>→</span>
                </button>
              </div>
              
              {/* Person image placeholder */}
              <div className="absolute bottom-0 left-0 w-32 h-40 bg-background/20 rounded-t-3xl"></div>
            </div>
          </div>

          {/* Innovation Card */}
          <div className="stats-card">
            <div className="bg-muted rounded-3xl p-8 min-h-[300px] flex flex-col justify-between border border-border">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Your innovative way to invest online
                </h3>
              </div>
              
              {/* Contact experts */}
              <div className="mt-8">
                <div className="text-sm text-muted-foreground mb-3">CONTACT<br />OUR<br />EXPERTS</div>
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-12 h-12 bg-primary rounded-full border-2 border-background"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bull Market Card */}
          <div className="stats-card">
            <div className="bg-card rounded-3xl p-8 min-h-[300px] relative overflow-hidden border border-border">
              {/* Bull silhouette */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-32 h-24 bg-muted-foreground/20 rounded-xl relative">
                  {/* Orange label */}
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs px-2 py-1 rounded">
                    ENSURE FINANCIAL FUTURE, SPEND
                  </div>
                </div>
              </div>
              
              {/* Play button */}
              <div className="absolute bottom-8 left-8">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection 