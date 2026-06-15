"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={3.1}
      position={[0, -0.4, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

export default function EarthCanvas() {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.3} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <pointLight
          position={[-5, -5, -5]}
          intensity={1.5}
        />

        <OrbitControls
          autoRotate
          autoRotateSpeed={2.1}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  );
}