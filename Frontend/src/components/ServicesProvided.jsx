import React from 'react'
import image from '../assets/service-1.avif'
import image2 from '../assets/service-2.avif'
import image3 from '../assets/service 3.avif'
const ServicesProvided = () => {
  return (
    <div className='bg-gray-900 py-8' >
      <div className='max-w-7xl my-24 mx-auto px-4 md:px-8 gap-24 lg:px-16'>
        <div className='lg:text-center ml-4 lg:ml-0 mb-16 ' >
            <h2 className='text-4xl lg:text-5xl  lg:mx-auto font-bold lg:text-center mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
            Serving DFW With
            Industrial Strength Solutions            </h2>
            <p className='text-gray-300 font-semibold text-lg'>
            Precision installations for professionals who demand lasting quality and safety            </p>
        </div>
        <div className='grid lg:grid-cols-2 gap-10  '>
            <div  className='bg-cover bg-center h-96 rounded-lg relative overflow-hidden rounded-xl transform hover:scale-[0.98] transition-all cursor-pointer'>
                <img src={image} alt="service-1"  className='w-full item-center center absolute top-0 left-0 h-full object-cover rounded-xl inset-0 hover:scale-105 transition duration-700 ' />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex items-end">
          <div class="text-white">
            <h3 class="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">General Contractors & Subcontractors</h3>
            <p class="text-gray-300 font-semibold text ">Compliant installations for commercial projects</p>
          </div>
        </div>
            </div>
            <div  className='bg-cover bg-center h-96 rounded-lg relative overflow-hidden rounded-xl transform hover:scale-[0.98] transition-all cursor-pointer'>
                <img src='https://kingwheelstop.bloggeroceans.com/wp-content/uploads/2025/03/Car-Stops-TWO.jpeg' alt="service-2" className='w-full item-center center bg-center absolute top-0 left-0 h-full object-cover rounded-lg inset-0 hover:scale-105 transition duration-700 ' />    ``
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex items-end">
          <div class="text-white">
            <h3 class="text-3xl font-bold mb-2 text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent  ">Parking Lot Maintenance Crews
            </h3>
            <p class="text-gray-300 font-semibold text ">Parking solutions for retail & residential complexes</p>
          </div>
        </div>
            </div>
           
        </div>

        <div className=' h-[29rem]  mt-16 relative overflow-hidden rounded-xl transform hover:scale-[0.98] transition-all cursor-pointer' >
       <img src={image3} alt="" className='w-full  h-full  rounded-lg  object-cover  absolute top-0 left-0 overflow-hidden rounded-xl hover:scale-105 transition duration-700 ' />
       <div className='absolute bottom-0 inset-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col flex-end' > 
       <div className='flex flex-col absolute bottom-0 left-0 right-0 p-8 ' >

<h3 className='text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent  ' >
Commercial & Industrial Property Owners
</h3>
<p className='text-gray-300 font-semibold text ' >
    Parking solutions for retail & residential complexes
</p>
<div class="flex gap-4 mt-5 ">
            <div class="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center">
              🏗️
            </div>
            <div class="w-12 h-12 bg-emerald-400 rounded-lg flex items-center justify-center">
              🚧
            </div>
            <div class="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center">
              🛣️
            </div>
          </div>
       </div>
       </div>
        </div>
      <div className="grid md:grid-cols-3 mt-10 gap-12 text-center">
      <div className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
        <div className="text-blue-400 text-5xl mb-6">◬</div>
        <h3 className="text-2xl font-bold text-white mb-4">Clean Geometry</h3>
        <p className="text-gray-300">Precision-engineered layouts for optimal traffic flow</p>
      </div>
      
      <div className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
        <div className="text-emerald-400 text-5xl mb-6">🛡</div>
        <h3 className="text-2xl font-bold text-white mb-4">Safety First</h3>
        <p className="text-gray-300">ADA-compliant installations meeting all regulations</p>
      </div>
      
      <div className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
        <div className="text-purple-400 text-5xl mb-6">⏳</div>
        <h3 className="text-2xl font-bold text-white mb-4">Decade Durability</h3>
        <p className="text-gray-300">Weather-resistant construction built to last</p>
      </div>
    </div>
      </div>
    </div>
  )
}

export default ServicesProvided
