import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

// CSS Styles (could also be in a separate CSS file)
const styles = `
.bounding {
    width: fit-content;
    overflow: hidden;
    position: relative;
}

/* Zoom Animations */
.boundingZoomIn .boundingelem {
    transform: scale(0);
    opacity: 0;
    visibility: hidden;
}
.boundingZoomOut .boundingelem {
    transform: scale(2);
    opacity: 0;
    visibility: hidden;
}

/* Fade Animations */
.boundingFadeLeft .boundingelem {
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
}
.boundingFadeRight .boundingelem {
    transform: translateX(-100%);
    opacity: 0;
    visibility: hidden;
}
`;

const GsapAnimation = ({ children, animationType }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.boundingelem');
    
    // Reset elements to initial state
    gsap.set(elements, {
      ...getInitialState(animationType),
      visibility: 'visible'
    });

    // Create animation
    gsap.to(elements, {
      ...getAnimationProperties(animationType),
      ease: "power3.out",
      duration: 1,
      stagger: 0.2,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });
    
    return () => {
      // Cleanup animations
      gsap.killTweensOf(elements);
    };
  }, [animationType]);

  const getInitialState = (type) => {
    switch(type) {
      case 'zoomIn':
        return { scale: 0, opacity: 0 };
      case 'zoomOut':
        return { scale: 2, opacity: 0 };
      case 'fadeLeft':
        return { x: 100, opacity: 0 };
      case 'fadeRight':
        return { x: -100, opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  };

  const getAnimationProperties = (type) => {
    switch(type) {
      case 'zoomIn':
      case 'zoomOut':
        return { scale: 1 };
      case 'fadeLeft':
      case 'fadeRight':
        return { x: 0 };
      default:
        return { y: 0 };
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div 
        ref={containerRef} 
        className={`bounding bounding${animationType}`}
      >
        {React.Children.map(children, (child) => (
          <div className="boundingelem">
            {child}
          </div>
        ))}
      </div>
    </>
  );
};

// Usage Example
const Next = () => {
  return (
    <div className="space-y-8 p-8">
      <GsapAnimation animationType="zoomIn">
        <div className="text-2xl font-bold">Zoom In Element 1</div>
        <div className="text-2xl font-bold">Zoom In Element 2</div>
      </GsapAnimation>

      <GsapAnimation animationType="fadeLeft">
        <div className="text-2xl font-bold">Fade Left Element</div>
      </GsapAnimation>

      <GsapAnimation animationType="fadeRight">
        <div className="text-2xl font-bold">Fade Right Element</div>
      </GsapAnimation>

      <GsapAnimation animationType="zoomOut">
        <div className="text-2xl font-bold">Zoom Out Element</div>
      </GsapAnimation>
    </div>
  );
};

export default Next;