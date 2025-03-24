import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import performance from '../assets/imagecompressor/performance-min.jpeg'

const Reason = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
      anchorPlacement: 'bottom-bottom' // This changes animation trigger point to bottom of viewport
    });
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-24 cd my-32 md:px-8 gap-5 lg:px-16">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h1 
              className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              Engineered to Perform Better
            </h1>
            <div className="flex mt-10 flex-col gap-4 space-y-3">
              <div 
                className="bg-white p-6 flex items-center gap-5 text-black rounded-lg"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="flex items-center gap-2 bg-yellow-500 p-2 rounded-[50%]">
                  <i className="fa-solid fa-check text-white text-1xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">4000 PSI Concrete Strength</h2>
                  <p>Built to withstand heavy commercial traffic and extreme weather conditions</p>
                </div>
              </div>

              <div 
                className="bg-white p-6 flex items-center gap-5 text-black rounded-lg"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="flex items-center gap-2 bg-yellow-500 p-2 rounded-[50%]">
                  <i className="fa-solid fa-check text-white text-1xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">#4 Rebar Core Reinforcement</h2>
                  <p>Vertical and horizontal steel reinforcement for maximum load resistance</p>
                </div>
              </div>

              <div 
                className="bg-white p-6 flex items-center gap-5 text-black rounded-lg"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="flex items-center gap-2 bg-yellow-500 p-2 rounded-[50%]">
                  <i className="fa-solid fa-check text-white text-1xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">PVC-Lined Install Holes</h2>
                  <p>Precision-lined anchor points prevent cracking during installation</p>
                </div>
              </div>
              <div 
                className="bg-blue-900 p-6 text-white rounded-lg italic font-semibold"
                data-aos="flip-up"
                data-aos-delay="400"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p>
                  Whether you're managing large job sites or upgrading existing
                  lots, experience faster installations and lasting results with
                  our contractor-approved solutions.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              className="w-full h-[300px] lg:h-[400px] object-cover transform hover:scale-105 transition duration-700 rounded-lg border-2 border-yellow-500"
              src=  {performance}
              alt=""
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
