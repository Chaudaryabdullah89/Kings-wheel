import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAOS = () => {
  AOS.init({
    // Optimize performance with these settings
    once: true, // Only animate once
    mirror: false, // No mirror animations
    disable: 'mobile', // Disable on mobile for better performance
    startEvent: 'DOMContentLoaded',
    disableMutationObserver: true, // Disable mutation observer for better performance
    throttleDelay: 99, // Increase throttle delay
    offset: 120,
    duration: 800 // Reduce animation duration
  });
}; 