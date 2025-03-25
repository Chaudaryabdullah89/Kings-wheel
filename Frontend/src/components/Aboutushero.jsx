import React from 'react';
import service2 from '../assets/imagecompressor/service-2-min.jpg';
const Aboutushero = () => {
  return (
   <div>
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
            <h1  style={{fontFamily: 'Playfair Display'}} className=" text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-6">
              About King Wheel Stop
            </h1>
            <p className="font-poppins text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Your trusted partner in professional wheel stop solutions, serving communities with quality and reliability since 2010.
            </p>
          </div>

          {/* displying the stats using the map method*/}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12" data-aos="fade-up" data-aos-delay="200">
            {[
              { number: "1000+", label: "Projects Completed" },
              { number: "50+", label: "Cities Served" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "13+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-karla text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="font-poppins text-sm md:text-base text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/4 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
   </div>
  );
}

export default Aboutushero;
