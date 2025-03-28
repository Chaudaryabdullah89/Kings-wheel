import React from "react";
import Globalhero from "../components/Globalhero";
import service1 from '../assets/imagecompressor/Diff1-min.jpg';
import service2 from '../assets/imagecompressor/service-2-min.jpg';
import service3 from '../assets/imagecompressor/service 3-min.jpg';
import service4 from '../assets/imagecompressor/performance-min.jpeg';

const Services = () => {
  return (
    <div className="">
      <Globalhero
        heading="Reliable Service. Clean Installs. Built to Perform."
        paragraph="We don't just make wheel stops—we deliver complete, professional solutions from manufacturing to install. Whether you're managing a new build, upgrading a parking lot, or placing a bulk order for distribution, King Wheel Stops brings the strength, precision, and service your project demands."
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-16">
        {/* Manufacturing & Supply */}
        <div className="mb-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-xl" data-aos="fade-right">
            <img 
              src={service1}
              alt="Concrete Manufacturing"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>
          
          <div data-aos="fade-left" className="space-y-6">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Manufacturing Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight" style={{fontFamily: 'Playfair Display'}}>
              Built stronger. Delivered cleaner.
            </h2>
            <h3 className="text-2xl font-semibold text-gray-700" style={{fontFamily: 'Poppins'}}>Premium Concrete Wheel Stops</h3>
            <p className="text-gray-600 text-lg leading-relaxed" style={{fontFamily: 'Poppins'}}>
              Engineered with 4000 PSI concrete and #4 rebar reinforcement, our wheel stops feature PVC-lined install holes to prevent cracking and ensure lasting performance in high-traffic environments.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h4 className="font-bold text-gray-900 text-lg mb-4" style={{fontFamily: 'Poppins'}}>Ideal for:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["General contractors", "Property owners", "Maintenance companies", "Commercial developers"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 bg-yellow-100 p-1 rounded-full mr-3">
                      <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700" style={{fontFamily: 'Poppins'}}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-medium transition-colors">
                  Request Bulk Pricing
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Installation */}
        <div className="mb-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-1 md:order-2 relative rounded-3xl overflow-hidden h-[500px] shadow-xl" data-aos="fade-left">
            <img 
              src={service2}
              alt="Installation Process"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>
          
          <div className="order-2 md:order-1 space-y-6" data-aos="fade-right">
            <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Professional Installation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight" style={{fontFamily: 'Playfair Display'}}>
              Expert installation by industry pros
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed" style={{fontFamily: 'Poppins'}}>
              Our certified installation team ensures precise placement and anchoring of every wheel stop, delivering code-compliant results that stand the test of time.
            </p>
            
            <div className="space-y-4">
              {[
                { 
                  title: "Efficient Process", 
                  desc: "Minimal disruption to your operations with fast, clean installations" 
                },
                { 
                  title: "Precision Placement", 
                  desc: "Accurate spacing and alignment to meet all specifications" 
                },
                { 
                  title: "Code Compliance", 
                  desc: "Guaranteed ADA and municipal regulation adherence" 
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-yellow-200 transition-all">
                  <h4 className="font-bold text-blue-900 text-lg mb-2" style={{fontFamily: 'Playfair Display'}}>{item.title}</h4>
                  <p className="text-gray-600" style={{fontFamily: 'Poppins'}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Delivery Services */}
        <div className="mb-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-xl" data-aos="fade-right">
            <img 
              src={service3}
              alt="Delivery Service"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>
          
          <div className="space-y-6" data-aos="fade-left">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Reliable Logistics
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight" style={{fontFamily: 'Playfair Display'}}>
              On-time delivery across DFW
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed" style={{fontFamily: 'Poppins'}}>
              Our fleet ensures your wheel stops arrive when and where you need them, with careful handling from our warehouse to your job site.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-blue-900 mb-3" style={{fontFamily: 'Playfair Display'}}>Service Area</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Dallas Metro
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Fort Worth
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Surrounding Areas
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-3" style={{fontFamily: 'Playfair Display'}}>Capabilities</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      10-200+ units
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Scheduled deliveries
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Careful handling
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consulting Services */}
        <div className="mb-32">
          <div className=" md:text-center mx-2 md:mx-0 max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6" style={{fontFamily: 'Playfair Display'}} >
              Comprehensive Parking Solutions
            </h2>
            <p className="text-xl text-gray-600" style={{fontFamily: 'Poppins'}}>
              Beyond products, we offer expert guidance to optimize your parking infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all hover:shadow-2xl" data-aos="fade-up">
              <div className="h-64 relative">
                <img 
                  src={service4}
                  alt="Site Assessment"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4" style={{fontFamily: 'Playfair Display'}}>Site Assessments</h3>
                  <p className="text-gray-600 mb-6" style={{fontFamily: 'Poppins'}}>
                  Our experts evaluate your space to recommend optimal wheel stop placement, quantities, and layout for maximum functionality
                </p>
                <button  className="text-yellow-400 font-medium flex items-center">
                  Learn more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all hover:shadow-2xl" data-aos="fade-up" data-aos-delay="100">
              <div className="h-64 relative">
                <img 
                  src={service1}
                  alt="Custom Solutions"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4" style={{fontFamily: 'Playfair Display'}}>Custom Layout Design</h3>
                <p className="text-gray-600 mb-6" style={{fontFamily: 'Poppins'}}>
                  We create parking layouts that enhance traffic flow, safety, and space utilization while meeting all regulatory requirements.
                </p>
                <button className="text-yellow-400 font-medium flex items-center">
                  Learn more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bulk Orders */}
        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-12 shadow-inner border border-gray-200" data-aos="fade-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Volume Solutions
              </div>
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6" style={{fontFamily: 'Playfair Display'}} >
                Bulk order specialists for contractors
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl" style={{fontFamily: 'Poppins'}}>
                We provide high-volume concrete wheel stops with contractor-friendly terms, reliable inventory, and flexible delivery options to keep your projects on schedule.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  "Volume discounts",
                  "Palletized for easy handling",
                  "Fast turnaround",
                  "Flexible terms"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-white p-1 rounded-full shadow-sm mr-4">
                      <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium" style={{fontFamily: 'Poppins'}}  >{item}</p>
                  </div>
                ))}
              </div>
              
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
                Request Wholesale Pricing
              </button>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl">
              <img 
                src={service2}
                alt="Bulk Orders"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;