import katex from 'katex';

/**
 * JUPITER SYSTEM & MAGNETOSPHERE TAB
 * Visualizes Jupiter's orbital system, the Laplace resonance,
 * Jupiter's magnetic field interaction with Europa, and tidal heating.
 */
export function renderJupiterTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Jupiter System & Magnetosphere</h2>
      <p class="tab-subtitle">
        Europa orbits within Jupiter's immense magnetosphere — the largest structure in the solar 
        system. The interplay between orbital mechanics (the Laplace resonance), Jupiter's magnetic 
        field, and tidal dissipation shapes every aspect of Europa's interior and habitability.
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🪐</span> Galilean Moon Orbits & Laplace Resonance</div>
        <div class="canvas-container" style="height:420px;">
          <canvas id="orbit-canvas"></canvas>
        </div>
        <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
          <span class="badge badge-gold">Io — 1.77 d</span>
          <span class="badge badge-cyan">Europa — 3.55 d</span>
          <span class="badge badge-purple">Ganymede — 7.15 d</span>
          <span class="badge" style="background:rgba(255,255,255,0.08); color:var(--text-secondary); border:1px solid var(--border-subtle);">Callisto — 16.69 d</span>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:6px;">
          Animated orbital view. The 1:2:4 Laplace resonance locks Io, Europa, and Ganymede into 
          commensurable orbits, maintaining their orbital eccentricities and driving tidal heating.
        </p>
      </div>

      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">🔗</span> The Laplace Resonance (1:2:4)</div>
          <div class="equation-block" id="eq-laplace"></div>
          <div class="equation-block" id="eq-mean-motion" style="margin-top:12px;"></div>
          <div class="context-block" style="margin-top:14px;">
            <h4>Why Resonance Matters for Europa</h4>
            <p>
              The 1:2:4 orbital resonance between Io, Europa, and Ganymede prevents their orbits 
              from circularising. Each conjunction provides a periodic gravitational "kick" that 
              maintains a forced eccentricity of e ≈ 0.009 for Europa. This small but persistent 
              eccentricity means Europa's distance from Jupiter varies by ~6,000 km each orbit, 
              producing <strong>time-varying tidal stresses</strong> that flex the ice shell and heat 
              the interior through viscous dissipation.
            </p>
            <p style="margin-top:8px;">
              Without the resonance, tidal dissipation would circularise Europa's orbit within 
              ~10⁸ years, the ocean would freeze, and the moon would become geologically inert.
              <strong>The Laplace resonance is the engine that keeps Europa alive.</strong>
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">📊</span> Orbital Parameters</div>
          <div style="overflow-x:auto;">
            <table style="width:100%; font-size:12px; color:var(--text-secondary); border-collapse:collapse; min-width:400px;">
              <thead>
                <tr style="border-bottom:1px solid var(--border-subtle);">
                  <th style="text-align:left; padding:8px; color:var(--text-muted); font-size:10px; text-transform:uppercase; letter-spacing:1px;">Moon</th>
                  <th style="text-align:center; padding:8px;">a (R_J)</th>
                  <th style="text-align:center; padding:8px;">P (days)</th>
                  <th style="text-align:center; padding:8px;">e</th>
                  <th style="text-align:center; padding:8px;">Resonance</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--border-subtle);">
                  <td style="padding:8px; color:var(--accent-gold);">Io</td>
                  <td style="text-align:center;">5.91</td>
                  <td style="text-align:center;">1.769</td>
                  <td style="text-align:center;">0.0041</td>
                  <td style="text-align:center;">1×</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border-subtle);">
                  <td style="padding:8px; color:var(--accent-primary);">Europa</td>
                  <td style="text-align:center;">9.39</td>
                  <td style="text-align:center;">3.551</td>
                  <td style="text-align:center;">0.0094</td>
                  <td style="text-align:center;">2×</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border-subtle);">
                  <td style="padding:8px; color:var(--accent-tertiary);">Ganymede</td>
                  <td style="text-align:center;">14.97</td>
                  <td style="text-align:center;">7.155</td>
                  <td style="text-align:center;">0.0013</td>
                  <td style="text-align:center;">4×</td>
                </tr>
                <tr>
                  <td style="padding:8px; color:var(--text-secondary);">Callisto</td>
                  <td style="text-align:center;">26.33</td>
                  <td style="text-align:center;">16.69</td>
                  <td style="text-align:center;">0.0074</td>
                  <td style="text-align:center;">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🧲</span> Jupiter's Magnetosphere & Europa</div>
        <div class="canvas-container" style="height:380px;">
          <canvas id="mag-canvas"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Jupiter's magnetic field (B<sub>J</sub> ≈ 420 nT at Europa) sweeps past Europa at ~100 km/s, 
          inducing currents in the salty ocean and driving electromagnetic pumping of ocean flow.
        </p>
      </div>

      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">⚡</span> Electromagnetic Induction at Europa</div>
          <div class="equation-block" id="eq-induction"></div>
          <div class="equation-block" id="eq-lorentz" style="margin-top:12px;"></div>
          <div class="context-block" style="margin-top:14px;">
            <h4>How the Magnetosphere Drives Ocean Currents</h4>
            <p>
              Jupiter's magnetic field at Europa's orbit has a time-varying component due to 
              Jupiter's tilted dipole (tilt ≈ 9.6°) rotating with a period of ~10 hours. 
              This oscillating field penetrates Europa's ice shell and induces eddy currents 
              in the conducting ocean (σ ≈ 3–5 S/m for Earth-like salinity). Three effects result:
            </p>
            <ul style="margin-top:8px; padding-left:16px; font-size:12px; line-height:2;">
              <li><strong>Induced magnetic field</strong> — detectable by ECM (Steinbrügge et al. 2026)</li>
              <li><strong>Joule heating</strong> — small (≈ 10⁷ W) but contributes to the energy budget</li>
              <li><strong>Lorentz force</strong> — F = J × B drives zonal ocean currents (electromagnetic pumping)</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">🔥</span> Tidal Dissipation Budget</div>
          <div class="equation-block" id="eq-tidal"></div>
          <div class="data-grid" style="margin-top:14px;">
            <div class="data-item">
              <div class="label">Tidal Heating (Europa)</div>
              <div class="value" style="font-size:15px;">~10¹²<span class="unit">W</span></div>
            </div>
            <div class="data-item">
              <div class="label">Radiogenic Heating</div>
              <div class="value" style="font-size:15px;">~3×10¹¹<span class="unit">W</span></div>
            </div>
            <div class="data-item">
              <div class="label">Forced Eccentricity</div>
              <div class="value" style="font-size:15px;">0.0094</div>
            </div>
            <div class="data-item">
              <div class="label">Orbital Period</div>
              <div class="value" style="font-size:15px;">3.551<span class="unit">days</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🎓</span> AST320 — Orbital Mechanics & Tidal Theory</div>
      <div class="grid-3">
        <div class="context-block" style="margin:0;">
          <h4>Kepler's Third Law at Jupiter</h4>
          <div class="equation-block" id="eq-kepler" style="margin:10px 0;"></div>
          <p>
            The 1:2:4 period ratio implies a<sub>Europa</sub>/a<sub>Io</sub> = 2^(2/3) ≈ 1.587. 
            Measured: 9.39/5.91 = 1.589 — confirming Kepler's law to <0.2% precision. This is a 
            textbook verification of Newtonian gravity.
          </p>
        </div>
        <div class="context-block" style="margin:0;">
          <h4>Virial Theorem & Energy Budget</h4>
          <div class="equation-block" id="eq-virial" style="margin:10px 0;"></div>
          <p>
            The Virial theorem constrains Europa's thermal evolution: total gravitational binding 
            energy ≈ 3GM²/5R ≈ 2.5×10²⁹ J. The tidal dissipation rate (~10¹² W) implies a 
            cooling timescale of ~10¹⁷ s ≈ 3 Gyr — meaning Europa's ocean should persist for 
            roughly the remaining lifetime of the solar system.
          </p>
        </div>
        <div class="context-block" style="margin:0;">
          <h4>Roche Limit & Tidal Stresses</h4>
          <div class="equation-block" id="eq-roche" style="margin:10px 0;"></div>
          <p>
            Europa orbits well outside Jupiter's Roche limit (≈ 2.5 R_J for ice), so it remains 
            self-gravitating. However, the differential tidal acceleration across Europa's diameter 
            produces surface stresses of ~0.1 MPa — enough to fracture the ice shell and create 
            the observed lineae and cycloid ridges.
          </p>
        </div>
      </div>
    </div>
  `;

  // Render equations
  document.getElementById('eq-laplace').innerHTML = `
    <div class="equation-label">Laplace Resonance Condition</div>
    ${katex.renderToString(
      'n_{\\text{Io}} - 3n_{\\text{Europa}} + 2n_{\\text{Ganymede}} = 0',
      { displayMode: true, throwOnError: false }
    )}
    <div class="equation-explanation">
      n = mean motion (= 2π/P). This relation means that the three moons can never be aligned 
      on the same side of Jupiter simultaneously — at each conjunction, only two moons align while 
      the third is on the opposite side, producing a cyclic pattern of gravitational perturbations.
    </div>
  `;

  document.getElementById('eq-mean-motion').innerHTML = `
    <div class="equation-label">Period Ratios</div>
    ${katex.renderToString(
      '\\frac{P_{\\text{Europa}}}{P_{\\text{Io}}} = 2.007 \\approx 2, \\quad \\frac{P_{\\text{Ganymede}}}{P_{\\text{Europa}}} = 2.015 \\approx 2',
      { displayMode: true, throwOnError: false }
    )}
    <div class="equation-explanation">
      Near-integer period ratios lock the moons into resonance. The small deviations from exact 2:1 
      cause a slow libration of the resonant argument — measurable by Europa Clipper's G/RS tracking.
    </div>
  `;

  document.getElementById('eq-induction').innerHTML = `
    <div class="equation-label">Magnetic Diffusion Equation</div>
    ${katex.renderToString(
      '\\frac{\\partial \\vec{B}}{\\partial t} = \\nabla \\times (\\vec{v} \\times \\vec{B}) + \\eta \\nabla^2 \\vec{B}',
      { displayMode: true, throwOnError: false }
    )}
    <div class="equation-explanation">
      η = 1/(μ₀σ) is the magnetic diffusivity. For Europa's ocean (σ ≈ 4 S/m), 
      η ≈ 2×10⁵ m²/s. The skin depth δ = √(2η/ω) ≈ 80–120 km at the Jovian synodic period, 
      meaning the field penetrates deep enough to "see" the ocean.
    </div>
  `;

  document.getElementById('eq-lorentz').innerHTML = `
    <div class="equation-label">Lorentz Force (Electromagnetic Pumping)</div>
    ${katex.renderToString(
      '\\vec{F} = \\vec{J} \\times \\vec{B} = \\sigma(\\vec{v} \\times \\vec{B}) \\times \\vec{B}',
      { displayMode: true, throwOnError: false }
    )}
    <div class="equation-explanation">
      The induced currents J interact with Jupiter's background field B to produce a net force 
      that drives westward zonal jets in the equatorial ocean — a "natural electromagnetic pump."
    </div>
  `;

  document.getElementById('eq-tidal').innerHTML = `
    <div class="equation-label">Tidal Dissipation Rate</div>
    ${katex.renderToString(
      '\\dot{E}_{\\text{tidal}} = \\frac{21}{2}\\,\\frac{k_2}{Q}\\,\\frac{(GM_J)^{5/2}\\,R^5\\,e^2}{a^{15/2}}',
      { displayMode: true, throwOnError: false }
    )}
    <div class="equation-explanation">
      k₂/Q = tidal quality factor (≈ 0.01 for Europa), M_J = Jupiter's mass, R = Europa's 
      radius, e = orbital eccentricity, a = semi-major axis. The e² dependence makes the 
      Laplace resonance essential — without forced eccentricity, tidal heating vanishes.
    </div>
  `;

  document.getElementById('eq-kepler').innerHTML = katex.renderToString(
    'P^2 = \\frac{4\\pi^2}{GM_J}\\,a^3',
    { displayMode: true, throwOnError: false }
  );

  document.getElementById('eq-virial').innerHTML = katex.renderToString(
    'E_{\\text{bind}} \\approx \\frac{3GM^2}{5R} \\approx 2.5 \\times 10^{29}\\,\\text{J}',
    { displayMode: true, throwOnError: false }
  );

  document.getElementById('eq-roche').innerHTML = katex.renderToString(
    'd_{\\text{Roche}} \\approx 2.46\\,R_J\\!\\left(\\frac{\\rho_J}{\\rho_{\\text{moon}}}\\right)^{\\!1/3}',
    { displayMode: true, throwOnError: false }
  );

  // Animations
  animateOrbits();
  drawMagnetosphere();
}

function animateOrbits() {
  const canvas = document.getElementById('orbit-canvas');
  if (!canvas) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio, 2);
  canvas.width = rect.width * dpr;
  canvas.height = 420 * dpr;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = '420px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const W = rect.width;
  const H = 420;
  const cx = W / 2;
  const cy = H / 2;

  // Orbital radii (scaled)
  const scale = Math.min(W, H) / 7;
  const moons = [
    { name: 'Io', a: 1.0, period: 1.769, color: '#ffd93d', size: 5 },
    { name: 'Europa', a: 1.59, period: 3.551, color: '#00d4ff', size: 6 },
    { name: 'Ganymede', a: 2.53, period: 7.155, color: '#7c5cfc', size: 8 },
    { name: 'Callisto', a: 4.46, period: 16.69, color: '#9ba4c0', size: 7 },
  ];

  let startTime = Date.now();
  let animId;

  function draw() {
    animId = requestAnimationFrame(draw);
    const t = (Date.now() - startTime) / 1000;

    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = '#040810';
    ctx.fillRect(0, 0, W, H);

    // Jupiter
    const jupGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 22);
    jupGrad.addColorStop(0, '#e8c87a');
    jupGrad.addColorStop(0.5, '#c49a4a');
    jupGrad.addColorStop(1, '#8a6420');
    ctx.beginPath();
    ctx.arc(cx, cy, 18, 0, Math.PI * 2);
    ctx.fillStyle = jupGrad;
    ctx.fill();

    // Jupiter bands
    ctx.strokeStyle = 'rgba(100, 60, 20, 0.4)';
    ctx.lineWidth = 2;
    for (let dy = -12; dy <= 12; dy += 6) {
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.save();
      ctx.clip();
      ctx.beginPath();
      ctx.moveTo(cx - 20, cy + dy);
      ctx.lineTo(cx + 20, cy + dy);
      ctx.stroke();
      ctx.restore();
    }

    // Magnetosphere boundary (dashed)
    ctx.setLineDash([3, 6]);
    ctx.strokeStyle = 'rgba(100, 150, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(cx, cy, scale * 5, scale * 3.5, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.font = '9px "JetBrains Mono", monospace';
    ctx.fillStyle = 'rgba(100, 150, 255, 0.25)';
    ctx.fillText('MAGNETOSPHERE', cx + scale * 3.2, cy - scale * 2.5);

    // Draw orbit paths and moons
    moons.forEach(moon => {
      const r = moon.a * scale;

      // Orbit path
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = `${moon.color}22`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Moon position (angular velocity = 2π/P, speed up by 8x)
      const angle = (2 * Math.PI * t * 8) / moon.period;
      const mx = cx + r * Math.cos(angle);
      const my = cy + r * Math.sin(angle);

      // Trail
      ctx.beginPath();
      for (let i = 0; i < 30; i++) {
        const ta = angle - (i / 30) * 0.5;
        const tx = cx + r * Math.cos(ta);
        const ty = cy + r * Math.sin(ta);
        if (i === 0) ctx.moveTo(tx, ty);
        else ctx.lineTo(tx, ty);
      }
      ctx.strokeStyle = `${moon.color}${Math.round(60).toString(16).padStart(2, '0')}`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Moon body
      ctx.beginPath();
      ctx.arc(mx, my, moon.size, 0, Math.PI * 2);
      ctx.fillStyle = moon.color;
      ctx.fill();

      // Glow
      ctx.beginPath();
      ctx.arc(mx, my, moon.size + 3, 0, Math.PI * 2);
      ctx.fillStyle = `${moon.color}20`;
      ctx.fill();

      // Label
      ctx.font = '10px "Inter", sans-serif';
      ctx.fillStyle = moon.color;
      ctx.textAlign = 'center';
      ctx.fillText(moon.name, mx, my - moon.size - 6);
      ctx.textAlign = 'left';
    });

    // Resonance lines (connecting moons when near conjunction)
    const ioAngle = (2 * Math.PI * t * 8) / 1.769;
    const europaAngle = (2 * Math.PI * t * 8) / 3.551;
    const ganymedeAngle = (2 * Math.PI * t * 8) / 7.155;

    // Show Io-Europa conjunction line
    const angleDiff = Math.abs(((ioAngle - europaAngle) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2));
    if (angleDiff < 0.3 || angleDiff > Math.PI * 2 - 0.3) {
      const ioR = 1.0 * scale;
      const euroR = 1.59 * scale;
      ctx.beginPath();
      ctx.moveTo(cx + ioR * Math.cos(ioAngle), cy + ioR * Math.sin(ioAngle));
      ctx.lineTo(cx + euroR * Math.cos(europaAngle), cy + euroR * Math.sin(europaAngle));
      ctx.strokeStyle = 'rgba(255, 217, 61, 0.4)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Jupiter label
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.fillStyle = '#c49a4a';
    ctx.textAlign = 'center';
    ctx.fillText('Jupiter', cx, cy + 30);
    ctx.textAlign = 'left';
  }

  draw();

  // Store for cleanup
  canvas._animId = animId;
}

function drawMagnetosphere() {
  const canvas = document.getElementById('mag-canvas');
  if (!canvas) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio, 2);
  canvas.width = rect.width * dpr;
  canvas.height = 380 * dpr;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = '380px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const W = rect.width;
  const H = 380;
  const cx = W * 0.3;
  const cy = H / 2;

  // Background
  ctx.fillStyle = '#040810';
  ctx.fillRect(0, 0, W, H);

  // Jupiter (left side)
  const jupGrad = ctx.createRadialGradient(cx - 80, cy, 0, cx - 80, cy, 50);
  jupGrad.addColorStop(0, '#e8c87a');
  jupGrad.addColorStop(0.7, '#c49a4a');
  jupGrad.addColorStop(1, '#8a642044');
  ctx.beginPath();
  ctx.arc(cx - 80, cy, 40, 0, Math.PI * 2);
  ctx.fillStyle = jupGrad;
  ctx.fill();

  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillStyle = '#c49a4a88';
  ctx.fillText('Jupiter', cx - 100, cy + 55);

  // Magnetic field lines (dipole pattern from Jupiter)
  ctx.strokeStyle = 'rgba(80, 130, 255, 0.15)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 12; i++) {
    const startAngle = (i / 12) * Math.PI * 2;
    ctx.beginPath();
    for (let t = 0; t <= 1; t += 0.02) {
      const r = 30 + t * 250;
      const angle = startAngle + t * 0.3 * Math.sin(startAngle);
      const x = cx - 80 + r * Math.cos(angle);
      const y = cy + (r * 0.6) * Math.sin(angle);
      if (t === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // B field label
  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(80, 130, 255, 0.6)';
  ctx.fillText('B_J ≈ 420 nT', cx - 30, cy - 100);

  // Field direction arrows
  for (let i = 0; i < 5; i++) {
    const ax = cx + 40 + i * 50;
    const ay = cy + Math.sin(i * 0.8) * 30;
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(ax + 20, ay);
    ctx.strokeStyle = 'rgba(80, 130, 255, 0.3)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(ax + 20, ay);
    ctx.lineTo(ax + 16, ay - 3);
    ctx.moveTo(ax + 20, ay);
    ctx.lineTo(ax + 16, ay + 3);
    ctx.stroke();
  }

  ctx.fillStyle = 'rgba(80, 130, 255, 0.4)';
  ctx.font = '9px "Inter", sans-serif';
  ctx.fillText('→ sweeps past at ~100 km/s', cx + 60, cy - 60);

  // Europa (right of center)
  const ex = cx + 120;
  const ey = cy;

  // Induced field (secondary dipole around Europa)
  ctx.strokeStyle = 'rgba(0, 212, 255, 0.2)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    ctx.beginPath();
    for (let t = 0; t <= 1; t += 0.05) {
      const r = 20 + t * 40;
      const a = angle + t * 0.5;
      const x = ex + r * Math.cos(a);
      const y = ey + r * 0.7 * Math.sin(a);
      if (t === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Europa body
  const euroGrad = ctx.createRadialGradient(ex, ey, 0, ex, ey, 16);
  euroGrad.addColorStop(0, '#c8dce8');
  euroGrad.addColorStop(1, '#6090a8');
  ctx.beginPath();
  ctx.arc(ex, ey, 14, 0, Math.PI * 2);
  ctx.fillStyle = euroGrad;
  ctx.fill();
  ctx.strokeStyle = 'rgba(0, 212, 255, 0.5)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Ocean layer inside Europa
  ctx.beginPath();
  ctx.arc(ex, ey, 10, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(0, 150, 255, 0.4)';
  ctx.setLineDash([2, 2]);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillStyle = '#00d4ff';
  ctx.fillText('Europa', ex - 18, ey + 28);

  // Labels
  ctx.font = '9px "Inter", sans-serif';
  ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
  ctx.fillText('induced B', ex + 20, ey - 30);

  // Current arrows (J) around Europa
  ctx.fillStyle = 'rgba(255, 200, 50, 0.6)';
  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillText('J →', ex + 18, ey + 2);

  // F = J × B label
  ctx.fillStyle = 'rgba(255, 107, 107, 0.7)';
  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillText('F = J × B', ex - 5, ey + 50);
  ctx.font = '9px "Inter", sans-serif';
  ctx.fillStyle = 'rgba(255, 107, 107, 0.5)';
  ctx.fillText('(westward jet)', ex - 10, ey + 64);

  // Plasma torus region label
  ctx.fillStyle = 'rgba(255, 217, 61, 0.2)';
  ctx.fillRect(cx - 40, H - 30, 160, 20);
  ctx.fillStyle = 'rgba(255, 217, 61, 0.6)';
  ctx.font = '9px "JetBrains Mono", monospace';
  ctx.fillText('Io plasma torus region', cx - 32, H - 16);
}
