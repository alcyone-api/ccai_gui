import { useEffect } from 'react';
import LandingExperience from '../components/LandingExperience/LandingExperience';

export default function LandingPage() {
  useEffect(() => {
    // Hide navbar and footer
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    if (navbar && footer) {
      navbar.style.display = 'none';
      footer.style.display = 'none';
    }

    return () => {
      // Restore navbar and footer on unmount
      if (navbar && footer) {
        navbar.style.display = 'block';
        footer.style.display = 'block';
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-primary">
      <LandingExperience />
    </div>
  );
}