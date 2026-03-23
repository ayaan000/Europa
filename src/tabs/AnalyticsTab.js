import katex from 'katex';

/**
 * EUROPA COMPREHENSIVE KNOWLEDGE BASE
 * This JSON structure contains everything currently known or strongly hypothesized about Europa.
 * It is designed to be easily extensible. To add new knowledge, simply append an object to this array.
 */
const EUROPA_KNOWLEDGE_BASE = [
  {
    category: "Interior & Ocean",
    fact: "Global Subsurface Ocean",
    value: "Yes (60–150 km deep)",
    source: "Kivelson et al. 2000 (Galileo magnetometer)",
    unresolved: "Exactly how thick is the overlying ice shell?",
    clipperTest: "REASON (Radar) + G/RS (Gravity $k_2$)"
  },
  {
    category: "Interior & Ocean",
    fact: "Ocean Salinity",
    value: "Conductivity ~3-5 S/m (Earth-like)",
    source: "Steinbrügge et al. 2026",
    unresolved: "What is the dominant salt? ($MgSO_4$ vs $NaCl$)",
    clipperTest: "SUDA (Dust Analyzer) + ECM (Magnetometer)"
  },
  {
    category: "Interior & Ocean",
    fact: "Ocean Convection",
    value: "Turbulent (Ra ~ 10²²)",
    source: "Soderlund 2014, Pagnoscin 2026",
    unresolved: "Does convection create distinct spatial melting rates?",
    clipperTest: "REASON (Basal Topography) + G/RS"
  },
  {
    category: "Surface & Ice Shell",
    fact: "Surface Age",
    value: "~40 - 90 Million Years",
    source: "Zahnle et al. 2003 (Crater counting)",
    unresolved: "Is resurfacing ongoing today (active plumes)?",
    clipperTest: "EIS (Imaging) + UVS (Exosphere plumes)"
  },
  {
    category: "Surface & Ice Shell",
    fact: "Chaos Terrain",
    value: "Covers ~40% of surface",
    source: "Galileo SSI Imaging",
    unresolved: "Are these areas of melt-through or brine mobilization?",
    clipperTest: "REASON (Shallow water detection) + MISE (Infrared)"
  },
  {
    category: "Chemistry & Astrobiology",
    fact: "Radiolytic Processing",
    value: "High surface radiation (125 mSv/day)",
    source: "Patterson et al. (Jupiter environment)",
    unresolved: "Does this oxidant loop reach the ocean?",
    clipperTest: "MASPEX (Gas Spectrometry) + MISE"
  },
  {
    category: "Magnetosphere",
    fact: "Induced Magnetic Field",
    value: "~120 nT perturbation",
    source: "Galileo Flybys",
    unresolved: "Is there a varying deeper mantle conductivity?",
    clipperTest: "ECM + PIMS (Plasma properties)"
  }
];

