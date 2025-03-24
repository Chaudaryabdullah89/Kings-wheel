import React, { useEffect } from 'react'
import heroImage from '../assets/hero img.jpg'
import { Link } from 'react-router-dom'
import Button from './Button'
import AOS from 'aos'

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
      startEvent: 'load' // Initialize on page load instead of scroll
    });
  }, []);

  return (
    <div className='my-36 max-w-[1400px] mx-auto px-4 md:px-8 gap-5 lg:px-16'>
      <div className="hero-container flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="hero-content w-full lg:w-[50%]">
            <div className="space-y-4">
              <span className="text-yellow-500 font-semibold tracking-wider uppercase" 
                    data-aos="fade-down" 
                    data-aos-anchor-placement="top-bottom">
                Welcome to King Wheel Stop
              </span>
              
              <h1 className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent heading leading-tight'
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-bottom">
                Precision Built. Contractor Trusted. Texas Tough.
              </h1>
             
              <div className='flex items-center gap-4'
                   data-aos="fade-right"
                   data-aos-anchor-placement="top-bottom">
                <hr className='w-20 border-2 border-orange-400'/>
                <span className="text-gray-500">Excellence in Every Stop</span>
              </div>

              <p className='text-lg text-gray-600 leading-relaxed font-light'
                 data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom">
                Concrete wheel stops engineered with <span className="font-semibold">4000 PSI strength</span>, reinforced with #4 rebar, and finished with PVC-lined holes for a clean, damage-free install—every time. Built to last, designed to protect.
              </p>
            </div>

            <div className="mt-10"
                 data-aos="zoom-in"
                 data-aos-anchor-placement="top-bottom">
                <Link to="/contact" className='flex flex-col sm:flex-row gap-4 items-center'>
                    <Button text="Contact Us" value={'Get a Quote in 24 Hours'} />
                    <Button text="Contact Us" value={'See Photos of Our Work'} />
                </Link>
            </div>
        </div>

        <div className='hero-image relative' 
             data-aos="flip-left"
             data-aos-anchor-placement="top-bottom"
             data-aos-duration="1500">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-20"></div>
            <img src={heroImage} 
                 alt="King Wheel Stop Installation" 
                 className='relative w-full max-w-[600px] rounded-2xl shadow-2xl hover:transform hover:scale-105 transition-all duration-500' />
            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg text-sm"
                 data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom">
              Featured Installation
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
