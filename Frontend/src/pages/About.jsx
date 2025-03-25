import React from 'react';
import Aboutushero from '../components/Aboutushero';
import Aboutusexperience from '../components/Aboutusexperience';
import OurStory from '../components/OurStory';
import ParkingLotServices from '../components/ParkingLotServices';
import Next from '../components/Next';
import OurPromise from '../components/OurPromise';
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Aboutushero />
      <Aboutusexperience />
      <OurStory />
      <ParkingLotServices />
      <OurPromise />

      <Next />
    </div>
  );
};

export default About;
