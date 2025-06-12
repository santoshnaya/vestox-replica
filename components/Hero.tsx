'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo('.hero-title-1', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo('.hero-title-2', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo('.hero-title-3', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo('.hero-stats', 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    )
    .fromTo('.hero-decorative', 
      { opacity: 0, rotation: -10 },
      { opacity: 1, rotation: 0, duration: 1, ease: "power2.out" },
      "-=0.8"
    )
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="hero-decorative absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="hero-decorative absolute bottom-32 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
        <div className="hero-decorative absolute top-1/2 right-1/3 w-2 h-2 bg-primary rounded-full"></div>
        <div className="hero-decorative absolute top-1/3 right-1/4 text-2xl text-primary/30">*</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none">
                <div className="hero-title-1">ST∅P THE</div>
                <div className="hero-title-2">FINANCE</div>
                <div className="hero-title-3">
                  <span className="italic">IDLE</span>
                </div>
              </h1>
              
              <div className="hero-subtitle">
                <p className="text-lg text-muted-foreground max-w-md">
                  Get exclusive offers, invest ideas and more.
                </p>
              </div>
            </div>

            {/* Stats Circle */}
            <div className="hero-stats">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-primary text-white rounded-full">
                <div className="text-center">
                  <div className="text-sm">Users</div>
                  <div className="text-2xl font-bold">50K</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Charts and Decorative Elements */}
          <div className="relative">
            {/* Chart visualization */}
            <div className="hero-decorative relative">
              <svg className="w-full h-96" viewBox="0 0 400 300" fill="none">
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid)" />
                
                {/* Animated line chart */}
                <path 
                  d="M50 250 Q100 200 150 180 T250 160 T350 140" 
                  stroke="#f97316" 
                  strokeWidth="3" 
                  fill="none"
                  className="animate-pulse"
                />
                
                {/* Data points */}
                <circle cx="50" cy="250" r="4" fill="#f97316" />
                <circle cx="150" cy="180" r="4" fill="#f97316" />
                <circle cx="250" cy="160" r="4" fill="#f97316" />
                <circle cx="350" cy="140" r="4" fill="#f97316" />
                
                {/* Decorative B icon */}
                <g transform="translate(320, 80)">
                  <rect width="40" height="40" rx="8" fill="#10b981" />
                  <text x="20" y="28" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">B</text>
                </g>
              </svg>
            </div>

            {/* Floating elements */}
            <div className="hero-decorative absolute top-8 right-8 glass-effect p-4 rounded-xl">
              <div className="text-xs text-muted-foreground">POWERED BY</div>
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center mt-2">
                <span className="text-background font-bold">B</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 