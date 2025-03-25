import { Cloud, Clouds, Sparkles, Stars } from "@react-three/drei";
import { Canvas, CanvasProps } from "@react-three/fiber";
import { twMerge } from "tailwind-merge";
import * as THREE from "three";

export default function Background({
  ...props
}: CanvasProps & { darkmode: boolean }) {
  const { className, darkmode, ...rest } = props;
  return (
    <>
      <div className="bg-black absolute h-[100svh] w-[100svw] animate-fade-out pointer-events-none"></div>
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
          count={7000} // Increase count for a denser sky
          factor={5} // Larger factor for depth variation
          saturation={0.2} // Slight saturation for vibrance
          fade
          speed={0.5} // Slower for a dreamy effect
        />
        <Clouds material={THREE.MeshBasicMaterial}>
          <Cloud
            segments={50}
            bounds={[10, 2, 2]}
            volume={4}
            color={darkmode ? "#482c94" : "#7d45d1"}
            opacity={0.5}
          />
          <Cloud seed={1} scale={1} volume={2} color="#ff69b4" fade={70} />
        </Clouds>
      </Canvas>
    </>
  );
}
