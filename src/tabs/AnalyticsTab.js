import katex from 'katex';

/**
 * CLIPPER ANALYTICS DASHBOARD
 * Connects Europa Clipper flybys to paper predictions with data-driven analytics panels.
 */
export function renderAnalyticsTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Clipper Analytics Dashboard</h2>
      <p class="tab-subtitle">
        An integrated analytics view connecting Europa Clipper's planned observations to 
        predictions from Steinbrügge et al. (2026) and Pagnoscin et al. (2026). 
        Each flyby produces complementary datasets that can be cross-correlated to test 
        specific hypotheses about Europa's interior.
      </p>
    </div>

    <div class="grid-3" style="margin-bottom:20px;">
      <div class="card" style="text-align:center;">
        <div style="font-size:36px; font-family:var(--font-display); font-weight:700; color:var(--accent-primary);">49</div>
        <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1.5px; font-family:var(--font-mono);">Planned Flybys</div>
      </div>
      <div class="card" style="text-align:center;">
        <div style="font-size:36px; font-family:var(--font-display); font-weight:700; color:var(--accent-tertiary);">9</div>
        <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1.5px; font-family:var(--font-mono);">Science Instruments</div>
      </div>
      <div class="card" style="text-align:center;">
        <div style="font-size:36px; font-family:var(--font-display); font-weight:700; color:var(--accent-gold);">25 km</div>
        <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1.5px; font-family:var(--font-mono);">Minimum Altitude</div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">📈</span> Flyby Coverage & Science Accumulation</div>
        <div class="canvas-container" style="height:300px;">
          <canvas id="flyby-timeline"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Projected science return: gravity field precision improves as 1/√N with number of 
          tracked flybys. k₂ and h₂ require measurements at diverse tidal phases.
        </p>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">🔬</span> Hypothesis Testing Matrix</div>
        <p style="font-size:12px; color:var(--text-secondary); margin-bottom:14px;">
          Mapping paper predictions to testable observations:
        </p>
        <div style="display:flex; flex-direction:column; gap:10px;" id="hypothesis-list">
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🗺️</span> Spatial Coverage Strategy</div>
        <div class="canvas-container" style="height:280px;">
          <canvas id="coverage-canvas"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Flyby ground tracks provide heterogeneous spatial coverage. REASON ice thickness 
          measurements along each track can be compared with Pagnoscin et al.'s predicted pattern 
          of convection-driven thickness variations.
        </p>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">📊</span> Measurement Precision Targets</div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${precisionCard('k₂ (Gravity Response)', '0.25 ± 0.02', 'var(--accent-primary)',
            'G/RS Doppler tracking over ~20 tracked flybys at diverse tidal phases. Must distinguish k₂ ≈ 0.25 (ocean) from k₂ ≈ 0.02 (no ocean) — a 10σ detection with target precision.')}
          ${precisionCard('h₂ (Shape Response)', '1.35 ± 0.10', 'var(--accent-tertiary)',
            'EIS limb profiles + REASON altimetry. ~30 m peak-to-peak tidal deformation. Requires repeated altimetry passes at different tidal phases.')}
          ${precisionCard('Ice Shell Thickness', '5–30 km (local)', 'var(--accent-gold)',
            'REASON 9 MHz radar sounding. Max penetration ~30 km. Spatial resolution along-track ~1 km. Each flyby provides one profile.')}
          ${precisionCard('Ocean Conductivity', '1–10 S/m', 'var(--accent-green)',
            'ECM + PIMS induction measurement. Conductivity constrains salinity (Earth ocean: σ ≈ 4 S/m ↔ 35 g/kg NaCl).')}
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🔗</span> Cross-Instrument Synergy: Testing Convection-Ice Coupling</div>
      <div class="canvas-container" style="height:200px;">
        <canvas id="synergy-canvas"></canvas>
      </div>
      <div class="grid-2" style="margin-top:16px;">
        <div class="context-block" style="margin:0;">
          <h4>The Key Test (Pagnoscin et al. 2026)</h4>
          <p>
            If ocean convection drives ice shell thickness variations, then:
          </p>
          <ol style="margin-top:6px; padding-left:16px; font-size:12px; line-height:2;">
            <li>REASON should detect spatial variations in ice-ocean interface depth</li>
            <li>G/RS should measure corresponding gravity anomalies (thinner ice → lower density → negative Bouguer anomaly)</li>
            <li>EIS should map surface geology (chaos terrain) correlating with thin-ice regions</li>
            <li>If all three correlate → strong evidence for convection-ice coupling</li>
          </ol>
        </div>
        <div class="context-block" style="margin:0;">
          <h4>The Key Test (Steinbrügge et al. 2026)</h4>
          <p>
            If a global subsurface ocean exists and decouples the ice shell:
          </p>
          <ol style="margin-top:6px; padding-left:16px; font-size:12px; line-height:2;">
            <li>G/RS should measure k₂ ≈ 0.25 (decoupled shell)</li>
            <li>EIS + REASON should measure h₂ ≈ 1.35 (~30 m surface deformation)</li>
            <li>ECM should detect a secondary induced magnetic field matching ocean conductivity models</li>
            <li>If all three agree → definitive ocean confirmation</li>
          </ol>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🎓</span> AST320 — From Theory to Observation</div>
      <div class="grid-3">
        <div class="context-block" style="margin:0;">
          <h4>Inverse Problem</h4>
          <p>
            Geodesy is fundamentally an inverse problem: given surface observables (gravity, shape, 
            magnetic field), infer interior structure. This is the same mathematical framework as 
            stellar structure — where surface luminosity and spectra constrain internal temperature 
            and composition profiles.
          </p>
        </div>
        <div class="context-block" style="margin:0;">
          <h4>Error Propagation</h4>
          <div class="equation-block" id="eq-error" style="margin:8px 0;"></div>
          <p>
            Uncertainty in k₂ propagates to uncertainty in ice shell thickness. This is a direct 
            application of error propagation — a core AST320 skill applied to real planetary data.
          </p>
        </div>
        <div class="context-block" style="margin:0;">
          <h4>Bayesian Inference</h4>
          <div class="equation-block" id="eq-bayes" style="margin:8px 0;"></div>
          <p>
            Each flyby updates our posterior probability for Europa's interior model. The final 
            answer emerges from combining ~49 independent measurements — a textbook application of 
            Bayesian parameter estimation.
          </p>
        </div>
      </div>
    </div>
  `;

  // Hypotheses
  const hyps = [
    { id: 'H1', test: 'Global ocean exists', instrument: 'G/RS + ECM', metric: 'k₂ ≈ 0.25, induced B', paper: 'Steinbrügge 2026', status: 'testable' },
    { id: 'H2', test: 'Ice shell thickness varies spatially', instrument: 'REASON + G/RS', metric: 'Correlated ice depth & gravity', paper: 'Pagnoscin 2026', status: 'testable' },
    { id: 'H3', test: 'Chaos terrain above thin ice', instrument: 'EIS + REASON', metric: 'Geology-thickness correlation', paper: 'Pagnoscin 2026', status: 'testable' },
    { id: 'H4', test: 'Ocean salinity ≈ Earth-like', instrument: 'ECM + PIMS', metric: 'σ ≈ 3–5 S/m', paper: 'Steinbrügge 2026', status: 'testable' },
    { id: 'H5', test: 'Tidal deformation ~30 m', instrument: 'EIS + REASON', metric: 'h₂ ≈ 1.35', paper: 'Steinbrügge 2026', status: 'testable' },
  ];

  const hypList = document.getElementById('hypothesis-list');
  hyps.forEach(h => {
    hypList.innerHTML += `
      <div class="data-item" style="border-left:3px solid var(--accent-primary);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
          <span class="badge badge-cyan">${h.id}</span>
          <span class="badge badge-green">${h.status}</span>
        </div>
        <div style="font-size:13px; font-weight:600; color:var(--text-primary); margin-bottom:4px;">${h.test}</div>
        <div style="font-size:11px; color:var(--text-secondary);">
          <strong>Instrument:</strong> ${h.instrument} · <strong>Metric:</strong> ${h.metric}
        </div>
        <div style="font-size:10px; color:var(--text-muted); margin-top:2px;">Source: ${h.paper}</div>
      </div>
    `;
  });

  // Equations
  document.getElementById('eq-error').innerHTML = katex.renderToString(
    '\\sigma_{d_{\\text{ice}}} = \\left|\\frac{\\partial d}{\\partial k_2}\\right| \\sigma_{k_2}',
    { displayMode: true, throwOnError: false }
  );

  document.getElementById('eq-bayes').innerHTML = katex.renderToString(
    'P(\\text{model}|\\text{data}) \\propto P(\\text{data}|\\text{model})\\,P(\\text{model})',
    { displayMode: true, throwOnError: false }
  );

  // Draw analytics visualizations
  drawFlybyTimeline();
  drawCoverage();
  drawSynergy();
}

function precisionCard(title, target, color, desc) {
  return `
    <div class="data-item" style="border-left:3px solid ${color};">
      <div style="display:flex; justify-content:space-between; align-items:baseline;">
        <div class="label">${title}</div>
        <span style="font-family:var(--font-mono); font-size:13px; font-weight:600; color:${color};">${target}</span>
      </div>
      <p style="font-size:11px; color:var(--text-secondary); line-height:1.6; margin-top:4px;">${desc}</p>
    </div>
  `;
}

function drawFlybyTimeline() {
  const canvas = document.getElementById('flyby-timeline');
  if (!canvas) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio, 2);
  canvas.width = rect.width * dpr;
  canvas.height = 300 * dpr;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = '300px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const W = rect.width;
  const H = 300;
  const pad = { top: 30, right: 20, bottom: 40, left: 50 };

  // Background
  ctx.fillStyle = '#040810';
  ctx.fillRect(0, 0, W, H);

  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;

  // Axes
  ctx.strokeStyle = 'rgba(255,255,255,0.15)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top);
  ctx.lineTo(pad.left, H - pad.bottom);
  ctx.lineTo(W - pad.right, H - pad.bottom);
  ctx.stroke();

  // Grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  for (let i = 1; i <= 4; i++) {
    const y = pad.top + (plotH * i) / 5;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(W - pad.right, y);
    ctx.stroke();
  }

  // Simulate flyby data: cumulative science return
  const flybys = 49;
  const k2Precision = [];
  const iceProfiles = [];

  for (let i = 1; i <= flybys; i++) {
    k2Precision.push(0.1 / Math.sqrt(i / 3)); // improves as 1/√N
    iceProfiles.push(i); // linear accumulation
  }

  // Normalize
  const maxK2 = k2Precision[0];

  // Draw k₂ precision curve
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(0, 212, 255, 0.8)';
  ctx.lineWidth = 2;
  for (let i = 0; i < flybys; i++) {
    const x = pad.left + (i / (flybys - 1)) * plotW;
    const y = pad.top + (1 - k2Precision[i] / maxK2) * plotH;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Fill under curve
  ctx.lineTo(pad.left + plotW, H - pad.bottom);
  ctx.lineTo(pad.left, H - pad.bottom);
  ctx.fillStyle = 'rgba(0, 212, 255, 0.05)';
  ctx.fill();

  // Ice profiles bar chart (lighter)
  ctx.fillStyle = 'rgba(124, 92, 252, 0.2)';
  for (let i = 0; i < flybys; i++) {
    const x = pad.left + (i / flybys) * plotW;
    const barH = (i / flybys) * plotH * 0.6;
    const barW = plotW / flybys - 1;
    ctx.fillRect(x, H - pad.bottom - barH, Math.max(barW, 1), barH);
  }

  // Threshold line for k₂ detection
  const threshY = pad.top + (1 - 0.02 / maxK2) * plotH;
  ctx.setLineDash([6, 4]);
  ctx.strokeStyle = 'rgba(255, 217, 61, 0.5)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad.left, threshY);
  ctx.lineTo(W - pad.right, threshY);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.font = '9px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(255, 217, 61, 0.6)';
  ctx.fillText('σ(k₂) = 0.02 target', W - pad.right - 100, threshY - 5);

  // Labels
  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(0, 212, 255, 0.7)';
  ctx.fillText('k₂ precision', pad.left + 5, pad.top + 15);

  ctx.fillStyle = 'rgba(124, 92, 252, 0.6)';
  ctx.fillText('ice profiles', pad.left + 5, pad.top + 28);

  // X label
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '10px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Flyby Number', W / 2, H - 8);
  ctx.textAlign = 'left';

  // X ticks
  ctx.font = '9px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  [1, 10, 20, 30, 40, 49].forEach(n => {
    const x = pad.left + ((n - 1) / (flybys - 1)) * plotW;
    ctx.fillText(n.toString(), x - 4, H - pad.bottom + 14);
  });
}

function drawCoverage() {
  const canvas = document.getElementById('coverage-canvas');
  if (!canvas) return;
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

  // Background — equirectangular Europa surface placeholder
  ctx.fillStyle = '#0a1520';
  ctx.fillRect(0, 0, W, H);

  // Grid (lat/lon lines)
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 0.5;
  for (let i = 0; i <= 6; i++) {
    const y = (i / 6) * H;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }
  for (let i = 0; i <= 12; i++) {
    const x = (i / 12) * W;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }

  // Lat/lon labels
  ctx.font = '8px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(255,255,255,0.2)';
  ctx.fillText('90°N', 3, 12);
  ctx.fillText('0°', 3, H / 2 + 4);
  ctx.fillText('90°S', 3, H - 4);
  ctx.fillText('0°', W / 2 - 4, H - 4);
  ctx.fillText('180°W', 3, H - 4);
  ctx.fillText('180°E', W - 30, H - 4);

  // Europa surface hint (lineae)
  ctx.strokeStyle = 'rgba(140, 110, 70, 0.1)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 30; i++) {
    const x1 = Math.random() * W;
    const y1 = Math.random() * H;
    const angle = Math.random() * Math.PI;
    const len = 30 + Math.random() * 80;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + Math.cos(angle) * len, y1 + Math.sin(angle) * len);
    ctx.stroke();
  }

  // Simulated flyby ground tracks
  const trackColors = ['rgba(0, 212, 255, 0.4)', 'rgba(124, 92, 252, 0.4)', 'rgba(255, 217, 61, 0.35)', 'rgba(107, 203, 119, 0.35)'];

  for (let t = 0; t < 15; t++) {
    const startLon = Math.random() * W;
    const startLat = H * 0.2 + Math.random() * H * 0.6;
    const slope = (Math.random() - 0.5) * 0.8;

    ctx.beginPath();
    ctx.strokeStyle = trackColors[t % trackColors.length];
    ctx.lineWidth = 2;

    for (let x = 0; x < W; x += 2) {
      const progress = x / W;
      const y = startLat + slope * (x - startLon) + Math.sin(x * 0.03 + t) * 15;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Labels
  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.textAlign = 'center';
  ctx.fillText('Europa Surface — Equirectangular Projection', W / 2, 16);
  ctx.textAlign = 'left';

  ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
  ctx.fillText('— ground tracks (15 shown)', W - 170, 16);
}

function drawSynergy() {
  const canvas = document.getElementById('synergy-canvas');
  if (!canvas) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio, 2);
  canvas.width = rect.width * dpr;
  canvas.height = 200 * dpr;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = '200px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const W = rect.width;
  const H = 200;

  ctx.fillStyle = '#040810';
  ctx.fillRect(0, 0, W, H);

  // Flow diagram: Instruments -> Measurements -> Tests
  const cols = [
    { x: W * 0.12, items: ['G/RS', 'EIS', 'REASON', 'ECM'], colors: ['#6bcb77', '#ffd93d', '#00d4ff', '#7c5cfc'] },
    { x: W * 0.42, items: ['k₂, gravity', 'h₂, shape', 'ice depth', 'induced B'], colors: ['#6bcb77', '#ffd93d', '#00d4ff', '#7c5cfc'] },
    { x: W * 0.75, items: ['Ocean confirmed', 'Ice thickness map', 'Salinity'], colors: ['#00d4ff', '#ff6b6b', '#ffd93d'] },
  ];

  // Column headers
  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.textAlign = 'center';
  
  const headers = ['INSTRUMENTS', 'MEASUREMENTS', 'SCIENCE OUTCOMES'];
  cols.forEach((col, ci) => {
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillText(headers[ci], col.x, 18);
  });

  // Draw nodes
  cols.forEach((col, ci) => {
    col.items.forEach((item, ii) => {
      const y = 45 + ii * 40;
      const boxW = ci === 2 ? 110 : 90;
      const boxH = 26;

      ctx.fillStyle = `${col.colors[ii]}15`;
      ctx.strokeStyle = `${col.colors[ii]}40`;
      ctx.lineWidth = 1;

      // Rounded rect
      roundRect(ctx, col.x - boxW / 2, y, boxW, boxH, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = col.colors[ii];
      ctx.font = '10px "Inter", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(item, col.x, y + 17);
    });
  });

  // Connections (col 0 -> col 1)
  const conns01 = [[0, 0], [1, 1], [2, 2], [3, 3]];
  conns01.forEach(([from, to]) => {
    drawConnection(ctx, cols[0].x + 45, 45 + from * 40 + 13, cols[1].x - 45, 45 + to * 40 + 13, cols[0].colors[from]);
  });

  // Connections (col 1 -> col 2)
  const conns12 = [[0, 0], [1, 0], [2, 1], [3, 2], [1, 1]];
  conns12.forEach(([from, to]) => {
    drawConnection(ctx, cols[1].x + 45, 45 + from * 40 + 13, cols[2].x - 55, 45 + to * 40 + 13, cols[1].colors[from]);
  });

  ctx.textAlign = 'left';
}

function drawConnection(ctx, x1, y1, x2, y2, color) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.bezierCurveTo(x1 + 30, y1, x2 - 30, y2, x2, y2);
  ctx.strokeStyle = `${color}30`;
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
