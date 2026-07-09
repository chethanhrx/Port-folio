'use client';

import { useEffect, useRef, useCallback } from 'react';

interface GravityState {
  x: number;
  y: number;
  normX: number;
  normY: number;
}

interface UseGravityOptions {
  strength?: number;
  maxOffset?: number;
  perspective?: number;
  rotateX?: number;
  rotateY?: number;
  scaleEffect?: boolean;
}

export function useGravity<T extends HTMLElement>(options: UseGravityOptions = {}) {
  const {
    strength = 0.15,
    maxOffset = 25,
    perspective = 800,
    rotateX = 8,
    rotateY = 8,
    scaleEffect = true,
  } = options;

  const ref = useRef<T>(null);
  const gravityRef = useRef<GravityState>({ x: 0, y: 0, normX: 0, normY: 0 });
  const rafRef = useRef<number>(0);
  const currentTransform = useRef({ x: 0, y: 0, rx: 0, ry: 0, s: 1 });

  const animate = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const g = gravityRef.current;
    const ct = currentTransform.current;

    // Calculate gravity pull toward cursor
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Distance from cursor to element center
    const dx = g.x - centerX;
    const dy = g.y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Influence radius - how far the gravity reaches
    const influenceRadius = 500;
    const influence = Math.max(0, 1 - dist / influenceRadius);

    // Target offsets
    const targetX = (dx * strength * influence);
    const targetY = (dy * strength * influence);
    const clampedX = Math.max(-maxOffset, Math.min(maxOffset, targetX));
    const clampedY = Math.max(-maxOffset, Math.min(maxOffset, targetY));

    // Target rotation (tilt toward cursor)
    const targetRX = -(dy / 50) * rotateX * influence;
    const targetRY = (dx / 50) * rotateY * influence;

    // Target scale (slight pull effect)
    const targetS = scaleEffect ? 1 + influence * 0.03 : 1;

    // Smooth interpolation
    const lerp = 0.08;
    ct.x += (clampedX - ct.x) * lerp;
    ct.y += (clampedY - ct.y) * lerp;
    ct.rx += (targetRX - ct.rx) * lerp;
    ct.ry += (targetRY - ct.ry) * lerp;
    ct.s += (targetS - ct.s) * lerp;

    // Apply transform
    el.style.transform = `perspective(${perspective}px) translate3d(${ct.x}px, ${ct.y}px, 0) rotateX(${ct.rx}deg) rotateY(${ct.ry}deg) scale(${ct.s})`;

    // Glow effect based on proximity
    if (influence > 0.1) {
      const glowIntensity = influence * 0.4;
      el.style.boxShadow = `0 0 ${20 + influence * 40}px rgba(0, 229, 255, ${glowIntensity}), 0 0 ${40 + influence * 60}px rgba(168, 85, 247, ${glowIntensity * 0.5})`;
      el.style.borderColor = `rgba(0, 229, 255, ${0.1 + influence * 0.4})`;
    } else {
      el.style.boxShadow = '';
      el.style.borderColor = '';
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [strength, maxOffset, perspective, rotateX, rotateY, scaleEffect]);

  useEffect(() => {
    const handleGravity = (e: Event) => {
      const customEvent = e as CustomEvent<GravityState>;
      gravityRef.current = customEvent.detail;
    };

    window.addEventListener('blackhole-gravity', handleGravity);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('blackhole-gravity', handleGravity);
      cancelAnimationFrame(rafRef.current);
      if (ref.current) {
        ref.current.style.transform = '';
        ref.current.style.boxShadow = '';
        ref.current.style.borderColor = '';
      }
    };
  }, [animate]);

  return ref;
}
