import React, { useState, useEffect } from 'react';
import LandingPageExperience from '../LandingPageExperience/LandingPageExperience'; // Ensure the path is correct

const HeroSection: React.FC = () => {
  const [showLanding, setShowLanding] = useState(true); // State to control LandingPage mounting
  const [fadeInHero, setFadeInHero] = useState(false); // State to control HeroSection fade-in

  const handleCloseLanding = () => {
    setShowLanding(false); // Unmount LandingPageExperience when it finishes
    setTimeout(() => {
      setFadeInHero(true); // Start fading in HeroSection after a slight delay
    }, 500); // Delay hero fade-in slightly to align with LandingPage fade-out
  };

  useEffect(() => {
    if (!showLanding) {
      setFadeInHero(true); // Ensure HeroSection fades in if LandingPage is already hiding
    }
  }, [showLanding]);

  return (
    <div className="z-30 bg-primary min-h-screen bg-primary flex flex-col justify-center items-center relative">

      {/* Main Hero Content */}
      <div>
        <h1 className="text-6xl font-bold text-white">Welcome to Our Website</h1>
        <p className="text-lg text-gray-300 mt-4">
          Discover amazing content and explore our features.
        </p>

        {/* Example Call-to-Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
            onClick={() => console.log('Learn More Clicked')}
          >
            Learn More
          </button>
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-md shadow hover:bg-gray-800"
            onClick={() => console.log('Get Started Clicked')}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;