"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const AuroraBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#0077B6", "#00B4D8", "#66BB6A"],
  blendMode = "screen",
  intensity = 0.5,
  speed = 1,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  blendMode?: "screen" | "multiply" | "overlay";
  intensity?: number;
  speed?: number;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    cx: number,
    cy: number,
    particles: Particle[],
    particleCount = 700;
  let canvas: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  let gradient: CanvasGradient | null = null;
  let animationFrameId: number | null = null;
  const time = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  const initParticles = () => {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: 0,
        vy: 0,
        size: Math.random() * 2 + 0.1,
      });
    }
  };

  const initCanvas = () => {
    if (!canvasRef.current || !containerRef.current) return;
    canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    ctx = context;
    w = containerRef.current.offsetWidth;
    h = containerRef.current.offsetHeight;
    cx = w / 2;
    cy = h / 2;
    canvas.width = w;
    canvas.height = h;
    gradient = ctx.createLinearGradient(0, 0, w, h);
    colors.forEach((color, i) => {
      gradient!.addColorStop(i / (colors.length - 1), color);
    });
    ctx.strokeStyle = gradient;
    initParticles();
  };

  const renderCanvas = () => {
    if (!ctx || !canvas || !particles) return;

    ctx.clearRect(0, 0, w, h);

    for (const p of particles) {
      const n = noise(p.x * 0.001, p.y * 0.001, time.current * 0.0001) * Math.PI * 2;
      p.vx += Math.cos(n) * 0.01 * speed;
      p.vy += Math.sin(n) * 0.01 * speed;
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.99;
      p.vy *= 0.99;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx!.beginPath();
      ctx!.moveTo(p.x, p.y);
      ctx!.lineTo(p.x + p.vx * intensity * 100, p.y + p.vy * intensity * 100);
      ctx!.stroke();
    }

    time.current += 1;
    animationFrameId = requestAnimationFrame(renderCanvas);
  };

  useEffect(() => {
    initCanvas();
    setIsReady(true);
    window.addEventListener("resize", initCanvas);
    return () => {
      window.removeEventListener("resize", initCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    if (isReady) {
      renderCanvas();
    }
  }, [isReady]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center justify-center w-full overflow-hidden bg-background",
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 w-full h-full mix-blend-screen opacity-50",
          className
        )}
        style={{
          mixBlendMode: blendMode,
        }}
      />
      {children}
    </div>
  );
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};