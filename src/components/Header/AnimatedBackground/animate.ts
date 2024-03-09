import calculateGravity from "./calculateGravity";
import { ParticleInterface } from "./createParticle";

const animate = ({
  particles,
  darkmode,
  canvasX,
  canvasY,
  ctx,
}: {
  particles: ParticleInterface[];
  darkmode: string | null;
  canvasX: number;
  canvasY: number;
  ctx: CanvasRenderingContext2D;
}) => {
  // For each particle
  particles.forEach((particle) => {
    // Set color based on darkmode
    particle.color = darkmode === "true" ? "purple" : "yellow";
    // Calc gravitational force
    const gravity = calculateGravity(particle, particles);
    // Move particle using force
    particle.move({ x: gravity.x, y: gravity.y });
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
  particles.forEach((particle) => {
    ctx.beginPath(); // Begin path for drawing the particle
    ctx.arc(particle.x, particle.y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = particle.color; // Set fill style for the particle
    ctx.fill(); // Fill the particle shape
  });
};

export default animate;