export function renderAnalyticsTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Clipper Analytics & Comprehensive Knowledge Base</h2>
      <p class="tab-subtitle">
        Everything we currently know about Europa is catalogued here. Europa Clipper's 49 flybys 
        will systematically target the "Unresolved Questions" in this matrix using cross-instrument synergy.
      </p>
    </div>

    <div class="grid-3" style="margin-bottom:20px;">
      <div class="card" style="text-align:center;">
        <div style="font-size:36px; font-family:var(--font-display); font-weight:700; color:var(--accent-primary);">49</div>
        <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1.5px;">Planned Flybys</div>
      </div>
      <div class="card" style="text-align:center;">
        <div style="font-size:36px; font-family:var(--font-display); font-weight:700; color:var(--accent-tertiary);">9</div>
        <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1.5px;">Science Instruments</div>
      </div>
      <div class="card" style="text-align:center;">
        <div style="font-size:36px; font-family:var(--font-display); font-weight:700; color:var(--accent-gold);">25 km</div>
        <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1.5px;">Minimum Altitude</div>
      </div>
    </div>

    <!-- The Extensible Knowledge Matrix -->
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><span class="icon">📚</span> Comprehensive Knowledge Matrix</div>
      <p style="font-size:11px; color:var(--text-secondary); margin-bottom:12px;">
        This matrix is driven entirely by a JSON registry. To add new papers or discoveries, 
        simply append to the <code>EUROPA_KNOWLEDGE_BASE</code> array in the source code.
      </p>
      
      <div style="overflow-x:auto;">
        <table style="width:100%; font-size:12px; border-collapse:collapse; min-width:800px;">
          <thead>
            <tr style="border-bottom:2px solid var(--border-subtle); text-align:left;">
              <th style="padding:10px; color:var(--text-muted); font-size:10px; text-transform:uppercase;">Category</th>
              <th style="padding:10px; color:var(--text-muted); font-size:10px; text-transform:uppercase;">Established Fact</th>
              <th style="padding:10px; color:var(--text-muted); font-size:10px; text-transform:uppercase;">Value / Metric</th>
              <th style="padding:10px; color:var(--text-muted); font-size:10px; text-transform:uppercase;">Unresolved Question</th>
              <th style="padding:10px; color:var(--text-muted); font-size:10px; text-transform:uppercase;">Clipper Test</th>
            </tr>
          </thead>
          <tbody id="knowledge-matrix-body">
            <!-- Populated by JS -->
          </tbody>
        </table>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">📈</span> Science Accumulation Profile</div>
        <div class="canvas-container" style="height:250px;">
          <canvas id="flyby-timeline"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Gravity field precision improves as $1/\\sqrt{N}$ with the number of tracked flybys.
        </p>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">🎓</span> AST320 — Bayesian Uncertainty</div>
        <div class="context-block" style="margin:0; margin-bottom:10px;">
          <h4>Bayesian Parameter Estimation</h4>
          <div class="equation-block" id="eq-bayes" style="margin:8px 0;"></div>
          <p>
            Every flyby provides a new dataset (gravity, radar, magnetic). We use Bayesian inference 
            to update our probability distribution of the ocean's depth and salinity. With 49 flybys, 
            the posterior rapidly converges on the true physical state of Europa.
          </p>
        </div>
        <div class="context-block" style="margin:0;">
          <h4>Error Propagation</h4>
          <div class="equation-block" id="eq-error" style="margin:8px 0;"></div>
          <p>
            Analytical uncertainty mapping. Measuring the tidal Love number $k_2$ yields a direct 
            bounded error constraint on $d_{ice}$.
          </p>
        </div>
      </div>
    </div>
  `;

  // Render Knowledge Matrix
  const tbody = document.getElementById('knowledge-matrix-body');
  EUROPA_KNOWLEDGE_BASE.forEach((entry, idx) => {
    let catColor = "var(--text-secondary)";
    if (entry.category.includes("Interior")) catColor = "var(--accent-primary)";
    else if (entry.category.includes("Surface")) catColor = "var(--accent-tertiary)";
    else if (entry.category.includes("Chem")) catColor = "var(--accent-gold)";
    else if (entry.category.includes("Magnet")) catColor = "var(--accent-green)";

    tbody.innerHTML += `
      <tr style="border-bottom:1px solid rgba(255,255,255,0.05); transition: background 0.2s;">
        <td style="padding:10px; color:${catColor}; font-weight:600;">${entry.category}</td>
        <td style="padding:10px; color:var(--text-primary);">
          ${entry.fact}
          <div style="font-size:9px; color:var(--text-muted); margin-top:4px;">${entry.source}</div>
        </td>
        <td style="padding:10px; color:var(--text-secondary); font-family:var(--font-mono); font-size:11px;">${entry.value}</td>
        <td style="padding:10px; color:var(--accent-warm);">${entry.unresolved}</td>
        <td style="padding:10px;">
          <span class="badge" style="background:rgba(0, 212, 255, 0.1); color:var(--accent-primary); border:1px solid rgba(0, 212, 255, 0.3);">
            ${entry.clipperTest}
          </span>
        </td>
      </tr>
    `;
  });

  // Equations
  document.getElementById('eq-bayes').innerHTML = katex.renderToString(
    'P(\\text{model}|\\text{data}) \\propto P(\\text{data}|\\text{model})\\,P(\\text{model})',
    { displayMode: true, throwOnError: false }
  );
  
  document.getElementById('eq-error').innerHTML = katex.renderToString(
    '\\sigma_{d_{ice}} = \\left|\\frac{\\partial d}{\\partial k_2}\\right| \\sigma_{k_2}',
    { displayMode: true, throwOnError: false }
  );

  drawFlybyTimeline();
}

function drawFlybyTimeline() {
  const canvas = document.getElementById('flyby-timeline');
  if (!canvas) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio, 2);
  canvas.width = rect.width * dpr;
  canvas.height = 250 * dpr;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = '250px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const W = rect.width;
  const H = 250;
  const pad = { top: 20, right: 20, bottom: 30, left: 40 };

  ctx.fillStyle = '#040810';
  ctx.fillRect(0, 0, W, H);

  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;

  ctx.strokeStyle = 'rgba(255,255,255,0.15)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top); ctx.lineTo(pad.left, H - pad.bottom); ctx.lineTo(W - pad.right, H - pad.bottom);
  ctx.stroke();

  // Draw 1/sqrt(N) curve
  const flybys = 49;
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(0, 212, 255, 0.8)';
  ctx.lineWidth = 2;
  
  for (let i = 1; i <= flybys; i++) {
    const precision = 1 / Math.sqrt(i);
    const x = pad.left + ((i-1)/(flybys-1)) * plotW;
    // precision ranges from 1 down to 0.14. Map to Y.
    const y = pad.top + precision * plotH * 0.9; 
    
    if (i === 1) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  }
  ctx.stroke();

  // Axis labels
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '10px "Inter", sans-serif';
  ctx.fillText('Flyby Number (1 to 49)', W/2 - 50, H - 5);
  
  ctx.save();
  ctx.translate(15, H/2 + 40);
  ctx.rotate(-Math.PI/2);
  ctx.fillText('Uncertainty \u03C3', 0, 0);
  ctx.restore();
}
