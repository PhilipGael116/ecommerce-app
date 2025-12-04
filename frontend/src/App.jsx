import React from 'react'
import HeroSection from './components/hero-section'
import Features from './components/features'
import StatsSection from './components/stats-section'
import Pricing from './components/pricing'
import CTASection from './components/cta-section'

const App = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <Features />
      <Pricing />
      <CTASection />
    </div>
  )
}

export default App