import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 18;
const EMOJIS = ["🍪", "✨", "🌾", "🍯"];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  emoji: string;
  opacity: number;
}

const CookieParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Observe body height changes
    const ro = new ResizeObserver(resize);
    ro.observe(document.body);

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.2 - 0.1,
      size: 14 + Math.random() * 12,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      opacity: 0.08 + Math.random() * 0.1,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -30) p.x = canvas.width + 30;
        if (p.x > canvas.width + 30) p.x = -30;
        if (p.y < -30) p.y = canvas.height + 30;
        if (p.y > canvas.height + 30) p.y = -30;

        ctx.globalAlpha = p.opacity;
        ctx.font = `${p.size}px serif`;
        ctx.fillText(p.emoji, p.x, p.y);
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default CookieParticles;
