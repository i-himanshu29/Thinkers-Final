import React from 'react'
import About from '../components/About'
import HeroSection from '../components/HeroSection'
import Products from '../components/Products'
import Trigger from '../components/Trigger'
// import Socializer from '../components/Socializer'
// import Researcher from '../components/Researcher'
// import Events from '../components/Events'
import Carousel from '../components/images'
// import AnimatedHeading from '../components/Heading'
import { NavbarDemo } from '../components/Navbar'
// import { TabsDemo } from '../components/Tabs'
import { StickyScrollRevealDemo } from '../components/StickyScrollReveal'
import { MultiStepLoaderDemo } from '../components/MultiStepLoader'
// import { ThreeDCardDemo } from '../components/CardThreeD'
// import { CardHoverEffectDemo } from '../components/ProductCard'

function HomePage() {
  return (
    <div>
        <NavbarDemo/>
        <HeroSection/>
        <About/>
        <Trigger/>
        {/* <ThreeDCardDemo/> */}
        <StickyScrollRevealDemo/>
        {/* <TabsDemo/> */}
        {/* <Socializer/> */}
        {/* <Researcher/> */}
        <Products/>
        {/* <Events/> */}
        {/* <CardHoverEffectDemo/> */}
        

        <Carousel/>
        {/* <AnimatedHeading/> */}
        <MultiStepLoaderDemo/>
    </div>
    
  )
}

export default HomePage