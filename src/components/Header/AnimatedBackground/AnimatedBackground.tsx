// This component is an html canvas that displays the asteroids banner game

import { useCallback, useContext, useEffect, useRef, useState } from "react";
import DarkmodeContext from "../../../contexts/DarkmodeContext";
import createParticle, { ParticleInterface } from "./createParticle";
import animate from "./animate";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [canvasInitialized, setCanvasInitialized] = useState<boolean>(false);
  const particlesRef = useRef<ParticleInterface[]>([]);
  const [particlesInitialized, setParticlesInitialized] =
    useState<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);
  const { darkmode } = useContext(DarkmodeContext);
  const darkmodeRef = useRef(darkmode);

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
      for (let i = 0; i < 100; i++) {
        const newParticle = createParticle({
          x: canvasRef.current.width * Math.random(),
          y: canvasRef.current.height * Math.random(),
          vx: 0.1 * Math.random(),
          vy: 0.1 * Math.random(),
          mass: 1,
          color: darkmode === "true" ? "black" : "white",
        });

        initialParticles.push(newParticle);
      }

      particlesRef.current = initialParticles;

      setParticlesInitialized(true);
      console.log("Particles initialized.");
    }
  }, [canvasInitialized, darkmode, particlesInitialized]);

  // Define animation loop
  const animationLoop = useCallback(
    (darkmode: string | null, particles: ParticleInterface[]) => {
      if (!canvasRef.current || !canvasCtxRef.current) return;

      animate({
        particles,
        darkmode,
        canvasX: canvasRef.current.width,
        canvasY: canvasRef.current.height,
        ctx: canvasCtxRef.current,
      });

      animationFrameRef.current = requestAnimationFrame(() => {
        animationLoop(darkmode, particles);
      });
    },
    []
  );

  // Start animation
  useEffect(() => {
    // If refs, canvas and particles are initialized and animation has not already started
    if (
      canvasRef.current &&
      canvasCtxRef.current &&
      canvasInitialized &&
      particlesInitialized &&
      particlesRef.current.length > 0 &&
      !animationStarted
    ) {
      animationLoop(darkmode, particlesRef.current);
      setAnimationStarted(true);
      console.log("Animation started.");
    }
  }, [
    darkmode,
    canvasInitialized,
    particlesInitialized,
    animationStarted,
    animationLoop,
  ]);

  // If darkmode is toggled then stop the animation and restart with new darkmode arg
  useEffect(() => {
    if (
      animationStarted &&
      animationFrameRef.current &&
      darkmodeRef.current !== darkmode
    ) {
      console.log("Change detected. Restarting animation.");
      cancelAnimationFrame(animationFrameRef.current);
      animationLoop(darkmode, particlesRef.current);
      darkmodeRef.current = darkmode;
    }
  }, [animationLoop, animationStarted, darkmode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 -z-10 w-full h-full object-contain bg-black dark:bg-white"
    />
  );
};

export default AnimatedBackground;
