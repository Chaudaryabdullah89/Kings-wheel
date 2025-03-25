import React from 'react'
import ser3 from '../assets/imagecompressor/s-3.avif'
const ParkingLotServices = () => {
  return (
    <div className='bg-blue-50 py-10'>
      <div className='max-w-7xl mx-auto bg-blue-50'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent' style={{fontFamily : 'Playfair Display'}} data-aos="fade-down">
            We Understand What You're Up Against
            </h1>
            <p className='text-blue-900 text-center w-1/2 pt-4' style={{fontFamily : 'Poppins'}} data-aos="fade-up" data-aos-delay="200">
            Parking lots are one of the first things customers see—and if they're poorly laid out, chipped up, or non-compliant, they send the wrong message.
            </p>
        </div>
        <div className='grid grid-cols-2 mt-10 items-center justify-center'>

        <div className="bg-blue-50 p-8 rounded-xl" data-aos="flip-left">
                <h3 className="text-xl font-bold text-gray-900 mb-6" style={{fontFamily : 'Playfair Display'}} data-aos="zoom-in">Our Professional Solutions Include</h3>
                <div className="space-y-6">
                    <div className="flex items-start" data-aos="fade-right" data-aos-delay="100">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Enhance parking lot safety and structure</h4>
                            <p className="text-gray-600" style={{fontFamily : 'Poppins'}}>Clear vehicle containment reduces risks</p>
                        </div>
                    </div>

                    <div className="flex items-start" data-aos="fade-left" data-aos-delay="200">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Ensure ADA and code compliance</h4>
                            <p className="text-gray-600" style={{fontFamily : 'Poppins'}}>ADA & MUTCD approved configurations</p>
                        </div>
                    </div>

                    <div className="flex items-start" data-aos="zoom-in-up" data-aos-delay="300">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Help prevent accidents and overcrowding</h4>
                            <p className="text-gray-600" style={{fontFamily : 'Poppins'}}>Clear spacing reduces collisions</p>
                        </div>
                    </div>

                    <div className="flex items-start" data-aos="flip-right" data-aos-delay="400">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/>
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Provide a cleaner, sharper final result</h4>
                            <p className="text-gray-600" style={{fontFamily : 'Poppins'}}>Professional appearance that lasts</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-left" data-aos-duration="1000">
                <img src={ser3} className='w-full h-full rounded-xl' alt="parking-lot-services" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ParkingLotServices
