'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import InvestmentSection from '@/components/InvestmentSection'
import MissionSection from '@/components/MissionSection'
import ProfitSection from '@/components/ProfitSection'
import WorkSection from '@/components/WorkSection'
import ContactsSection from '@/components/ContactsSection'
import Footer from '@/components/Footer'
import TickerTape from '@/components/TickerTape'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh()
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <StatsSection />
      <InvestmentSection />
      <MissionSection />
      <ProfitSection />
      <WorkSection />
      <ContactsSection />
      <Footer />
      <TickerTape />
    </main>
  )
} 