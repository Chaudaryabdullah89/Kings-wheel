import React, { useState } from 'react';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, Clock, MessageSquare } from 'lucide-react';
import Globalhero from '../components/Globalhero';

const Contact = () => {
  return (
    <div>
   <Globalhero heading=" Lets  Get In Touch" paragraph="whether you need a quote, delivery schedule, or site consultation—King Wheel Stops is ready to move. Use the form below, give us a call, or shoot us an email to get started." />
  <div >
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8" data-aos="fade-right">
          <h2 style={{fontFamily: 'Playfair Display'}} className="text-3xl font-bold text-gray-800">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">214-394-1310</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">info@kingwheelstop.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Location</h3>
                <p className="text-gray-600">123 Business Street, City, State 12345</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Business Hours</h3>
                <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-left">
          <h2 style={{fontFamily: 'Playfair Display'}} className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Project location</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Project location"
                />
              </div>
            </div>
          
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                  <label className="block text-gray-700 font-medium mb-2">Delivery or Pickup</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Delivery or pickup"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div className="max-w-[1400px] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 style={{fontFamily: 'Playfair Display'}} className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
          Find answers to common questions about our products and services
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Do you offer delivery services?</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">Yes, we offer delivery services for all our products within the service area. Additional delivery charges may apply based on location and quantity.</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="300">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">What are your payment terms?</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">We accept various payment methods including credit cards, bank transfers, and cash. Payment terms can be discussed based on project requirements.</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="400">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">How long does installation take?</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">Installation time varies depending on the project scope. Typically, small installations can be completed within a day, while larger projects may take several days.</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="500">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Do you provide warranties?</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">Yes, we provide warranties on our products and installation services. The warranty period varies by product type and will be clearly specified in your contract.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full">
    <div className="max-w-[1400px] mx-auto px-4 pb-16">
      <div className="text-center mb-12">
        <h2 style={{fontFamily: 'Playfair Display'}} className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent" data-aos="fade-up">
          Find Us Frequently
        </h2>
        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
          Visit our location or get in touch with us today
        </p>
      </div>
      
      <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.14965822917!2d-96.87906374776603!3d32.82066527984273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1691997011005!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{border: 0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
 </div>
  );
};

export default Contact;