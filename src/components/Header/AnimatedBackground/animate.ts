import { ParticleInterface } from "./createParticle";

const animate = ({
  particles,
  setParticles,
  darkmode,
  canvasX,
  canvasY,
  ctx,
}: {
  particles: ParticleInterface[];
  setParticles: (value: ParticleInterface[]) => void;
  darkmode: string | null;
  canvasX: number;
  canvasY: number;
  ctx: CanvasRenderingContext2D;
}) => {
  // Create the next state for particles using new array
  const newParticlesState = [...particles];

  // For each particle in the new array
  newParticlesState.forEach((particle) => {
    // Set color based on darkmode
    particle.color = darkmode === "true" ? "purple" : "yellow";
    // Calc force v2 STATIC FOR NOW
    // Move particle using force
    particle.move({ x: 0.005, y: 0.005 });
    // Reverse velocity on boundary collision
    if (particle.x < 0 || particle.x > canvasX) {
      particle.vx *= -1;
    }
    if (particle.y < 0 || particle.y > canvasY) {
      particle.vy *= -1;
    }
  });

  // Erase canvas
  ctx.clearRect(0, 0, canvasX, canvasY);

  // Draw particles using the new state.
  // !!!!Sync/jitter issues from async state updates? Seems fine, but monitor this.!!!!
  newParticlesState.forEach((particle) => {
    ctx.beginPath(); // Begin path for drawing the particle
    ctx.arc(particle.x, particle.y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = particle.color; // Set fill style for the particle
    ctx.fill(); // Fill the particle shape
  });

  // Set the new state
  setParticles(newParticlesState);
};

export default animate;
