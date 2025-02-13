import { useEffect, useState } from 'react';

export default function OverlayEffects({ isActive }: { isActive: boolean }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (isActive) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  }, [isActive]);

  return (
    <div
      className="fixed inset-0 bg-primary/50 backdrop-blur-sm transition-opacity duration-500"
      style={{ opacity }}
    />
  );
}