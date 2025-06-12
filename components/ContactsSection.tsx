'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const ContactsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo('.contacts-title',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-background to-muted" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="contacts-title text-6xl lg:text-8xl font-black text-white">
              C∅NTACTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="space-y-4">
                <a href="#" className="block text-lg text-muted-foreground hover:text-white transition-colors">Instagram</a>
                <a href="#" className="block text-lg text-muted-foreground hover:text-white transition-colors">Behance</a>
                <a href="#" className="block text-lg text-muted-foreground hover:text-white transition-colors">Facebook</a>
                <a href="#" className="block text-lg text-muted-foreground hover:text-white transition-colors">Linkedin</a>
              </div>
            </div>

            <div>
              <div className="space-y-4">
                <a href="#" className="block text-lg text-muted-foreground hover:text-white transition-colors">Our work</a>
                <a href="#" className="block text-lg text-muted-foreground hover:text-white transition-colors">About us</a>
                <a href="#" className="block text-lg text-muted-foreground hover:text-white transition-colors">Insights</a>
                <a href="#" className="block text-lg text-muted-foreground hover:text-white transition-colors">Contacts us</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg text-white mb-4">Join our community</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-secondary border border-border rounded-l-lg px-4 py-3 text-white placeholder-muted-foreground"
                />
                <button className="bg-secondary border border-border rounded-r-lg px-4 py-3 text-white hover:bg-primary transition-colors">
                  GO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactsSection