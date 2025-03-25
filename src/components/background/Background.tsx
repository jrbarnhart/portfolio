import { Canvas, CanvasProps } from "@react-three/fiber";
import { twMerge } from "tailwind-merge";

export default function Background({ ...props }: CanvasProps) {
  const { className } = props;
  return <Canvas className={twMerge("", className)} />;
}
