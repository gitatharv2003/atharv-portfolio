import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles } from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer, SSAO } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const bladePlacements = [
  [-6.8, -3.3, -2.6, -0.3],
  [-4.9, -3.5, -7.2, 0.22],
  [5.1, -3.45, -6.1, 0.24],
  [6.9, -3.25, -1.3, -0.28],
];

const BattlefieldFloor = () => {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.material.emissiveIntensity = 0.08 + Math.sin(clock.elapsedTime * 0.8) * 0.025;
  });

  return (
    <mesh ref={meshRef} rotation-x={-Math.PI / 2} position={[0, -2.1, -4]} receiveShadow>
      <planeGeometry args={[24, 32, 32, 32]} />
      <meshStandardMaterial
        color="#08090d"
        roughness={0.92}
        metalness={0.08}
        emissive="#2f2605"
        emissiveIntensity={0.08}
        transparent
        opacity={0.58}
      />
    </mesh>
  );
};

const Sword = ({ position, rotation, delay }) => {
  const groupRef = useRef(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime + delay;
    groupRef.current.rotation.y = rotation[1] + Math.sin(t * 0.35) * 0.05;
    groupRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.035;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.08} floatIntensity={0.18}>
      <group ref={groupRef} position={position} rotation={rotation}>
        <mesh castShadow>
          <boxGeometry args={[0.08, 2.6, 0.16]} />
          <meshStandardMaterial
            color="#d7e7ff"
            roughness={0.32}
            metalness={0.9}
            emissive="#16336f"
            emissiveIntensity={0.18}
          />
        </mesh>
        <mesh position={[0, -1.3, 0]} castShadow>
          <boxGeometry args={[0.72, 0.08, 0.2]} />
          <meshStandardMaterial
            color="#facc15"
            roughness={0.26}
            metalness={0.72}
            emissive="#f59e0b"
            emissiveIntensity={0.42}
          />
        </mesh>
        <mesh position={[0, -1.78, 0]} castShadow>
          <boxGeometry args={[0.14, 0.88, 0.14]} />
          <meshStandardMaterial color="#211407" roughness={0.74} metalness={0.18} />
        </mesh>
      </group>
    </Float>
  );
};

const BladeField = () => {
  const groupRef = useRef(null);
  const rotations = useMemo(
    () => bladePlacements.map(([, , , tilt], index) => [tilt, (index - 1.5) * 0.18, tilt * 0.6]),
    []
  );

  useFrame(({ pointer }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.06, 0.035);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.025, 0.035);
  });

  return (
    <group ref={groupRef}>
      {bladePlacements.map(([x, y, z], index) => (
        <Sword
          key={`${x}-${z}`}
          position={[x, y, z]}
          rotation={rotations[index]}
          delay={index * 1.35}
        />
      ))}
    </group>
  );
};

const Scene = () => (
  <>
    <color attach="background" args={["#020203"]} />
    <fog attach="fog" args={["#050507", 10, 30]} />
    <ambientLight intensity={0.32} />
    <directionalLight position={[-4, 8, 6]} intensity={2.8} color="#9dbdff" />
    <pointLight position={[3.8, 1.2, 4]} intensity={32} distance={18} color="#ffb347" />
    <pointLight position={[-5, 2.4, 1]} intensity={18} distance={20} color="#a855f7" />

    <Stars radius={80} depth={45} count={700} factor={3.3} saturation={0.2} fade speed={0.28} />
    <Sparkles count={150} scale={[16, 7, 10]} size={2.2} speed={0.34} color="#facc15" opacity={0.62} />
    <BattlefieldFloor />
    <BladeField />

    <EffectComposer multisampling={0} enableNormalPass>
      <Bloom intensity={0.85} luminanceThreshold={0.18} luminanceSmoothing={0.52} mipmapBlur />
      <SSAO samples={18} radius={0.15} intensity={14} luminanceInfluence={0.55} color="black" />
      <DepthOfField focusDistance={0.02} focalLength={0.033} bokehScale={2.2} height={420} />
    </EffectComposer>
  </>
);

const CinematicBattlefield = () => {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 2.2, 12], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default CinematicBattlefield;
