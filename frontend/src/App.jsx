import React from 'react'
import HeroSection from './components/hero-section'
import Features from './components/features'
import StatsSection from './components/stats-section'
import Pricing from './components/pricing'
import CTASection from './components/cta-section'
import Footer from './components/footer'
import BackToTop from './components/BackToTop'

const App = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <Features />
      <Pricing />
      <CTASection />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App