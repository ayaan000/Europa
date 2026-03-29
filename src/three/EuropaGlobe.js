import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

/**
 * Enhanced Europa Globe — REALISTIC EDITION
 * 6 visualization modes, dynamic color filters, internal layer labels, and gravitational force arrows.
 */
export function createEuropaGlobe(container, initialMode = 'surface') {
  const width  = container.clientWidth;
  const height = container.clientHeight || 420;

  /* ===================== SCENE SETUP ===================== */
  const scene = new THREE.Scene();
  scene.background = null; 

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0.5, 3.2);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.localClippingEnabled = true;
  renderer.setClearColor(0x000000, 0); 
  container.appendChild(renderer.domElement);

  // Post-Processing: Bloom
  const renderScene = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
  bloomPass.threshold = 0.1;
  bloomPass.strength = 0.3; // Default realistic low bloom
  bloomPass.radius = 0.5;

  const composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 1.8;
  controls.maxDistance = 8;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.4;

  // Lighting — Realistic Default
  const jupiterLight = new THREE.PointLight(0xffffff, 1.5, 50); 
  jupiterLight.position.set(5, 2, 3);
  scene.add(jupiterLight);

  const ambientLight = new THREE.AmbientLight(0x404040, 1.0); 
  scene.add(ambientLight);

  const rimLight = new THREE.PointLight(0xaaaaaa, 0.8, 20); 
  rimLight.position.set(-3, 1, -2);
  scene.add(rimLight);

  // Stars
  const starsGeo = new THREE.BufferGeometry();
  const starPos  = new Float32Array(3000);
  const starCol  = new Float32Array(3000);
  for (let i = 0; i < 1000; i++) {
    starPos[i*3] = (Math.random() - 0.5) * 40;
    starPos[i*3+1] = (Math.random() - 0.5) * 40;
    starPos[i*3+2] = (Math.random() - 0.5) * 40;
    
    // white/blue stars
    const isCyan = Math.random() > 0.8;
    starCol[i*3] = isCyan ? 0.8 : 1.0;
    starCol[i*3+1] = isCyan ? 0.9 : 1.0;
    starCol[i*3+2] = 1.0;
  }
  starsGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  starsGeo.setAttribute('color', new THREE.BufferAttribute(starCol, 3));
  const starsMat = new THREE.PointsMaterial({ size: 0.03, vertexColors: true, transparent: true, opacity: 0.8 });
  const starsMesh = new THREE.Points(starsGeo, starsMat);
  scene.add(starsMesh);

  /* ===================== TEXTURE GENERATORS ===================== */
  const europaTexRealistic = generateEuropaTextureRealistic();
  const bumpTexture = generateEuropaBump();
  const mineralTexture = generateMineralTexture();
  // "Synthwave" texture generated on demand if they switch to it
  let europaTexSynthwave = null;

  /* ===================== SURFACE MODE ===================== */
  const surfaceGeo = new THREE.SphereGeometry(1, 128, 128);
  const surfaceMat = new THREE.MeshStandardMaterial({
    map: europaTexRealistic, bumpMap: bumpTexture, bumpScale: 0.04,
    roughness: 0.7, metalness: 0.1,
  });
  const surfaceMesh = new THREE.Mesh(surfaceGeo, surfaceMat);
  scene.add(surfaceMesh);

  // Intense Atmosphere Glow (Disabled safely in realistic mode)
  const glowGeo = new THREE.SphereGeometry(1.025, 64, 64);
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.02, side: THREE.BackSide, blending: THREE.AdditiveBlending });
  const glowMesh = new THREE.Mesh(glowGeo, glowMat);
  scene.add(glowMesh);

  /* ===================== MINERAL MODE ===================== */
  const mineralGroup = new THREE.Group();
  mineralGroup.visible = false;
  scene.add(mineralGroup);

  const mineralMat = new THREE.MeshStandardMaterial({
    map: mineralTexture, bumpMap: bumpTexture, bumpScale: 0.03,
    roughness: 0.8, metalness: 0.2, emissive: 0x111111
  });
  mineralGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1.002, 128, 128), mineralMat));

  /* ===================== INTERNAL MODE ===================== */
  const internalGroup = createInternalLayers();
  internalGroup.visible = false;
  scene.add(internalGroup);



  /* ===================== MAGNETIC MODE ===================== */
  const magneticGroup = new THREE.Group();
  magneticGroup.visible = false;
  scene.add(magneticGroup);

  const magEuropaMat = new THREE.MeshStandardMaterial({
    map: europaTexRealistic, transparent: true, opacity: 0.3, roughness: 0.8, metalness: 0.2,
  });
  magneticGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), magEuropaMat));
  createMagneticFieldLines(magneticGroup);
  createInducedFieldLines(magneticGroup);
  createCurrentArrows(magneticGroup);

  /* ===================== TIDAL MODE ===================== */
  const tidalGroup = new THREE.Group();
  tidalGroup.visible = false;
  scene.add(tidalGroup);

  const tidalTex = generateTidalStressTexture();
  const tidalMat = new THREE.MeshStandardMaterial({ map: tidalTex, roughness: 0.4, metalness: 0.4 });
  tidalGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1, 128, 128), tidalMat));

  const bulgeMat = new THREE.MeshBasicMaterial({ color: 0xff00aa, transparent: true, opacity: 0.15, side: THREE.BackSide, blending: THREE.AdditiveBlending });
  const bulgeMesh = new THREE.Mesh(new THREE.SphereGeometry(1.02, 64, 64), bulgeMat);
  bulgeMesh.scale.set(1.02, 0.99, 1.0);
  tidalGroup.add(bulgeMesh);

  // Flowing force vectors (dots trailing across the surface towards the sub-Jovian point)
  const vectorGeo = new THREE.BufferGeometry();
  const vectorPts = [];
  for(let v=0; v<600; v++) {
    const r = 1.015;
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2*Math.random() - 1);
    vectorPts.push(new THREE.Vector3(r*Math.sin(ph)*Math.cos(th), r*Math.sin(ph)*Math.sin(th), r*Math.cos(ph)));
  }
  vectorGeo.setFromPoints(vectorPts);
  const vectorMat = new THREE.PointsMaterial({ color: 0xfcfc00, size: 0.02, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending });
  const vectorMesh = new THREE.Points(vectorGeo, vectorMat);
  tidalGroup.add(vectorMesh);

  /* ===================== JOVIAN SYSTEM (GLOBAL BACKGROUND) ===================== */
  const jovianGroup = new THREE.Group();
  scene.add(jovianGroup);
  createJovianSystem(jovianGroup);

  /* ===================== CONVECTION MODE ===================== */
  const convectionGroup = new THREE.Group();
  convectionGroup.visible = false;
  scene.add(convectionGroup);

  // Ocean base layer with a dynamic shader for the fluid
  const oceanShaderMat = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 },
      colorA: { value: new THREE.Color(0x05081a) },
      colorB: { value: new THREE.Color(0x0a1a4a) },
      colorC: { value: new THREE.Color(0x00ffff) },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform float time;
      uniform vec3 colorA;
      uniform vec3 colorB;
      uniform vec3 colorC;
      void main() {
        float noise = sin(vUv.x * 12.0 + time) * cos(vUv.y * 12.0 + time * 0.8);
        vec3 color = mix(colorA, colorB, vUv.y + noise * 0.1);
        color = mix(color, colorC, clamp(noise * 0.2, 0.0, 1.0));
        gl_FragColor = vec4(color, 0.9);
      }
    `,
    transparent: true,
    side: THREE.FrontSide
  });
  convectionGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.96, 64, 64), oceanShaderMat));

  const convectionTex = generateConvectionTexture();
  const convectionMat = new THREE.MeshStandardMaterial({
    map: convectionTex,
    transparent: true,
    opacity: 0.75,
    roughness: 0.6,
    metalness: 0.4
  });
  const convectionShell = new THREE.Mesh(new THREE.SphereGeometry(1.002, 128, 128), convectionMat);
  convectionGroup.add(convectionShell);

  const plumeGroup = createConvectionPlumes();
  convectionGroup.add(plumeGroup);

  /* ===================== MODE/FILTER MANAGEMENT ===================== */
  let currentMode = initialMode;
  function applyMode(mode) {
    currentMode = mode;
    surfaceMesh.visible     = (mode === 'surface');
    glowMesh.visible        = (mode === 'surface');
    internalGroup.visible   = (mode === 'internal');
    magneticGroup.visible   = (mode === 'magnetic');
    tidalGroup.visible      = (mode === 'tidal');
    mineralGroup.visible    = (mode === 'mineral');
    convectionGroup.visible = (mode === 'convection');

    // Global Jovian Toggles
    if (jovianGroup.userData.jovianBodies) {
      const b = jovianGroup.userData.jovianBodies;
      if (b.arrowJup) b.arrowJup.visible = (mode === 'tidal');
      if (b.arrowIo) b.arrowIo.visible = (mode === 'tidal');
      if (b.arrowGan) b.arrowGan.visible = (mode === 'tidal');
      if (b.jovianBFields) b.jovianBFields.visible = (mode === 'magnetic');
    }
  }
  applyMode(initialMode);

  function applyFilter(filterId) {
    if (filterId === 'truecolor') { // NOW DEFAULT REALISM
      surfaceMat.map = europaTexRealistic;
      surfaceMat.color.setHex(0xffffff);
      surfaceMat.emissive.setHex(0x000000);
      ambientLight.color.setHex(0x404040);
      jupiterLight.color.setHex(0xffffff);
      rimLight.color.setHex(0xaaaaaa);
      bloomPass.strength = 0.3;
      starsMat.color.setHex(0xffffff);
      glowMesh.material.color.setHex(0xffffff);
      magEuropaMat.map = europaTexRealistic;
    } 
    else if (filterId === 'synthwave') {
      if (!europaTexSynthwave) europaTexSynthwave = generateEuropaTextureSynthwave();
      surfaceMat.map = europaTexSynthwave;
      surfaceMat.color.setHex(0xffffff);
      surfaceMat.emissive.setHex(0x000000);
      ambientLight.color.setHex(0x220044);
      jupiterLight.color.setHex(0xff00ff);
      rimLight.color.setHex(0x00ffff);
      bloomPass.strength = 1.5;
      starsMat.color.setHex(0xffffff);
      glowMesh.material.color.setHex(0xff00ff);
      magEuropaMat.map = europaTexSynthwave;
    } 
    else if (filterId === 'infrared') {
      surfaceMat.map = bumpTexture;
      surfaceMat.color.setHex(0xff2200);
      surfaceMat.emissive.setHex(0x440000);
      ambientLight.color.setHex(0x660000);
      jupiterLight.color.setHex(0xff8800);
      rimLight.color.setHex(0xffcc00);
      bloomPass.strength = 1.0;
      starsMat.color.setHex(0xff5500);
      glowMesh.material.color.setHex(0xff2200);
      magEuropaMat.map = bumpTexture;
    }
  }
  // Initialize to True Color internally
  applyFilter('truecolor');

  /* ===================== ANIMATION LOOP ===================== */
  let animId = null;
  const clock = new THREE.Clock();
  
  // Custom simulation time vars
  let simulationTime = 0;
  let timeMultiplier = 1.0;

  function animate() {
    animId = requestAnimationFrame(animate);
    const delta = clock.getDelta();
    simulationTime += delta * timeMultiplier;
    
    controls.update();

    if (currentMode === 'magnetic') {
      magneticGroup.children.forEach(child => {
        if (child.userData.isFieldLine) {
          child.rotation.y = simulationTime * 0.15;
        }
      });
    }

    if (currentMode === 'tidal') {
      // Exaggerate gravitational bulge pulsing wildly across X-axis based on Laplace resonance (orbital distance)
      const pulse = 1.05 + Math.sin(simulationTime * 3) * 0.07; 
      bulgeMesh.scale.set(pulse, 0.98, 0.98);

      // Force vectors flowing towards X
      if (vectorMesh) {
         const pos = vectorMesh.geometry.attributes.position;
         for (let i = 0; i < pos.count; i++) {
            let x = pos.getX(i); let y = pos.getY(i); let z = pos.getZ(i);
            
            x += Math.sign(x) * 0.008 * Math.max(0.1, timeMultiplier);
            const r = 1.015;
            const currentR = Math.sqrt(x*x + y*y + z*z);
            x = (x / currentR) * r; y = (y / currentR) * r; z = (z / currentR) * r;
            
            // Respawn particles wrapping back around
            if (Math.abs(x) > 1.012) {
                const th = Math.random() * Math.PI * 2;
                const ph = Math.acos(2*Math.random() - 1);
                x = r*Math.sin(ph)*Math.cos(th)*0.1; 
                y = r*Math.sin(ph)*Math.sin(th);
                z = r*Math.cos(ph);
            }
            pos.setXYZ(i, x, y, z);
         }
         pos.needsUpdate = true;
      }
    }

    // Always rotate global jovian bodies
    const b = jovianGroup.userData.jovianBodies;
    if (b) {
      b.jupiter.rotation.y = simulationTime * 0.05;
      b.io.rotation.y = simulationTime * 0.1;
      b.gan.rotation.y = simulationTime * 0.08;
      
      if (currentMode === 'tidal') {
        const scale = 1.0 + Math.sin(simulationTime * 2) * 0.2;
        if (b.arrowJup) b.arrowJup.scale.set(1, scale, 1);
        if (b.arrowIo) b.arrowIo.scale.set(1, scale * 1.5, 1);
        if (b.arrowGan) b.arrowGan.scale.set(1, scale * 0.8, 1);
      }
    }

    if (currentMode === 'convection') {
      oceanShaderMat.uniforms.time.value -= 0.005 * timeMultiplier;
      plumeGroup.rotation.y += 0.001 * timeMultiplier;
      plumeGroup.children.forEach((p, idx) => {
        p.rotation.z += 0.005 * timeMultiplier * (idx % 2 === 0 ? 1 : -1);
      });
    }

    composer.render();
  }
  animate();

  const onResize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight || 420;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    composer.setSize(w, h);
  };
  window.addEventListener('resize', onResize);

  return {
    setMode: applyMode,
    setFilter: applyFilter,
    setTimeMultiplier: (m) => { timeMultiplier = m; },
    dispose() {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      controls.dispose();
      renderer.dispose();
      composer.dispose();
      renderer.domElement.remove();
    },
  };
}

/* ========================================================================== */
/*                      CONVECTION HELPER FUNCTIONS                         */
/* ========================================================================== */

function generateConvectionTexture() {
  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#102040';
  ctx.fillRect(0,0,size,size);

  // Fractal noise for the thin/thick ice shell
  for(let i=0; i<400; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = 20 + Math.random() * 80;
    const grad = ctx.createRadialGradient(x,y,0,x,y,r);
    grad.addColorStop(0, 'rgba(0, 255, 255, 0.4)');
    grad.addColorStop(1, 'rgba(0, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(x-r, y-r, r*2, r*2);
  }

  // Cracks / Lineae matching the heat flux
  ctx.strokeStyle = 'rgba(255, 100, 0, 0.3)';
  ctx.lineWidth = 1;
  for(let i=0; i<100; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random()*size, Math.random()*size);
    ctx.lineTo(Math.random()*size, Math.random()*size);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function createConvectionPlumes() {
  const group = new THREE.Group();
  const plumeCount = 12;
  const loader = new THREE.TextureLoader();
  
  // Generic glow sprite
  const plumeTex = loader.load('https://threejs.org/examples/textures/sprites/ball.png');

  for(let i=0; i<plumeCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / plumeCount);
    const theta = Math.sqrt(plumeCount * Math.PI) * phi;
    
    const spriteMat = new THREE.SpriteMaterial({ 
      map: plumeTex, 
      color: 0x00ffff, 
      transparent: true, 
      opacity: 0.6,
      blending: THREE.AdditiveBlending 
    });
    const sprite = new THREE.Sprite(spriteMat);
    
    const r = 0.98;
    sprite.position.set(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
    sprite.scale.set(0.1, 0.1, 0.1);
    group.add(sprite);
  }
  return group;
}

/* ===================== JOVIAN SYSTEM & ARROWS ===================== */
function createJovianSystem(group) {
  const b = {};

  // Jupiter
  const jupGeo = new THREE.SphereGeometry(25, 64, 64);
  const jupMat = new THREE.MeshStandardMaterial({ color: 0xdca877, roughness: 0.9, metalness: 0.1, transparent: true, opacity: 0.95 });
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 512;
  const ctx = canvas.getContext('2d');
  for (let i=0; i<512; i+=4) {
    ctx.fillStyle = i%20<10 ? '#dca877' : '#c88b50';
    if(i>200 && i<250) ctx.fillStyle = '#aa5533';
    ctx.fillRect(0, i, 512, 4);
    if(i===220) { ctx.fillStyle='#bb3311'; ctx.beginPath(); ctx.ellipse(256, 225, 40, 20, 0, 0, Math.PI*2); ctx.fill(); }
  }
  jupMat.map = new THREE.CanvasTexture(canvas);
  b.jupiter = new THREE.Mesh(jupGeo, jupMat);
  b.jupiter.position.set(-60, 5, -80);
  b.jupiter.rotation.z = Math.PI / 12;
  group.add(b.jupiter);

  // Io
  b.io = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), new THREE.MeshStandardMaterial({color: 0xffaa00, roughness:0.7, metalness: 0.3}));
  b.io.position.set(-20, 2, -30);
  group.add(b.io);

  // Ganymede
  b.gan = new THREE.Mesh(new THREE.SphereGeometry(1.8, 32, 32), new THREE.MeshStandardMaterial({color: 0x887766, roughness:0.9, metalness: 0.2}));
  b.gan.position.set(35, -5, -50);
  group.add(b.gan);

  // Callisto
  b.cal = new THREE.Mesh(new THREE.SphereGeometry(1.7, 32, 32), new THREE.MeshStandardMaterial({color: 0x554444, roughness:1.0}));
  b.cal.position.set(20, 15, -70);
  group.add(b.cal);

  // Gravity Arrows pointing to the bodies
  function createGravityArrow(toPos, hexColor, lengthFactor) {
    const dir = new THREE.Vector3().copy(toPos).normalize();
    const len = toPos.length() * lengthFactor; 
    const arrowHelper = new THREE.ArrowHelper(dir, new THREE.Vector3(0,0,0), len, hexColor, 2, 1);
    // Add bloom by overriding material
    if (arrowHelper.cone) arrowHelper.cone.material = new THREE.MeshBasicMaterial({ color: hexColor, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending });
    if (arrowHelper.line) arrowHelper.line.material = new THREE.LineBasicMaterial({ color: hexColor, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, linewidth: 3 });
    return arrowHelper;
  }

  b.arrowJup = createGravityArrow(b.jupiter.position, 0xff00ff, 0.4);
  b.arrowIo  = createGravityArrow(b.io.position, 0xffdd00, 0.3);
  b.arrowGan = createGravityArrow(b.gan.position, 0x00ffff, 0.25);
  group.add(b.arrowJup);
  group.add(b.arrowIo);
  group.add(b.arrowGan);

  // Massive Sweeping Jupiter Magnetic Field mapped to Jupiter's rotation
  const bFieldsGrp = new THREE.Group();
  const bMat = new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending });
  for(let i=0; i<45; i++) {
    const angle = (i/45)*Math.PI*2;
    const r = 100 + Math.random()*80; 
    const pts = [];
    for(let t=0; t<=1; t+=0.02) {
      const theta = t * Math.PI; 
      // Parametric dipole spanning across origin
      const x = r * Math.sin(theta)**2 * Math.cos(angle);
      const y = (r*1.8) * Math.cos(theta); // Scale it vertically
      const z = r * Math.sin(theta)**2 * Math.sin(angle);
      pts.push(new THREE.Vector3(x,y,z));
    }
    bFieldsGrp.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), bMat));
  }
  b.jovianBFields = bFieldsGrp;
  b.jupiter.add(bFieldsGrp); // Attached to Jupiter so it naturally rotates and tilts with Jupiter!

  group.userData.jovianBodies = b;
}

/* ===================== TEXTURE GENERATORS ===================== */

function createTextSprite(message, color) {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0,0,0,0.6)';
  ctx.roundRect(0, 0, 256, 64, 8);
  ctx.fill();
  
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.roundRect(0, 0, 256, 64, 8);
  ctx.stroke();

  ctx.font = 'bold 32px sans-serif';
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(message, 128, 32);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture, depthTest: false, transparent: true });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(0.6, 0.15, 1);
  return sprite;
}

function createInternalLayers() {
  const group = new THREE.Group();
  const clipPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0);

  // Beautiful Accurate Muted Colors
  const layers = [
    { name: 'Solid Ice Crust', radius: 1.0,  color: 0xeeeeee, opacity: 0.95 },
    { name: 'Liquid Ocean',    radius: 0.85, color: 0x003366, opacity: 0.85 },
    { name: 'Silicate Mantle', radius: 0.6,  color: 0x4a3b32, opacity: 1.0 },
    { name: 'Metallic Core',   radius: 0.3,  color: 0x666666, opacity: 1.0 },
  ];

  layers.forEach((layer, idx) => {
    // Sphere
    const geo = new THREE.SphereGeometry(layer.radius, 64, 64);
    const mat = new THREE.MeshStandardMaterial({
      color: layer.color, transparent: true, opacity: layer.opacity,
      side: THREE.DoubleSide, roughness: 0.6, metalness: layer.name === 'Metallic Core' ? 0.9 : 0.1,
      clippingPlanes: [clipPlane],
    });
    group.add(new THREE.Mesh(geo, mat));

    // Exposed Cross-section ring
    const innerR = idx < layers.length - 1 ? layers[idx + 1].radius : 0;
    const ringGeo = new THREE.RingGeometry(innerR, layer.radius, 64);
    const ringMat = new THREE.MeshStandardMaterial({ 
      color: layer.color, side: THREE.DoubleSide, roughness: 0.8, metalness: 0.1
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.y = Math.PI / 2;
    group.add(ring);

    // Dynamic Label
    const sprite = createTextSprite(layer.name, '#ffffff');
    // Position label slightly offset based on layer
    const midRadius = (layer.radius + innerR) / 2;
    sprite.position.set(0, midRadius * 0.9, layer.radius * 0.7 + 0.2);
    group.add(sprite);
  });
  return group;
}

function generateEuropaTextureRealistic() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048; canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  
  // Base Ice (White / Very Light Grey)
  ctx.fillStyle = '#e8ebed'; 
  ctx.fillRect(0, 0, 2048, 1024);
  
  // Perlin noise-like mottling
  for (let i = 0; i < 5000; i++) {
    const x = Math.random() * 2048;
    const y = Math.random() * 1024;
    const r = Math.random() * 20;
    ctx.fillStyle = Math.random() > 0.5 ? 'rgba(200, 200, 205, 0.1)' : 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Realistic Lineae (Red-Brown Cracks)
  for (let i = 0; i < 600; i++) {
    const x1 = Math.random() * 2048, y1 = Math.random() * 1024, a = Math.random() * Math.PI, l = 50 + Math.random() * 600;
    ctx.beginPath(); ctx.moveTo(x1, y1); 
    ctx.quadraticCurveTo((x1 + x1 + Math.cos(a)*l)/2 + (Math.random()-0.5)*150, (y1 + y1 + Math.sin(a)*l)/2 + (Math.random()-0.5)*150, x1 + Math.cos(a)*l, y1 + Math.sin(a)*l);
    
    // Core lineae are dark reddish-brown
    ctx.strokeStyle = `rgba(100, 50, 30, \${0.3+Math.random()*0.5})`;
    ctx.lineWidth = 1 + Math.random() * 5; 
    ctx.stroke();

    // Halo around lineae
    ctx.strokeStyle = `rgba(150, 100, 80, \${0.1+Math.random()*0.3})`;
    ctx.lineWidth = 4 + Math.random() * 10; 
    ctx.stroke();
  }

  // Lenticulae (Freckles / Chaos spots)
  for (let i = 0; i < 60; i++) {
    const cx = Math.random() * 2048, cy = Math.random() * 1024, r  = 10 + Math.random() * 40;
    ctx.fillStyle = `rgba(120, 80, 60, \${0.4+Math.random()*0.4})`;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas); 
  tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.ClampToEdgeWrapping; 
  return tex;
}

function generateEuropaTextureSynthwave() { // Old fallback
  const canvas = document.createElement('canvas'); // ... (Previous old code, condensed)
  canvas.width = 1024; canvas.height = 512;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0f0524'; ctx.fillRect(0, 0, 1024, 512);
  for (let i = 0; i < 200; i++) {
    const x1 = Math.random()*1024, y1 = Math.random()*512, a = Math.random()*Math.PI, l = 50+Math.random()*200;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1+Math.cos(a)*l, y1+Math.sin(a)*l);
    ctx.strokeStyle = Math.random() > 0.5 ? 'rgba(255,0,255,0.6)' : 'rgba(0,255,255,0.6)';
    ctx.lineWidth = 1+Math.random()*3; ctx.stroke();
  }
  return new THREE.CanvasTexture(canvas);
}

function generateEuropaBump() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048; canvas.height = 1024;
  const ctx = canvas.getContext('2d'); ctx.fillStyle = '#888888'; ctx.fillRect(0, 0, 2048, 1024);
  for (let i = 0; i < 400; i++) {
    const a = Math.random()*Math.PI, l = 40+Math.random()*400, x1 = Math.random()*2048, y1 = Math.random()*1024;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1+Math.cos(a)*l, y1+Math.sin(a)*l);
    ctx.strokeStyle = `rgba(255, 255, 255, 0.8)`; // High ridges
    ctx.lineWidth = 1 + Math.random() * 4; ctx.stroke();
    ctx.strokeStyle = `rgba(0, 0, 0, 0.8)`; // Troughs
    ctx.lineWidth = 0.5 + Math.random() * 2; ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(canvas); tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.ClampToEdgeWrapping; return tex;
}

function generateMineralTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048; canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#08101a'; ctx.fillRect(0, 0, 2048, 1024);
  const sulfurGrad = ctx.createRadialGradient(1500, 500, 100, 1500, 500, 600);
  sulfurGrad.addColorStop(0, 'rgba(255, 0, 150, 0.6)'); sulfurGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = sulfurGrad; ctx.fillRect(500, 0, 1548, 1024);
  for (let i = 0; i < 300; i++) {
    const x1 = Math.random() * 2048, y1 = Math.random() * 1024, l = 30 + Math.random() * 300, angle = Math.random() * Math.PI;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1 + Math.cos(angle)*l, y1 + Math.sin(angle)*l);
    ctx.strokeStyle = `rgba(255, 200, 0, \${0.3 + Math.random()*0.4})`; ctx.lineWidth = 2 + Math.random() * 8; ctx.stroke();
  }
  for (let i = 0; i < 40; i++) {
    const cx = Math.random() * 2048, cy = Math.random() * 1024;
    ctx.fillStyle = `rgba(0, 255, 255, \${0.4 + Math.random()*0.3})`;
    ctx.beginPath(); ctx.arc(cx, cy, 10 + Math.random()*40, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; ctx.fillRect(cx-2, cy-2, 4, 4);
  }
  const tex = new THREE.CanvasTexture(canvas); tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.ClampToEdgeWrapping; return tex;
}



function createMagneticFieldLines(group) {
  // Jovian Dipole is now distinct ORANGE (0xffaa00)
  const mat = new THREE.LineBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, linewidth: 2 });
  for (let i = 0; i < 16; i++) {
    const pts = []; const ba = (i/16)*Math.PI*2;
    for (let t = -2; t <= 2; t+=0.05) pts.push(new THREE.Vector3((0.5+Math.abs(t)*1.3)*Math.cos(ba)*0.4 + t*0.9, (0.5+Math.abs(t)*1.3)*Math.sin(ba)*0.9, Math.sin(ba*0.5)*0.4));
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat); line.userData.isFieldLine = true; group.add(line);
  }
}

function createInducedFieldLines(group) {
  const mat = new THREE.LineBasicMaterial({ color: 0xff00ff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, linewidth: 2 });
  for (let ring = 0; ring < 8; ring++) {
    const pts = []; const offsetY = (ring - 3.5) * 0.25, r = 1.15 + ring * 0.08;
    for (let a = 0; a <= Math.PI*2; a+=0.05) pts.push(new THREE.Vector3(r*Math.cos(a), offsetY+Math.sin(a*4)*0.08, r*Math.sin(a)));
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
  }
}

function createCurrentArrows(group) {
  const mat = new THREE.MeshBasicMaterial({ color: 0x39ff14, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending });
  for (let i = 0; i < 12; i++) {
    const a = (i/12)*Math.PI*2, cone = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.1, 12), mat);
    cone.position.set(1.15*Math.cos(a), 0, 1.15*Math.sin(a)); cone.rotation.y = -a+Math.PI/2; cone.rotation.z = Math.PI/2; group.add(cone);
  }
}

function generateTidalStressTexture() {
  const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 512;
  const ctx = canvas.getContext('2d'); ctx.fillStyle = '#0a001a'; ctx.fillRect(0, 0, 1024, 512);
  for (let x = 0; x < 1024; x+=2) {
    for (let y = 0; y < 512; y+=4) {
      const stress = Math.abs(Math.cos(2*((x/1024)*Math.PI*2)))*Math.cos((y/512)*Math.PI-Math.PI/2)**2;
      if (stress > 0.1) { const i = (stress-0.1)/0.9; ctx.fillStyle = `rgba(\${Math.round(50+i*205)}, \${Math.round(i*100)}, \${Math.round(150+i*105)}, \${0.5+i*0.5})`; ctx.fillRect(x, y, 2, 4); }
    }
  }
  const tex = new THREE.CanvasTexture(canvas); tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.ClampToEdgeWrapping; return tex;
}
