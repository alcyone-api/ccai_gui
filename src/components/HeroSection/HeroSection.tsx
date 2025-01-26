import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons
import ccaiLogo from '../../assets/ccai_logo.svg'; // Adjust the path to your logo

const logo1 = 'https://static.cdnlogo.com/logos/d/9/deepseek-icon.svg';
const logo2 = 'https://static.cdnlogo.com/logos/g/69/github-icon.svg';
const logo3 = 'https://static.cdnlogo.com/logos/o/38/openai.svg';
const logo4 = 'https://static.cdnlogo.com/logos/s/85/solana.svg';
const logo5 = 'https://static.cdnlogo.com/logos/r/63/react.svg';
const largeLogo = 'https://static.cdnlogo.com/logos/d/9/deepseek.svg';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(254, 129, 39, ${Math.random() * 0.3})`,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#201f1e] overflow-hidden">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20 z-0"
        width={typeof window !== 'undefined' ? window.innerWidth : 0}
        height={typeof window !== 'undefined' ? window.innerHeight : 0}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#201f1e]/90 to-[#201f1e]/30 z-10" />

      {/* Navigation Bar */}
      <nav className="relative z-50 px-6 py-4 backdrop-blur-md border-b border-orange-500/30 bg-gradient-to-r from-orange-500/50 to-[#201f1e]/50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <img src={ccaiLogo} alt="CodeCraft AI Logo" className="h-8 md:h-12 w-auto mr-4" />
            <div className="text-xl md:text-2xl font-tomorrow font-bold text-gray-100">CodeCraft AI</div>
          </div>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-orange-500 font-tomorrow hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20">
              Connect Wallet
            </button>
            <button
              className="bg-gray-800 font-tomorrow hover:bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30 border border-orange-500 hover:shadow-orange-500/50 hover:border-orange-400"
              style={{ boxShadow: '0 0 8px 2px rgba(249, 115, 22, 0.5)' }}
            >
              GitHub Login
            </button>
          </div>
        </div>

        {/* Mobile Menu (Collapsible) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <button className="w-full bg-orange-500 font-tomorrow hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20">
              Connect Wallet
            </button>
            <button
              className="w-full bg-gray-800 font-tomorrow hover:bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30 border border-orange-500 hover:shadow-orange-500/50 hover:border-orange-400"
              style={{ boxShadow: '0 0 8px 2px rgba(249, 115, 22, 0.5)' }}
            >
              GitHub Login
            </button>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-40 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="text-center max-w-4xl space-y-8 md:space-y-14">
          <h1 className="font-tomorrow text-4xl sm:text-5xl md:text-7xl font-bold text-gray-100 leading-tight animate-fade-in-up">
            Create the next <br />
            <span className="font-tomorrow bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent"> big thing.</span>
          </h1>
          <p className="font-tomorrow text-lg md:text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Dream it. Deploy it. Unleash your creativity with CodeCraft AI, the ultimate team of AI-powered coding agents.
          </p>

          {/* "Powered By" Section */}
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

          {/* Get Started Button */}
          <div className="animate-fade-in-up delay-300">
            <button className="font-tomorrow bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20">
              Get Started
            </button>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center space-x-6 md:space-x-8 md:mt-16 animate-fade-in-up delay-400" style={{ marginTop: '50px' }}>
            <a href="https://www.deepseek.com/" target="_blank" rel="noopener noreferrer">
              <img src={logo1} alt="Logo 1" className="h-6 md:h-8 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img src={logo2} alt="Logo 2" className="h-6 md:h-8 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a href="https://openai.com/" target="_blank" rel="noopener noreferrer">
              <img src={logo3} alt="Logo 3" className="h-6 md:h-8 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a href="https://solana.com/" target="_blank" rel="noopener noreferrer">
              <img src={logo4} alt="Logo 4" className="h-6 md:h-8 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
              <img src={logo5} alt="Logo 5" className="h-6 md:h-8 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0wIDBoNTB2NTBIMHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
      </div>

      {/* Copyright Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 text-center py-6 bg-[#201f1e]/50 backdrop-blur-md border-t border-orange-500/30">
        <p className="font-tomorrow text-sm text-gray-300/80">
          &copy; {new Date().getFullYear()} CodeCraft AI. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HeroSection;