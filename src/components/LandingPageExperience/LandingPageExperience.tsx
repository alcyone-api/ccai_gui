import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To handle navigation
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import newLogo from '../../assets/ccai_logo_long.svg';

interface LandingPageExperienceProps {
  onClose: () => void; // Callback to unmount this component
}

const LandingPageExperience: React.FC<LandingPageExperienceProps> = ({ onClose }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const celestialGroupRef = useRef<THREE.Group | null>(null);
  const newLogoRef = useRef<THREE.Mesh | null>(null);

  const [scrollOpacity, setScrollOpacity] = useState(1); // Scroll-driven fade-out animation
  const [isFading, setIsFading] = useState(false); // Controls fade-to-black animation
  const navigate = useNavigate(); // React Router navigation API

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Initialize THREE.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    camera.position.z = 4;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1); // Black background color
    mount.appendChild(renderer.domElement);

    // Postprocessing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0.2;
    bloomPass.strength = 1.5;
    composer.addPass(bloomPass);

    // Add Decorative Gradient Background
    const gradientTexture = new THREE.TextureLoader().load('path/to/your/gradient-image.jpg'); // Replace as needed
    const gradientMaterial = new THREE.MeshBasicMaterial({ map: gradientTexture, side: THREE.DoubleSide });
    const gradientPlane = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), gradientMaterial);
    gradientPlane.position.z = -10;
    scene.add(gradientPlane);

    // Particle Effects
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Celestial Animation Group
    const celestialGroup = new THREE.Group();
    celestialGroupRef.current = celestialGroup;
    scene.add(celestialGroup);

    const electronCount = 25;
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    for (let i = 0; i < electronCount; i++) {
      const electronGeometry = new THREE.SphereGeometry(0.1, 16, 16);
      const electronMaterial = new THREE.MeshStandardMaterial({
        color: 0xfe8127,
        emissive: 0xfe8127,
      });
      const electron = new THREE.Mesh(electronGeometry, electronMaterial);

      const angle = randomInRange(0, Math.PI * 2);
      const radius = randomInRange(2, 4);
      const speed = randomInRange(0.0001, 0.002);
      const tilt = randomInRange(-Math.PI / 4, Math.PI / 4);
      electron.userData = { angle, radius, speed, tilt };

      celestialGroup.add(electron);
    }

    // Logo Animation
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(newLogo, (logoTexture) => {
      const logoMaterial = new THREE.MeshBasicMaterial({
        map: logoTexture,
        transparent: true,
        alphaMap: logoTexture,
      });
      const aspectRatio = logoTexture.image.width / logoTexture.image.height;
      const logoGeometry = new THREE.PlaneGeometry(5, 5 / aspectRatio);
      const newLogoMesh = new THREE.Mesh(logoGeometry, logoMaterial);

      newLogoMesh.position.set(0, 1, 1);
      scene.add(newLogoMesh);
      newLogoRef.current = newLogoMesh;
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (celestialGroupRef.current) {
        celestialGroupRef.current.children.forEach((child) => {
          if (child instanceof THREE.Mesh) {
            const { angle, radius, speed, tilt } = child.userData;
            child.userData.angle += speed;
            child.position.set(
              radius * Math.cos(angle),
              radius * Math.sin(angle) * Math.sin(tilt),
              radius * Math.sin(angle)
            );
          }
        });
      }

      if (newLogoRef.current) {
        const time = performance.now() / 1000;
        newLogoRef.current.position.y = 0 + Math.sin(time) * 0.5;
      }

      composer.render();
    };
    animate();

    // Handle Window Resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      composer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    const handleScrollOpacity = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      const opacity = Math.max(1 - scrollY / maxScroll, 0);
      setScrollOpacity(opacity);
    };
    window.addEventListener('scroll', handleScrollOpacity);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScrollOpacity);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      composer.dispose();
    };
  }, []);

  // Automatically trigger fade-to-black and redirect after animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFading(true); // Trigger the fade-to-black effect
      setTimeout(() => {
        navigate('/home'); // Redirect to /home
        onClose(); // Tell the parent to unmount this component
      }, 1000); // Allow 1 second for the fade animation
    }, 5000); // Wait for 5 seconds before starting

    return () => clearTimeout(timeout);
  }, [navigate, onClose]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 100,
        backgroundColor: isFading ? 'black' : 'transparent', // Fade to black smoothly
        opacity: isFading ? 1 : scrollOpacity, // Adjust fading
        pointerEvents: scrollOpacity === 0 ? 'none' : 'auto',
        transition: 'opacity 0.5s ease-in-out, background-color 1s ease-in-out',
      }}
    />
  );
};

export default LandingPageExperience;