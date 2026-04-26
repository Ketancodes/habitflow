import confetti from "canvas-confetti";

export const fireConfetti = () => {
  // left burst
  confetti({
    particleCount: 80, // was 50 → increased
    angle: 60,
    spread: 65, // was 55 → wider
    // startVelocity: 55, // more punch
    origin: { x: 0 },
  });

  // right burst
  confetti({
    particleCount: 80,
    angle: 120,
    spread: 65,
    // startVelocity: 55,
    origin: { x: 1 },
  });
};
