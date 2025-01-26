const largeLogo = 'https://static.cdnlogo.com/logos/d/9/deepseek.svg';

const PoweredBySection = () => {
  return (
    <div className="animate-fade-in-up delay-200">
      {/* Glow Container */}
      <div className="relative bg-gradient-to-br from-[#1e1e1e] to-[#2c2c2c] p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 animate-gradient-glow">
        {/* "Powered By" Text and Logo */}
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* "Powered By" Text */}
          <span className="font-tomorrow text-xl md:text-2xl font-bold text-gray-300">
            powered by
          </span>

          {/* Logo with Zoom and Hover Animation */}
          <div className="animate-zoom-in-out hover:animate-float">
            <a href="https://www.deepseek.com/" target="_blank" rel="noopener noreferrer">
              <img src={largeLogo} alt="Large Logo" className="h-16 md:h-20 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoweredBySection;