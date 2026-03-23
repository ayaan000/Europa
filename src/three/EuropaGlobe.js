import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Enhanced Europa Globe — PRIMARY INTERACTIVE FEATURE
 * 5 visualization modes:
 *  1. surface     — Procedural ice texture (lineae, chaos terrain, ridged bands)
 *  2. internal    — Cutaway showing ice shell, ocean, mantle, core
 *  3. convection  — Ocean convective plumes + ice thinning regions
 *  4. magnetic    — Jupiter's field lines + induced field + current arrows
 *  5. tidal       — Tidal stress pattern (colour-mapped surface strain)
 */
export function createEuropaGlobe(container, initialMode = 'surface') {
  const width  = container.clientWidth;
  const height = container.clientHeight || 420;

  /* ===================== SCENE SETUP ===================== */
  const scene    = new THREE.Scene();
  scene.background = new THREE.Color(0x020408);

  const camera   = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0.5, 3.2);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping   = THREE.ACESFilmicToneMapping;
  renderer.localClippingEnabled = true;
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping   = true;
  controls.dampingFactor   = 0.05;
  controls.minDistance      = 1.8;
  controls.maxDistance      = 6;
  controls.autoRotate       = true;
  controls.autoRotateSpeed  = 0.4;

  // Lighting
  const jupiterLight = new THREE.PointLight(0xffe4c4, 1.5, 50);
  jupiterLight.position.set(5, 2, 3);
  scene.add(jupiterLight);

  const ambientLight = new THREE.AmbientLight(0x334466, 0.6);
  scene.add(ambientLight);

  const rimLight = new THREE.PointLight(0x4488ff, 0.4, 20);
  rimLight.position.set(-3, 1, -2);
  scene.add(rimLight);

  // Stars
  const starsGeo = new THREE.BufferGeometry();
  const starPos  = new Float32Array(3000);
  for (let i = 0; i < 3000; i++) starPos[i] = (Math.random() - 0.5) * 40;
  starsGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  scene.add(new THREE.Points(starsGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.02, transparent: true, opacity: 0.6 })));

  /* ===================== SURFACE MODE ===================== */
  const europaTexture = generateEuropaTexture();
  const bumpTexture   = generateEuropaBump();

  const surfaceGeo = new THREE.SphereGeometry(1, 128, 128);
  const surfaceMat = new THREE.MeshStandardMaterial({
    map: europaTexture, bumpMap: bumpTexture, bumpScale: 0.02,
    roughness: 0.7, metalness: 0.05,
  });
  const surfaceMesh = new THREE.Mesh(surfaceGeo, surfaceMat);
  scene.add(surfaceMesh);

  const glowGeo = new THREE.SphereGeometry(1.02, 64, 64);
  const glowMat = new THREE.MeshBasicMaterial({ color: 0x6699cc, transparent: true, opacity: 0.04, side: THREE.BackSide });
  const glowMesh = new THREE.Mesh(glowGeo, glowMat);
  scene.add(glowMesh);

  /* ===================== INTERNAL MODE ===================== */
  const internalGroup = createInternalLayers();
  internalGroup.visible = false;
  scene.add(internalGroup);

  /* ===================== CONVECTION MODE ===================== */
  const convectionGroup = new THREE.Group();
  convectionGroup.visible = false;
  scene.add(convectionGroup);

  // Semi-transparent shell showing thin / thick regions
  const convShellTex = generateConvectionTexture();
  const convShellMat = new THREE.MeshStandardMaterial({
    map: convShellTex, transparent: true, opacity: 0.7,
    roughness: 0.5, metalness: 0.0,
  });
  const convShellMesh = new THREE.Mesh(new THREE.SphereGeometry(1, 128, 128), convShellMat);
  convectionGroup.add(convShellMesh);

  // Convective plumes — particle system rising from interior
  const plumeData = createConvectionPlumes();
  convectionGroup.add(plumeData.points);

  // Ocean layer visible under semi-transparent shell
  const oceanGlowMat = new THREE.MeshBasicMaterial({ color: 0x1a6baa, transparent: true, opacity: 0.25, side: THREE.FrontSide });
  convectionGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.88, 64, 64), oceanGlowMat));

  /* ===================== MAGNETIC MODE ===================== */
  const magneticGroup = new THREE.Group();
  magneticGroup.visible = false;
  scene.add(magneticGroup);

  // Europa body (dimmed)
  const magEuropaMat = new THREE.MeshStandardMaterial({
    map: europaTexture, transparent: true, opacity: 0.4,
    roughness: 0.8, metalness: 0.0,
  });
  magneticGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), magEuropaMat));

  // Jupiter's dipolar field lines passing through
  createMagneticFieldLines(magneticGroup);

  // Induced field loops around Europa
  createInducedFieldLines(magneticGroup);

  // Current arrows (J × B = F)
  createCurrentArrows(magneticGroup);

  /* ===================== TIDAL MODE ===================== */
  const tidalGroup = new THREE.Group();
  tidalGroup.visible = false;
  scene.add(tidalGroup);

  const tidalTex = generateTidalStressTexture();
  const tidalMat = new THREE.MeshStandardMaterial({
    map: tidalTex, roughness: 0.5, metalness: 0.1,
  });
  tidalGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1, 128, 128), tidalMat));

  // Tidal bulge — slight ellipsoidal deformation
  const bulgeMat = new THREE.MeshBasicMaterial({ color: 0xff6b6b, transparent: true, opacity: 0.06, side: THREE.BackSide });
  const bulgeMesh = new THREE.Mesh(new THREE.SphereGeometry(1.03, 64, 64), bulgeMat);
  bulgeMesh.scale.set(1.02, 0.99, 1.0);
  tidalGroup.add(bulgeMesh);

  /* ===================== MODE MANAGEMENT ===================== */
  let currentMode = initialMode;
  const groups = { surface: null, internal: internalGroup, convection: convectionGroup, magnetic: magneticGroup, tidal: tidalGroup };

  function applyMode(mode) {
    currentMode = mode;
    surfaceMesh.visible  = (mode === 'surface');
    glowMesh.visible     = (mode === 'surface');
    internalGroup.visible     = (mode === 'internal');
    convectionGroup.visible   = (mode === 'convection');
    magneticGroup.visible     = (mode === 'magnetic');
    tidalGroup.visible        = (mode === 'tidal');
  }
  applyMode(initialMode);

  /* ===================== ANIMATION LOOP ===================== */
  let animId = null;
  const clock = new THREE.Clock();

  function animate() {
    animId = requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    controls.update();

    // Animate convection plumes
    if (currentMode === 'convection' && plumeData.positions) {
      const pos = plumeData.positions;
      for (let i = 0; i < pos.count; i++) {
        let r = Math.sqrt(pos.getX(i) ** 2 + pos.getY(i) ** 2 + pos.getZ(i) ** 2);
        // Move outward
        r += 0.002;
        if (r > 0.98) r = 0.55 + Math.random() * 0.1;
        const theta = Math.atan2(pos.getY(i), Math.sqrt(pos.getX(i) ** 2 + pos.getZ(i) ** 2));
        const phi   = Math.atan2(pos.getZ(i), pos.getX(i));
        pos.setXYZ(i, r * Math.cos(theta) * Math.cos(phi), r * Math.sin(theta), r * Math.cos(theta) * Math.sin(phi));
      }
      pos.needsUpdate = true;
    }

    // Animate magnetic field — gentle rotation
    if (currentMode === 'magnetic') {
      magneticGroup.children.forEach(child => {
        if (child.userData.isFieldLine) {
          child.rotation.y = t * 0.1;
        }
      });
    }

    // Animate tidal bulge rotation
    if (currentMode === 'tidal') {
      bulgeMesh.rotation.y = t * 0.15;
    }

    renderer.render(scene, camera);
  }
  animate();

  // Resize handler
  const onResize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight || 420;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener('resize', onResize);

  return {
    setMode(mode) { applyMode(mode); },
    dispose() {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      controls.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}

/* ===================== INTERNAL LAYERS ===================== */
function createInternalLayers() {
  const group = new THREE.Group();
  const clipPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0);

  const layers = [
    { name: 'Ice Shell',      radius: 1.0,  color: 0xc8e6f0, opacity: 0.6 },
    { name: 'Ocean',          radius: 0.85, color: 0x1a6baa, opacity: 0.75 },
    { name: 'Silicate Mantle', radius: 0.6, color: 0x8b6914, opacity: 0.85 },
    { name: 'Iron Core',      radius: 0.3,  color: 0x888888, opacity: 0.95 },
  ];

  layers.forEach((layer, idx) => {
    const geo = new THREE.SphereGeometry(layer.radius, 64, 64);
    const mat = new THREE.MeshStandardMaterial({
      color: layer.color, transparent: true, opacity: layer.opacity,
      side: THREE.DoubleSide, roughness: 0.6, metalness: 0.1,
      clippingPlanes: [clipPlane],
    });
    group.add(new THREE.Mesh(geo, mat));

    const innerR = idx < layers.length - 1 ? layers[idx + 1].radius : 0;
    const ringGeo = new THREE.RingGeometry(innerR, layer.radius, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: layer.color, side: THREE.DoubleSide, transparent: true, opacity: layer.opacity * 0.9 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.y = Math.PI / 2;
    group.add(ring);
  });

  return group;
}

/* ===================== CONVECTION TEXTURES & PLUMES ===================== */
function generateConvectionTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048; canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Base ice colour
  ctx.fillStyle = '#8ab8cc';
  ctx.fillRect(0, 0, 2048, 1024);

  // Hot spots (thin ice — reddish/warm)
  const hotSpots = [];
  for (let i = 0; i < 12; i++) {
    const cx = Math.random() * 2048;
    const cy = 200 + Math.random() * 624;
    const r  = 50 + Math.random() * 150;
    hotSpots.push({ cx, cy, r });

    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    grad.addColorStop(0, 'rgba(255, 100, 60, 0.6)');
    grad.addColorStop(0.5, 'rgba(255, 150, 80, 0.3)');
    grad.addColorStop(1, 'rgba(200, 180, 160, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
  }

  // Cold (thick ice) regions — bluer
  for (let i = 0; i < 8; i++) {
    const cx = Math.random() * 2048;
    const cy = Math.random() * 1024;
    const r  = 80 + Math.random() * 200;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    grad.addColorStop(0, 'rgba(100, 180, 240, 0.4)');
    grad.addColorStop(1, 'rgba(140, 190, 220, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
  }

  // Surface cracks over thin regions
  for (const hs of hotSpots) {
    for (let j = 0; j < 8; j++) {
      const angle = Math.random() * Math.PI * 2;
      const len   = 20 + Math.random() * hs.r;
      ctx.beginPath();
      ctx.moveTo(hs.cx, hs.cy);
      ctx.lineTo(hs.cx + Math.cos(angle) * len, hs.cy + Math.sin(angle) * len);
      ctx.strokeStyle = `rgba(255, 80, 40, ${0.2 + Math.random() * 0.3})`;
      ctx.lineWidth = 1 + Math.random() * 2;
      ctx.stroke();
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

function createConvectionPlumes() {
  const count = 800;
  const positions = new Float32Array(count * 3);
  const colors    = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    // Place particles concentrated in plume columns
    const plumeAngle = (Math.floor(i / 60) / 12) * Math.PI * 2 + Math.random() * 0.3;
    const r     = 0.55 + Math.random() * 0.4;
    const theta = (Math.random() - 0.5) * 1.2;
    const phi   = plumeAngle;

    positions[i * 3]     = r * Math.cos(theta) * Math.cos(phi);
    positions[i * 3 + 1] = r * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(theta) * Math.sin(phi);

    // Warm colours for rising plumes
    const warm = r > 0.75 ? 0.8 : 0.4;
    colors[i * 3]     = 1.0;          // R
    colors[i * 3 + 1] = 0.3 + warm * 0.4; // G
    colors[i * 3 + 2] = 0.1;          // B
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({ size: 0.015, vertexColors: true, transparent: true, opacity: 0.7, sizeAttenuation: true });
  const points = new THREE.Points(geo, mat);

  return { points, positions: geo.attributes.position };
}

/* ===================== MAGNETIC FIELD ===================== */
function createMagneticFieldLines(group) {
  // Jupiter's dipolar B field — lines sweeping through
  const fieldLineMat = new THREE.LineBasicMaterial({ color: 0x4488ff, transparent: true, opacity: 0.35, linewidth: 1 });

  for (let i = 0; i < 14; i++) {
    const points = [];
    const baseAngle = (i / 14) * Math.PI * 2;

    for (let t = -2; t <= 2; t += 0.1) {
      const r = 0.5 + Math.abs(t) * 1.2;
      const x = r * Math.cos(baseAngle) * 0.3 + t * 0.8;
      const y = r * Math.sin(baseAngle) * 0.8;
      const z = Math.sin(baseAngle * 0.5) * 0.3;
      points.push(new THREE.Vector3(x, y, z));
    }

    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geo, fieldLineMat);
    line.userData.isFieldLine = true;
    group.add(line);
  }
}

function createInducedFieldLines(group) {
  // Induced dipole loops wrapping around Europa
  const inducedMat = new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.5, linewidth: 1 });

  for (let ring = 0; ring < 6; ring++) {
    const points = [];
    const offsetY = (ring - 2.5) * 0.25;
    const r = 1.15 + ring * 0.06;

    for (let a = 0; a <= Math.PI * 2; a += 0.1) {
      points.push(new THREE.Vector3(r * Math.cos(a), offsetY + Math.sin(a * 2) * 0.05, r * Math.sin(a)));
    }

    const geo = new THREE.BufferGeometry().setFromPoints(points);
    group.add(new THREE.Line(geo, inducedMat));
  }
}

function createCurrentArrows(group) {
  // Orange current arrows (J) circling equator
  const arrowMat = new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true, opacity: 0.6 });

  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 8), arrowMat);
    cone.position.set(1.1 * Math.cos(angle), 0, 1.1 * Math.sin(angle));
    // Point tangentially
    cone.rotation.y = -angle + Math.PI / 2;
    cone.rotation.z = Math.PI / 2;
    group.add(cone);
  }
}

