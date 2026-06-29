'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0004);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      1,
      3000
    );
    camera.position.set(0, 100, 450);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    // --- STAR TEXTURE (sharp center, soft glow) ---
    const starCanvas = document.createElement('canvas');
    starCanvas.width = 64;
    starCanvas.height = 64;
    const sCtx = starCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.15, 'rgba(255, 255, 255, 0.9)');
      grad.addColorStop(0.4, 'rgba(200, 220, 255, 0.4)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 64, 64);
    }
    const starTexture = new THREE.CanvasTexture(starCanvas);

    // --- SPIRAL GALAXY STAR FIELD ---
    const starCount = 8000;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starCol = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    // Realistic galaxy colors: warm whites, pale blues, hints of gold
    const galaxyColors = [
      new THREE.Color('#ffffff'),    // Bright white core stars
      new THREE.Color('#e8e0f0'),    // Warm white
      new THREE.Color('#c8d8ff'),    // Pale blue
      new THREE.Color('#ffd6a5'),    // Warm gold (older stars)
      new THREE.Color('#a0c0ff'),    // Cool blue (young stars)
      new THREE.Color('#f0e8ff'),    // Faint lavender
      new THREE.Color('#ffe8d0'),    // Warm peach
      new THREE.Color('#d0e0ff'),    // Ice blue
    ];

    for (let i = 0; i < starCount; i++) {
      const arm = i % 4;
      const armAngle = (arm * Math.PI * 2) / 4;
      const dist = Math.pow(Math.random(), 0.5) * 500 + 20;
      const spinAngle = dist * 0.006;
      const randomAngle = (Math.random() - 0.5) * (Math.PI * 2) * (0.5 - dist / 1200);
      const angle = armAngle + spinAngle + randomAngle;

      const spreadX = (Math.random() - 0.5) * (15 + dist * 0.15);
      const spreadY = (Math.random() - 0.5) * (5 + dist * 0.04);
      const spreadZ = (Math.random() - 0.5) * (15 + dist * 0.15);

      starPos[i * 3] = Math.cos(angle) * dist + spreadX;
      starPos[i * 3 + 1] = spreadY;
      starPos[i * 3 + 2] = Math.sin(angle) * dist + spreadZ;

      // Brighter toward center, dimmer at edges
      const brightness = Math.max(0.2, 1 - dist / 500);
      const colorIdx = Math.floor(Math.random() * galaxyColors.length);
      const color = galaxyColors[colorIdx];
      starCol[i * 3] = color.r * brightness;
      starCol[i * 3 + 1] = color.g * brightness;
      starCol[i * 3 + 2] = color.b * brightness;

      starSizes[i] = (Math.random() * 2 + 0.5) * brightness;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCol, 3));

    const starMat = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      opacity: 0.95,
      alphaTest: 0.05,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // --- BACKGROUND DEEP FIELD STARS (scattered far) ---
    const deepCount = 2000;
    const deepGeo = new THREE.BufferGeometry();
    const deepPos = new Float32Array(deepCount * 3);
    const deepCol = new Float32Array(deepCount * 3);

    for (let i = 0; i < deepCount; i++) {
      deepPos[i * 3] = (Math.random() - 0.5) * 2000;
      deepPos[i * 3 + 1] = (Math.random() - 0.5) * 1000;
      deepPos[i * 3 + 2] = (Math.random() - 0.5) * 2000 - 200;

      const b = 0.3 + Math.random() * 0.5;
      deepCol[i * 3] = b;
      deepCol[i * 3 + 1] = b;
      deepCol[i * 3 + 2] = b + Math.random() * 0.2;
    }

    deepGeo.setAttribute('position', new THREE.BufferAttribute(deepPos, 3));
    deepGeo.setAttribute('color', new THREE.BufferAttribute(deepCol, 3));

    const deepMat = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      opacity: 0.6,
      alphaTest: 0.05,
      sizeAttenuation: true,
    });

    const deepStars = new THREE.Points(deepGeo, deepMat);
    scene.add(deepStars);

    // --- BLACK HOLE ---
    const bhCenter = new THREE.Vector3(0, 15, -80);

    // Event horizon - pure black sphere
    const ehGeo = new THREE.SphereGeometry(30, 64, 64);
    const ehMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
    });
    const eventHorizon = new THREE.Mesh(ehGeo, ehMat);
    eventHorizon.position.copy(bhCenter);
    scene.add(eventHorizon);

    // Photon sphere - thin bright ring right at the edge
    const photonGeo = new THREE.RingGeometry(30, 32, 128);
    const photonMat = new THREE.MeshBasicMaterial({
      color: 0xffeedd,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
    const photonSphere = new THREE.Mesh(photonGeo, photonMat);
    photonSphere.position.copy(bhCenter);
    scene.add(photonSphere);

    // --- ACCRETION DISK (realistic hot gas) ---
    const diskGroup = new THREE.Group();
    diskGroup.position.copy(bhCenter);

    // Main accretion disk - shader-based
    const diskGeo = new THREE.RingGeometry(35, 160, 128, 8);
    const diskMat = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vDist;
        void main() {
          vUv = uv;
          vDist = length(position.xy);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying float vDist;
        
        void main() {
          float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
          float dist = length(vUv - vec2(0.5));
          
          // Swirling motion
          float swirl = sin(angle * 4.0 + uTime * 0.8 + dist * 15.0) * 0.5 + 0.5;
          float swirl2 = sin(angle * 7.0 - uTime * 0.5 + dist * 20.0) * 0.5 + 0.5;
          
          // Hot inner disk (white-blue), cooler outer (orange-red)
          float t = smoothstep(0.0, 0.5, dist);
          
          vec3 hotInner = vec3(1.0, 0.95, 0.9);    // White-hot
          vec3 warmMid = vec3(1.0, 0.7, 0.3);       // Orange
          vec3 coolOuter = vec3(0.8, 0.3, 0.1);     // Red-orange
          vec3 coolFar = vec3(0.3, 0.1, 0.05);      // Dark red
          
          vec3 color;
          if (t < 0.3) {
            color = mix(hotInner, warmMid, t / 0.3);
          } else if (t < 0.6) {
            color = mix(warmMid, coolOuter, (t - 0.3) / 0.3);
          } else {
            color = mix(coolOuter, coolFar, (t - 0.6) / 0.4);
          }
          
          // Add turbulence
          color += swirl * 0.15;
          color += swirl2 * 0.08;
          
          // Brightness falloff: bright near black hole, dim far
          float brightness = smoothstep(1.0, 0.1, dist) * 0.6;
          brightness *= swirl * 0.3 + 0.7;
          
          // Doppler beaming effect (one side brighter)
          float doppler = sin(angle + uTime * 0.3) * 0.3 + 0.7;
          brightness *= doppler;
          
          gl_FragColor = vec4(color * brightness, brightness * 0.7);
        }
      `,
    });

    const disk = new THREE.Mesh(diskGeo, diskMat);
    disk.rotation.x = Math.PI * 0.42;
    diskGroup.add(disk);

    // Counter-rotating disk layer (relativistic effect)
    const disk2Geo = new THREE.RingGeometry(40, 140, 128, 6);
    const disk2Mat = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          float dist = length(vUv - vec2(0.5));
          float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
          float swirl = sin(angle * 5.0 - uTime * 0.6 + dist * 12.0) * 0.5 + 0.5;
          
          vec3 color = mix(vec3(0.6, 0.4, 0.2), vec3(0.3, 0.15, 0.05), dist);
          float brightness = smoothstep(0.8, 0.15, dist) * 0.25;
          brightness *= swirl * 0.4 + 0.6;
          
          gl_FragColor = vec4(color, brightness);
        }
      `,
    });

    const disk2 = new THREE.Mesh(disk2Geo, disk2Mat);
    disk2.rotation.x = Math.PI * 0.38;
    disk2.rotation.z = 0.1;
    diskGroup.add(disk2);

    scene.add(diskGroup);

    // --- GRAVITATIONAL LENSING GLOW (around black hole) ---
    const lensGeo = new THREE.RingGeometry(28, 60, 128);
    const lensMat = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          float dist = length(vUv - vec2(0.5));
          
          // Bright ring near event horizon, fading outward
          float ring = smoothstep(0.1, 0.25, dist) * smoothstep(0.5, 0.25, dist);
          
          float pulse = sin(uTime * 0.5) * 0.1 + 0.9;
          ring *= pulse;
          
          vec3 color = mix(
            vec3(1.0, 0.9, 0.7),
            vec3(0.7, 0.5, 0.3),
            dist
          );
          
          gl_FragColor = vec4(color, ring * 0.4);
        }
      `,
    });

    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.position.copy(bhCenter);
    lens.rotation.x = Math.PI * 0.42;
    scene.add(lens);

    // --- JET STRUCTURE (relativistic jets from poles) ---
    const jetGeo = new THREE.CylinderGeometry(1.5, 0.5, 200, 16);
    const jetMat = new THREE.MeshBasicMaterial({
      color: 0x88aaff,
      transparent: true,
      opacity: 0.08,
    });

    const jetTop = new THREE.Mesh(jetGeo, jetMat);
    jetTop.position.set(bhCenter.x, bhCenter.y + 120, bhCenter.z);
    scene.add(jetTop);

    const jetBottom = new THREE.Mesh(jetGeo, jetMat.clone());
    jetBottom.position.set(bhCenter.x, bhCenter.y - 120, bhCenter.z);
    scene.add(jetBottom);

    // --- AMBIENT DUST CLOUDS ---
    const dustCount = 500;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    const dustCol = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 1200;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 500;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 800 - 100;

      const warmth = Math.random();
      dustCol[i * 3] = 0.5 + warmth * 0.3;
      dustCol[i * 3 + 1] = 0.4 + warmth * 0.2;
      dustCol[i * 3 + 2] = 0.3 + warmth * 0.1;
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dustCol, 3));

    const dustMat = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.2,
      map: starTexture,
      alphaTest: 0.05,
    });

    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    // --- Mouse tracking ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    let count = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      count += 0.003;

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      // Rotate galaxy slowly
      stars.rotation.y = count * 0.12;
      stars.rotation.x = Math.sin(count * 0.08) * 0.03;

      // Deep field slow drift
      deepStars.rotation.y = count * 0.02;

      // Accretion disk rotation
      diskMat.uniforms.uTime.value = count;
      disk2Mat.uniforms.uTime.value = count;
      lensMat.uniforms.uTime.value = count;

      // Photon sphere pulse
      photonMat.opacity = 0.3 + Math.sin(count * 3) * 0.15;

      // Dust drift
      dust.rotation.y = count * 0.03;

      // Camera parallax
      camera.position.x += (targetX * 35 - camera.position.x) * 0.02;
      camera.position.y += (targetY * 20 + 100 - camera.position.y) * 0.02;
      camera.lookAt(bhCenter);

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
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ background: '#000000' }}
    />
  );
}
