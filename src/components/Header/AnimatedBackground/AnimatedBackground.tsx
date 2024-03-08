// This component is an html canvas that displays the asteroids banner game

import { useContext, useEffect, useRef, useState } from "react";
import DarkmodeContext from "../../../contexts/DarkmodeContext";
import createParticle, { ParticleInterface } from "./createParticle";
import animate from "./animate";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [canvasInitialized, setCanvasInitialized] = useState<boolean>(false);
  const [particlesInitialized, setParticlesInitialized] =
    useState<boolean>(false);
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);

  const { darkmode } = useContext(DarkmodeContext);

  const [particles, setParticles] = useState<ParticleInterface[]>([]);

  // Initialize the canvas if it exists and is not yet initialized
  useEffect(() => {
    if (canvasRef.current && !canvasInitialized) {
      const canvas = canvasRef.current;
      canvasCtxRef.current = canvas.getContext("2d");
      // Change the width of the canvas’ inner drawing surface so it’s the same aspect ratio
      // as the canvas element on the page
      canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);

      setCanvasInitialized(true);
      console.log("Canvas initialized.");
    }
  }, [canvasInitialized]);

  // Initialize particles if canvas is initialized and particles not yet initialized
  useEffect(() => {
    if (canvasRef.current && canvasInitialized && !particlesInitialized) {
      // Initialize particles
      const initialParticles = [];
      for (let i = 0; i < 5; i++) {
        const newParticle = createParticle({
          x: canvasRef.current.width * Math.random(),
          y: canvasRef.current.height * Math.random(),
          v: { x: 2 * Math.random(), y: 2 * Math.random() },
          mass: 10,
          color: darkmode === "true" ? "black" : "white",
        });

        initialParticles.push(newParticle);
      }

      setParticles(initialParticles);

      setParticlesInitialized(true);
      console.log("Particles initialized.");
    }
  }, [canvasInitialized, darkmode, particlesInitialized]);

  // Start animation if canvas and particles are initialized and animation has not already started
  useEffect(() => {
    // Define the animation loop
    const animationLoop = () => {
      if (!canvasRef.current || !canvasCtxRef.current) return;

      animate({
        particles,
        setParticles,
        darkmode,
        canvasX: canvasRef.current.width,
        canvasY: canvasRef.current.height,
        ctx: canvasCtxRef.current,
      });

      animationFrameRef.current = requestAnimationFrame(animationLoop);
    };

    if (
      canvasRef.current &&
      canvasCtxRef.current &&
      canvasInitialized &&
      particlesInitialized &&
      particles.length > 0 &&
      !animationStarted
    ) {
      animationLoop();
      setAnimationStarted(true);
      console.log("Animation started.");
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    particles,
    darkmode,
    canvasInitialized,
    particlesInitialized,
    animationStarted,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 -z-10 w-full h-full object-contain bg-black dark:bg-white"
    />
  );
};

export default AnimatedBackground;
