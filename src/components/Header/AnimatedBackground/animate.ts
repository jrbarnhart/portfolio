import { ParticleInterface } from "./createParticle";

const animate = ({
  particles,
  canvasX,
  canvasY,
  ctx,
}: {
  particles: ParticleInterface[];
  canvasX: number;
  canvasY: number;
  ctx: CanvasRenderingContext2D;
}) => {
  // For each particle
  particles.forEach((particle) => {
    // Calc force v2
    // Move particle using force
    particle.move({ x: 0.005, y: 0.005 });
    // Reverse velocity on boundary collision
    if (particle.x < 0 || particle.x > canvasX) {
      particle.v.x *= -1;
    }
    if (particle.y < 0 || particle.y > canvasY) {
      particle.v.y *= -1;
    }
  });

  // Erase canvas
  ctx.clearRect(0, 0, canvasX, canvasY);

  // Draw particles
  particles.forEach((particle) => {
    ctx.beginPath(); // Begin path for drawing the particle
    ctx.arc(particle.x, particle.y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = particle.color; // Set fill style for the particle
    ctx.fill(); // Fill the particle shape
  });

  // Recursively call fn
  requestAnimationFrame(() => {
    animate({ particles, canvasX, canvasY, ctx });
  });
};

export default animate;
