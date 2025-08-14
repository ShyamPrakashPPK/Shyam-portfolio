"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();
  const wRef = useRef<number>(0);
  const hRef = useRef<number>(0);
  const ntRef = useRef<number>(0);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const canvasElementRef = useRef<HTMLCanvasElement | null>(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.002;
      case "fast":
        return 0.004;
      default:
        return 0.003;
    }
  };

  const waveColors = colors ?? [
    "#6b7280",
    "#9ca3af",
    "#d1d5db",
    "#4b5563",
    "#374151",
  ];

  const drawWave = useCallback((n: number) => {
    if (!ctxRef.current) return;

    ntRef.current += getSpeed();
    for (let i = 0; i < n; i++) {
      ctxRef.current.beginPath();
      ctxRef.current.lineWidth = waveWidth || 50;
      ctxRef.current.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < wRef.current; x += 5) {
        const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
        ctxRef.current.lineTo(x, y + hRef.current * 0.5); // adjust for height, currently at 50% of the container
      }
      ctxRef.current.stroke();
      ctxRef.current.closePath();
    }
  }, [waveWidth, waveColors, noise]);

  const render = useCallback(() => {
    if (!ctxRef.current) return;

    ctxRef.current.fillStyle = backgroundFill || "black";
    ctxRef.current.globalAlpha = waveOpacity || 0.5;
    ctxRef.current.fillRect(0, 0, wRef.current, hRef.current);
    drawWave(5);
    animationIdRef.current = requestAnimationFrame(render);
  }, [backgroundFill, waveOpacity, drawWave]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvasElementRef.current = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctxRef.current = ctx;
    // Use getBoundingClientRect for more accurate sizing
    const rect = canvas.getBoundingClientRect();
    wRef.current = ctx.canvas.width = rect.width || window.innerWidth;
    hRef.current = ctx.canvas.height = rect.height || window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    ntRef.current = 0;

    window.onresize = function () {
      if (!canvasElementRef.current || !ctxRef.current) return;
      const rect = canvasElementRef.current.getBoundingClientRect();
      wRef.current = ctxRef.current.canvas.width = rect.width || window.innerWidth;
      hRef.current = ctxRef.current.canvas.height = rect.height || window.innerHeight;
      ctxRef.current.filter = `blur(${blur}px)`;
    };
    render();
  }, [blur, render]);

  useEffect(() => {
    init();
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [init]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center overflow-hidden",
        containerClassName
      )}
      style={{ width: '100vw', maxWidth: '100%' }}
    >
      <canvas
        className="absolute inset-0 z-0 w-full h-full"
        ref={canvasRef}
        id="canvas"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10 w-full", className)} {...props}>
        {children}
      </div>
    </div>
  );
};