import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import before1 from '../assets/imagecompressor/Diff1-min.jpg'
import before2 from '../assets/imagecompressor/diff2-min.jpg'
const beforeAfterData = [
  {
    id: 1,
    beforeImage: before1,
    afterImage: before2,
  },
  {
    id: 2,
    beforeImage: before1,
    afterImage: before2,
  },
  {
    id: 3,
    beforeImage: before1,
    afterImage: before2,
  },
  {
    id: 4,
    beforeImage: before1,
    afterImage: before2,
  },
  {
    id: 5,
    beforeImage: before1,
    afterImage: before2,
  },
  {
    id: 6,
    beforeImage: before1,
    afterImage: before2,
  },

];

const BeforeAfterSlider = ({heading}) => {
  const [activeSliders, setActiveSliders] = useState({});
  const sliderRefs = useRef({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  const handleMove = (clientX, id) => {
    if (!activeSliders[id]) return;
    
    const container = sliderRefs.current[`container-${id}`];
    const beforeImage = sliderRefs.current[`before-${id}`];
    if (!container || !beforeImage) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    beforeImage.style.width = `${Math.max(0, Math.min(100, percentage))}%`;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      Object.keys(activeSliders).forEach(id => {
        if (activeSliders[id]) handleMove(e.clientX, id);
      });
    };

    const handleTouchMove = (e) => {
      Object.keys(activeSliders).forEach(id => {
        if (activeSliders[id]) handleMove(e.touches[0].clientX, id);
      });
    };
    
    const handleEnd = () => {
      setActiveSliders({});
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [activeSliders]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className='max-w-[1400px] mx-auto px-4 md:px-8 gap-5 lg:px-16 mb-12 lg:text-center' data-aos="fade-down">
          <h1   className='text-4xl lg:text-5xl pb-3 font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent  leading-tight' style={{fontFamily : 'Playfair Display'}}>
      See the Kings Gallery
        </h1>
        <p className='text-blue-900 font-semibold pt-2' data-aos="fade-up" data-aos-delay="200" style={{fontFamily : 'Poppins'}}>
          From custom pour to polished install—this is what quality looks like.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {beforeAfterData.map(({ id, beforeImage, afterImage }) => (
            <div key={id} className="max-w-4xl mx-auto w-full h-1/2" 
              data-aos={id % 2 === 0 ? "flip-left" : "flip-right"}
              data-aos-delay={id * 100}>
              <div 
                ref={el => sliderRefs.current[`container-${id}`] = el}
                className="relative h-[400px] sm:h-[270px] rounded-2xl overflow-hidden shadow-2xl group"
              >
                {/* Before Image */}
                <div
                  ref={el => sliderRefs.current[`before-${id}`] = el}
                  className="absolute top-0 left-0 h-full bg-cover bg-center z-20"
                  style={{
                    width: '50%',
                    backgroundImage: `url(${beforeImage})`
                  }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <span className="absolute top-5 left-5 bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                    Before
                  </span>
                </div>

                {/* After Image */}
                <div 
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${afterImage})`
                  }}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <span className="absolute top-5 right-5 bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                    After
                  </span>
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 left-[50%] h-full w-1 bg-white cursor-col-resize z-30 transform -translate-x-1/2"
                  onMouseDown={() => setActiveSliders(prev => ({ ...prev, [id]: true }))}
                  onTouchStart={() => setActiveSliders(prev => ({ ...prev, [id]: true }))}
                >
                  <div className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg 
                      className="w-6 h-6 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
