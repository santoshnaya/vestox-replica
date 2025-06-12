'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, TrendingUp } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const WorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo('.work-card',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
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
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Card - 356 Days */}
            <div className="work-card">
              <div className="bg-muted rounded-3xl p-8 min-h-[400px] relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-8">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-2xl font-bold text-primary mb-2">356 DAYS</div>
                  <div className="text-lg text-muted-foreground mb-2">A YEAR</div>
                  
                  <h3 className="text-4xl font-bold text-white leading-tight mb-8 max-w-sm">
                    Hard work gives us a high result 
                    <span className="inline-block w-16 h-1 bg-gradient-to-r from-primary to-accent ml-2"></span>
                    regularly
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    The reputation and name we have built up through a high level of corporate governance, transparency in operations, and the constant fulfillment of our obligations.
                  </p>
                  
                  <button className="text-white font-medium flex items-center space-x-2 hover:text-primary transition-colors group">
                    <span>WORK PROGRESS</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
                
                {/* Decorative airplane */}
                <div className="absolute bottom-8 right-8 opacity-20">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - Team Photo */}
            <div className="work-card">
              <div className="bg-card rounded-3xl overflow-hidden min-h-[400px] relative border border-border">
                {/* Placeholder for team photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary">
                  <div className="absolute inset-0 bg-black/40"></div>
                  
                  {/* Simulated team silhouettes */}
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-8 left-8 right-8 flex items-end space-x-4">
                      <div className="w-16 h-20 bg-white/20 rounded-t-full"></div>
                      <div className="w-20 h-24 bg-white/30 rounded-t-full"></div>
                      <div className="w-16 h-18 bg-white/20 rounded-t-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Content overlay */}
                <div className="absolute bottom-8 right-8">
                  <button className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold hover:scale-105 transition-transform">
                    <span className="text-xl">→</span>
                  </button>
                  <div className="text-xs text-white mt-2 font-medium">START CONSULTATION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSection 