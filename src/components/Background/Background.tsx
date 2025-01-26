import { useEffect, useRef } from 'react';

const Background = () => {
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
        color: `rgba(0, 123, 255, ${Math.random() * 0.3})`, // Dark blue glowing color
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
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
        width={typeof window !== 'undefined' ? window.innerWidth : 0}
        height={typeof window !== 'undefined' ? window.innerHeight : 0}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/30 z-0" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)]">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0idHJhbnNwYXJlbnQiLz48ZyBzdHJva2U9IiNmZTgxMjciIHN0cm9rZS13aWR0aD0iMSI+PHBhdGggZD0iTTAgMGg1MDB2NTAwSDB6Ii8+PHBhdGggZD0iTTAgMGg1MDB2NTAwSDB6Ii8+PC9nPjwvc3ZnPg==')] animate-rotate-very-slow animate-pulse-orange-bright"
          style={{
            backgroundSize: '50px 50px', // Grid spacing
            backgroundRepeat: 'repeat', // Seamless tiling
            width: '200%', // Make the grid larger than the screen
            height: '200%',
            left: '-50%', // Center the grid
            top: '-50%',
            opacity: 0.8, // Increased opacity for brighter grid
          }}
        ></div>
      </div>
    </div>
  );
};

export default Background;