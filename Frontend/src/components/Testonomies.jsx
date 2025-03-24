import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import t1 from '../assets/T1.avif'
import t2 from '../assets/T2.avif'
import t3 from '../assets/T3.avif'
import t4 from '../assets/T4.avif'
import t5 from '../assets/T5.avif'
import t6 from '../assets/T6.avif'

const testimonials = [
  {
    name: "John Smith",
    role: "Property Manager", 
    company: "Premier Properties",
image : t1,
    content: "King Wheel Stops has transformed our parking lots. Their products are durable, easy to install, and look professional. The customer service is exceptional!"
  },
  {
    name: "Sarah Johnson",
    role: "Construction Manager",
    company: "BuildRight Construction",
    image: t2,
    content: "We've used King Wheel Stops on multiple projects. Their concrete stops are superior quality and the installation process is smooth. Highly recommended!"
  },
  {
    name: "Michael Chen",
    role: "Facility Director",
    company: "Corporate Complex",
    image: t3,
    content: "The durability of King Wheel Stops is impressive. After years of use, they still look as good as new. Their products are a long-term investment worth making."
  },
  {
    name: "David Rodriguez",
    role: "Parking Operations Manager",
    company: "Urban Parking Solutions",
    image: t4,
    content: "The installation team's expertise and attention to detail is unmatched. They completed our large parking lot project ahead of schedule with perfect precision."
  },
  {
    name: "Emily Thompson",
    role: "Commercial Property Owner",
    company: "Thompson Real Estate",
    image: t5,
    content: "King Wheel Stops has been our go-to supplier for years. Their products are consistently high quality and their customer support is outstanding."
  },
  {
    name: "Robert Wilson",
    role: "Project Manager",
    company: "Wilson Construction Co.",
    image: t6,
    content: "The concrete quality and reinforcement in their wheel stops is superior. They withstand heavy traffic and weather conditions without any issues."
  }
];

const Testonomies = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
      anchorPlacement: 'top-bottom'
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" data-aos="fade-left"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" data-aos="fade-right"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" data-aos="zoom-in"></div>
      </div>

      <div className="max-w-7xl py-16 mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by property managers and construction professionals across Texas
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active bg-orange-500',
            bulletClass: 'swiper-pagination-bullet bg-gray-300',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white z-10 rounded-2xl cursor-pointer shadow-xl p-8 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group" data-aos="flip-left" data-aos-delay={index * 100}>
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6" data-aos="fade-right" data-aos-delay={index * 150}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <img
                        className="h-16 w-16 rounded-full object-cover border-4 border-white shadow-lg relative"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="relative" data-aos="zoom-in" data-aos-delay={index * 200}>
                    <svg
                      className="absolute -top-4 -left-4 h-8 w-8 text-orange-400 transform -rotate-12"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700 text-lg leading-relaxed pl-4">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="flex justify-center mt-12 space-x-4" data-aos="fade-up">
         
</div>
    </div>
    </section>
  );
};

export default Testonomies;
