"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function DotField() {
  const ref = useRef<THREE.Points>(null);

  const dots = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <Points ref={ref} positions={dots} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

function AnimatedGrid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.y = ((state.clock.getElapsedTime() * 0.08) % 0.4) - 0.2;
    }
  });

  return (
    <group ref={gridRef} position={[0, -3, 0]}>
      {Array.from({ length: 25 }).map((_, i) => (
        <mesh key={i} position={[i * 0.5 - 6, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.015, 12]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.08} />
        </mesh>
      ))}
      {Array.from({ length: 25 }).map((_, i) => (
        <mesh key={`h-${i}`} position={[0, 0, i * 0.5 - 6]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[12, 0.015]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.08} />
        </mesh>
      ))}
    </group>
  );
}

export default function ContactScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <DotField />
        <AnimatedGrid />
      </Canvas>
    </div>
  );
}