import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Color, AdditiveBlending, DoubleSide } from "three";
import { Float, Stars, Trail, Sparkles } from "@react-three/drei";

const Planet = ({
  radius,
  orbitRadius,
  orbitSpeed,
  color,
  ringColor,
  hasRings = false,
  glowColor,
  trailColor,
}: {
  radius: number;
  orbitRadius: number;
  orbitSpeed: number;
  color: string;
  ringColor: string;
  hasRings: boolean;
  glowColor: string;
  trailColor: string;
}) => {
  const meshRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    // More dynamic orbital movement
    meshRef.current.position.x = Math.cos(t * orbitSpeed) * orbitRadius;
    meshRef.current.position.z = Math.sin(t * orbitSpeed) * orbitRadius;
    meshRef.current.position.y =
      Math.sin(t * orbitSpeed * 0.5) * (orbitRadius * 0.1);
    meshRef.current.rotation.y += 0.01;

    if (ringRef.current && hasRings) {
      ringRef.current.position.copy(meshRef.current.position);
      ringRef.current.rotation.x = Math.PI / 3;
      ringRef.current.rotation.z = t * 0.05; // Slow ring rotation
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          color={color}
          roughness={0.4}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />

        {/* Atmosphere glow */}
        <Sparkles
          count={20}
          scale={radius * 3}
          size={0.6}
          speed={0.1}
          color={glowColor}
          opacity={0.2}
        />

        {/* Orbital trail */}
        <Trail
          width={2}
          length={50}
          color={trailColor || color}
          attenuation={(t) => t * t}
          stride={0}
        />
      </mesh>

      {hasRings && (
        <mesh ref={ringRef}>
          <ringGeometry args={[radius * 1.4, radius * 2.2, 128]} />
          <meshBasicMaterial
            color={ringColor}
            transparent
            opacity={0.4}
            side={DoubleSide}
            blending={AdditiveBlending}
          />
          {/* Ring sparkles */}
          <Sparkles
            count={30}
            scale={radius * 4}
            size={0.3}
            speed={0.2}
            color={ringColor}
            opacity={0.4}
          />
        </mesh>
      )}

      {/* Orbit line */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitRadius, orbitRadius + 0.05, 180]} />
        <meshBasicMaterial
          color={new Color(color).multiplyScalar(0.3)}
          transparent
          opacity={0.2}
          side={DoubleSide}
          blending={AdditiveBlending}
        />
      </mesh>
    </Float>
  );
};

export const FloatingCrystal = () => {
  const sunRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!sunRef.current) return;
    const t = clock.getElapsedTime();
    sunRef.current.rotation.y = t * 0.1;
    // Pulsating effect
    const scale = 1 + Math.sin(t * 0.5) * 0.02;
    sunRef.current.scale.set(scale, scale, scale);
  });

  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={7000}
        factor={4}
        saturation={0.5}
        fade
        speed={1}
      />

      {/* Sun with enhanced glow */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial color="#ffa726" toneMapped={false} />
        <Sparkles
          count={40}
          scale={8}
          size={1.5}
          speed={0.1}
          color="#ffcc80"
          opacity={0.5}
        />
        <Sparkles
          count={30}
          scale={6}
          size={1}
          speed={0.05}
          color="#fff3e0"
          opacity={0.3}
        />
      </mesh>

      {/* Mercury - Small rocky planet */}
      <Planet
        radius={0.3}
        orbitRadius={4}
        orbitSpeed={0.47}
        color="#9e9e9e"
        glowColor="#757575"
        trailColor="#616161"
        ringColor="#9e9e9e"
        hasRings={false}
      />

      {/* Venus - Bright and hot */}
      <Planet
        radius={0.6}
        orbitRadius={6}
        orbitSpeed={0.35}
        color="#ffab91"
        glowColor="#ff8a65"
        trailColor="#ff7043"
        ringColor="#ffab91"
        hasRings={false}
      />

      {/* Earth - Blue and vibrant */}
      <Planet
        radius={0.7}
        orbitRadius={8}
        orbitSpeed={0.29}
        color="#4fc3f7"
        glowColor="#29b6f6"
        trailColor="#03a9f4"
        ringColor="#4fc3f7"
        hasRings={false}
      />

      {/* Mars - Red planet */}
      <Planet
        radius={0.5}
        orbitRadius={10}
        orbitSpeed={0.24}
        color="#ef5350"
        glowColor="#e53935"
        trailColor="#d32f2f"
        ringColor="#ef5350"
        hasRings={false}
      />

      {/* Jupiter - Gas giant with rings */}
      <Planet
        radius={1.4}
        orbitRadius={13}
        orbitSpeed={0.13}
        color="#ffd54f"
        glowColor="#ffca28"
        trailColor="#ffc107"
        hasRings={true}
        ringColor="#fff176"
      />

      {/* Saturn - Ringed planet */}
      <Planet
        radius={1.2}
        orbitRadius={16}
        orbitSpeed={0.1}
        color="#7e57c2"
        glowColor="#673ab7"
        trailColor="#5e35b1"
        hasRings={true}
        ringColor="#b39ddb"
      />
    </>
  );
};
