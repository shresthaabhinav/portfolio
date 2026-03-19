"use client";
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "./styles.module.css";
import { TextureLoader } from "three";


export default function Cubes() {
    
  return (
    <div className={styles.main}>
      <Canvas camera={{ position: [5, 2, 5], fov: 70 }}>
        {/* Smooth auto-rotation */}
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.5} />

        {/* Lighting for glow & depth */}
        <ambientLight intensity={2} />
        <directionalLight position={[4, 4, 4]} intensity={4} />
        <pointLight position={[0, 2, 0]} intensity={1} />

        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  const mesh = useRef(null);
  const texture_1 = useLoader(TextureLoader, "img/abhi.jpg");
  const texture_2 = useLoader(TextureLoader, "img/abhi.jpg");
  const texture_3 = useLoader(TextureLoader, "img/abhi.jpg");
  const texture_4 = useLoader(TextureLoader, "img/abhi.jpg");
  const texture_5 = useLoader(TextureLoader, "img/abhi.jpg");
  const texture_6 = useLoader(TextureLoader, "img/abhi.jpg");

  useFrame((state, delta) => { if (mesh.current) { mesh.current.rotation.x += delta * 0.25; mesh.current.rotation.y += delta * 0.25; mesh.current.rotation.z += delta * 0.25; } });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[3,3,3]} />

      {/* Materials */}
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </mesh>
  );
}