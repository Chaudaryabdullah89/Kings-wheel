import React from 'react'
import Globalhero from '../components/Globalhero';
import Next from '../components/Next';

const industries = [
    {
        heading: 'General Contractors & Subcontractors',
        paragraph: 'Our wheel stops are built tough for real jobs—and that means serving the professionals who keep the city moving. We provide dependable service and industry-standard products to',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070'
    },
    {
        heading: 'Property Owners & Site Managers',
        paragraph: 'From apartment complexes to shopping centers, we help maintain clean, functional parking lots with curb appeal and code compliance.',
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096'
    },
    {
        heading: 'Parking Lot Maintenance Companies',
        paragraph: 'Need to replace failing stops? We offer reliable supply, fast delivery, and professional installation on demand.',
        image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2069'
    },
    {
        heading: 'Municipal & City Projects',
        paragraph: 'City lots, public parks, government offices—we ensure consistency and durability on every job.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070'
    },
    {
        heading: 'Developers & Commercial Planners',
        paragraph: 'We are the go-to supplier for ground-up projects. Lets build better from day one.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070'
    },
]

const Industriessurvied = () => {
  return (
    <div>
        <Globalhero
          heading="Industries Served"
          paragraph="Our wheel stops are built tough for real jobs—and that means serving the professionals who keep the city moving. We provide dependable service and industry-standard products to"
          data-aos="fade-up"
        />
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img 
                  src={industry.image} 
                  alt={industry.heading}
                  className="w-full h-48 object-cover"
                  aos="fade-up"
                  data-aos-delay={index * 100}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2" style={{fontFamily: 'Playfair Display'}} aos="fade-left" data-aos-delay={index * 100}>{industry.heading}</h3>
                  <p className="text-gray-600" style={{fontFamily: 'Poppins'}} aos="fade-right" data-aos-delay={index * 100}>{industry.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Next />
    </div>
  )
}

export default Industriessurvied
