import React from 'react'
import service2 from '../assets/imagecompressor/ourpromise-1.jpg'
const OurPromise = () => {
  return (
    <div className="py-12">
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className=" lg:order-1" data-aos="fade-right">
            <h2 className="font-karla text-4xl lg:text-5xl font-bold text-blue-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
              Our Promise To All of You
            </h2>
            <div className="font-poppins text-lg text-yellow-500 mb-4" style={{fontFamily: 'Poppins'}}>
            We don’t cut corners—and we don’t upsell fluff.
            </div>
            <p className=" text-gray-600 leading-relaxed mb-6" style={{fontFamily: 'Poppins'}}>
            We provide only what we’ve tested ourselves: a product that works, an install that’s clean, and a service experience that respects your time and your project deadlines.            </p>
            
            <p className=" text-gray-600 leading-relaxed" style={{fontFamily: 'Poppins'}}>
            From bulk orders to custom installs, <strong style={{fontFamily: 'Poppins'}}>
                we build like you build—right the first time.     
                </strong>
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

export default OurPromise
