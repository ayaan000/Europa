import katex from 'katex';

export function renderJupiterTab(container) {
  let orbitSpeed = 8; // Default multiplier

  container.innerHTML = `
    <div class="tab-header">
      <h2>Jupiter System & Magnetosphere</h2>
      <p class="tab-subtitle">
        Europa's internal heat and chemical makeup are driven entirely by its location within 
        Jupiter's immense gravitational and magnetic fields. 
      </p>
    </div>

    <!-- Top Section: Orbits & Resonance -->
    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🪐</span> Galilean Orbits & Laplace Resonance</div>
        <div class="canvas-container" style="height:350px; position:relative;">
          <canvas id="orbit-canvas"></canvas>
          <div style="position:absolute; bottom:10px; left:10px; right:10px; background:rgba(0,0,0,0.6); padding:10px; border-radius:6px; backdrop-filter:blur(4px);">
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; margin-bottom:5px;">
              <span>Orbital Speed: <span id="val-speed" style="color:#00d4ff;">8x</span></span>
            </div>
            <input type="range" id="slider-speed" min="1" max="50" value="8" step="1" style="width:100%;" />
          </div>
        </div>
        <div style="display:flex; gap:6px; margin-top:10px; font-size:10px; flex-wrap:wrap;">
          <span class="badge badge-gold">Io (1.77d)</span>
          <span class="badge badge-cyan">Europa (3.55d)</span>
          <span class="badge badge-purple">Ganymede (7.15d)</span>
          <span class="badge" style="background:rgba(255,255,255,0.05);">Callisto (16.7d)</span>
        </div>
      </div>

      <div>
        <div class="card" style="margin-bottom:15px;">
          <div class="card-title"><span class="icon">🔗</span> The 1:2:4 Resonance Engine</div>
          <div class="equation-block" id="eq-laplace" style="margin-bottom:8px;"></div>
          <p style="font-size:12px; color:var(--text-secondary); line-height:1.5;">
            Io, Europa, and Ganymede are locked in resonance. At each conjunction, periodic gravitational 
            "kicks" force Europa's eccentricity to $e \\approx 0.009$. This small eccentricity causes Europa's distance 
            from Jupiter to vary by ~6,000 km every 3.5 days, flexing the ice shell and heating the interior via 
            viscous dissipation. <strong>Without this resonance, the ocean would freeze solid.</strong>
          </p>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">📊</span> Planetary Metrics</div>
          <div class="data-grid" style="grid-template-columns: 1fr 1fr;">
            <div class="data-item"><div class="label">Tidal Heating</div><div class="value">~10¹² <span class="unit">W</span></div></div>
            <div class="data-item"><div class="label">Radiogenic Heat</div><div class="value">3×10¹¹ <span class="unit">W</span></div></div>
            <div class="data-item"><div class="label">Binding Energy</div><div class="value">2.5×10²⁹ <span class="unit">J</span></div></div>
            <div class="data-item"><div class="label">Cooling Time</div><div class="value">~3 <span class="unit">Gyr</span></div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-gap" style="height:20px;"></div>

    <!-- Bottom Section: Magnetosphere & Math -->
    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🧲</span> Jupiter's Magnetosphere</div>
        <div class="canvas-container" style="height:280px;">
          <canvas id="mag-canvas"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Jupiter's tilted B-field sweeps past at 100 km/s. The time-varying field penetrates Europa, 
          inducing an opposing field in the salty ocean.
        </p>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">⚡</span> Field Physics & Induction</div>
        <div class="equation-block" id="eq-induction" style="margin-bottom:10px;"></div>
        <div class="equation-block" id="eq-lorentz"></div>
        <p style="font-size:12px; color:var(--text-secondary); line-height:1.5; margin-top:10px;">
          The fluctuating Jovian field $B_J$ induces eddy currents $\\vec{J}$ in the conducting ocean. 
          The resultant Lorentz force ($\\vec{F} = \\vec{J} \\times \\vec{B}$) drives westward zonal jets, acting as a 
          planetary-scale electromagnetic pump for ocean heat transport.
        </p>
      </div>
    </div>
  `;

  // Render minimal equations
  document.getElementById('eq-laplace').innerHTML = katex.renderToString(
    'n_{Io} - 3n_{Eu} + 2n_{Ga} = 0, \\quad \\dot{E}_{tidal} \\propto \\frac{e^2}{a^{15/2}}',
    { displayMode: true, throwOnError: false }
  );

  document.getElementById('eq-induction').innerHTML = `
    <div class="equation-label" style="font-size:10px;">Magnetic Diffusion (Skin Depth $\\delta \\approx 100$ km)</div>
    ${katex.renderToString(
      '\\frac{\\partial \\vec{B}}{\\partial t} = \\nabla \\times (\\vec{v} \\times \\vec{B}) + \\eta \\nabla^2 \\vec{B}',
      { displayMode: true, throwOnError: false }
    )}
  `;

  document.getElementById('eq-lorentz').innerHTML = `
    <div class="equation-label" style="font-size:10px;">Electromagnetic Pumping Force</div>
    ${katex.renderToString(
      '\\vec{F} = \\sigma(\\vec{v} \\times \\vec{B_{J}}) \\times \\vec{B_{J}}',
      { displayMode: true, throwOnError: false }
    )}
  `;

  // Slider controls
  const speedSlider = document.getElementById('slider-speed');
  speedSlider.addEventListener('input', (e) => {
    orbitSpeed = parseFloat(e.target.value);
    document.getElementById('val-speed').textContent = orbitSpeed + 'x';
  });

  // Animations
  const animIds = [];
  animIds.push(animateOrbits(() => orbitSpeed));
  animIds.push(drawMagnetosphere());

  return () => {
    animIds.forEach(id => { if (id) cancelAnimationFrame(id); });
  };
}

