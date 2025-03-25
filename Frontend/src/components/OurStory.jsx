import React from 'react'
import service2 from '../assets/imagecompressor/s-2.webp'
import { Link } from 'react-router-dom'
const OurStory = () => {
  return (
    <div className="py-12">
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className=" lg:order-1" data-aos="fade-right">
              <h2 className="font-karla text-4xl lg:text-5xl font-bold text-blue-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
                Our Story
              </h2>
              <div className="font-poppins text-lg text-yellow-500 mb-4" style={{fontFamily: 'Poppins'}}>
                Family-Owned, Texas Proud
              </div>
              <p className=" text-gray-600 leading-relaxed mb-6" style={{fontFamily: 'Poppins'}}>
                Based in South Dallas, King Wheel Stops is a family-owned company led by Frank and Latrenia Harvey. What started as a solution for our own striping projects quickly turned into something the industry needed.
              </p>
              
              <p className=" text-gray-600 leading-relaxed" style={{fontFamily: 'Poppins'}}>
                We now proudly serve general contractors, site managers, and property owners across DFW and beyond.
              </p>
                
            </div>
            <div className="" data-aos="fade-left">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-lg transform translate-x-3 translate-y-3"></div>
                <img 
                  src={service2} 
                  alt="Our Story" 
                  className="relative rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurStory
