const Footer = () => {
  const logo1 = 'https://static.cdnlogo.com/logos/d/9/deepseek-icon.svg';
  const logo2 = 'https://static.cdnlogo.com/logos/o/38/openai.svg';
  const logo3 = 'https://static.cdnlogo.com/logos/s/85/solana.svg';
  const logo4 = 'https://static.cdnlogo.com/logos/t/58/tailwind-css.svg';
  const logo5 = 'https://static.cdnlogo.com/logos/r/63/react.svg';

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-primary/50 backdrop-blur-md border-t border-accent/30">
      {/* Logo Section */}
      <div className="flex justify-center items-center pt-4 pb-2 md:pt-6 md:pb-3 border-b border-accent/30">
        {/* Tech Logos */}
        <div className="flex items-center space-x-6 md:space-x-10">
          <a href="https://www.deepseek.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo1}
              alt="DeepSeek Logo"
              className="h-6 w-6 md:h-8 md:w-8 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          <a href="https://openai.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo2}
              alt="OpenAI Logo"
              className="h-6 w-6 md:h-8 md:w-8 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          <a href="https://solana.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo3}
              alt="Solana Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
            <img
              src={logo4}
              alt="Tailwind CSS Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo5}
              alt="React Logo"
              className="h-6 w-6 md:h-8 md:w-8 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="text-center py-2 md:py-3">
        <p className="font-tomorrow text-xs md:text-sm text-textPrimary/80">
          &copy; {new Date().getFullYear()} CodeCraft AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;