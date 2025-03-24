// caution
// The preloader code is taken from the internet and modified by me 
// I am not the original author of the code




import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Track when all resources are loaded
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        // Dispatch event for AOS initialization
        document.dispatchEvent(new Event('preloaderDone'));
      }, 500);
    };

    // Start progress based on resource loading
    const startProgress = () => {
      const increment = 5;
      const interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + increment;
          return next < 90 ? next : 90; // Cap at 90% until fully loaded
        });
      }, 100);

      return interval;
    };

    const interval = startProgress();

    // Listen for window load event
    window.addEventListener('load', handleLoad);

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Don't render anything once loading is complete
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="w-full max-w-md p-8">
        {/* Logo Container */}
        <div className="flex justify-center mb-8">
          <div className="">
            <img src="https://cdn-icons-png.flaticon.com/512/199/199060.png" alt=""  className='w-16 h-16' />
          </div>
        </div>

        {/* Brand Name */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          King Wheel Stop
        </h2>

        {/* Progress Bar */}
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="text-center text-gray-600 mt-4">
          Loading... {progress}%
        </p>
      </div>
    </div>
  );
};

export default Preloader;