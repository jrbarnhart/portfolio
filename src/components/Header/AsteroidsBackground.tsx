// This component is an html canvas that displays the asteroids banner game

import { useEffect, useRef } from "react";

const AsteroidsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    // Initialize canvasCtxRef
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvasCtxRef.current = canvas.getContext("2d");
      // Change the width of the canvas’ inner drawing surface so it’s the same aspect ratio
      // as the canvas element on the page
      canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);
      const ctx = canvasCtxRef.current;

      // Draw some random circles
      for (let i = 0; i < 9; i++) {
        const x = canvasRef.current.width * Math.random();
        const y = canvasRef.current.height * Math.random();
        ctx?.beginPath();
        ctx?.arc(x, y, 40, 0, 2 * Math.PI);
        ctx?.stroke();
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 w-full h-full object-contain -z-10 bg-black dark:bg-white"
    />
  );
};

export default AsteroidsBackground;
