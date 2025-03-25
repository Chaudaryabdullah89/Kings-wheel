import React from 'react'
import service2 from '../assets/imagecompressor/ourpromise-1.jpg'
const OurPromise = () => {
  return (
    <div className="py-12" data-aos="fade-up">
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1" data-aos="flip-right" data-aos-duration="1000">
              <h2 className="font-karla text-4xl lg:text-5xl font-bold text-blue-900 mb-6" style={{fontFamily: 'Playfair Display'}} data-aos="zoom-in" data-aos-delay="200">
                Our Promise To All of You
              </h2>
              <div className="font-poppins text-lg text-yellow-500 mb-4" style={{fontFamily: 'Poppins'}} data-aos="fade-down" data-aos-delay="400">
                We don't cut corners—and we don't upsell fluff.
              </div>
              <p className="text-gray-600 leading-relaxed mb-6" style={{fontFamily: 'Poppins'}} data-aos="slide-right" data-aos-delay="600">
                We provide only what we've tested ourselves: a product that works, an install that's clean, and a service experience that respects your time and your project deadlines.
              </p>
              <p className="text-gray-600 leading-relaxed" style={{fontFamily: 'Poppins'}} data-aos="slide-left" data-aos-delay="800">
                From bulk orders to custom installs, <strong style={{fontFamily: 'Poppins'}} data-aos="flip-up" data-aos-delay="1000">we build like you build—right the first time.</strong>
              </p>
            </div>
            <div className="" data-aos="fade-left" data-aos-duration="1200">
              <div className="relative" data-aos="zoom-in-up" data-aos-delay="400">
                <div className="absolute inset-0 bg-yellow-400 rounded-lg transform translate-x-3 translate-y-3" data-aos="flip-left" data-aos-delay="600"></div>
                <img 
                  src={service2} 
                  alt="Our Promise" 
                  className="relative rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg w-full h-[400px] object-cover" 
                  data-aos="zoom-out" 
                  data-aos-delay="800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurPromise
