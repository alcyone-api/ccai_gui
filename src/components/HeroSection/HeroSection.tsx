import { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import PromptingInterface from '../PromptingInterface/PromptingInterface';
import PoweredBySection from '../PoweredBySection/PoweredBySection';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showPromptingInterface, setShowPromptingInterface] = useState(false);

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

  const handleGetStartedClick = () => {
    setShowPromptingInterface(true); // Show the PromptingInterface when "Get Started" is clicked
  };

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

      {/* Navbar */}
      <Navbar />

      {/* Conditional Rendering: Hero Content or PromptingInterface */}
      {!showPromptingInterface ? (
        <div className="relative z-40 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-24 md:pb-32">
          <div className="text-center max-w-4xl space-y-8 md:space-y-14">
            <h1 className="font-tomorrow text-4xl sm:text-5xl md:text-7xl font-bold text-gray-100 leading-tight animate-fade-in-up">
              Create the next <br />
              <span className="font-tomorrow bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent"> big thing.</span>
            </h1>
            <p className="font-tomorrow text-lg md:text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
              Dream it. Deploy it. Unleash your creativity with CodeCraft AI, the ultimate team of AI-powered coding agents.
            </p>

            {/* Powered By Section */}
            <PoweredBySection />

            {/* Get Started Button */}
            <div className="animate-fade-in-up delay-300">
              <button
                className="font-tomorrow bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      ) : (
        <PromptingInterface />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HeroSection;