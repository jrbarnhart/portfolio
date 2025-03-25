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
      <div className="h-[100svh] w-[100svw] absolute bg-radial from-violet-500/40 via-transparent to-transparent"></div>
      <Canvas
        className={twMerge("dark:bg-black", className)}
        camera={{ position: [0, 0, 5] }}
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        {...rest}
      >
        <Sparkles
          size={2}
          speed={0.03}
          scale={10}
          color={darkmode ? "#663bf5" : "#ba85ff"}
        />
        <Sparkles
          size={1}
          speed={0.03}
          scale={6}
          color={darkmode ? "#e6ff03" : "#ff9900"}
        />
        <Sparkles size={1} speed={0.01} scale={6} color={"#f27e7e"} />
        <Stars
          radius={100}
          depth={50}
          count={4000} // Increase count for a denser sky
          factor={3} // Larger factor for depth variation
          saturation={0.2} // Slight saturation for vibrance
          fade
          speed={0.5} // Slower for a dreamy effect
        />
        <Clouds material={THREE.MeshBasicMaterial}>
          <Cloud
            segments={50}
            bounds={[10, 3, 2]}
            volume={5}
            color={darkmode ? "#482c94" : "#7d45d1"}
            opacity={0.3}
          />
          <Cloud seed={1} scale={1} volume={2} color="#ff69b4" fade={70} />
        </Clouds>
      </Canvas>
    </>
  );
}
