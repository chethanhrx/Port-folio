'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    // Remove fog or keep very light far fog so nothing washes out into a white screen
    scene.fog = new THREE.FogExp2(0xf4f6f9, 0.0008);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1500
    );
    camera.position.set(0, 40, 220);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create high-contrast circular particle texture (Vivid dark center so it pops on light background!)
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.arc(32, 32, 28, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }
    const texture = new THREE.CanvasTexture(canvas);

    // Antigravity Wave Particle Grid (Like Antigravity.google flowing gravity waves)
    const cols = 70;
    const rows = 50;
    const particleCount = cols * rows;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color('#2563eb'), // Royal Sapphire Blue
      new THREE.Color('#7c3aed'), // Electric Purple
      new THREE.Color('#0891b2'), // Vivid Cyan
      new THREE.Color('#1e293b'), // Deep Slate Carbon
      new THREE.Color('#4f46e5'), // Electric Indigo
    ];

    let idx = 0;
    for (let ix = 0; ix < cols; ix++) {
      for (let iz = 0; iz < rows; iz++) {
        positions[idx * 3] = (ix - cols / 2) * 18;
        positions[idx * 3 + 1] = 0;
        positions[idx * 3 + 2] = (iz - rows / 2) * 18;

        // Color distribution
        const color = palette[(ix + iz) % palette.length];
        colors[idx * 3] = color.r;
        colors[idx * 3 + 1] = color.g;
        colors[idx * 3 + 2] = color.b;
        idx++;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 4.5,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.85,
      alphaTest: 0.1,
    });

    const waveSystem = new THREE.Points(geometry, material);
    waveSystem.position.y = -40;
    scene.add(waveSystem);

    // Floating Antigravity Ethereal Rings & Spheres (High contrast wireframes)
    const wireBlue = new THREE.MeshBasicMaterial({ color: 0x2563eb, wireframe: true, transparent: true, opacity: 0.22 });
    const wirePurple = new THREE.MeshBasicMaterial({ color: 0x7c3aed, wireframe: true, transparent: true, opacity: 0.22 });
    const wireCyan = new THREE.MeshBasicMaterial({ color: 0x0891b2, wireframe: true, transparent: true, opacity: 0.25 });

    const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(40, 20, 20), wireBlue);
    sphere1.position.set(-160, 60, -80);
    scene.add(sphere1);

    const torus1 = new THREE.Mesh(new THREE.TorusGeometry(50, 1.5, 16, 100), wirePurple);
    torus1.position.set(180, -20, -100);
    torus1.rotation.x = Math.PI / 4;
    scene.add(torus1);

    const ico1 = new THREE.Mesh(new THREE.IcosahedronGeometry(32, 2), wireCyan);
    ico1.position.set(20, 120, -150);
    scene.add(ico1);

    // Floating background dust particles (high contrast dark blue dots)
    const dustCount = 600;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 1000;
      dustPos[i + 1] = (Math.random() - 0.5) * 600;
      dustPos[i + 2] = (Math.random() - 0.5) * 800;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 3,
      color: 0x2563eb,
      transparent: true,
      opacity: 0.4,
      map: texture,
      alphaTest: 0.1
    });
    const dustSystem = new THREE.Points(dustGeo, dustMat);
    scene.add(dustSystem);

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
    let count = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      count += 0.03;

      // Antigravity gravity wave calculation
      const posAttr = geometry.attributes.position;
      let pIdx = 0;
      for (let ix = 0; ix < cols; ix++) {
        for (let iz = 0; iz < rows; iz++) {
          const x = (ix - cols / 2) * 18;
          const z = (iz - rows / 2) * 18;
          // Smooth complex gravitational interference waves
          const y = Math.sin(ix * 0.18 + count) * 14 + Math.cos(iz * 0.18 + count * 0.8) * 14;
          posAttr.setY(pIdx, y);
          pIdx++;
        }
      }
      posAttr.needsUpdate = true;

      // Rotate geometric objects
      sphere1.rotation.y = count * 0.2;
      sphere1.rotation.x = count * 0.1;

      torus1.rotation.z = count * 0.25;
      torus1.rotation.y = count * 0.15;

      ico1.rotation.x = -count * 0.2;
      ico1.rotation.y = count * 0.3;

      dustSystem.rotation.y = count * 0.05;

      // Camera tilt interaction
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY + 40 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, -50);

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
      dustGeo.dispose();
      dustMat.dispose();
      sphere1.geometry.dispose();
      torus1.geometry.dispose();
      ico1.geometry.dispose();
      wireBlue.dispose();
      wirePurple.dispose();
      wireCyan.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-grid-pattern"
    />
  );
}
