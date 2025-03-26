import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <button 
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}
        className="bg-yellow-500 text-white w-14 h-14 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up text-2xl"></i>
      </button>
    </div>
  );
};

export default LoadingSpinner; 