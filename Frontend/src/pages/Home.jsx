import React from 'react'
import Navbar from '../components/Navbar'   
import Hero from '../components/Hero'
import WhyChoseUs from '../components/WhyChoseUs'
import Next from '../components/Next'
import Reason from '../components/reason'
import Purpose from '../components/purpose'
import ServicesProvided from '../components/ServicesProvided'
import Testonomies from '../components/Testonomies'
import KingDiffrence from '../components/KingDiffrence'

  const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Hero />
        <WhyChoseUs />
        <Reason />
        <Purpose />
        <ServicesProvided />
        <Testonomies />
        <KingDiffrence />
        <Next />
    </div>
  )
}

export default Home
