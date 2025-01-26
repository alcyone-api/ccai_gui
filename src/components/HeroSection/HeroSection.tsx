import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import PoweredBySection from '../PoweredBySection/PoweredBySection';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        color: `rgba(254, 129, 39, ${Math.random() * 0.3})`, // Use accent color
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
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20 z-0"
        width={typeof window !== 'undefined' ? window.innerWidth : 0}
        height={typeof window !== 'undefined' ? window.innerHeight : 0}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/30 z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0wIDBoNTB2NTBIMHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-40 flex flex-col items-center justify-center px-4 pt-16 mt-24 md:pt-24 pb-24 md:pb-32">
        <div className="text-center max-w-4xl space-y-8 md:space-y-14">
          <h1 className="font-tomorrow text-4xl sm:text-5xl md:text-7xl font-bold text-textPrimary leading-tight animate-fade-in-up">
            Create the next <br />
            <span className="font-tomorrow bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent"> big thing.</span>
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