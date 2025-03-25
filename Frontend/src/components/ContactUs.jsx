import React, { useState } from 'react';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, Clock, MessageSquare } from 'lucide-react';

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email Us",
      details: "info@yourcompany.com",
      bgColor: "bg-gradient-to-r from-purple-500 to-purple-600"
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Working Hours",
      details: "Mon - Fri: 9AM - 6PM",
      bgColor: "bg-gradient-to-r from-orange-500 to-orange-600"
    }
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive parking lot solutions including layout design, safety improvements, ADA compliance updates, and structural enhancements."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope, but typically range from 2-5 days for standard installations to 2-3 weeks for larger projects."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we provide free, no-obligation estimates for all projects. Our team will assess your needs and provide detailed pricing."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-900 py-24">
        <div className="absolute inset-0 bg-[url('/path-to-pattern.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about our services? We're here to help you make the right choice.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-16">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`${info.bgColor} rounded-xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/20 p-4 rounded-full mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-white/90">{info.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form and FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-100 rounded-full">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                  placeholder="Email Address"
                />
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                  placeholder="Your Message"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-xl overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                      <span className="font-medium">{faq.question}</span>
                      {activeIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {activeIndex === index && (
                      <div className="px-6 py-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-16 h-[400px] relative">
          <div className="absolute inset-0 bg-gray-200">
            {/* Replace with your actual map component or iframe */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map Component Goes Here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;