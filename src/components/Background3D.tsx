'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// ══════════════════════════════════════════════════════════════════
// PHOTOREALISTIC BLACK HOLE — GLSL Shader Engine
// ══════════════════════════════════════════════════════════════════

// ── Shared noise functions ──
const noiseGLSL = /* glsl */ `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x_ = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x_) - 0.5;
    vec3 ox = floor(x_ + 0.5);
    vec3 a0 = x_ - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float f = 0.0;
    f += 0.5000 * snoise(p); p *= 2.02;
    f += 0.2500 * snoise(p); p *= 2.03;
    f += 0.1250 * snoise(p); p *= 2.01;
    f += 0.0625 * snoise(p); p *= 2.02;
    f += 0.0312 * snoise(p);
    return f;
  }

  // Turbulent warp: distorts UVs for organic flow
  vec2 turbulentWarp(vec2 coord, float t) {
    float n1 = snoise(coord * 1.5 + t * 0.3);
    float n2 = snoise(coord * 3.0 - t * 0.2 + 100.0);
    return coord + vec2(n1, n2) * 0.15;
  }
`;

// ══════════════════════════════════════════════════════════════════
// ACCRETION DISK SHADER — main visible disk
// ══════════════════════════════════════════════════════════════════

const accretionVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vWorldPos;
  void main() {
    vUv = uv;
    vPosition = position;
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const accretionFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uInnerRadius;
  uniform float uOuterRadius;
  uniform float uSpeed;       // base orbit speed multiplier
  uniform float uLayerOffset; // vertical offset for multi-layer depth
  uniform float uSeed;        // random seed for variation between layers
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vWorldPos;

  ${noiseGLSL}

  // Black-body temperature → color
  vec3 temperatureColor(float t) {
    vec3 c0 = vec3(0.08, 0.01, 0.0);   // near-black deep red
    vec3 c1 = vec3(0.45, 0.04, 0.0);   // dark crimson
    vec3 c2 = vec3(0.9, 0.18, 0.0);    // deep orange
    vec3 c3 = vec3(1.0, 0.55, 0.0);    // bright orange
    vec3 c4 = vec3(1.0, 0.82, 0.15);   // golden yellow
    vec3 c5 = vec3(1.0, 0.97, 0.7);    // white-yellow
    vec3 c6 = vec3(0.9, 0.95, 1.0);    // blue-white

    if (t < 0.1) return mix(c0, c1, t / 0.1);
    if (t < 0.25) return mix(c1, c2, (t - 0.1) / 0.15);
    if (t < 0.45) return mix(c2, c3, (t - 0.25) / 0.2);
    if (t < 0.65) return mix(c3, c4, (t - 0.45) / 0.2);
    if (t < 0.85) return mix(c4, c5, (t - 0.65) / 0.2);
    return mix(c5, c6, (t - 0.85) / 0.15);
  }

  void main() {
    vec2 centered = vPosition.xz;
    float r = length(centered);
    float angle = atan(centered.y, centered.x);

    float rNorm = (r - uInnerRadius) / (uOuterRadius - uInnerRadius);
    if (rNorm < 0.0 || rNorm > 1.0) discard;

    // ══════════════════════════════════════════
    // 1. TEMPERATURE — inner hot, outer cool
    // ══════════════════════════════════════════
    float temperature = pow(max(0.0, 1.0 - rNorm), 1.5) * 0.85 + 0.08;

    // ══════════════════════════════════════════
    // 2. TURBULENCE WAVES — multiple layers
    // ══════════════════════════════════════════
    float time = uTime * uSpeed;

    // Large-scale spiral flow
    float spiralPhase = angle + r * 0.025 - time * 0.7;
    vec2 spiralUV = vec2(cos(spiralPhase), sin(spiralPhase)) * rNorm * 5.0;
    float largeWave = fbm(turbulentWarp(spiralUV, time * 0.4)) * 0.4;

    // Medium-scale turbulent eddies
    float eddyPhase = angle * 1.5 + r * 0.08 + time * 0.35;
    vec2 eddyUV = vec2(eddyPhase, rNorm * 6.0 + uSeed);
    float eddies = fbm(turbulentWarp(eddyUV, time * 0.6)) * 0.3;

    // Fine detail filaments — thin spiral arms of hot gas
    float filament = sin(angle * 7.0 + r * 0.2 - time * 1.2 + uSeed * 3.0);
    filament = smoothstep(0.3, 0.7, filament) * 0.25;

    // Radial density waves — concentric ripples moving outward
    float radialWave = sin(r * 0.12 - time * 0.9 + uSeed) * 0.5 + 0.5;
    radialWave *= sin(r * 0.06 + time * 0.4) * 0.5 + 0.5;
    radialWave *= 0.2;

    // Hot turbulent plasma blobs
    float blobs = fbm(vec2(
      angle * 3.0 + time * 0.25 + uSeed * 5.0,
      rNorm * 4.0 - time * 0.6
    ));
    blobs = smoothstep(0.1, 0.7, blobs) * 0.3;

    // Combine all turbulence
    float turbulence = largeWave + eddies + filament + radialWave + blobs;
    temperature += turbulence;
    temperature = clamp(temperature, 0.0, 1.0);

    // ══════════════════════════════════════════
    // 3. DOPPLER BEAMING — asymmetric brightness
    // ══════════════════════════════════════════
    float doppler = 1.0 + 0.6 * sin(angle - time * 0.15);
    doppler *= 1.0 + 0.12 * sin(angle * 2.0 + time * 0.4 + uSeed);

    // ══════════════════════════════════════════
    // 4. INNER EDGE GLOW — ultra-bright rim
    // ══════════════════════════════════════════
    float innerEdge = 1.0 - smoothstep(0.0, 0.06, rNorm);
    float edgeGlow = innerEdge * 2.5;

    // Secondary inner rim (photon ring region)
    float innerRim = smoothstep(0.0, 0.04, rNorm) * (1.0 - smoothstep(0.04, 0.12, rNorm));
    edgeGlow += innerRim * 1.5;

    // ══════════════════════════════════════════
    // 5. OUTER FADE — soft disk edge
    // ══════════════════════════════════════════
    float outerFade = 1.0 - smoothstep(0.65, 1.0, rNorm);

    // ══════════════════════════════════════════
    // 6. COMBINE
    // ══════════════════════════════════════════
    float brightness = (temperature + edgeGlow) * doppler * outerFade;
    brightness = max(brightness, 0.0);

    vec3 color = temperatureColor(temperature);
    color *= brightness * 1.8;

    // Blue-white hot inner glow
    color += vec3(0.12, 0.18, 0.35) * innerEdge * 0.5;

    // Slight vertical glow fade (thinner at edges)
    float vertFade = 1.0 - smoothstep(0.0, 0.3, abs(uLayerOffset));
    vertFade = mix(vertFade, 1.0, 0.6);

    float alpha = outerFade * smoothstep(0.0, 0.04, rNorm) * min(brightness * 1.8, 1.0) * vertFade;

    gl_FragColor = vec4(color, alpha);
  }
`;

// ══════════════════════════════════════════════════════════════════
// LENS RING SHADER — gravitational lensing warp
// ══════════════════════════════════════════════════════════════════

const lensVertexShader = /* glsl */ `
  varying vec3 vPosition;
  void main() {
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const lensFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uInnerRadius;
  uniform float uOuterRadius;
  uniform float uSign;
  uniform float uSeed;
  varying vec3 vPosition;

  ${noiseGLSL}

  vec3 temperatureColor(float t) {
    vec3 c0 = vec3(0.1, 0.02, 0.0);
    vec3 c1 = vec3(0.5, 0.08, 0.0);
    vec3 c2 = vec3(0.9, 0.25, 0.0);
    vec3 c3 = vec3(1.0, 0.6, 0.05);
    vec3 c4 = vec3(1.0, 0.85, 0.3);

    if (t < 0.2) return mix(c0, c1, t / 0.2);
    if (t < 0.45) return mix(c1, c2, (t - 0.2) / 0.25);
    if (t < 0.7) return mix(c2, c3, (t - 0.45) / 0.25);
    return mix(c3, c4, (t - 0.7) / 0.3);
  }

  void main() {
    vec2 centered = vPosition.xz;
    float r = length(centered);
    float angle = atan(centered.y, centered.x);

    float rNorm = (r - uInnerRadius) / (uOuterRadius - uInnerRadius);
    if (rNorm < 0.0 || rNorm > 1.0) discard;

    // Warped height computation
    float warpHeight = sqrt(max(0.0, rNorm * rNorm - 0.1)) * 40.0 * uSign;

    // Temperature with turbulence
    float temperature = pow(max(0.0, 1.0 - rNorm), 1.3) * 0.7 + 0.12;

    // Turbulent flow in the lensed ring
    float time = uTime * 0.7;
    float turb = fbm(vec2(
      angle * 2.5 + time * 0.2 + uSeed * 3.0,
      rNorm * 4.0 - time * 0.3
    )) * 0.2;
    temperature += turb;
    temperature = clamp(temperature, 0.0, 1.0);

    // Doppler
    float doppler = 1.0 + 0.45 * sin(angle - uTime * 0.15);

    // Spiral filament pattern on the lensed ring
    float filament = sin(angle * 5.0 + rNorm * 8.0 - time * 0.8 + uSeed * 7.0);
    filament = smoothstep(0.2, 0.8, filament) * 0.15;
    temperature += filament;

    vec3 color = temperatureColor(temperature);
    float brightness = temperature * doppler * 1.3;
    color *= brightness;

    float outerFade = 1.0 - smoothstep(0.55, 1.0, rNorm);
    float innerBright = smoothstep(0.0, 0.1, rNorm);
    float alpha = outerFade * innerBright * 0.6 * min(brightness, 1.0);

    gl_FragColor = vec4(color, alpha);
  }
`;

// ══════════════════════════════════════════════════════════════════
// GRAVITATIONAL WAVE SHADER — concentric ripples from the disk
// ══════════════════════════════════════════════════════════════════

const gwVertexShader = /* glsl */ `
  varying vec3 vPosition;
  void main() {
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const gwFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uInnerRadius;
  uniform float uOuterRadius;
  varying vec3 vPosition;

  void main() {
    vec2 centered = vPosition.xz;
    float r = length(centered);
    float rNorm = (r - uInnerRadius) / (uOuterRadius - uInnerRadius);
    if (rNorm < 0.0 || rNorm > 1.0) discard;

    // Concentric gravitational wave rings
    float wave1 = sin(r * 0.15 - uTime * 1.2) * 0.5 + 0.5;
    float wave2 = sin(r * 0.08 + uTime * 0.6) * 0.5 + 0.5;
    float wave3 = sin(r * 0.22 - uTime * 0.9) * 0.5 + 0.5;

    float waves = wave1 * 0.5 + wave2 * 0.3 + wave3 * 0.2;

    // Fade at edges
    float fade = smoothstep(0.0, 0.15, rNorm) * (1.0 - smoothstep(0.7, 1.0, rNorm));

    // Concentric ring pattern
    float rings = sin(r * 0.3 - uTime * 0.7) * 0.5 + 0.5;
    rings = smoothstep(0.4, 0.6, rings) * 0.3;

    float brightness = (waves * 0.15 + rings * 0.1) * fade;
    vec3 color = vec3(1.0, 0.6, 0.15) * brightness;

    gl_FragColor = vec4(color, brightness * 0.4);
  }
`;

// ══════════════════════════════════════════════════════════════════
// VOLUMETRIC GLOW SHADER — atmospheric corona
// ══════════════════════════════════════════════════════════════════

const glowVertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    vViewDir = normalize(-mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const glowFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uIntensity;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    // Fresnel rim glow
    float fresnel = 1.0 - abs(dot(vNormal, vViewDir));
    fresnel = pow(fresnel, 2.2);

    // Pulsing
    float pulse = 1.0 + sin(uTime * 1.2) * 0.1 + sin(uTime * 2.7) * 0.05;

    // Slight noise in the glow
    float noise = sin(vNormal.x * 8.0 + uTime * 0.5) * sin(vNormal.y * 6.0 - uTime * 0.3) * 0.1 + 1.0;

    float alpha = fresnel * uIntensity * pulse * noise;
    gl_FragColor = vec4(uColor, alpha);
  }
`;

// ══════════════════════════════════════════════════════════════════
// COMPONENT
// ══════════════════════════════════════════════════════════════════

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      48,
      window.innerWidth / window.innerHeight,
      0.5,
      3000
    );
    camera.position.set(0, 45, 190);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const bhGroup = new THREE.Group();
    scene.add(bhGroup);

    // ══════════════════════════════════════════════
    // 1. EVENT HORIZON
    // ══════════════════════════════════════════════
    const horizonGeo = new THREE.SphereGeometry(36, 128, 128);
    const horizonMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    bhGroup.add(new THREE.Mesh(horizonGeo, horizonMat));

    // ══════════════════════════════════════════════
    // 2. PHOTON RING — thin bright ring at edge
    // ══════════════════════════════════════════════
    const pRing1Geo = new THREE.TorusGeometry(38, 0.45, 32, 256);
    const pRing1Mat = new THREE.MeshBasicMaterial({
      color: 0xffdd55, transparent: true, opacity: 0.95,
    });
    const pRing1 = new THREE.Mesh(pRing1Geo, pRing1Mat);
    bhGroup.add(pRing1);

    const pRing2Geo = new THREE.TorusGeometry(39.5, 1.2, 32, 256);
    const pRing2Mat = new THREE.MeshBasicMaterial({
      color: 0xff9922, transparent: true, opacity: 0.5,
    });
    const pRing2 = new THREE.Mesh(pRing2Geo, pRing2Mat);
    bhGroup.add(pRing2);

    // Outer photon ring halo
    const pRing3Geo = new THREE.TorusGeometry(42, 3.0, 32, 256);
    const pRing3Mat = new THREE.MeshBasicMaterial({
      color: 0xff6600, transparent: true, opacity: 0.2,
    });
    const pRing3 = new THREE.Mesh(pRing3Geo, pRing3Mat);
    bhGroup.add(pRing3);

    // ══════════════════════════════════════════════
    // 3. ACCRETION DISK — multi-layer shader
    // ══════════════════════════════════════════════
    const IR = 42;
    const OR = 230;

    interface DiskLayer {
      innerR: number;
      outerR: number;
      yOffset: number;
      speed: number;
      seed: number;
    }
    const layers: DiskLayer[] = [
      { innerR: IR, outerR: OR, yOffset: 0, speed: 1.0, seed: 0 },
      { innerR: IR + 4, outerR: OR - 15, yOffset: 1.0, speed: 0.85, seed: 1.7 },
      { innerR: IR + 8, outerR: OR - 30, yOffset: -0.8, speed: 1.1, seed: 3.2 },
      { innerR: IR + 1, outerR: OR + 5, yOffset: 2.0, speed: 0.7, seed: 5.1 },
    ];

    const diskMaterials: THREE.ShaderMaterial[] = [];
    const diskMeshes: THREE.Mesh[] = [];

    for (const layer of layers) {
      const uniforms = {
        uTime: { value: 0 },
        uInnerRadius: { value: layer.innerR },
        uOuterRadius: { value: layer.outerR },
        uSpeed: { value: layer.speed },
        uLayerOffset: { value: layer.yOffset },
        uSeed: { value: layer.seed },
      };
      const geo = new THREE.RingGeometry(layer.innerR, layer.outerR, 256, 64);
      const mat = new THREE.ShaderMaterial({
        vertexShader: accretionVertexShader,
        fragmentShader: accretionFragmentShader,
        uniforms,
        transparent: true,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.y = layer.yOffset;
      bhGroup.add(mesh);
      diskMaterials.push(mat);
      diskMeshes.push(mesh);
    }

    // ══════════════════════════════════════════════
    // 4. GRAVITATIONAL LENSING — top & bottom warp rings
    // ══════════════════════════════════════════════
    const LR_IN = 38;
    const LR_OUT = 180;

    interface LensConfig {
      sign: number;
      seed: number;
    }
    const lensConfigs: LensConfig[] = [
      { sign: 1, seed: 0 },
      { sign: -1, seed: 2.3 },
      { sign: 1, seed: 4.7 },
      { sign: -1, seed: 6.1 },
    ];

    const lensMaterials: THREE.ShaderMaterial[] = [];
    for (const cfg of lensConfigs) {
      const uniforms = {
        uTime: { value: 0 },
        uInnerRadius: { value: LR_IN },
        uOuterRadius: { value: LR_OUT },
        uSign: { value: cfg.sign },
        uSeed: { value: cfg.seed },
      };
      const geo = new THREE.RingGeometry(LR_IN, LR_OUT, 256, 32);
      const mat = new THREE.ShaderMaterial({
        vertexShader: lensVertexShader,
        fragmentShader: lensFragmentShader,
        uniforms,
        transparent: true,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      bhGroup.add(mesh);
      lensMaterials.push(mat);
    }

    // ══════════════════════════════════════════════
    // 5. GRAVITATIONAL WAVE RIPPLES
    // ══════════════════════════════════════════════
    const gwUniforms = {
      uTime: { value: 0 },
      uInnerRadius: { value: 44 },
      uOuterRadius: { value: 250 },
    };
    const gwGeo = new THREE.RingGeometry(44, 250, 256, 32);
    const gwMat = new THREE.ShaderMaterial({
      vertexShader: gwVertexShader,
      fragmentShader: gwFragmentShader,
      uniforms: gwUniforms,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const gwMesh = new THREE.Mesh(gwGeo, gwMat);
    gwMesh.rotation.x = -Math.PI / 2;
    bhGroup.add(gwMesh);

    // Second GW ring at different angle
    const gw2Uniforms = {
      uTime: { value: 0 },
      uInnerRadius: { value: 50 },
      uOuterRadius: { value: 220 },
    };
    const gw2Mat = new THREE.ShaderMaterial({
      vertexShader: gwVertexShader,
      fragmentShader: gwFragmentShader,
      uniforms: gw2Uniforms,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const gw2Mesh = new THREE.Mesh(
      new THREE.RingGeometry(50, 220, 256, 32),
      gw2Mat
    );
    gw2Mesh.rotation.x = -Math.PI / 2;
    gw2Mesh.rotation.z = 0.3;
    bhGroup.add(gw2Mesh);

    // ══════════════════════════════════════════════
    // 6. VOLUMETRIC GLOW — shader-based corona
    // ══════════════════════════════════════════════
    const glowData = [
      { radius: 50, color: new THREE.Color(1.0, 0.65, 0.15), intensity: 0.22 },
      { radius: 60, color: new THREE.Color(1.0, 0.5, 0.1), intensity: 0.14 },
      { radius: 72, color: new THREE.Color(0.95, 0.35, 0.06), intensity: 0.08 },
      { radius: 88, color: new THREE.Color(0.85, 0.2, 0.03), intensity: 0.05 },
      { radius: 110, color: new THREE.Color(0.65, 0.12, 0.02), intensity: 0.03 },
    ];
    const glowMeshes: THREE.Mesh[] = [];
    for (const gd of glowData) {
      const geo = new THREE.SphereGeometry(gd.radius, 64, 64);
      const mat = new THREE.ShaderMaterial({
        vertexShader: glowVertexShader,
        fragmentShader: glowFragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: gd.color },
          uIntensity: { value: gd.intensity },
        },
        transparent: true,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);
      bhGroup.add(mesh);
      glowMeshes.push(mesh);
    }

    // ══════════════════════════════════════════════
    // 7. RELATIVISTIC JETS
    // ══════════════════════════════════════════════
    function makeTex(sz: number, inner: string, outer: string) {
      const c = document.createElement('canvas');
      c.width = sz; c.height = sz;
      const ctx = c.getContext('2d')!;
      const g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, sz / 2);
      g.addColorStop(0, inner);
      g.addColorStop(0.25, outer);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, sz, sz);
      return new THREE.CanvasTexture(c);
    }

    const jetTex = makeTex(128, 'rgba(190,210,255,1)', 'rgba(80,130,230,0.08)');
    const JN = 4000;
    const jGeo = new THREE.BufferGeometry();
    const jPos = new Float32Array(JN * 3);
    const jCol = new Float32Array(JN * 3);
    for (let i = 0; i < JN; i++) {
      const h = 42 + Math.random() * 400;
      const spread = h * 0.05;
      const a = Math.random() * Math.PI * 2;
      const rr = Math.random() * spread;
      const dir = i < JN / 2 ? 1 : -1;
      jPos[i * 3] = Math.cos(a) * rr;
      jPos[i * 3 + 1] = dir * h;
      jPos[i * 3 + 2] = Math.sin(a) * rr;
      const b = 1 - (h - 42) / 400;
      jCol[i * 3] = 0.5 * b + 0.3;
      jCol[i * 3 + 1] = 0.6 * b + 0.3;
      jCol[i * 3 + 2] = b;
    }
    jGeo.setAttribute('position', new THREE.BufferAttribute(jPos, 3));
    jGeo.setAttribute('color', new THREE.BufferAttribute(jCol, 3));
    const jMat = new THREE.PointsMaterial({
      size: 2.0, vertexColors: true, map: jetTex,
      transparent: true, opacity: 0.5,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
    });
    const jets = new THREE.Points(jGeo, jMat);
    bhGroup.add(jets);

    // ══════════════════════════════════════════════
    // 8. STARFIELD
    // ══════════════════════════════════════════════
    const sTex = makeTex(64, 'rgba(255,255,255,1)', 'rgba(200,220,255,0.04)');
    const SN = 4000;
    const sGeo = new THREE.BufferGeometry();
    const sp = new Float32Array(SN * 3);
    const sc = new Float32Array(SN * 3);
    for (let i = 0; i < SN; i++) {
      sp[i * 3] = (Math.random() - 0.5) * 2600;
      sp[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      sp[i * 3 + 2] = (Math.random() - 0.5) * 2600;
      const t = Math.random();
      if (t < 0.6) { sc[i*3]=0.92; sc[i*3+1]=0.92; sc[i*3+2]=1.0; }
      else if (t < 0.8) { sc[i*3]=0.72; sc[i*3+1]=0.82; sc[i*3+2]=1.0; }
      else { sc[i*3]=1.0; sc[i*3+1]=0.87; sc[i*3+2]=0.58; }
    }
    sGeo.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    sGeo.setAttribute('color', new THREE.BufferAttribute(sc, 3));
    const sMat = new THREE.PointsMaterial({
      size: 1.6, vertexColors: true, map: sTex,
      transparent: true, opacity: 0.8,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
    });
    const stars = new THREE.Points(sGeo, sMat);
    scene.add(stars);

    // ══════════════════════════════════════════════
    // 9. NEBULA DUST
    // ══════════════════════════════════════════════
    const nTex = makeTex(128, 'rgba(200,90,25,1)', 'rgba(100,35,8,0.08)');
    const NN = 2500;
    const nGeo = new THREE.BufferGeometry();
    const np = new Float32Array(NN * 3);
    const nc = new Float32Array(NN * 3);
    for (let i = 0; i < NN; i++) {
      np[i * 3] = (Math.random() - 0.5) * 1000;
      np[i * 3 + 1] = (Math.random() - 0.5) * 800;
      np[i * 3 + 2] = (Math.random() - 0.5) * 1000;
      const w = Math.random();
      nc[i * 3] = 0.35 + w * 0.45;
      nc[i * 3 + 1] = 0.06 + w * 0.14;
      nc[i * 3 + 2] = 0.02 + Math.random() * 0.04;
    }
    nGeo.setAttribute('position', new THREE.BufferAttribute(np, 3));
    nGeo.setAttribute('color', new THREE.BufferAttribute(nc, 3));
    const nMat = new THREE.PointsMaterial({
      size: 10, vertexColors: true, map: nTex,
      transparent: true, opacity: 0.1,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
    });
    const nebula = new THREE.Points(nGeo, nMat);
    scene.add(nebula);

    // Tilt for Interstellar angle
    bhGroup.rotation.x = 0.35;
    bhGroup.rotation.z = -0.08;

    // ══════════════════════════════════════════════
    // 10. MOUSE TRACKING
    // ══════════════════════════════════════════════
    let mx = 0, my = 0;
    let ttx = 0.35, tty = 0;

    const onMM = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      mx = nx * 200; my = ny * 150;
      tty = nx * 0.28;
      ttx = 0.35 - ny * 0.16;
    };
    window.addEventListener('mousemove', onMM);

    const onR = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onR);

    // ══════════════════════════════════════════════
    // 11. ANIMATION LOOP
    // ══════════════════════════════════════════════
    let aid: number;
    const clock = new THREE.Clock();

    const animate = () => {
      aid = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth tilt
      bhGroup.rotation.y += (tty - bhGroup.rotation.y) * 0.035;
      bhGroup.rotation.x += (ttx - bhGroup.rotation.x) * 0.035;

      // Update all disk shader times
      diskMaterials.forEach((m) => { m.uniforms.uTime.value = t; });
      lensMaterials.forEach((m) => { m.uniforms.uTime.value = t; });
      gwMat.uniforms.uTime.value = t;
      gw2Mat.uniforms.uTime.value = t;
      glowMeshes.forEach((m) => {
        (m.material as THREE.ShaderMaterial).uniforms.uTime.value = t;
      });

      // Photon ring pulse & rotation
      const p = 1 + Math.sin(t * 2.2) * 0.045;
      pRing1.scale.setScalar(p);
      pRing2.scale.setScalar(p * 1.01);
      pRing3.scale.setScalar(p * 1.02);
      pRing1.rotation.z = t * 0.055;
      pRing2.rotation.z = -t * 0.035;
      pRing3.rotation.z = t * 0.025;

      // Jets
      jets.rotation.y = t * 0.1;
      jMat.opacity = 0.35 + Math.sin(t * 0.8) * 0.18;

      // Nebula
      nebula.rotation.y = t * 0.006;
      nebula.rotation.x = Math.sin(t * 0.03) * 0.012;

      // Stars
      stars.rotation.y = t * 0.002;

      // Camera parallax
      camera.position.x += (mx * 0.09 - camera.position.x) * 0.03;
      camera.position.y += (-my * 0.06 + 45 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    // ══════════════════════════════════════════════
    // 12. CLEANUP
    // ══════════════════════════════════════════════
    return () => {
      window.removeEventListener('mousemove', onMM);
      window.removeEventListener('resize', onR);
      cancelAnimationFrame(aid);
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
          obj.geometry.dispose();
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((m) => m.dispose());
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black"
    />
  );
}
