import React from 'react'
import { CTA, Footer, Hero, HowItWorks, Navbar, Portfolio, PurchaseOptions, Testimonials, TrustedBy, WhoWeServe, WhyGiddaa } from './'

const Home = () => {
  return (
    <>
      <main className='overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Portfolio />
        <TrustedBy />
        <Testimonials />
        <PurchaseOptions />
        <WhyGiddaa />
        <WhoWeServe />
        <HowItWorks />
        <CTA />
        <Footer />
      </main>
    </>
  )
}

export default Home