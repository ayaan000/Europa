import katex from 'katex';

export function renderMushyLayerTab(container) {
  _mushyCanvasInit = false;
  container.innerHTML = `
    <div class="tab-header">
      <h2>Ice-Ocean Interface: Mushy Layers</h2>
      <p class="tab-subtitle">
        At the base of an icy moon's shell, ice does not form a sharp boundary with the ocean. 
        Instead, a "mushy layer" — a porous matrix of ice crystals permeated by interstitial brine — 
        mediates mass and heat exchange between the solid shell and the liquid ocean.
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🔬</span> Mushy Layer Cross-Section</div>
        <div class="canvas-container" style="height: 380px;">
          <canvas id="mushy-canvas"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Schematic of the dendritic ice-brine structure. Brine channels act as conduits for 
          nutrient-rich ocean water to penetrate upward into the shell.
        </p>
      </div>

      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">⬆️</span> Vertical Transport: Nutrient Elevator</div>
          <div class="slider-container">
            <label>
              Vertical Velocity
              <span class="slider-value" id="velocity-display">85 m/day</span>
            </label>
            <input type="range" id="velocity-slider" min="0" max="170" value="85" step="1" />
          </div>
          <div style="margin-top:12px;">
            <div class="data-grid">
              <div class="data-item">
                <div class="label">Max Vertical Velocity</div>
                <div class="value">170<span class="unit">m/day</span></div>
              </div>
              <div class="data-item">
                <div class="label">Front Width Scale</div>
                <div class="value">0.1–10<span class="unit">km</span></div>
              </div>
            </div>
          </div>
          <div class="context-block" style="margin-top:14px;">
            <h4>Submesoscale Fronts</h4>
            <p>
              At horizontal scales of 0.1–10 km, density-driven ("submesoscale") fronts develop 
              where fresh meltwater meets saltier ocean water. These fronts drive intense vertical 
              circulations that can transport nutrients (oxidants from the irradiated surface, 
              reductants from the seafloor) across the stratified interface — acting as 
              "nutrient elevators" connecting the ocean's redox chemistry to the surface.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">📐</span> Mushy Layer Energy Equation</div>
          <div class="equation-block" id="eq-mushy"></div>
          <div class="equation-block" id="eq-stefan" style="margin-top:12px;"></div>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🎓</span> AST320 Connection: Phase Transitions & Latent Heat</div>
      <div class="context-block" style="margin:0;">
        <h4>Latent Heat in Astrophysical Phase Boundaries</h4>
        <p>
          The mushy-layer energy equation above contains the term L<sub>V</sub> ∂ϕ/∂τ — the latent heat 
          released or absorbed as the solid fraction ϕ changes. This is identical in form to the energy 
          balance at any astrophysical phase boundary: hydrogen ionisation fronts in HII regions, ice 
          condensation in protoplanetary disks, or the nuclear-burning shell in an evolved star. In all cases, 
          the competition between heat conduction and latent heat production governs the advance or retreat 
          of the phase boundary.
        </p>
        <p style="margin-top:8px;">
          <strong>Key insight:</strong> The Stefan condition (below) is the moving-boundary counterpart of 
          hydrostatic equilibrium — it governs the rate of change of the boundary position, just as 
          hydrostatic equilibrium governs the pressure profile.
        </p>
      </div>
    </div>
  `;

  // Equations
  document.getElementById('eq-mushy').innerHTML = `
    <div class="equation-label">Mushy Layer Energy Conservation</div>
    ${katex.renderToString(
      '\\rho_m c_m \\frac{\\partial \\theta_m}{\\partial \\tau} = \\frac{\\partial}{\\partial \\xi}\\!\\left(\\lambda_m \\frac{\\partial \\theta_m}{\\partial \\xi}\\right) + L_V \\frac{\\partial \\phi}{\\partial \\tau}',
      { displayMode: true, throwOnError: false }
    )}
    <div class="equation-explanation">
      θ<sub>m</sub> = dimensionless temperature in the mush, ξ = dimensionless depth coordinate, 
      λ<sub>m</sub> = effective thermal conductivity (depends on porosity), ϕ = solid fraction, 
      L<sub>V</sub> = latent heat of fusion. The last term represents latent heat released/absorbed 
      as ice grows or melts within the mushy matrix.
    </div>
  `;

  document.getElementById('eq-stefan').innerHTML = `
    <div class="equation-label">Stefan Condition (Moving Phase Boundary)</div>
    ${katex.renderToString(
      '\\rho\\,L_V\\,\\frac{dh}{dt} = k\\!\\left.\\frac{\\partial T}{\\partial z}\\right|_{\\text{ice}} - k\\!\\left.\\frac{\\partial T}{\\partial z}\\right|_{\\text{ocean}}',
      { displayMode: true, throwOnError: false }
    )}
    <div class="equation-explanation">
      h = interface position, L<sub>V</sub> = latent heat. The difference in heat flux 
      on either side drives freezing (positive dh/dt) or melting (negative dh/dt).
    </div>
  `;

  // Velocity slider
  const slider = document.getElementById('velocity-slider');
  const display = document.getElementById('velocity-display');
  slider.addEventListener('input', () => {
    display.textContent = `${slider.value} m/day`;
    drawMushy(parseInt(slider.value));
  });

  drawMushy(85);
}

let _mushyCanvasInit = false;
let _mushyW = 0;

