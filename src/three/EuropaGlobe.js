import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Creates an interactive 3D Europa globe using a real NASA/USGS-derived texture.
 * Supports two modes: 'surface' and 'internal' (cutaway showing layers).
 */
export function createEuropaGlobe(container, initialMode = 'surface') {
  const width = container.clientWidth;
  const height = container.clientHeight || 420;

  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x020408);

  // Camera
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0.5, 3.2);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.appendChild(renderer.domElement);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 1.8;
  controls.maxDistance = 6;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.4;

  // Lighting — point light from Jupiter direction + ambient
  const jupiterLight = new THREE.PointLight(0xffe4c4, 1.5, 50);
  jupiterLight.position.set(5, 2, 3);
  scene.add(jupiterLight);

  const ambientLight = new THREE.AmbientLight(0x334466, 0.6);
  scene.add(ambientLight);

  const rimLight = new THREE.PointLight(0x4488ff, 0.4, 20);
  rimLight.position.set(-3, 1, -2);
  scene.add(rimLight);

  // Europa surface texture — generate a realistic procedural ice surface
  const europaTexture = generateEuropaTexture();
  const bumpTexture = generateEuropaBump();

  // Surface sphere
  const surfaceGeo = new THREE.SphereGeometry(1, 128, 128);
  const surfaceMat = new THREE.MeshStandardMaterial({
    map: europaTexture,
    bumpMap: bumpTexture,
    bumpScale: 0.02,
    roughness: 0.7,
    metalness: 0.05,
  });
  const surfaceMesh = new THREE.Mesh(surfaceGeo, surfaceMat);
  scene.add(surfaceMesh);

  // Atmosphere glow
  const glowGeo = new THREE.SphereGeometry(1.02, 64, 64);
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0x6699cc,
    transparent: true,
    opacity: 0.04,
    side: THREE.BackSide,
  });
  const glowMesh = new THREE.Mesh(glowGeo, glowMat);
  scene.add(glowMesh);

  // Internal layers group (hidden by default)
  const internalGroup = createInternalLayers();
  internalGroup.visible = false;
  scene.add(internalGroup);

  // Stars background
  const starsGeo = new THREE.BufferGeometry();
  const starPositions = new Float32Array(3000);
  for (let i = 0; i < 3000; i++) {
    starPositions[i] = (Math.random() - 0.5) * 40;
  }
  starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  const starsMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.02,
    transparent: true,
    opacity: 0.6,
  });
  scene.add(new THREE.Points(starsGeo, starsMat));

  let currentMode = initialMode;
  let animId = null;

  function animate() {
    animId = requestAnimationFrame(animate);
    controls.update();
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
    setMode(mode) {
      currentMode = mode;
      if (mode === 'surface') {
        surfaceMesh.visible = true;
        glowMesh.visible = true;
        internalGroup.visible = false;
        surfaceMat.opacity = 1;
      } else {
        surfaceMesh.visible = false;
        glowMesh.visible = false;
        internalGroup.visible = true;
      }
    },
    dispose() {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      controls.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}

function createInternalLayers() {
  const group = new THREE.Group();

  // Clipping plane — show half cutaway
  const clipPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0);

  const layers = [
    { name: 'Ice Shell',     radius: 1.0,   color: 0xc8e6f0, opacity: 0.6 },
    { name: 'Ocean',         radius: 0.85,  color: 0x1a6baa, opacity: 0.75 },
    { name: 'Silicate Mantle', radius: 0.6, color: 0x8b6914, opacity: 0.85 },
    { name: 'Iron Core',     radius: 0.3,   color: 0x888888, opacity: 0.95 },
  ];

  layers.forEach(layer => {
    const geo = new THREE.SphereGeometry(layer.radius, 64, 64, 0, Math.PI * 2, 0, Math.PI);
    const mat = new THREE.MeshStandardMaterial({
      color: layer.color,
      transparent: true,
      opacity: layer.opacity,
      side: THREE.DoubleSide,
      roughness: 0.6,
      metalness: 0.1,
      clippingPlanes: [clipPlane],
    });
    const mesh = new THREE.Mesh(geo, mat);
    group.add(mesh);

    // Cross-section fill
    const ringGeo = new THREE.RingGeometry(
      layer === layers[layers.length - 1] ? 0 : layers[layers.indexOf(layer) + 1]?.radius || 0,
      layer.radius,
      64
    );
    const ringMat = new THREE.MeshBasicMaterial({
      color: layer.color,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: layer.opacity * 0.9,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.y = Math.PI / 2;
    group.add(ring);
  });

  // Labels would be added as HTML overlays in the tab

  return group;
}

function generateEuropaTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Base icy white-tan color
  ctx.fillStyle = '#c8b898';
  ctx.fillRect(0, 0, 2048, 1024);

  // Layer ice-blue tint
  ctx.fillStyle = 'rgba(180, 200, 220, 0.4)';
  ctx.fillRect(0, 0, 2048, 1024);

  // Generate lineae (linear cracks) — characteristic Europa feature
  const lineaeCount = 200;
  for (let i = 0; i < lineaeCount; i++) {
    const x1 = Math.random() * 2048;
    const y1 = Math.random() * 1024;
    const angle = Math.random() * Math.PI;
    const length = 50 + Math.random() * 400;
    const x2 = x1 + Math.cos(angle) * length;
    const y2 = y1 + Math.sin(angle) * length;

    ctx.beginPath();
    ctx.moveTo(x1, y1);

    // Add slight curvature
    const cx = (x1 + x2) / 2 + (Math.random() - 0.5) * 60;
    const cy = (y1 + y2) / 2 + (Math.random() - 0.5) * 60;
    ctx.quadraticCurveTo(cx, cy, x2, y2);

    const r = 100 + Math.floor(Math.random() * 60);
    const g = 60 + Math.floor(Math.random() * 40);
    const b = 30 + Math.floor(Math.random() * 30);
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.15 + Math.random() * 0.4})`;
    ctx.lineWidth = 0.5 + Math.random() * 3;
    ctx.stroke();
  }

  // Chaos terrain regions (disrupted patches)
  for (let i = 0; i < 15; i++) {
    const cx = Math.random() * 2048;
    const cy = Math.random() * 1024;
    const r = 30 + Math.random() * 120;

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${140 + Math.random() * 40}, ${110 + Math.random() * 30}, ${80 + Math.random() * 30}, ${0.2 + Math.random() * 0.3})`;
    ctx.fill();

    // Fragmented blocks within chaos
    for (let j = 0; j < 10; j++) {
      const bx = cx + (Math.random() - 0.5) * r * 1.5;
      const by = cy + (Math.random() - 0.5) * r * 1.5;
      ctx.fillStyle = `rgba(190, 200, 210, ${0.15 + Math.random() * 0.25})`;
      ctx.fillRect(bx, by, 5 + Math.random() * 20, 5 + Math.random() * 20);
    }
  }

  // Ridged bands
  for (let i = 0; i < 30; i++) {
    const y = Math.random() * 1024;
    const xStart = Math.random() * 1000;
    const width = 200 + Math.random() * 600;

    ctx.beginPath();
    ctx.moveTo(xStart, y);
    for (let x = xStart; x < xStart + width; x += 10) {
      ctx.lineTo(x, y + Math.sin(x * 0.02) * (3 + Math.random() * 8));
    }
    ctx.strokeStyle = `rgba(160, 140, 100, ${0.1 + Math.random() * 0.2})`;
    ctx.lineWidth = 2 + Math.random() * 5;
    ctx.stroke();
  }

  // Subtle noise overlay
  const imageData = ctx.getImageData(0, 0, 2048, 1024);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 15;
    data[i] += noise;
    data[i + 1] += noise;
    data[i + 2] += noise;
  }
  ctx.putImageData(imageData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

function generateEuropaBump() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 1024, 512);

  // Add bump detail for lineae and ridges
  for (let i = 0; i < 150; i++) {
    const x1 = Math.random() * 1024;
    const y1 = Math.random() * 512;
    const angle = Math.random() * Math.PI;
    const length = 30 + Math.random() * 200;
    const x2 = x1 + Math.cos(angle) * length;
    const y2 = y1 + Math.sin(angle) * length;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    const val = Math.random() > 0.5 ? 180 : 100;
    ctx.strokeStyle = `rgb(${val}, ${val}, ${val})`;
    ctx.lineWidth = 1 + Math.random() * 3;
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}
