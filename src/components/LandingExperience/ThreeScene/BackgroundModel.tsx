import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

interface BackgroundModelProps {
  experienceState: 'activating' | 'deactivating';
}

export default function BackgroundModel({ experienceState }: BackgroundModelProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Add subtle rotation animation
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[10, 32, 32]} />
      <meshStandardMaterial
        color={experienceState === 'activating' ? '#ff4081' : '#6200ea'}
        metalness={0.1}
        roughness={0.75}
      />
    </mesh>
  );
}