function drawMushy(velocity) {
  const canvas = document.getElementById('mushy-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const H = 380;

  // Only set canvas dimensions once to prevent layout thrashing
  if (!_mushyCanvasInit) {
    const rect = canvas.parentElement.getBoundingClientRect();
    _mushyW = rect.width;
    canvas.width = _mushyW * 2;
    canvas.height = H * 2;
    canvas.style.width = _mushyW + 'px';
    canvas.style.height = H + 'px';
    _mushyCanvasInit = true;
  }

  ctx.save();
  ctx.setTransform(2, 0, 0, 2, 0, 0);

  const W = _mushyW;

  // Background
  ctx.fillStyle = '#050a14';
  ctx.fillRect(0, 0, W, H);

  // Solid ice (top region)
  const iceBottom = 100;
  const iceGrad = ctx.createLinearGradient(0, 0, 0, iceBottom);
  iceGrad.addColorStop(0, '#90b8cc');
  iceGrad.addColorStop(1, '#5a90aa');
  ctx.fillStyle = iceGrad;
  ctx.fillRect(0, 0, W, iceBottom);

  // Mushy layer (middle)
  const mushyBottom = 220;
  const mushyGrad = ctx.createLinearGradient(0, iceBottom, 0, mushyBottom);
  mushyGrad.addColorStop(0, '#3a7090');
  mushyGrad.addColorStop(0.5, '#1a5080');
  mushyGrad.addColorStop(1, '#0a3a60');
  ctx.fillStyle = mushyGrad;
  ctx.fillRect(0, iceBottom, W, mushyBottom - iceBottom);

  // Ocean (bottom)
  const oceanGrad = ctx.createLinearGradient(0, mushyBottom, 0, H);
  oceanGrad.addColorStop(0, '#0a3a60');
  oceanGrad.addColorStop(1, '#051e36');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, mushyBottom, W, H - mushyBottom);

  // Dendritic ice crystals in mushy zone
  ctx.strokeStyle = 'rgba(180, 220, 240, 0.3)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 40; i++) {
    const x = 20 + Math.random() * (W - 40);
    const y = iceBottom + 10 + Math.random() * (mushyBottom - iceBottom - 20);
    drawDendrite(ctx, x, y, 8 + Math.random() * 15);
  }

  // Brine channels (vertical conduits)
  const channelCount = 5;
  for (let i = 0; i < channelCount; i++) {
    const cx = W * (i + 0.7) / (channelCount + 0.5);
    const channelWidth = 3 + Math.random() * 4;

    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 200, 50, ${0.2 + Math.random() * 0.15})`;
    ctx.lineWidth = channelWidth;
    ctx.moveTo(cx, mushyBottom);

    for (let y = mushyBottom; y > iceBottom + 20; y -= 5) {
      ctx.lineTo(cx + Math.sin(y * 0.1 + i) * 6, y);
    }
    ctx.stroke();

    // Velocity-dependent particles moving upward through channels
    const particleCount = Math.round(velocity / 20);
    for (let j = 0; j < particleCount; j++) {
      const py = iceBottom + 20 + Math.random() * (mushyBottom - iceBottom - 30);
      const px = cx + Math.sin(py * 0.1 + i) * 6 + (Math.random() - 0.5) * channelWidth;
      ctx.beginPath();
      ctx.arc(px, py, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 220, 80, ${0.4 + (velocity / 170) * 0.4})`;
      ctx.fill();
    }
  }

  // Labels
  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(40, 70, 90, 0.9)';
  ctx.fillText('SOLID ICE', 10, 50);

  ctx.fillStyle = 'rgba(150, 200, 230, 0.8)';
  ctx.fillText('MUSHY LAYER', 10, iceBottom + 60);
  ctx.font = '9px "Inter", sans-serif';
  ctx.fillStyle = 'rgba(150, 200, 230, 0.5)';
  ctx.fillText('(porous ice + brine)', 10, iceBottom + 76);

  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(100, 200, 255, 0.7)';
  ctx.fillText('OCEAN', 10, mushyBottom + 40);

  // Velocity annotation
  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.fillStyle = `rgba(255, 220, 80, ${0.5 + (velocity / 170) * 0.5})`;
  ctx.fillText(`v_z = ${velocity} m/day`, W - 130, iceBottom + 60);

  // Boundary lines
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, iceBottom);
  ctx.lineTo(W, iceBottom);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, mushyBottom);
  ctx.lineTo(W, mushyBottom);
  ctx.stroke();
  ctx.setLineDash([]);

  // Temperature profile (right side)
  drawTempProfile(ctx, W - 40, iceBottom - 20, mushyBottom + 40, H);

  ctx.restore();
}

function drawDendrite(ctx, x, y, size) {
  const branches = 3 + Math.floor(Math.random() * 3);
  for (let i = 0; i < branches; i++) {
    const angle = (i / branches) * Math.PI * 2 + Math.random() * 0.5;
    const len = size * (0.5 + Math.random() * 0.5);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    ctx.stroke();
  }
}

function drawTempProfile(ctx, x, yTop, yBottom) {
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(255, 100, 60, 0.5)';
  ctx.lineWidth = 2;
  // Temperature increases from surface (~100K) to ocean (~273K)
  const steps = 30;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const y = yTop + t * (yBottom - yTop);
    // Smooth S-curve for temperature
    const tempNorm = 1 / (1 + Math.exp(-8 * (t - 0.5)));
    const px = x - 25 + tempNorm * 25;
    if (i === 0) ctx.moveTo(px, y);
    else ctx.lineTo(px, y);
  }
  ctx.stroke();

  ctx.font = '8px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(255, 100, 60, 0.5)';
  ctx.fillText('T', x - 5, yTop - 5);
}
