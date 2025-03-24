import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const WhyChoseUs = () => {
  return (
    <>
    <div>
  
<section className="py-32 poppin  mb-0 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-24 items-center">

           
            <div className="relative">
                <div className="gradient-border rounded-xl overflow-hidden">
                    <img src='https://kingwheelstop.bloggeroceans.com/wp-content/uploads/2025/03/empty-parking-spaces-blocks-white-260nw-1801178686-e1742560693633.webp' 
                         alt="Durable Installation" 
                         className="w-full h-[300px] lg:h-[500px] object-cover transform hover:scale-105 transition duration-700"></img>
                </div>
                <div className="absolute bottom-0 left-0 bg-black/60 p-4 text-yellow-400 text-sm">
                    Actual installation by King Wheel Stops team
                </div>
            </div>

            <div className="space-y-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    The Contractor's Choice
                </h2>
                
                <div className="space-y-6 text-lg">
                    <p className="border-l-4 border-yellow-400 pl-4 font-family-{poppins}">
                        "When you're responsible for a parking lot—whether it's a new build or a maintenance job—you need materials that hold up under pressure."
                    </p>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-gray-800 p-6 rounded-lg">
                            <p>
                                At King Wheel Stops, we deliver signature-grade concrete wheel stops designed to outperform what's currently on the market. These aren't flimsy, mass-produced blocks—they're engineered solutions, built from our experience in the field.
                            </p>
                        </div>
                    </div>

                    <p className="italic text-gray-300">
                        "We don't just make them—we had to install them too. That's how we learned what works, what doesn't, and what contractors actually need."
                    </p>
                </div>
<Link to="/contact" className='mt-5 relative top-5'>
           <Button value={'Get Contractor Pricing'} />
</Link>

            </div>
        </div>
    </div>
</section>

    </div>
    </>
  )
}

export default WhyChoseUs
