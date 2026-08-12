'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Crystal() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(({ pointer }, delta) => {
    mesh.current.rotation.y += delta * 0.15;
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, pointer.y * 0.2, 0.05);
    mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, -pointer.x * 0.2, 0.05);
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.6, 1]} />
        <MeshDistortMaterial color="#d4a24e" roughness={0.25} metalness={0.85}
          distort={0.25} speed={1.5} wireframe={false} />
      </mesh>
      <mesh scale={1.02}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#e8c87a" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} color="#f5f1e8" />
      <pointLight position={[-4, -2, 2]} intensity={0.6} color="#1b4332" />
      <Crystal />
    </Canvas>
  );
}
