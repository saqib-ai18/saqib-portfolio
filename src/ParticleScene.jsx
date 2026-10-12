import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function HolographicRings() {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

useFrame((state, delta) => {
  if (!ring1.current || !ring2.current || !ring3.current) return;

  const mouseX = state.pointer.x;
  const mouseY = state.pointer.y;

  ring1.current.rotation.x += delta * 0.25;
  ring1.current.rotation.y += delta * 0.35;
  ring1.current.rotation.z = THREE.MathUtils.damp(
    ring1.current.rotation.z,
    mouseX * 0.15,
    3,
    delta
  );

  ring2.current.rotation.y -= delta * 0.3;
  ring2.current.rotation.z += delta * 0.2;
  ring2.current.rotation.x = THREE.MathUtils.damp(
    ring2.current.rotation.x,
    mouseY * 0.15,
    3,
    delta
  );

  ring3.current.rotation.x -= delta * 0.2;
  ring3.current.rotation.z -= delta * 0.25;
});

  return (
    <group>
      <mesh ref={ring1}>
        <torusGeometry args={[2.2, 0.012, 8, 120]} />
        <meshBasicMaterial
          color="#00eaff"
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh ref={ring2}>
        <torusGeometry args={[2.5, 0.009, 8, 120]} />
        <meshBasicMaterial
          color="#9b5cff"
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh ref={ring3}>
        <torusGeometry args={[2.8, 0.007, 8, 120]} />
        <meshBasicMaterial
          color="#65f4ff"
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}
function AINodes() {
  const groupRef = useRef();

  const nodes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 3.1 + Math.random() * 0.4;

      return {
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 2.2,
          Math.sin(angle) * radius,
        ],
        color: i % 2 === 0 ? "#00eaff" : "#9b5cff",
        speed: 0.7 + Math.random() * 0.6,
      };
    });
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial
            color={node.color}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}
function EnergyOrb() {
  const orbRef = useRef();

  useFrame((state) => {
    if (!orbRef.current) return;

    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.06;

    orbRef.current.scale.setScalar(pulse);
    orbRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <mesh ref={orbRef}>
      <icosahedronGeometry args={[0.65, 2]} />
      <meshBasicMaterial
        color="#00eaff"
        wireframe
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

function ParticleSphere() {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const count = 1800;
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 1.8 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      array[i * 3] =
        radius * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] =
        radius * Math.sin(phi) * Math.sin(theta);
      array[i * 3 + 2] = radius * Math.cos(phi);
    }

    return array;
  }, []);

useFrame((state, delta) => {
  if (!pointsRef.current) return;

  // Continuous rotation
  pointsRef.current.rotation.y += delta * 0.18;

  // Smooth mouse-responsive movement
  const targetX = state.pointer.y * 0.3;
  const targetY = state.pointer.x * 0.3;

  pointsRef.current.rotation.x = THREE.MathUtils.damp(
    pointsRef.current.rotation.x,
    targetX,
    3,
    delta
  );

  pointsRef.current.rotation.z = THREE.MathUtils.damp(
    pointsRef.current.rotation.z,
    -targetY,
    3,
    delta
  );

  // Subtle energy pulse
  const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.025;
  pointsRef.current.scale.setScalar(pulse);
});

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
       transparent
       color="#8b7bff"
       size={0.045}
       sizeAttenuation
       depthWrite={false}
       blending={THREE.AdditiveBlending}
/>
    </Points>
  );
}

export default function ParticleScene() {
  return (
    <div className="particle-scene">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />

        <pointLight
          position={[2, 2, 2]}
          intensity={2}
          color="#00eaff"
        />

        <pointLight
          position={[-2, -1, 1]}
          intensity={1.5}
          color="#8b5cf6"
        />

        <ParticleSphere />
        <EnergyOrb />
        <HolographicRings />
        <AINodes />
        </Canvas>
    </div>
  );
}