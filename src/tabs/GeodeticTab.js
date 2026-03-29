import katex from 'katex';

export function renderGeodeticTab(container) {
  let currentThickness = 25;

  container.innerHTML = `
    <div class="tab-header">
      <h2>Proving the Ocean Exists (Steinbrügge et al.)</h2>
      <p class="tab-subtitle">
        How do we know Europa has an ocean without landing on it? We use <strong>geodesy</strong>: 
        the measurement of the planet's shape and gravity. By observing how Jupiter's gravity stretches 
        Europa, we can calculate a value called the <strong>Love number ($k_2$)</strong>. This value 
        tells us if the outer ice shell is stiff and frozen to the core, or if it's floating freely on a liquid ocean.
      </p>
      <div class="paper-citation">
        📄 <a href="https://doi.org/10.1007/s11214-025-01250-x" target="_blank" rel="noopener">
          Steinbrügge, G. et al. (2026). <em>Space Sci. Rev.</em>, 222, 17.
        </a>
      </div>
    </div>

    <!-- Interactive Love Number Visualization -->
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><span class="icon">📈</span> Ice Shell Thickness vs. Gravity Response ($k_2$)</div>
      <p style="font-size:12px; color:var(--text-secondary); margin-bottom:15px; line-height:1.5;">
        An ice shell floating on a liquid ocean flexes easily, creating a high $k_2$ value ($\\approx 0.25$). 
        If Europa were frozen solid all the way through, it wouldn't flex much, resulting in a tiny $k_2$ ($\\sim 0.02$). 
        By measuring this exact number with spacecraft, we can not only prove the ocean is there, but calculate exactly how thick the ice is!
      </p>

      <div class="grid-2">
        <div>
          <!-- Slider -->
          <div class="slider-container" style="margin-bottom:15px; padding-right:20px;">
            <label>Ice Shell Thickness ($d_{ice}$) <span class="slider-value" id="k2-slider-val">25 km</span></label>
            <input type="range" id="slider-thickness" min="5" max="150" value="25" step="1" />
          </div>

          <div class="data-grid">
            <div class="data-item">
              <div class="label">Predicted $k_2$ Value</div>
              <div class="value" id="k2-output-val" style="color:var(--accent-primary);">0.245</div>
            </div>
            <div class="data-item">
              <div class="label">Interpretation</div>
              <div class="value" id="k2-interp-val" style="font-size:14px; color:var(--accent-green);">Thin Shell / Liquid Ocean</div>
            </div>
          </div>
        </div>

        <div class="canvas-container" style="height:150px; position:relative; overflow:hidden;">
          <canvas id="k2-canvas"></canvas>
        </div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">📐</span> Math: Tidal Love Numbers</div>
        <div class="equation-block" id="eq-love-k2"></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">🛰️</span> Cross-Instrument Geodesy</div>
        <p style="font-size:12px; color:var(--text-secondary); margin-bottom:10px;">
          Four instruments combine to measure the geodetic state over ~49 flybys:
        </p>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${instrumentEntry('G/RS', 'Radio Science', 'Tracks Doppler shifts to map gravity field and measure $k_2$.')}
          ${instrumentEntry('EIS', 'Europa Imaging', 'Stereo imaging maps surface deformation ($h_2$) across tidal cycles.')}
          ${instrumentEntry('REASON', 'Ice-penetrating Radar', 'Probes ice boundary directly; measures altimetry.')}
          ${instrumentEntry('UVS', 'UV Spectrograph', 'Stellar occultations provide independent limb shape data.')}
        </div>
      </div>
    </div>
  `;

  // Render equations
  document.getElementById('eq-love-k2').innerHTML = `
    <div class="equation-label" style="font-size:10px;">Degree-2 Love Number (Gravity Response)</div>
    ${katex.renderToString('k_2 = \\frac{\\delta \\Phi_{\\text{induced}}}{\\Phi_{\\text{tidal}}}', { displayMode: true, throwOnError: false })}
    <div style="font-size:11px; margin-top:8px; color:var(--text-muted);">
      Ratio of induced potential perturbation to applied tidal potential from Jupiter.
    </div>
  `;

  const slider = document.getElementById('slider-thickness');
  const valThickness = document.getElementById('k2-slider-val');
  const valK2 = document.getElementById('k2-output-val');
  const valInterp = document.getElementById('k2-interp-val');

  function updateK2Graph() {
    currentThickness = parseInt(slider.value);
    valThickness.textContent = currentThickness + ' km';

    // Simplified curve: k2 is high (~0.25) for thin shell, drops sigmoidally to ~0.05 for thick shells.
    // k2 = 0.05 + 0.20 / (1 + exp((d - 60)/15))
    const k2 = 0.05 + 0.20 / (1 + Math.exp((currentThickness - 60) / 15));
    valK2.textContent = k2.toFixed(3);

    let interp = "Convective Ice Ocean";
    let color = "var(--accent-primary)";
    if (currentThickness < 30) { interp = "Thin Conductive Shell"; color = "var(--accent-green)"; }
    else if (currentThickness > 100) { interp = "Frozen Solid / Deep Ice"; color = "var(--accent-warm)"; }

    valInterp.textContent = interp;
    valInterp.style.color = color;

    drawK2Canvas(currentThickness, k2);
  }

  slider.addEventListener('input', updateK2Graph);
  
  // Need to wait for DOM insertion to draw canvas correctly
  setTimeout(updateK2Graph, 0);
}

