import React from 'react';

const About = () => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
              data-aos="fade-down"
            >
              About Us
            </h1>
            <p 
              className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Your Trusted Parking Partner Since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                King Wheel Parking was established in 2010 with a simple mission: to provide safe, 
                reliable, and convenient parking solutions for our community. What started as a small 
                local parking service has grown into a trusted name in the parking industry.
              </p>
              <p className="text-gray-600">
                We believe in providing exceptional service and maintaining the highest standards of 
                security and customer satisfaction. Our team of dedicated professionals works around 
                the clock to ensure your vehicle is in safe hands.
              </p>
            </div>
            <div 
              className="bg-gray-50 p-8 rounded-lg"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-600">24/7 Security Surveillance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-600">Professional Staff</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-600">Competitive Pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-600">Convenient Location</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
