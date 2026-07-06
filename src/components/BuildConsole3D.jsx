import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Grid, Line, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Each panel: [x, y, z, rotationY, accentColor]
const panelPositions = [
  [-1.65, 0.55, -0.25, 0.2, "#facc15"],
  [1.55, 0.45, -0.1, -0.24, "#a78bfa"],
  [-0.82, -0.82, 0.08, -0.1, "#a78bfa"],
  [0.92, -0.74, 0.15, 0.12, "#facc15"],
];

const ConsolePanel = ({ position, rotationY, accent, index }) => {
  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#11131a",
        roughness: 0.35,
        metalness: 0.22,
        transmission: 0.2,
        transparent: true,
        opacity: 0.78,
        emissive: "#171006",
        emissiveIntensity: 0.22,
      }),
    []
  );

  const edgesGeometry = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(1.15, 0.72, 0.035)), []);

  const screenRef = useRef(null);
  const scanRef = useRef(null);
  const groupRef = useRef(null);
  const innerRef = useRef(null);

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime + index * 1.7;
    // subtle idle bob so panels always feel "live", not just on pointer move
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(t * 0.6) * 0.03;
    }
    // slow continuous self-spin, smoothed and framerate independent
    if (innerRef.current) {
      innerRef.current.rotation.y += delta * (0.12 + index * 0.02);
    }
    // dim, steady screen fill (reads as a display, not a flat sticker)
    if (screenRef.current) {
      screenRef.current.material.opacity = 0.16 + Math.sin(t * 0.9) * 0.04;
    }
    // a bright scan-line sweeps top-to-bottom, like an active readout
    if (scanRef.current) {
      const sweep = (t * 0.35 + index * 0.3) % 1;
      scanRef.current.position.y = 0.26 - sweep * 0.52;
      scanRef.current.material.opacity = 0.55 * (1 - Math.abs(sweep - 0.5) * 1.4);
    }
  });

  return (
    <Float speed={1.2 + index * 0.18} floatIntensity={0.16} rotationIntensity={0.06}>
      <group ref={groupRef} position={position} rotation={[0.12, rotationY, 0.02]}>
        <group ref={innerRef}>
          <mesh material={bodyMaterial} castShadow>
            <boxGeometry args={[1.15, 0.72, 0.035]} />
          </mesh>
          {/* thin emissive "screen" inset so the panel reads as an active display */}
          <mesh ref={screenRef} position={[0, 0, 0.019]}>
            <planeGeometry args={[0.92, 0.5]} />
            <meshBasicMaterial color={accent} transparent opacity={0.18} />
          </mesh>
          {/* sweeping scan-line highlight */}
          <mesh ref={scanRef} position={[0, 0.2, 0.02]}>
            <planeGeometry args={[0.88, 0.05]} />
            <meshBasicMaterial color={accent} transparent opacity={0.5} />
          </mesh>
          {/* frame edge highlight */}
          <lineSegments position={[0, 0, 0.021]} geometry={edgesGeometry}>
            <lineBasicMaterial color={accent} transparent opacity={0.5} />
          </lineSegments>
        </group>
      </group>
    </Float>
  );
};

const ConsolePanels = () => (
  <>
    {panelPositions.map(([x, y, z, rotation, accent], index) => (
      <ConsolePanel
        key={`${x}-${y}`}
        position={[x, y, z]}
        rotationY={rotation}
        accent={accent}
        index={index}
      />
    ))}
  </>
);

