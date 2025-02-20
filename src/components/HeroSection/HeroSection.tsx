import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Import CSS for keyframes
import LandingPageExperience from '../LandingPageExperience/LandingPageExperience';
import ccaiLogo from '../../assets/ccai_logo.svg'; // Placeholder logo
import SubscriptionImage from '../../assets/sub_carousel.svg'; // Placeholder image
import MentorImage from '../../assets/mentors_carousel.svg'; // Placeholder image
import DocsImage from '../../assets/docs_carousel.svg'; // Placeholder image

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [fadeInHero, setFadeInHero] = useState(false);

  const carouselItems = [
    {
      title: 'Go Unlimited Today',
      description: 'Get access to all features with our unlimited plan. Upgrade now and experience the future.',
      link: '/account',
      logo: ccaiLogo,
      image: SubscriptionImage,
      buttonText: 'Upgrade Now',
    },
    {
      title: 'Join Our Mentorship Program',
      description: 'Connect with experts and grow your skills in an interactive and supportive community.',
      link: '/users',
      logo: ccaiLogo,
      image: MentorImage,
      buttonText: 'Join Now',
    },
    {
      title: 'Dive Into Our Docs',
      description: 'Learn more about our platform and features with our comprehensive documentation.',
      link: '/docs',
      logo: ccaiLogo,
      image: DocsImage,
      buttonText: 'Explore Docs',
    },
  ];

  useEffect(() => {
    const landingTimeout = setTimeout(() => {
      setShowLanding(false); // Fade out LandingPageExperience
      setFadeInHero(true); // Fade in HeroSection carousel
    }, 5000); // Wait for 5 seconds before starting

    const carouselInterval = setInterval(() => {
      setIsAnimating(true); // Start animation
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
        setIsAnimating(false); // End animation
      }, 750); // Animation duration
    }, 5000); // Auto-switch every 5 seconds

    return () => {
      clearTimeout(landingTimeout);
      clearInterval(carouselInterval);
    };
  }, [carouselItems.length]);

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden mt-8 md:mt-12">
      {/* LandingPageExperience */}
      {showLanding && <LandingPageExperience />}
      <div className="relative z-40 flex flex-col items-center justify-center h-screen">
        {/* HeroSection Carousel */}
        <div
          className={`relative w-[90%] max-w-[1800px] min-h-[400px] md:min-h-[900px] rounded-lg overflow-hidden transition-all duration-500 ${
            isAnimating ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
          } ${fadeInHero ? 'fade-in' : 'opacity-0'}`}
          aria-live="polite"
        >
          {/* Background Image */}
          <img
            src={carouselItems[currentSlide].image}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          {/* Content Container */}
          <div className="relative p-4 md:p-10 flex flex-col justify-center items-center text-center h-full">
            {/* Logo in Top Right */}
            <img
              src={carouselItems[currentSlide].logo}
              alt="Logo"
              className="w-12 h-12 md:w-64 md:h-64 absolute top-2 right-2 md:top-6 md:right-6 animate-rotate-very-slow"
            />
            {/* Transparent Card for Text and Button */}
            <div className="bg-black/60 backdrop-blur-sm p-4 md:p-10 rounded-lg max-w-[90%] md:max-w-[900px]">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-tomorrow font-bold text-textPrimary mb-2 md:mb-6 break-words">
                {carouselItems[currentSlide].title}
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-4 md:mb-10">
                {carouselItems[currentSlide].description}
              </p>
              <a
                href={carouselItems[currentSlide].link}
                className="inline-flex items-center px-6 py-2 md:px-10 md:py-5 bg-gradient-to-r from-accent to-orange-500 text-textPrimary font-tomorrow font-bold rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 animate-glow"
                aria-label={`Learn more about ${carouselItems[currentSlide].title}`}
              >
                {carouselItems[currentSlide].buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;