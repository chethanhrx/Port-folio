'use client';

import React from 'react';
import { useGravity } from '../hooks/useGravity';

interface GravityCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function GravityCard({ children, className = '', onClick }: GravityCardProps) {
  const gravityRef = useGravity<HTMLDivElement>({
    strength: 0.12,
    maxOffset: 20,
    perspective: 900,
    rotateX: 6,
    rotateY: 6,
    scaleEffect: true,
  });

  return (
    <div
      ref={gravityRef}
      className={className}
      onClick={onClick}
      style={{ transition: 'box-shadow 0.3s ease, border-color 0.3s ease', willChange: 'transform' }}
    >
      {children}
    </div>
  );
}
