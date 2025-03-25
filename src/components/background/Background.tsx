import { Cloud, Clouds, Sparkles, Stars } from "@react-three/drei";
import { Canvas, CanvasProps } from "@react-three/fiber";
import { twMerge } from "tailwind-merge";
import * as THREE from "three";

export default function Background({
  ...props
}: CanvasProps & { darkmode: boolean }) {
  const { className, darkmode, ...rest } = props;
  return (
    <Canvas
      className={twMerge("dark:bg-black", className)}
      camera={{ position: [0, 0, 5] }}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
      {...rest}
    >
      <Sparkles
        size={2}
        speed={0.1}
        scale={10}
        color={darkmode ? "#663bf5" : "#ba85ff"}
      />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud
          segments={40}
          bounds={[10, 2, 2]}
          volume={3}
          color={darkmode ? "#482c94" : "#7d45d1"}
        />
        <Cloud seed={1} scale={1} volume={2} color="hotpink" fade={60} />
      </Clouds>
    </Canvas>
  );
}