function animateOrbits(getSpeed) {
  const canvas = document.getElementById('orbit-canvas');
  if (!canvas) return null;
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio, 2);
  canvas.width = rect.width * dpr;
  canvas.height = 350 * dpr;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = '350px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const W = rect.width;
  const H = 350;
  const cx = W / 2;
  const cy = H / 2;

  // Orbital radii (scaled tightly)
  const scale = Math.min(W, H) / 6.5;
  const moons = [
    { name: 'Io', a: 1.0, period: 1.769, color: '#ffd93d', size: 4 },
    { name: 'Europa', a: 1.59, period: 3.551, color: '#00d4ff', size: 5 },
    { name: 'Ganymede', a: 2.53, period: 7.155, color: '#7c5cfc', size: 6 },
    { name: 'Callisto', a: 4.46, period: 16.69, color: '#9ba4c0', size: 5 },
  ];

  let timeAggregator = 0;
  let lastTime = performance.now();
  let animId;

  function draw(now) {
    animId = requestAnimationFrame(draw);
    const dt = (now - lastTime) / 1000;
    lastTime = now;
    
    // Increment virtual time by user-controlled speed multiplier
    timeAggregator += dt * getSpeed();

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#040810';
    ctx.fillRect(0, 0, W, H);

    // Jupiter
    const jupGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 18);
    jupGrad.addColorStop(0, '#e8c87a');
    jupGrad.addColorStop(1, '#8a6420');
    ctx.beginPath(); ctx.arc(cx, cy, 16, 0, Math.PI * 2); ctx.fillStyle = jupGrad; ctx.fill();

    // Orbits & Moons
    moons.forEach(moon => {
      const r = moon.a * scale;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); 
      ctx.strokeStyle = `${moon.color}22`; ctx.lineWidth = 1; ctx.stroke();

      // Position
      const angle = (2 * Math.PI * timeAggregator) / moon.period;
      const mx = cx + r * Math.cos(angle);
      const my = cy + r * Math.sin(angle);

      // Trail
      ctx.beginPath();
      for (let i = 0; i < 20; i++) {
        const ta = angle - (i / 20) * 0.4;
        const tx = cx + r * Math.cos(ta);
        const ty = cy + r * Math.sin(ta);
        if (i === 0) ctx.moveTo(tx, ty); else ctx.lineTo(tx, ty);
      }
      ctx.strokeStyle = `${moon.color}60`; ctx.lineWidth = 2; ctx.stroke();

      // Moon Body
      ctx.beginPath(); ctx.arc(mx, my, moon.size, 0, Math.PI*2); ctx.fillStyle = moon.color; ctx.fill();
      ctx.beginPath(); ctx.arc(mx, my, moon.size + 4, 0, Math.PI*2); ctx.fillStyle = `${moon.color}20`; ctx.fill();
    });

    // Resonance Highlight Line (Io-Europa ~conjunctions)
    const ioAngle = (2 * Math.PI * timeAggregator) / 1.769;
    const euAngle = (2 * Math.PI * timeAggregator) / 3.551;
    const diff = Math.abs(((ioAngle - euAngle) % (Math.PI*2) + Math.PI*2) % (Math.PI*2));
    if (diff < 0.2 || diff > Math.PI*2 - 0.2) {
      ctx.beginPath(); 
      ctx.moveTo(cx + 1.0*scale*Math.cos(ioAngle), cy + 1.0*scale*Math.sin(ioAngle));
      ctx.lineTo(cx + 1.59*scale*Math.cos(euAngle), cy + 1.59*scale*Math.sin(euAngle));
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'; ctx.setLineDash([4, 4]); ctx.stroke(); ctx.setLineDash([]);
    }
  }

  animId = requestAnimationFrame(draw);
  return animId;
}

