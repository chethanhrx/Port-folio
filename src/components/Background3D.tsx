'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf3f6fa, 0.0012);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 260;
    camera.position.y = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Antigravity AI Agentic Particle Field (Levitating floating dots)
    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);

    const palette = [
      new THREE.Color('#2563eb'), // Royal Sapphire
      new THREE.Color('#00f2fe'), // Neon Cyan
      new THREE.Color('#8b5cf6'), // Electric Violet
      new THREE.Color('#4f46e5'), // Deep Indigo
      new THREE.Color('#38bdf8'), // Sky Blue
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 900;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 700;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 900;

      velocities[i] = 0.15 + Math.random() * 0.35; // Upward levitation speed

      const randomColor = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = randomColor.r;
      colors[i * 3 + 1] = randomColor.g;
      colors[i * 3 + 2] = randomColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create soft glowing circle particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(255,255,255,0.85)');
      gradient.addColorStop(0.7, 'rgba(255,255,255,0.25)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 5.5,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Antigravity Levitating Geometric Rings & Sphere Grids
    const wireMatBlue = new THREE.MeshBasicMaterial({ color: 0x2563eb, wireframe: true, transparent: true, opacity: 0.15 });
    const wireMatViolet = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.15 });
    const wireMatCyan = new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.12 });

    const sphereGeo = new THREE.SphereGeometry(45, 18, 18);
    const sphere = new THREE.Mesh(sphereGeo, wireMatBlue);
    sphere.position.set(-180, 50, -120);
    scene.add(sphere);

    const torusGeo = new THREE.TorusGeometry(55, 1.2, 16, 100);
    const torus = new THREE.Mesh(torusGeo, wireMatViolet);
    torus.position.set(200, -30, -140);
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    const icoGeo = new THREE.IcosahedronGeometry(35, 2);
    const ico = new THREE.Mesh(icoGeo, wireMatCyan);
    ico.position.set(30, 140, -180);
    scene.add(ico);

    // Antigravity matrix dot floor
    const gridHelper = new THREE.GridHelper(1400, 50, 0x2563eb, 0xcbd5e1);
    gridHelper.position.y = -200;
    gridHelper.material.opacity = 0.25;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.08;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.08;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Antigravity upward levitation physics
      const posAttr = geometry.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        let y = posAttr.getY(i) + velocities[i];
        if (y > 350) y = -350; // Loop particles back to bottom when they float too high
        
        // Gentle horizontal wave drift
        const x = posAttr.getX(i) + Math.sin(elapsedTime * 0.5 + i) * 0.1;
        
        posAttr.setX(i, x);
        posAttr.setY(i, y);
      }
      posAttr.needsUpdate = true;

      particleSystem.rotation.y = elapsedTime * 0.02;

      // Rotate Antigravity floating primitives
      sphere.rotation.y = elapsedTime * 0.15;
      sphere.rotation.z = Math.sin(elapsedTime * 0.3) * 0.2;

      torus.rotation.z = elapsedTime * 0.2;
      torus.rotation.y = Math.cos(elapsedTime * 0.2) * 0.3;

      ico.rotation.x = elapsedTime * 0.18;
      ico.rotation.y = elapsedTime * 0.22;

      // Smooth camera gravitational tracking
      camera.position.x += (mouseX - camera.position.x) * 0.04;
      camera.position.y += (-mouseY + 20 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      sphereGeo.dispose();
      torusGeo.dispose();
      icoGeo.dispose();
      wireMatBlue.dispose();
      wireMatViolet.dispose();
      wireMatCyan.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-grid-pattern"
    />
  );
}
