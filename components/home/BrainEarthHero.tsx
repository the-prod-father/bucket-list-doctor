'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    THREE: typeof import('three');
  }
}

export default function BrainEarthHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const sceneRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const brainMeshRef = useRef<any>(null);
  const wireframeMeshRef = useRef<any>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Load Three.js from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;

    script.onload = () => {
      initThreeScene();
    };

    script.onerror = () => {
      console.error('Failed to load Three.js');
    };

    document.head.appendChild(script);

    return () => {
      cleanup();
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const createWorldMapTexture = (): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    if (!ctx) return canvas;

    // Ocean blue background
    ctx.fillStyle = '#1a4d8f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Define continents
    const continents = [
      { color: '#e07a3e', x: 300, y: 300, w: 400, h: 350 },   // North America
      { color: '#6b9b37', x: 450, y: 600, w: 250, h: 400 },   // South America
      { color: '#e07a3e', x: 950, y: 450, w: 350, h: 450 },   // Africa
      { color: '#6b9b37', x: 950, y: 250, w: 200, h: 200 },   // Europe
      { color: '#e07a3e', x: 1200, y: 250, w: 600, h: 400 },  // Asia
      { color: '#6b9b37', x: 1550, y: 650, w: 250, h: 200 },  // Australia
    ];

    continents.forEach(({ color, x, y, w, h }) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w, h);
    });

    return canvas;
  };

  const createBrainGeometry = (THREE: any): any => {
    const geometry = new THREE.SphereGeometry(2, 128, 128);
    const positions = geometry.attributes.position.array;

    // Deform the sphere to create realistic brain shape
    for (let i = 0; i < positions.length; i += 3) {
      let x = positions[i];
      let y = positions[i + 1];
      let z = positions[i + 2];

      // Get normalized direction
      const length = Math.sqrt(x * x + y * y + z * z);
      const nx = x / length;
      const ny = y / length;
      const nz = z / length;

      // Base brain shape - make it more oval
      let scaleX = 1.2;   // Much wider for temporal lobes
      let scaleY = 0.82;  // More flattened
      let scaleZ = 1.15;  // More elongated front-to-back

      // DEEP longitudinal fissure (hemisphere separation)
      // This creates the characteristic split down the middle
      const fissureDepth = Math.abs(nx) < 0.2 ? Math.pow(1 - Math.abs(nx) / 0.2, 2) * 0.5 : 0;
      scaleY *= (1 - fissureDepth);

      // Prominent TEMPORAL LOBES (bulge out on sides, lower half)
      const temporalLobeFactor = Math.abs(nx) > 0.4 && ny < 0.2 && ny > -0.6 && Math.abs(nz) < 0.5
        ? 1 + (Math.abs(nx) - 0.4) * 0.8
        : 1;
      scaleX *= temporalLobeFactor;

      // FRONTAL LOBE (front bulge)
      const frontalLobeFactor = nz > 0.3 && ny > -0.3
        ? 1 + Math.pow((nz - 0.3) / 0.7, 1.5) * 0.5
        : 1;
      scaleZ *= frontalLobeFactor;

      // OCCIPITAL LOBE (back bulge)
      const occipitalLobeFactor = nz < -0.3 && ny > -0.2
        ? 1 + Math.pow((-nz - 0.3) / 0.7, 1.2) * 0.4
        : 1;
      scaleZ *= occipitalLobeFactor;

      // CEREBELLUM (bottom back bulge)
      const cerebellumFactor = ny < -0.3 && nz < 0.2 && nz > -0.5
        ? 1 + Math.pow((-ny - 0.3) / 0.7, 1.5) * 0.35
        : 1;
      scaleY *= cerebellumFactor;
      scaleZ *= cerebellumFactor * 0.9;

      // PARIETAL LOBE (top-back, slightly flattened)
      const parietalFlatten = ny > 0.5 && nz < 0.2
        ? 0.9
        : 1;
      scaleY *= parietalFlatten;

      // Apply all deformations
      x *= scaleX;
      y *= scaleY;
      z *= scaleZ;

      // SULCI AND GYRI (brain wrinkles)
      // More organic, following contours
      const angle = Math.atan2(ny, nx);

      // Major sulci - deep grooves
      const centralSulcus = Math.sin(angle * 2 + nz * 5) * 0.15;
      const lateralSulcus = Math.abs(nx) > 0.3 && ny < 0 ? Math.sin(nz * 8) * 0.12 : 0;

      // Medium gyri - brain folds
      const gyri1 = Math.sin(x * 6 + z * 4) * Math.cos(y * 5) * 0.1;
      const gyri2 = Math.sin(angle * 8) * Math.cos(nz * 10) * 0.08;

      // Fine wrinkles
      const fineWrinkles = Math.sin(x * 12 + y * 10 + z * 11) * 0.05;
      const microWrinkles = Math.sin(x * 20 + y * 18 + z * 22) * 0.025;

      // Combine wrinkles (avoid wrinkles in deep fissure)
      const wrinkleMask = 1 - fissureDepth * 0.7;
      const totalNoise = (centralSulcus + lateralSulcus + gyri1 + gyri2 + fineWrinkles + microWrinkles) * wrinkleMask;

      // Apply wrinkles radially
      const newLength = Math.sqrt(x * x + y * y + z * z);
      if (newLength > 0) {
        const normalizedX = x / newLength;
        const normalizedY = y / newLength;
        const normalizedZ = z / newLength;

        positions[i] = x + normalizedX * totalNoise;
        positions[i + 1] = y + normalizedY * totalNoise;
        positions[i + 2] = z + normalizedZ * totalNoise;
      }
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    return geometry;
  };

  const initThreeScene = () => {
    if (!containerRef.current || !window.THREE) return;

    const THREE = window.THREE;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 6;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create world map texture
    const textureCanvas = createWorldMapTexture();
    const texture = new THREE.CanvasTexture(textureCanvas);

    // Create brain geometry
    const brainGeometry = createBrainGeometry(THREE);

    // Main brain material
    const brainMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.6,
      metalness: 0.2,
      emissive: new THREE.Color('#1a4d8f'),
      emissiveIntensity: 0.2,
    });

    // Main brain mesh
    const brainMesh = new THREE.Mesh(brainGeometry, brainMaterial);
    scene.add(brainMesh);
    brainMeshRef.current = brainMesh;

    // Wireframe overlay
    const wireframeGeometry = brainGeometry.clone();
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#4a9fff'),
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    wireframeMesh.scale.set(1.01, 1.01, 1.01);
    scene.add(wireframeMesh);
    wireframeMeshRef.current = wireframeMesh;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x4a9fff, 1.5);
    directionalLight1.position.set(10, 10, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xe07a3e, 0.8);
    directionalLight2.position.set(-10, -10, -5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0x6b9b37, 0.5);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      targetRotationRef.current.x = mouseRef.current.y * 0.3;
      targetRotationRef.current.y = mouseRef.current.x * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Auto-rotation
      const rotationSpeed = isHovered ? 0.015 : 0.008;
      brainMesh.rotation.y += rotationSpeed;
      wireframeMesh.rotation.y += rotationSpeed;

      // Mouse parallax with smooth lerp
      scene.rotation.x += (targetRotationRef.current.x - scene.rotation.x) * 0.1;
      scene.rotation.y += (targetRotationRef.current.y - scene.rotation.y) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Store cleanup functions
    (container as any)._cleanup = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  };

  const cleanup = () => {
    // Cancel animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Clean up event listeners
    if (containerRef.current && (containerRef.current as any)._cleanup) {
      (containerRef.current as any)._cleanup();
    }

    // Dispose Three.js objects
    if (brainMeshRef.current) {
      brainMeshRef.current.geometry?.dispose();
      brainMeshRef.current.material?.dispose();
    }

    if (wireframeMeshRef.current) {
      wireframeMeshRef.current.geometry?.dispose();
      wireframeMeshRef.current.material?.dispose();
    }

    if (rendererRef.current) {
      rendererRef.current.dispose();
      if (containerRef.current && rendererRef.current.domElement) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    }
  };

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(26, 77, 143, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(74, 159, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 159, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Three.js Canvas */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 pointer-events-none">
        <h1 className="mb-6 font-bold text-white leading-tight">
          <span
            style={{
              fontSize: 'clamp(2rem, 8vw, 5rem)',
              display: 'block',
            }}
          >
            The Neuroscience of a
          </span>
          <span
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 6rem)',
              display: 'block',
              marginTop: '-0.5rem',
            }}
          >
            Bucket List
          </span>
        </h1>

        <p
          className="text-white/90 mb-8 max-w-2xl"
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          }}
        >
          Getting the most from your brain and life
        </p>

        <a
          href="https://www.amazon.com/dp/B0DJHB1QSN"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          }}
        >
          Get the Book
        </a>
      </div>

      {/* Interaction hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-200/50 text-sm pointer-events-none">
        Move your mouse to explore • Hover to speed up rotation
      </div>
    </div>
  );
}
