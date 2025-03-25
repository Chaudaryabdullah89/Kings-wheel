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
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + increment;
        });
      }, 100);

      return interval;
    };

    const interval = startProgress();

    // Listen for window load event
    window.addEventListener('load', handleLoad);

    // Fallback to ensure preloader doesn't get stuck
    const fallbackTimer = setTimeout(() => {
      handleLoad();
    }, 5000); // Force complete after 5 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 text-center">
        {/* Logo Container with subtle animation */}
        <div className="flex justify-center mb-10">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/199/199060.png" 
              alt=""  
              className="w-24 h-24 animate-bounce"
              style={{ animationDuration: '2s' }}
            />
          </div>
        </div>

        {/* Brand Name with gradient */}
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
          King Wheel Stop
        </h2>

        {/* Clean Progress Bar */}
        <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden mx-auto max-w-sm">
          <div 
            className="absolute top-0 left-0 h-full bg-yellow-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Simple Loading Text */}
        <p className="text-gray-600 mt-4 text-lg font-medium">
          Loading... {progress}%
        </p>
      </div>
    </div>
  );
};

export default Preloader;