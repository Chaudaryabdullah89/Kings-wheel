import React from 'react'
import Button from './Button'
const Aboutusexperience = () => {
  return (
    <div>

    <div className='maz-w-7xl mx-auto  my-32 bg-gray-200 py-8 ' >
      <div className= '  mx-5 md:mx-auto  mb-12 mx-auto max-w-7xl' >
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    <span className="block mb-4 text-blue-900 "  style={{fontFamily: 'Play fair '}}>A Product Born</span>
                    <span style={{fontFamily: 'Play fair '}} className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500  text-white px-4 transform -skew-x-12">From Experience</span>
                </h2>
                <p className='text-blue-900 w-1/2 pt-5  ' style={{fontFamily: 'Poppins'}}>We built King Wheel Stops because we were tired of poor quality. Our custom-designed concrete wheel stops are engineered with</p>

      </div>
      <div>
        
      <div className='grid grid-cols-1 mx-5 md:mx-auto max-w-7xl md:grid-cols-2 gap-24 ' >
        <div className='flex flex-col   gap-8'>
            <div>
                  {[
                    {
                        heading: '4000 PSI Strength',
                        paragraph: 'Military-grade concrete mix withstands 4x standard industrial loads',
                        svg :<svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    },
                    {
                        heading: '#4 Rebar Core',
                        paragraph: 'Full-length steel reinforcement prevents shear failure under impacts',
                        svg : <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                    },
                    {
                        heading: 'PVC-Lined Instal',
                        paragraph: 'Precision sleeves eliminate concrete blowout during anchoring',
                      
                    svg: <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/>
                </svg>
                    },
                  
                  ].map((item,index) => (
                    <div key={index} className=' flex flex-col md:flex-row  gap-6 mb-8 bg-white p-4 rounded-lg shadow-md' >
                         <div class=" w-16 h-16 bg-orange-100 rounded-xl items-center justify-center flex text-center ">

  <div className='  '>
                            {item.svg}
                        </div>
                         </div>
                        <div>

                        <h3 className='text-lg font-bold text-blue-900 ' style={{fontFamily: 'Playfair Display'}}>{item.heading}</h3>
                        <p className='text-gray-600'  style={{fontFamily: 'Poppins'}}>{item.paragraph}</p>
                        </div>
                        
                      
                    </div>
                  ) )}
            <div class=" bg-blue-900 p-4 rounded-xl shadow-lg text-white space-y-2 ">
                        <div class="text-sm font-bold italic " style={{fontFamily: 'Poppins'}} >"That means less cracking, easier installs, and a professional finish that holds up over time—just the way contractors need it."</div>
                        <div class="text-xs">Guaranteed</div>
                    </div>
            </div>
        </div>
      <div class="relative group bottom-8 ">
                <div class="absolute -inset-4 rounded-3xl transform -rotate-2 opacity-20"></div>
                <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                         alt="Wheel stop installation detail" 
                         class="w-full h-auto"/>
                  
                    <div class="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg">
                        <div class="text-sm font-bold text-gray-900">Actual Installation</div>
                        <div class="text-xs text-gray-600">Note: Clean anchor points</div>
                    </div>
                  
                </div>
            </div>
      </div>
      </div>
    </div>
      {/* <div className=' max-w-fit mb-10 mx-auto '>


 <div className='p-10 bg-blue-900 text-white rounded-lg justify-center items-center flex flex-col space-y-4 ' >
  <h2 className='text-4xl font-bold text-white ' style={{fontFamily: 'Playfair Display'}}>
  Tired of Compromising on Quality?
  </h2>
  <p className='text-gray-600' style={{fontFamily: 'Poppins'}}>
  Get wheel stops designed by contractors who actually use them
  </p>
  <Button value='Talk To Our crew' />
 </div>
      </div> */}
    </div>
  )
}

export default Aboutusexperience
