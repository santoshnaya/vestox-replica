'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Wallet, Clock, Briefcase } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const MissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Animate the entire section
    gsap.fromTo('.mission-content',
      { 
        opacity: 0, 
        y: 50 
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

    // Animate decorative elements
    gsap.fromTo('.mission-decorative',
      { 
        opacity: 0, 
        scale: 0.8,
        rotation: 15
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
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

    // Animate side icons
    gsap.fromTo('.mission-icon',
      { 
        opacity: 0, 
        x: -30 
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
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
    <section ref={sectionRef} className="py-20 bg-background" id="team">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card border border-border rounded-3xl overflow-hidden relative">
            {/* Orange accent stripe */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-primary"></div>
            
            <div className="p-8 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Icons */}
                <div className="space-y-8">
                  <div className="mission-icon">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                      <Wallet className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="mission-icon">
                    <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="mission-icon">
                    <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Center - Main content */}
                <div className="mission-content">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Main mission of our company
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mt-4"></div>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Our team of experts strives to benefit society and contribute to its economic development quality the implementation of high-quality projects.
                  </p>
                  
                  <button className="text-white font-medium flex items-center space-x-2 hover:text-primary transition-colors group">
                    <span>OUR HISTORY</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* Right side - Decorative 3D element */}
              <div className="mission-decorative absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="relative w-64 h-64">
                  {/* 3D sphere representation */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full relative">
                      {/* Sphere base */}
                      <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full absolute top-8 left-8 blur-sm"></div>
                      
                      {/* Wireframe overlay */}
                      <svg className="w-full h-full absolute inset-0" viewBox="0 0 200 200">
                        {/* Horizontal lines */}
                        {[...Array(8)].map((_, i) => {
                          const y = 25 + (i * 150) / 7
                          const width = Math.sin((i * Math.PI) / 7) * 150
                          const x = 100 - width / 2
                          return (
                            <ellipse
                              key={`h-${i}`}
                              cx="100"
                              cy={y}
                              rx={width / 2}
                              ry="2"
                              fill="none"
                              stroke="#f97316"
                              strokeWidth="1"
                              opacity="0.6"
                            />
                          )
                        })}
                        
                        {/* Vertical lines */}
                        {[...Array(8)].map((_, i) => {
                          const angle = (i * Math.PI) / 4
                          const x1 = 100 + Math.cos(angle) * 75
                          const x2 = 100 + Math.cos(angle + Math.PI) * 75
                          return (
                            <line
                              key={`v-${i}`}
                              x1={x1}
                              y1="25"
                              x2={x2}
                              y2="175"
                              stroke="#f97316"
                              strokeWidth="1"
                              opacity="0.4"
                            />
                          )
                        })}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection 