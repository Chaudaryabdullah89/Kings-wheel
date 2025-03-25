export const shouldDisableAOS = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768;
  }
  return false;
};

// Usage in components:
const isAOSDisabled = shouldDisableAOS();

// Then in your JSX:
<div data-aos={isAOSDisabled ? '' : 'fade-up'}>
  {/* content */}
</div>

const Component = () => {
  const isAOSDisabled = shouldDisableAOS();
  
  return (
    <div className="overflow-x-hidden">
      <div 
        className="w-full max-w-full relative"
        data-aos={isAOSDisabled ? '' : 'fade-up'}
        data-aos-duration="800"
      >
        {/* Your content */}
      </div>
    </div>
  );
}; 