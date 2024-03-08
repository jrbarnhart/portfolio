export interface ParticleInterface {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  color: string;
  move: (force: { x: number; y: number }) => void;
}

const createParticle = ({
  x,
  y,
  vx,
  vy,
  mass,
  color,
}: {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  color: string;
}) => {
  const particle: ParticleInterface = {
    x,
    y,
    vx,
    vy,
    mass,
    color,
    move: (force: { x: number; y: number }) => {
      // Update velocity based on force
      particle.vx += force.x / mass;
      particle.vy += force.y / mass;
      // Update position based on velocity
      particle.x += particle.vx;
      particle.y += particle.vy;
    },
  };

  return particle;
};

export default createParticle;

// Example class for particle. Includes properties needed for simulating 2d motion.

/*
class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  radius: number;

  constructor(x: number, y: number, vx: number, vy: number, mass: number, radius: number) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.mass = mass;
    this.radius = radius;
  }

  updatePosition() {
    // Update particle position based on velocity
    this.x += this.vx;
    this.y += this.vy;
  }

  updateVelocity(force: { x: number; y: number }) {
    // Update particle velocity based on force
    this.vx += force.x / this.mass;
    this.vy += force.y / this.mass;
  }

  // Other particle methods...
}
*/

// Example fn that calculates attraction force between particles

/*
const attractionForce = (p1: Particle, p2: Particle, G: number) => {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const distSquared = dx ** 2 + dy ** 2;
  const force = (G * p1.mass * p2.mass) / distSquared;
  const angle = Math.atan2(dy, dx);
  const forceX = force * Math.cos(angle);
  const forceY = force * Math.sin(angle);
  return { x: forceX, y: forceY };
};
*/

// Example particles with animate fn

/*
// Initialize particles
      const particle1 = new Particle(particle properties);
      const particle2 = new Particle(particle properties);

      const animate = () => {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate attraction force
        const force = attractionForce(particle1, particle2, gravitational constant);

        // Update particle velocities and positions
        particle1.updateVelocity(force);
        particle2.updateVelocity({ x: -force.x, y: -force.y });
        particle1.updatePosition();
        particle2.updatePosition();

        // Draw particles
        ctx.beginPath();
        ctx.arc(particle1.x, particle1.y, particle1.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(particle2.x, particle2.y, particle2.radius, 0, 2 * Math.PI);
        ctx.fill();

        // Request next animation frame
        requestAnimationFrame(animate);
      };

      animate();
*/
