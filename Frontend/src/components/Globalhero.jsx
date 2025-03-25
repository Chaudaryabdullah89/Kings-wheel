import React from 'react'

const Globalhero = ({heading, paragraph}) => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <img 
        src="/src/assets/imagecompressor/hero img-min.jpg" 
        alt="About Us Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>

    {/* Content */}
    <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 w-full">
      <div className="text-center" data-aos="fade-up">
        <h1  style={{fontFamily: 'Playfair Display'}} className=" text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
        {heading}
        </h1>
        <p className="font-poppins text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
        {paragraph}
        </p>
      </div>

    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/4 animate-bounce">
      <div className="w-6 h-10 border-2 border-white rounded-full p-1">
        <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto"></div>
      </div>
    </div>
  </section>
  )
}

export default Globalhero
