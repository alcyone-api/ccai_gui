const largeLogo = 'https://static.cdnlogo.com/logos/d/9/deepseek.svg';
const PoweredBySection = () => {
  return (
    <div className="animate-fade-in-up delay-200">
      {/* Glow Container */}
      <div className="relative bg-gradient-to-br from-primary/90 to-secondary p-6 md:p-8 rounded-2xl shadow-2xl border border-textPrimary/50 hover:border-accent/50 transition-all duration-300 animate-gradient-glow bg-opacity-30">
        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="font-tomorrow text-xl md:text-2xl font-bold text-textPrimary/80">
            powered by
          </span>
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