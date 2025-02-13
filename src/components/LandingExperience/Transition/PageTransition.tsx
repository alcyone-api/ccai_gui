import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PageTransitionProps {
  userResponses: Record<string, any>; // Define the type for userResponses
}

export default function PageTransition({ userResponses }: PageTransitionProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // Redirect to main app
    }, 3000); // 3-second delay for transition animation

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
      <p className="text-white text-2xl">Taking you to the main app...</p>
    </div>
  );
}