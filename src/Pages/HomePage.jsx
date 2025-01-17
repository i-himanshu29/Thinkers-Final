import React from 'react'
import About from '../components/About'
import HeroSection from '../components/HeroSection'
import Products from '../components/Products'
import Trigger from '../components/Trigger'
import Carousel from '../components/Carousel'
import { NavbarDemo } from '../components/Navbar'
import { StickyScrollRevealDemo } from '../components/StickyScrollReveal'
import { MultiStepLoaderDemo } from '../components/MultiStepLoader'

function HomePage() {
  return (
    <div>
        <NavbarDemo/>
        <HeroSection/>
        <About/>
        <Trigger/>
        <StickyScrollRevealDemo/>
        <Products/>
        <Carousel/>
        <MultiStepLoaderDemo/>
    </div>
    
  )
}

export default HomePage