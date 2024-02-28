// This component is an html canvas that displays the asteroids banner game

import { useCallback, useContext, useEffect, useRef } from "react";
import DarkmodeContext from "../../contexts/DarkmodeContext";

const AsteroidsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const canvasInitialized = useRef<boolean>(false);

  const { darkmode } = useContext(DarkmodeContext);

  const drawCircles = useCallback((color: string) => {
    if (canvasCtxRef.current && canvasRef.current) {
      console.log("Drawing circles...");
      const ctx = canvasCtxRef.current;

      // Clear the canvas
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      // Draw some random circles
      for (let i = 0; i < 9; i++) {
        const x = canvasRef.current.width * Math.random();
        const y = canvasRef.current.height * Math.random();
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, 2 * Math.PI);
        ctx.strokeStyle = color;
        ctx.stroke();
      }
    }
  }, []);

  // Initialize canvas
  useEffect(() => {
    if (canvasRef.current && !canvasInitialized.current) {
      console.log("Initializing canvas...");
      const canvas = canvasRef.current;
      canvasCtxRef.current = canvas.getContext("2d");
      // Change the width of the canvas’ inner drawing surface so it’s the same aspect ratio
      // as the canvas element on the page
      canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);

      canvasInitialized.current = true;
    }
  }, []);

  // Draw circles
  useEffect(() => {
    const color = darkmode === "true" ? "black" : "white";
    if (darkmode && canvasInitialized.current) {
      drawCircles(color);
    }
  }, [darkmode, drawCircles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 w-full h-full object-contain -z-10 bg-black dark:bg-white"
    />
  );
};

export default AsteroidsBackground;
