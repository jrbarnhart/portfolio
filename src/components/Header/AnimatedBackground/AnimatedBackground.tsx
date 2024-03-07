// This component is an html canvas that displays the asteroids banner game

import { useContext, useEffect, useRef } from "react";
import DarkmodeContext from "../../../contexts/DarkmodeContext";
import createParticle, { ParticleInterface } from "./createParticle";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const canvasInitialized = useRef<boolean>(false);
  const particlesInitialized = useRef<boolean>(false);
  const animationStarted = useRef<boolean>(false);

  const { darkmode } = useContext(DarkmodeContext);

  const particles: ParticleInterface[] = [];

  useEffect(() => {
    // Initialize the canvas if it exists and is not yet initialized
    if (canvasRef.current && !canvasInitialized.current) {
      const canvas = canvasRef.current;
      canvasCtxRef.current = canvas.getContext("2d");
      // Change the width of the canvas’ inner drawing surface so it’s the same aspect ratio
      // as the canvas element on the page
      canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);

      canvasInitialized.current = true;
      console.log("Canvas initialized.");
    }

    // Initialize particles if canvas is initialized and particles not yet initialized
    if (canvasInitialized.current && !particlesInitialized.current) {
      // Initialize particles
      const newParticle = createParticle({
        x: 50,
        y: 100,
        v: { x: 5, y: 5 },
        mass: 10,
      });
      const anotherParticle = { ...newParticle, x: 100, y: 50 };

      particles.push(newParticle, anotherParticle);

      particlesInitialized.current = true;
      console.log("Particles initialized.");
      console.log(particles);
    }

    // Start animation if canvas and particles are initialized and animation has not already started
    if (
      canvasInitialized.current &&
      particlesInitialized.current &&
      !animationStarted.current
    ) {
      // Start the animation
      animationStarted.current = true;
      console.log("Animation started.");
    }
  }, []);

  /*  const drawCircles = useCallback((color: string) => {
    if (canvasCtxRef.current && canvasRef.current) {
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
  }, [darkmode, drawCircles]); */

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 -z-10 w-full h-full object-contain bg-black dark:bg-white"
    />
  );
};

export default AnimatedBackground;
