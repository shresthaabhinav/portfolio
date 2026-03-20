"use client";
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "./styles.module.css";
import { TextureLoader } from "three";

export default function Cubes() {
  return (
    <div className={styles.main}>
      <Canvas camera={{ position: [6, 2, 1], fov: 60 }}>
        <OrbitControls enablePan={false} enableZoom={false} />
        {/* No lights needed — meshBasicMaterial is unlit */}
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  const mesh = useRef(null);
  const texture_1 = useLoader(TextureLoader, "img/shres.jpg");
  const texture_2 = useLoader(TextureLoader, "img/shres.jpg");
  const texture_3 = useLoader(TextureLoader, "img/shres.jpg");
  const texture_4 = useLoader(TextureLoader, "img/shres.jpg");
  const texture_5 = useLoader(TextureLoader, "img/shres.jpg");
  const texture_6 = useLoader(TextureLoader, "img/shres.jpg");

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial map={texture_1} attach="material-0" />
      <meshBasicMaterial map={texture_2} attach="material-1" />
      <meshBasicMaterial map={texture_3} attach="material-2" />
      <meshBasicMaterial map={texture_4} attach="material-3" />
      <meshBasicMaterial map={texture_5} attach="material-4" />
      <meshBasicMaterial map={texture_6} attach="material-5" />
    </mesh>
  );
}