/* ===================== TIDAL STRESS TEXTURE ===================== */
function generateTidalStressTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048; canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Base ice
  ctx.fillStyle = '#b0c8d8';
  ctx.fillRect(0, 0, 2048, 1024);

  // Tidal stress follows a degree-2 pattern (max at sub/anti-Jovian points)
  for (let x = 0; x < 2048; x++) {
    for (let y = 0; y < 1024; y += 4) {
      const lon = (x / 2048) * Math.PI * 2;
      const lat = (y / 1024) * Math.PI - Math.PI / 2;

      // Degree-2 tidal pattern: max at sub-Jovian (lon=0) and anti-Jovian (lon=π)
      const stress = Math.abs(Math.cos(2 * lon)) * Math.cos(lat) ** 2;

      if (stress > 0.3) {
        const intensity = (stress - 0.3) / 0.7;
        const r = Math.round(180 + intensity * 75);
        const g = Math.round(120 - intensity * 60);
        const b = Math.round(100 - intensity * 50);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.3 + intensity * 0.4})`;
        ctx.fillRect(x, y, 1, 4);
      }
    }
  }

  // Lineae aligned with stress directions
  for (let i = 0; i < 100; i++) {
    const lon = Math.random() * 2048;
    const lat = 200 + Math.random() * 624;
    const stressAt = Math.abs(Math.cos(2 * (lon / 2048) * Math.PI * 2)) * Math.cos((lat / 1024) * Math.PI - Math.PI / 2) ** 2;

    if (stressAt > 0.2) {
      const angle = ((lon / 2048) * Math.PI * 2) + Math.PI / 4;
      const len   = 30 + stressAt * 200;
      ctx.beginPath();
      ctx.moveTo(lon, lat);
      ctx.lineTo(lon + Math.cos(angle) * len, lat + Math.sin(angle) * len);
      ctx.strokeStyle = `rgba(200, 80, 50, ${0.2 + stressAt * 0.4})`;
      ctx.lineWidth = 1 + stressAt * 3;
      ctx.stroke();
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

/* ===================== SURFACE TEXTURES ===================== */
function generateEuropaTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048; canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#c8b898';
  ctx.fillRect(0, 0, 2048, 1024);
  ctx.fillStyle = 'rgba(180, 200, 220, 0.4)';
  ctx.fillRect(0, 0, 2048, 1024);

  // Lineae
  for (let i = 0; i < 200; i++) {
    const x1 = Math.random() * 2048;
    const y1 = Math.random() * 1024;
    const angle = Math.random() * Math.PI;
    const length = 50 + Math.random() * 400;
    const x2 = x1 + Math.cos(angle) * length;
    const y2 = y1 + Math.sin(angle) * length;
    const cx = (x1 + x2) / 2 + (Math.random() - 0.5) * 60;
    const cy = (y1 + y2) / 2 + (Math.random() - 0.5) * 60;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(cx, cy, x2, y2);
    ctx.strokeStyle = `rgba(${100 + Math.floor(Math.random() * 60)}, ${60 + Math.floor(Math.random() * 40)}, ${30 + Math.floor(Math.random() * 30)}, ${0.15 + Math.random() * 0.4})`;
    ctx.lineWidth = 0.5 + Math.random() * 3;
    ctx.stroke();
  }

  // Chaos terrain
  for (let i = 0; i < 15; i++) {
    const cx = Math.random() * 2048;
    const cy = Math.random() * 1024;
    const r  = 30 + Math.random() * 120;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${140 + Math.random() * 40}, ${110 + Math.random() * 30}, ${80 + Math.random() * 30}, ${0.2 + Math.random() * 0.3})`;
    ctx.fill();
    for (let j = 0; j < 10; j++) {
      ctx.fillStyle = `rgba(190, 200, 210, ${0.15 + Math.random() * 0.25})`;
      ctx.fillRect(cx + (Math.random() - 0.5) * r * 1.5, cy + (Math.random() - 0.5) * r * 1.5, 5 + Math.random() * 20, 5 + Math.random() * 20);
    }
  }

  // Ridged bands
  for (let i = 0; i < 30; i++) {
    const y = Math.random() * 1024;
    const xS = Math.random() * 1000;
    const w  = 200 + Math.random() * 600;
    ctx.beginPath();
    ctx.moveTo(xS, y);
    for (let x = xS; x < xS + w; x += 10) ctx.lineTo(x, y + Math.sin(x * 0.02) * (3 + Math.random() * 8));
    ctx.strokeStyle = `rgba(160, 140, 100, ${0.1 + Math.random() * 0.2})`;
    ctx.lineWidth = 2 + Math.random() * 5;
    ctx.stroke();
  }

  // Noise
  const imageData = ctx.getImageData(0, 0, 2048, 1024);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const n = (Math.random() - 0.5) * 15;
    data[i] += n; data[i + 1] += n; data[i + 2] += n;
  }
  ctx.putImageData(imageData, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

function generateEuropaBump() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024; canvas.height = 512;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 1024, 512);
  for (let i = 0; i < 150; i++) {
    const x1 = Math.random() * 1024;
    const y1 = Math.random() * 512;
    const angle = Math.random() * Math.PI;
    const l = 30 + Math.random() * 200;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + Math.cos(angle) * l, y1 + Math.sin(angle) * l);
    ctx.strokeStyle = `rgb(${Math.random() > 0.5 ? 180 : 100}, ${Math.random() > 0.5 ? 180 : 100}, ${Math.random() > 0.5 ? 180 : 100})`;
    ctx.lineWidth = 1 + Math.random() * 3;
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}
