'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xfafcff, 0.0015);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 240;
    camera.position.y = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Luxury billion-dollar light mode palette: Royal Sapphire, Electric Violet, Sky Cyan, Deep Indigo
    const particleCount = 1600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color('#2563eb'), // Royal Sapphire
      new THREE.Color('#3b82f6'), // Vivid Blue
      new THREE.Color('#8b5cf6'), // Electric Violet
      new THREE.Color('#06b6d4'), // Cyan Accent
      new THREE.Color('#6366f1'), // Indigo
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 800;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 600 + Math.sin(i) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 800;

      const randomColor = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = randomColor.r;
      colors[i * 3 + 1] = randomColor.g;
      colors[i * 3 + 2] = randomColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create smooth circular soft dots
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
      gradient.addColorStop(0.7, 'rgba(255,255,255,0.2)');
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
      opacity: 0.65,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Add subtle floating luxury geometric primitives (wireframe toruses and icosahedrons)
    const shapes: THREE.Object3D[] = [];
    const wireMaterial1 = new THREE.MeshBasicMaterial({ color: 0x2563eb, wireframe: true, transparent: true, opacity: 0.12 });
    const wireMaterial2 = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.12 });

    const torusGeo = new THREE.TorusGeometry(35, 1, 16, 100);
    const torus = new THREE.Mesh(torusGeo, wireMaterial1);
    torus.position.set(-140, 60, -80);
    torus.rotation.set(0.5, 0.5, 0);
    scene.add(torus);
    shapes.push(torus);

    const icoGeo = new THREE.IcosahedronGeometry(28, 1);
    const ico = new THREE.Mesh(icoGeo, wireMaterial2);
    ico.position.set(160, -40, -100);
    scene.add(ico);
    shapes.push(ico);

    // Grid helper tailored for luxury light canvas
    const gridHelper = new THREE.GridHelper(1200, 40, 0x2563eb, 0xcbd5e1);
    gridHelper.position.y = -180;
    gridHelper.material.opacity = 0.3;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.1;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.1;
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

      // Wave motion on particles
      const posAttr = geometry.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        const x = posAttr.getX(i);
        const z = posAttr.getZ(i);
        const y = Math.sin(elapsedTime * 0.8 + x * 0.01 + z * 0.01) * 15 + positions[i * 3 + 1];
        posAttr.setY(i, y);
      }
      posAttr.needsUpdate = true;

      particleSystem.rotation.y = elapsedTime * 0.03;

      // Rotate floating geometric primitives
      torus.rotation.x = elapsedTime * 0.2;
      torus.rotation.y = elapsedTime * 0.3;
      ico.rotation.x = -elapsedTime * 0.25;
      ico.rotation.z = elapsedTime * 0.15;

      camera.position.x += (mouseX - camera.position.x) * 0.04;
      camera.position.y += (-mouseY + 30 - camera.position.y) * 0.04;
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
      torusGeo.dispose();
      icoGeo.dispose();
      wireMaterial1.dispose();
      wireMaterial2.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-grid-pattern"
    />
  );
}
