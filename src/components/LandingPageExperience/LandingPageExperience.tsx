import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './LandingPageExperience.css'; // Import CSS for fade-out and SVG positioning
import rotatingLogo from '../../assets/ccai_logo_lt.svg'; // Import the rotating logo SVG

const LandingPageExperience: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Initialize THREE.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    camera.position.z = 5;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1); // Black background
    mount.appendChild(renderer.domElement);

    // Supernova Explosion Particles (Implosion Effect)
    const explosionParticleGeometry = new THREE.BufferGeometry();
    const explosionParticleCount = 75000; // More particles for organic feel
    const explosionParticlePositions = new Float32Array(explosionParticleCount * 3);
    const explosionParticleSpeeds = new Float32Array(explosionParticleCount);
    const explosionParticleColors = new Float32Array(explosionParticleCount * 3);

    // Gradient colors for supernova effect
    const gradientColors = [
      new THREE.Color(0xfe8127), // Orange
      new THREE.Color(0xffa64d), // Lighter orange
      new THREE.Color(0xff6600), // Darker orange
      new THREE.Color(0x000000), // Black for depth
    ];

    for (let i = 0; i < explosionParticleCount; i++) {
      // Randomize positions in a sphere
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 10; // Initial radius
      explosionParticlePositions[i * 3] = Math.cos(angle) * radius; // X
      explosionParticlePositions[i * 3 + 1] = Math.sin(angle) * radius; // Y
      explosionParticlePositions[i * 3 + 2] = (Math.random() - 0.5) * radius * 2; // Z

      // Assign random speeds for implosion
      explosionParticleSpeeds[i] = Math.random() * 0.0005 + 0.0001;

      // Randomize colors for gradient effect
      const colorIndex = Math.floor(Math.random() * gradientColors.length);
      const color = gradientColors[colorIndex];
      explosionParticleColors[i * 3] = color.r;
      explosionParticleColors[i * 3 + 1] = color.g;
      explosionParticleColors[i * 3 + 2] = color.b;
    }

    explosionParticleGeometry.setAttribute('position', new THREE.BufferAttribute(explosionParticlePositions, 3));
    explosionParticleGeometry.setAttribute('color', new THREE.BufferAttribute(explosionParticleColors, 3));

    const explosionParticleMaterial = new THREE.PointsMaterial({
      size: 0.02, // Smaller particles for granularity
      vertexColors: true, // Enable vertex coloring
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const explosionParticles = new THREE.Points(explosionParticleGeometry, explosionParticleMaterial);
    scene.add(explosionParticles);

    // Add an intense aura around the logo using a Sprite
    const textureLoader = new THREE.TextureLoader();
    const auraTexture = textureLoader.load('/path/to/glow_texture.png'); // Use a glow texture
    const auraMaterial = new THREE.SpriteMaterial({
      map: auraTexture,
      color: 0xfe8127, // Orange
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.8,
    });
    const auraSprite = new THREE.Sprite(auraMaterial);
    auraSprite.scale.set(2, 2, 1); // Set the size of the aura (increase as needed)
    auraSprite.position.set(0, 0, -1); // Position slightly behind the logo
    scene.add(auraSprite);

    // Add a PointLight for additional glow
    const auraLight = new THREE.PointLight(0xfe8127, 5, 10); // Stronger light
    auraLight.position.set(0, 0, -1); // Position slightly behind the logo
    scene.add(auraLight);

    // New Rotating Logo SVG (Directly in the DOM)
    const rotatingLogoImg = document.createElement('img');
    rotatingLogoImg.src = rotatingLogo; // Use the imported rotating logo SVG
    rotatingLogoImg.className = 'rotating-logo-svg glow'; // Add glow effect
    mount.appendChild(rotatingLogoImg);

    // Handle mobile vs desktop logo size
    const updateLogoSize = () => {
      const isMobile = window.innerWidth < 768;
      rotatingLogoImg.style.width = isMobile ? '50px' : '100px'; // Smaller rotating logo
    };
    updateLogoSize();

    const animate = () => {
      requestAnimationFrame(animate);
      // Supernova Implosion Effect
      const explosionPositions = explosionParticles.geometry.attributes.position.array;
      for (let i = 0; i < explosionParticleCount; i++) {
        const speed = explosionParticleSpeeds[i];
        explosionPositions[i * 3] *= 1 - speed; // Implode toward center on X
        explosionPositions[i * 3 + 1] *= 1 - speed; // Implode toward center on Y
        explosionPositions[i * 3 + 2] *= 1 - speed; // Implode toward center on Z
      }
      explosionParticles.geometry.attributes.position.needsUpdate = true;

      // Render the scene
      renderer.render(scene, camera);
    };
    animate();

    // Handle Window Resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      updateLogoSize(); // Update logo size on resize
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mount) {
        mount.removeChild(renderer.domElement);
        const logo = mount.querySelector('.logo-svg');
        if (logo) mount.removeChild(logo);
        const rotatingLogoImg = mount.querySelector('.rotating-logo-svg');
        if (rotatingLogoImg) mount.removeChild(rotatingLogoImg);
      }
      renderer.dispose();
    };
  }, []);

  // Automatically trigger fade-out
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFading(true); // Trigger the fade-out effect
    }, 3000); // Wait for 3 seconds before starting

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={mountRef}
      className={`landing-experience ${isFading ? 'fade-out' : ''}`}
    />
  );
};

export default LandingPageExperience;