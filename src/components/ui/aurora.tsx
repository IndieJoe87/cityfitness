"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const Aurora = ({
  children,
  className,
  size = 600,
}: {
  children?: React.ReactNode;
  className?: string;
  size?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const gradientRef = useRef<CanvasGradient | null>(null);
  const pixelsRef = useRef<{ x: number; y: number; alpha: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    contextRef.current = context;
    canvas.width = containerRef.current.offsetWidth;
    canvas.height = containerRef.current.offsetHeight;

    gradientRef.current = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradientRef.current.addColorStop(0, "#0077B6");
    gradientRef.current.addColorStop(0.5, "#00B4D8");
    gradientRef.current.addColorStop(1, "#66BB6A");

    // Initialize pixels
    const numberOfPixels = size;
    pixelsRef.current = Array.from({ length: numberOfPixels }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      alpha: Math.random(),
    }));

    const animate = () => {
      if (!contextRef.current || !gradientRef.current) return;

      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
      contextRef.current.fillStyle = gradientRef.current;

      pixelsRef.current.forEach((pixel) => {
        if (!contextRef.current) return;

        pixel.y -= 0.5;
        if (pixel.y < 0) {
          pixel.y = canvas.height;
          pixel.x = Math.random() * canvas.width;
        }

        pixel.alpha += (Math.random() - 0.5) * 0.1;
        pixel.alpha = Math.max(0, Math.min(1, pixel.alpha));

        contextRef.current.globalAlpha = pixel.alpha;
        contextRef.current.beginPath();
        contextRef.current.arc(pixel.x, pixel.y, 1, 0, Math.PI * 2);
        contextRef.current.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      canvas.width = containerRef.current.offsetWidth;
      canvas.height = containerRef.current.offsetHeight;
      if (contextRef.current && gradientRef.current) {
        gradientRef.current = contextRef.current.createLinearGradient(
          0,
          0,
          canvas.width,
          canvas.height
        );
        gradientRef.current.addColorStop(0, "#0077B6");
        gradientRef.current.addColorStop(0.5, "#00B4D8");
        gradientRef.current.addColorStop(1, "#66BB6A");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return (
    <div ref={containerRef} className={cn("relative w-full overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full mix-blend-soft-light"
        style={{ opacity: 0.4 }}
      />
      {children}
    </div>
  );
};