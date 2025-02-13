import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import BackgroundModel from './BackgroundModel';
import Lights from './Lights';

interface ThreeSceneProps {
  experienceState: any;
}

export default function ThreeScene({ experienceState }: ThreeSceneProps) {
  return (
    <Canvas className="fixed top-0 left-0 w-full h-full">
      <Suspense fallback={null}>
        <Lights />
        <BackgroundModel experienceState={experienceState} />
      </Suspense>
    </Canvas>
  );
}