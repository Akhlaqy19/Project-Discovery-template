import React, {useEffect, useRef} from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import * as THREE from 'three'

// تابعی برای افزودن نویز ساده به رئوس هندسه
function addNoiseToPlane(geometry, amplitude = 1) {
  const position = geometry.attributes.position
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i)
    const y = position.getY(i)
    const z = position.getZ(i)
    // اینجا می‌توان از الگوریتم‌های نویز مثل perlin-noise استفاده کرد
    // فعلاً یک نویز ساده و تصادفی:
    const noise = Math.random() * amplitude
    position.setZ(i, z + noise)
  }
  position.needsUpdate = true
}

export default function WavyPlaneWireframe() {

    const meshRef = useRef();

    useEffect(() => {
    const geometry = meshRef.current.geometry;
    addNoiseToPlane(geometry, 2); // مقدار نویز دلخواه
    }, []);

  return (
    <>
      <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
        {/* ساخت یک plane نسبتاً بزرگ */}
        <planeGeometry args={[50, 50, 100, 100]} />
        <meshBasicMaterial color="#ffffff" wireframe />
      </mesh>
    </>
  );
}

{/* <Canvas
  className="absolute top-0 left-0"
  camera={{ position: [0, 10, 10] }}
  style={{ position: "absolute", top: 0, left: 0 }}
></Canvas> */}