function drawMagnetosphere() {
  const canvas = document.getElementById('mag-canvas');
  if (!canvas) return null;
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio, 2);
  canvas.width = rect.width * dpr;
  canvas.height = 280 * dpr;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = '280px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const W = rect.width;
  const H = 280;
  const cx = W * 0.25;
  const cy = H / 2;
  let animId;
  let t = 0;

  function draw() {
    animId = requestAnimationFrame(draw);
    t += 0.05;

    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = '#040810';
    ctx.fillRect(0,0,W,H);

    // Jupiter
    ctx.beginPath(); ctx.arc(cx - 60, cy, 50, 0, Math.PI*2); 
    ctx.fillStyle = '#c49a4a'; ctx.fill();

    // Tilted B field pulsing
    ctx.strokeStyle = 'rgba(80, 130, 255, 0.15)';
    ctx.lineWidth = 1;
    const wobble = Math.sin(t*0.5)*0.1;
    
    for (let i = 0; i < 10; i++) {
        const startA = (i/10)*Math.PI*2;
        ctx.beginPath();
        for(let s=0; s<=1; s+=0.05) {
            const r = 40 + s*300;
            const a = startA + s*0.4*Math.sin(startA) + wobble;
            const x = cx-60 + r*Math.cos(a);
            const y = cy + r*0.6*Math.sin(a);
            if(s===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
        }
        ctx.stroke();
    }

    // Europa
    const ex = cx + 140; 
    ctx.beginPath(); ctx.arc(ex, cy, 14, 0, Math.PI*2); 
    ctx.fillStyle = '#6090a8'; ctx.fill();
    ctx.strokeStyle = '#00d4ff'; ctx.lineWidth=1.5; ctx.stroke();

    // Induced field
    ctx.strokeStyle = 'rgba(0, 212, 255, 0.3)';
    for(let i=0; i<6; i++) {
        const aBase = (i/6)*Math.PI*2;
        ctx.beginPath();
        for(let s=0; s<=1; s+=0.05) {
            const r = 18 + s*35;
            const a = aBase - wobble; // anti-aligned
            const x = ex + r*Math.cos(a + s*0.5);
            const y = cy + r*0.7*Math.sin(a + s*0.5);
            if(s===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
        }
        ctx.stroke();
    }

    ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
    ctx.font = '10px sans-serif';
    ctx.fillText('Induced B', ex - 20, cy - 30);
  }

  animId = requestAnimationFrame(draw);
  return animId;
}
