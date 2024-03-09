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
  const maxVelocity = 1.25;

  // For each particle
  particles.forEach((particle) => {
    // Set color based on darkmode
    particle.color = darkmode === "true" ? "purple" : "yellow";
    // Add drag to slow particles over time
    particle.vx *= 0.995;
    particle.vy *= 0.995;
    // Calc gravitational force
    const gravity = calculateGravity(particle, particles);
    // Move particle using force, clamping to min/max values
    particle.move({
      x: Math.min(Math.max(gravity.x, maxVelocity * -1), maxVelocity),
      y: Math.min(Math.max(gravity.y, maxVelocity * -1), maxVelocity),
    });
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