const ConsoleCore = () => {
  const coreRef = useRef(null);
  const ringRef = useRef(null);
  const ring2Ref = useRef(null);
  const distortRef = useRef(null);

  useFrame(({ clock, pointer }, delta) => {
    const elapsed = clock.elapsedTime;

    if (coreRef.current) {
      coreRef.current.rotation.x = elapsed * 0.42;
      coreRef.current.rotation.y = elapsed * 0.58;
      coreRef.current.position.x = THREE.MathUtils.damp(
        coreRef.current.position.x,
        pointer.x * 0.18,
        2.5,
        delta
      );
      coreRef.current.position.y = THREE.MathUtils.damp(
        coreRef.current.position.y,
        pointer.y * 0.12,
        2.5,
        delta
      );
    }

    // organic pulse driving the core's "alive" surface distortion
    if (distortRef.current) {
      distortRef.current.distort = 0.28 + Math.sin(elapsed * 1.1) * 0.12;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = -elapsed * 0.18;
      ringRef.current.rotation.x = Math.sin(elapsed * 0.45) * 0.12;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = elapsed * 0.1;
      ring2Ref.current.rotation.y = Math.cos(elapsed * 0.3) * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={coreRef} castShadow>
        <icosahedronGeometry args={[0.52, 4]} />
        <MeshDistortMaterial
          ref={distortRef}
          color="#facc15"
          roughness={0.2}
          metalness={0.55}
          emissive="#f59e0b"
          emissiveIntensity={0.65}
          distort={0.3}
          speed={1.8}
        />
      </mesh>

      <mesh ref={ringRef}>
        <torusGeometry args={[1.05, 0.01, 12, 160]} />
        <meshBasicMaterial color="#fde68a" transparent opacity={0.55} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.52, 0.008, 12, 160]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.34} />
      </mesh>
    </group>
  );
};

// Data-link lines now derive their endpoints directly from panelPositions,
// so they always originate exactly at each panel instead of drifting from it.
const DataLink = ({ start, color }) => {
  const midpoint = useMemo(
    () => [start[0] * 0.42, start[1] * 0.28, start[2] * 0.5 + 0.02],
    [start]
  );
  const points = useMemo(() => [start, midpoint, [0, 0, 0]], [start, midpoint]);
  const lineRef = useRef(null);

  useFrame((_, delta) => {
    const material = lineRef.current?.material;
    if (material && "dashOffset" in material) {
      material.dashOffset -= delta * 0.6;
    }
  });

  return (
    <Line
      ref={lineRef}
      points={points}
      color={color}
      lineWidth={1.1}
      transparent
      opacity={0.55}
      dashed
      dashSize={0.06}
      gapSize={0.05}
    />
  );
};

const DataLinks = () => (
  <>
    {panelPositions.map(([x, y, z, , accent]) => (
      <DataLink key={`${x}-${y}-link`} start={[x, y, z]} color={accent} />
    ))}
  </>
);

const ConsoleScene = () => {
  const sceneRef = useRef(null);
  const idleAngle = useRef(0);

  useFrame(({ clock, pointer }, delta) => {
    if (!sceneRef.current) return;
    // slow constant idle rotation, so the console always feels alive
    idleAngle.current += delta * 0.06;
    const targetY = idleAngle.current + pointer.x * 0.14;
    const targetX = Math.sin(clock.elapsedTime * 0.15) * 0.03 - pointer.y * 0.08;
    // damp = framerate-independent smoothing (no jitter on slower frames)
    sceneRef.current.rotation.y = THREE.MathUtils.damp(sceneRef.current.rotation.y, targetY, 3.2, delta);
    sceneRef.current.rotation.x = THREE.MathUtils.damp(sceneRef.current.rotation.x, targetX, 3.2, delta);
  });

  return (
    <>
      <ambientLight intensity={0.46} />
      <directionalLight position={[-3, 5, 5]} intensity={2.4} color="#dbeafe" />
      <pointLight position={[2.6, 1.7, 2]} intensity={16} color="#facc15" />
      <pointLight position={[-2.5, -1.5, 1]} intensity={8} color="#a78bfa" />

      <group ref={sceneRef}>
        <Grid
          position={[0, -1.35, -0.35]}
          args={[5.4, 5.4]}
          cellSize={0.34}
          cellThickness={0.45}
          sectionSize={1.02}
          sectionThickness={0.8}
          fadeDistance={4.2}
          fadeStrength={1.1}
          cellColor="#3f3f46"
          sectionColor="#facc15"
        />
        <ConsolePanels />
        <DataLinks />
        <ConsoleCore />
        <Sparkles count={34} scale={[4.5, 2.2, 1.4]} size={2.1} speed={0.24} color="#fde68a" opacity={0.55} />
      </group>
    </>
  );
};

const BuildConsole3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0.35, 4.2], fov: 42 }}
      dpr={[1, 1.65]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ConsoleScene />
    </Canvas>
  );
};

export default BuildConsole3D;