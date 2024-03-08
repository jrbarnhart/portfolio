// This component is an html canvas that displays the asteroids banner game

import { useContext, useEffect, useRef, useState } from "react";
import DarkmodeContext from "../../../contexts/DarkmodeContext";
import createParticle, { ParticleInterface } from "./createParticle";
import animate from "./animate";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const canvasInitialized = useRef<boolean>(false);
  const particlesInitialized = useRef<boolean>(false);
  const animationStarted = useRef<boolean>(false);

  const { darkmode } = useContext(DarkmodeContext);

  const [particles, setParticles] = useState<ParticleInterface[]>([]);

  // Initialize the canvas if it exists and is not yet initialized
  useEffect(() => {
    if (canvasRef.current && !canvasInitialized.current) {
      const canvas = canvasRef.current;
      canvasCtxRef.current = canvas.getContext("2d");
      // Change the width of the canvas’ inner drawing surface so it’s the same aspect ratio
      // as the canvas element on the page
      canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);

      canvasInitialized.current = true;
      console.log("Canvas initialized.");
    }
  }, []);

  // Initialize particles if canvas is initialized and particles not yet initialized
  useEffect(() => {
    if (
      canvasRef.current &&
      canvasInitialized.current &&
      !particlesInitialized.current
    ) {
      // Initialize particles
      const initialParticles = [];
      for (let i = 0; i < 500; i++) {
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

      particlesInitialized.current = true;
      console.log("Particles initialized.");
    }
  }, [darkmode]);

  // Start animation if canvas and particles are initialized and animation has not already started
  useEffect(() => {
    if (
      canvasRef.current &&
      canvasCtxRef.current &&
      canvasInitialized.current &&
      particlesInitialized.current &&
      particles.length > 0 &&
      !animationStarted.current
    ) {
      // Start the animation
      animate({
        particles,
        setParticles,
        canvasX: canvasRef.current.width,
        canvasY: canvasRef.current.height,
        ctx: canvasCtxRef.current,
      });
      animationStarted.current = true;
      console.log("Animation started.");
    }
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 -z-10 w-full h-full object-contain bg-black dark:bg-white"
    />
  );
};

export default AnimatedBackground;
