'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

interface NeuronConnection {
  start: THREE.Vector3;
  end: THREE.Vector3;
  active: boolean;
}

function NeuralNetwork({ count = 50, hovered }: { count?: number; hovered: boolean }) {
  const linesRef = useRef<THREE.LineSegments>(null);
  const [connections] = useState<NeuronConnection[]>(() => {
    const conns: NeuronConnection[] = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 2 + Math.random() * 0.5;

      const start = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );

      const endTheta = theta + (Math.random() - 0.5) * 0.5;
      const endPhi = phi + (Math.random() - 0.5) * 0.5;
      const endRadius = radius + (Math.random() - 0.5) * 0.3;

      const end = new THREE.Vector3(
        endRadius * Math.sin(endPhi) * Math.cos(endTheta),
        endRadius * Math.sin(endPhi) * Math.sin(endTheta),
        endRadius * Math.cos(endPhi)
      );

      conns.push({ start, end, active: Math.random() > 0.5 });
    }
    return conns;
  });

  const geometry = useMemo(() => {
    const positions: number[] = [];
    const colors: number[] = [];

    connections.forEach((conn) => {
      positions.push(conn.start.x, conn.start.y, conn.start.z);
      positions.push(conn.end.x, conn.end.y, conn.end.z);

      const color = conn.active ? new THREE.Color(0.3, 0.8, 1.0) : new THREE.Color(0.2, 0.4, 0.6);
      colors.push(color.r, color.g, color.b);
      colors.push(color.r, color.g, color.b);
    });

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    return geom;
  }, [connections]);

  useFrame((state) => {
    if (linesRef.current) {
      const colors = geometry.attributes.color.array as Float32Array;

      connections.forEach((conn, i) => {
        if (hovered && Math.random() > 0.95) {
          conn.active = !conn.active;
        }

        const baseIndex = i * 6;
        const targetColor = conn.active ? new THREE.Color(0.4, 0.9, 1.0) : new THREE.Color(0.1, 0.3, 0.5);

        for (let j = 0; j < 2; j++) {
          const colorIndex = baseIndex + j * 3;
          colors[colorIndex] = THREE.MathUtils.lerp(colors[colorIndex], targetColor.r, 0.1);
          colors[colorIndex + 1] = THREE.MathUtils.lerp(colors[colorIndex + 1], targetColor.g, 0.1);
          colors[colorIndex + 2] = THREE.MathUtils.lerp(colors[colorIndex + 2], targetColor.b, 0.1);
        }
      });

      geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial vertexColors transparent opacity={0.6} />
    </lineSegments>
  );
}

function Neurons({ count = 100, hovered }: { count?: number; hovered: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 2 + Math.random() * 0.5;

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      const material = pointsRef.current.material as THREE.PointsMaterial;
      material.size = hovered ? 0.08 : 0.05;
      material.opacity = hovered ? 1.0 : 0.7;
    }
  });

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geom;
  }, [positions]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color="#4affff"
        size={0.05}
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AnimatedBrain() {
  const brainRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }

    if (brainRef.current) {
      const material = brainRef.current.material as any;
      if (material.emissiveIntensity !== undefined) {
        material.emissiveIntensity = hovered ? 0.4 : 0.2;
      }
    }
  });

  const handleClick = (event: any) => {
    event.stopPropagation();
    const point = event.point;

    let region = 'frontal lobe';
    if (point.y > 0.5) region = 'parietal lobe';
    else if (point.y < -0.5) region = 'temporal lobe';
    else if (point.z < 0) region = 'occipital lobe';
    else if (Math.abs(point.x) > 1) region = 'cerebellum';

    setActiveRegion(region);
    console.log('Clicked brain region:', region);
  };

  return (
    <group ref={groupRef}>
      {/* Main Brain */}
      <mesh
        ref={brainRef}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.05 : 1}
      >
        <sphereGeometry args={[2, 128, 128]} />
        <MeshDistortMaterial
          color="#B968E0"
          emissive="#6B46C1"
          emissiveIntensity={0.2}
          roughness={0.4}
          metalness={0.3}
          distort={0.4}
          speed={2}
        />
      </mesh>

      {/* Cerebral Hemispheres Detail */}
      <mesh position={[0, 0, 0]} scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#9B59B6"
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>

      {/* Neural Network */}
      <NeuralNetwork count={80} hovered={hovered} />

      {/* Neurons */}
      <Neurons count={150} hovered={hovered} />

      {/* Outer Glow */}
      <mesh scale={1.08}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color="#4A90E2"
          transparent
          opacity={hovered ? 0.15 : 0.08}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Inner Core Glow */}
      <mesh>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial
          color="#FF6B9D"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export default function BrainHeader() {
  const [clickedRegion, setClickedRegion] = useState<string | null>(null);

  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      {/* 3D Brain Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        className="absolute inset-0"
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ff99cc" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#66ccff" />
        <pointLight position={[10, 0, 0]} intensity={0.8} color="#ff6699" />
        <pointLight position={[-10, 0, 0]} intensity={0.8} color="#66ffcc" />
        <pointLight position={[0, 10, 0]} intensity={0.6} color="#9966ff" />
        <pointLight position={[0, -10, 0]} intensity={0.4} color="#ffcc66" />

        {/* Animated Brain */}
        <AnimatedBrain />

        {/* OrbitControls */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          autoRotate={false}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 pointer-events-none">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          The Neuroscience of a Bucket List
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl drop-shadow-md">
          Getting the most from your brain and life
        </p>
        <a
          href="https://www.amazon.com/dp/B0DJHB1QSN"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Get the Book
        </a>

        {/* Region click feedback */}
        {clickedRegion && (
          <div className="mt-4 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-purple-400/30">
            <p className="text-white text-sm">Brain region: {clickedRegion}</p>
          </div>
        )}
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

      {/* Interaction hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-200/60 text-sm animate-pulse pointer-events-none">
        Drag to rotate • Scroll to zoom • Hover to activate neurons
      </div>
    </div>
  );
}
