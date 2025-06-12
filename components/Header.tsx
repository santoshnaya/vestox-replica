'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import gsap from 'gsap'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo('.header-logo', 
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.2 }
    )
    
    gsap.fromTo('.nav-item', 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.4 }
    )
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: element,
        ease: "power2.inOut"
      })
    }
    setIsOpen(false)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="header-logo flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold text-white">vestox</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="nav-item text-muted-foreground hover:text-white transition-colors"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="nav-item text-muted-foreground hover:text-white transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="nav-item text-muted-foreground hover:text-white transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-item text-muted-foreground hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="nav-item text-muted-foreground hover:text-white transition-colors">
              Log In
            </button>
            <button className="nav-item bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-muted-foreground hover:text-white transition-colors"
              >
                How it Works
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-left text-muted-foreground hover:text-white transition-colors"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left text-muted-foreground hover:text-white transition-colors"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-muted-foreground hover:text-white transition-colors"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <button className="text-left text-muted-foreground hover:text-white transition-colors">
                  Log In
                </button>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors w-fit">
                  Register
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 