function drawK2Canvas(currentD, currentK2) {
  const canvas = document.getElementById('k2-canvas');
  if (!canvas) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  const W = rect.width;
  const H = 150;
  
  const dpr = window.devicePixelRatio || 1;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  ctx.clearRect(0,0,W,H);
  
  // Axes
  const pad = 25;
  const graphW = W - pad * 2;
  const graphH = H - pad * 1.5;

  ctx.strokeStyle = '#334';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad, pad/2); ctx.lineTo(pad, H - pad); ctx.lineTo(W - pad, H - pad);
  ctx.stroke();

  // Labels
  ctx.fillStyle = '#667';
  ctx.font = '10px sans-serif';
  ctx.fillText('k₂', 5, pad);
  ctx.fillText('Ice Thickness (km)', W/2 - 30, H - 5);
  ctx.fillText('0.3', 5, pad/2 + 10);
  ctx.fillText('0.0', 5, H - pad);

  // Draw theoretical curve
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(0, 212, 255, 0.4)';
  ctx.lineWidth = 2;
  
  for (let d = 5; d <= 150; d += 2) {
    const k = 0.05 + 0.20 / (1 + Math.exp((d - 60) / 15));
    const x = pad + ((d - 5) / 145) * graphW;
    const y = (H - pad) - (k / 0.3) * graphH;
    
    if(d===5) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  }
  ctx.stroke();

  // Draw current point
  const px = pad + ((currentD - 5) / 145) * graphW;
  const py = (H - pad) - (currentK2 / 0.3) * graphH;

  // Guide lines
  ctx.setLineDash([3,3]);
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  ctx.beginPath();
  ctx.moveTo(pad, py); ctx.lineTo(px, py);
  ctx.moveTo(px, H-pad); ctx.lineTo(px, py);
  ctx.stroke();
  ctx.setLineDash([]);

  // Point
  ctx.beginPath();
  ctx.arc(px, py, 5, 0, Math.PI*2);
  ctx.fillStyle = '#00d4ff'; ctx.fill();
  
  ctx.beginPath();
  ctx.arc(px, py, 12, 0, Math.PI*2);
  ctx.fillStyle = 'rgba(0, 212, 255, 0.2)'; ctx.fill();
}

function instrumentEntry(abbrev, name, desc) {
  return `
    <div class="instrument-card" style="padding:8px; border-radius:6px; background:rgba(255,255,255,0.02); border:1px solid var(--border-subtle);">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
        <span class="badge badge-cyan" style="font-size:9px;">${abbrev}</span>
        <span style="font-size:11px; font-weight:600; color:var(--text-primary);">${name}</span>
      </div>
      <div style="font-size:10px; color:var(--text-secondary); line-height:1.4;">${desc}</div>
    </div>
  `;
}
