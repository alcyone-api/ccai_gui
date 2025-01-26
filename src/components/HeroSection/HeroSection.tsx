import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import PoweredBySection from '../PoweredBySection/PoweredBySection';
import Background from '../Background/Background'; // Import the Background component

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Component */}
      <Background />

      {/* Hero Content */}
      <div className="relative z-40 flex flex-col items-center justify-center px-4 pt-16 mt-24 md:pt-24 pb-24 md:pb-32">
        <div className="text-center max-w-4xl space-y-12 md:space-y-14">
        <h1 className="font-tomorrow text-4xl sm:text-5xl md:text-7xl font-bold text-gray-100 leading-tight animate-fade-in-up">
            Create the next <br />
            <span className="font-tomorrow bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent"> big thing.</span>
        </h1>
          <p className="font-tomorrow text-lg md:text-xl text-textPrimary/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Dream it. Deploy it. Unleash your creativity with CodeCraft AI, the ultimate team of AI-powered coding agents.
          </p>

          {/* Powered By Section */}
          <PoweredBySection />

          {/* Get Started Button */}
          <div className="animate-fade-in-up delay-300">
            <Link
              to="/prompt"
              className="font-tomorrow bg-accent hover:bg-accent/90 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HeroSection;