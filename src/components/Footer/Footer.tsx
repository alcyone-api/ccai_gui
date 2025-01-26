import React from 'react';

const logo1 = 'https://static.cdnlogo.com/logos/d/9/deepseek-icon.svg';
const logo2 = 'https://static.cdnlogo.com/logos/g/69/github-icon.svg';
const logo3 = 'https://static.cdnlogo.com/logos/o/38/openai.svg';
const logo4 = 'https://static.cdnlogo.com/logos/s/85/solana.svg';
const logo5 = 'https://static.cdnlogo.com/logos/r/63/react.svg';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#201f1e]/50 backdrop-blur-md">
      {/* Logo Section */}
      <div className="flex justify-center items-center space-x-10 md:space-x-14 pt-6 pb-3 border-b border-orange-500/30">
        <a href="https://www.deepseek.com/" target="_blank" rel="noopener noreferrer">
          <img
            src={logo1}
            alt="Logo 1"
            className="h-8 w-8 md:h-10 md:w-10 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img
            src={logo2}
            alt="Logo 2"
            className="h-8 w-8 md:h-10 md:w-10 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </a>
        <a href="https://openai.com/" target="_blank" rel="noopener noreferrer">
          <img
            src={logo3}
            alt="Logo 3"
            className="h-8 w-8 md:h-10 md:w-10 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </a>
        <a href="https://solana.com/" target="_blank" rel="noopener noreferrer">
          <img
            src={logo4}
            alt="Logo 4"
            className="h-12 w-12 md:h-14 md:w-14 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </a>
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <img
            src={logo5}
            alt="Logo 5"
            className="h-8 w-8 md:h-10 md:w-10 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      </div>

      {/* Copyright Text */}
      <div className="text-center py-3">
        <p className="font-tomorrow text-sm text-gray-300/80">
          &copy; {new Date().getFullYear()} CodeCraft AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;