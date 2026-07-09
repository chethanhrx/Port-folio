'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroInteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse interactive tracking
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Generate high-end floating telemetry nodes using strictly our curated pastel architectural palette
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 65);
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }> = [];

    // Exact 4-color palette: Peach (#FFB6A6), Beige (#FFEBD3), Mint-Teal (#9BCEC1), Soft Blue (#67A2C5)
    const colors = ['#FFB6A6', '#FFEBD3', '#9BCEC1', '#67A2C5'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const render = () => {
      // Smooth lerp mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle architectural grid
      const gridSize = 60;
      ctx.strokeStyle = 'rgba(255, 235, 211, 0.03)';
      ctx.lineWidth = 1;

      const offsetX = (mouse.x * 0.02) % gridSize;
      const offsetY = (mouse.y * 0.02) % gridSize;

      for (let x = offsetX; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = offsetY; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw interactive glowing nodes & lines
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Gravitational interactive lensing near cursor
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 220) {
          const force = (220 - dist) / 220;
          node.x -= dx * force * 0.015;
          node.y -= dy * force * 0.015;

          // Draw connector ray to cursor in Mint Teal (#9BCEC1)
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(155, 206, 193, ${force * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw connections between nearby nodes in Peach/Blue (#FFB6A6 / #67A2C5)
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const ndx = n2.x - node.x;
          const ndy = n2.y - node.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

          if (nDist < 130) {
            const alpha = ((130 - nDist) / 130) * 0.15;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(255, 182, 166, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = node.alpha;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      }

      // Draw subtle interactive spotlight around cursor
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 450);
      gradient.addColorStop(0, 'rgba(255, 182, 166, 0.06)');
      gradient.addColorStop(0.5, 'rgba(155, 206, 193, 0.03)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Aurora Ambient Gradients (Calibrated Pastel Architectural Palette) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#FFB6A6]/15 via-[#9BCEC1]/10 to-transparent blur-[140px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[10%] -right-[15%] w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-[#FFEBD3]/10 via-[#67A2C5]/10 to-transparent blur-[160px]"
      />

      {/* Interactive Telemetry Canvas */}
      <canvas ref={canvasRef} className="w-full h-full absolute inset-0 opacity-90" />

      {/* Vignette & Fade out at bottom for seamless blending into espresso sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#141213] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#141213_100%)] opacity-60 pointer-events-none" />
    </div>
  );
}
