import katex from 'katex';

export function renderOceanTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Ocean Convection Theory</h2>
      <p class="tab-subtitle">
        Subsurface oceans on icy moons are subject to intense thermal convection driven by bottom heating 
        (tidal + radiogenic) and rapid planetary rotation. The resulting flows are characterised by extreme 
        dimensionless numbers that place them in the rapidly-rotating turbulent regime.
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🌀</span> Convective Forcing Visualization</div>
        <div class="canvas-container" style="height: 320px;">
          <canvas id="convection-canvas"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Schematic: heated bottom → buoyant plumes rise → deflected by Coriolis force → 
          organizing into Taylor columns aligned with the rotation axis.
        </p>
      </div>

      <div>
        <div class="card" style="margin-bottom: 20px;">
          <div class="card-title"><span class="icon">📐</span> Dimensionless Scaling</div>
          <div class="data-grid">
            <div class="data-item">
              <div class="label">Rayleigh Number</div>
              <div class="value" style="font-size:15px;">10²⁰ – 10²⁶</div>
            </div>
            <div class="data-item">
              <div class="label">Ekman Number</div>
              <div class="value" style="font-size:15px;">10⁻¹² – 10⁻¹¹</div>
            </div>
            <div class="data-item">
              <div class="label">Prandtl Number</div>
              <div class="value" style="font-size:15px;">~7 <span class="unit">(water)</span></div>
            </div>
            <div class="data-item">
              <div class="label">Rossby Number</div>
              <div class="value" style="font-size:15px;">≪ 1</div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">📏</span> Key Equations</div>
          <div class="equation-block" id="eq-rayleigh"></div>
          <div class="equation-block" id="eq-ekman"></div>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🏛️</span> Taylor-Proudman Constraint</div>
      <div class="grid-2">
        <div>
          <div class="equation-block" id="eq-taylor"></div>
          <div class="equation-explanation">
            <strong>Physical meaning:</strong> In the limit Ek → 0 and Ro → 0 (rapid rotation, weak inertia), 
            the Navier-Stokes equations reduce to geostrophic balance: 2Ω × u = −∇p/ρ. Taking the curl 
            yields the Taylor-Proudman theorem: flows cannot vary along the rotation axis. This forces 
            convective plumes into columnar structures ("Taylor columns") spanning the full ocean depth.
          </div>
        </div>
        <div>
          <div class="context-block">
            <h4>🎓 Theoretical Framework: Convective Stability</h4>
            <p>
              The Rayleigh number measures whether convection occurs at all: Ra > Ra_critical 
              (≈ 1708 for classical Rayleigh-Bénard). Icy moon oceans exceed this by ~18 orders of 
              magnitude, guaranteeing vigorous turbulent convection. The Schwarzschild criterion 
              (dT/dr exceeding the adiabatic gradient) is the stellar analogue — in both cases, 
              superadiabatic temperature gradients drive overturning motions.
            </p>
          </div>
          <div class="context-block" style="margin-top:12px;">
            <h4>Electromagnetic Pump Concept</h4>
            <p>
              Jupiter's magnetic field sweeps past Europa's conducting saltwater ocean, inducing 
              electric currents J. The resulting Lorentz force F = J × B can drive zonal (east-west) 
              flows — a "natural electromagnetic pump." This may produce a westward equatorial jet 
              analogous to Earth's ocean currents but with an entirely different driving mechanism.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Render equations
  document.getElementById('eq-rayleigh').innerHTML = `
    <div class="equation-label">Rayleigh Number</div>
    ${katex.renderToString('Ra = \\frac{g\\,\\alpha\\,\\Delta T\\,d^3}{\\nu\\,\\kappa}', { displayMode: true, throwOnError: false })}
    <div class="equation-explanation">
      g = gravitational acceleration, α = thermal expansion coefficient, ΔT = temperature contrast 
      across the ocean, d = ocean depth, ν = kinematic viscosity, κ = thermal diffusivity.
    </div>
  `;

  document.getElementById('eq-ekman').innerHTML = `
    <div class="equation-label">Ekman Number</div>
    ${katex.renderToString('Ek = \\frac{\\nu}{\\Omega\\,d^2}', { displayMode: true, throwOnError: false })}
    <div class="equation-explanation">
      Ω = rotation rate (= 2π/T_orbital). Small Ek means rotational effects dominate viscous effects.
    </div>
  `;

  document.getElementById('eq-taylor').innerHTML = `
    <div class="equation-label">Taylor-Proudman Theorem</div>
    ${katex.renderToString('(2\\vec{\\Omega} \\cdot \\nabla)\\,\\vec{u} = 0', { displayMode: true, throwOnError: false })}
  `;

  // Draw convection visualization
  drawConvection();
}

function drawConvection() {
  const canvas = document.getElementById('convection-canvas');
  if (!canvas) return;

  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * 2;
  canvas.height = rect.height * 2;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  const W = rect.width;
  const H = rect.height;

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  bgGrad.addColorStop(0, '#0a1628');
  bgGrad.addColorStop(1, '#1a0a0a');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Bottom heating layer
  const heatGrad = ctx.createLinearGradient(0, H - 40, 0, H);
  heatGrad.addColorStop(0, 'rgba(255, 80, 20, 0.0)');
  heatGrad.addColorStop(1, 'rgba(255, 80, 20, 0.4)');
  ctx.fillStyle = heatGrad;
  ctx.fillRect(0, H - 40, W, 40);

  // Top ice layer
  const iceGrad = ctx.createLinearGradient(0, 0, 0, 30);
  iceGrad.addColorStop(0, 'rgba(180, 220, 240, 0.5)');
  iceGrad.addColorStop(1, 'rgba(180, 220, 240, 0.0)');
  ctx.fillStyle = iceGrad;
  ctx.fillRect(0, 0, W, 30);

  // Labels
  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(180, 220, 240, 0.8)';
  ctx.fillText('ICE SHELL', 10, 16);
  ctx.fillStyle = 'rgba(255, 150, 100, 0.8)';
  ctx.fillText('SILICATE MANTLE (HEAT SOURCE)', 10, H - 8);

  // Rotation arrow
  ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.fillText('Ω →', W - 45, 16);

  // Taylor columns (vertical plumes)
  const columnCount = 6;
  const time = Date.now() * 0.001;

  for (let i = 0; i < columnCount; i++) {
    const x = W * (i + 1) / (columnCount + 1);
    const isUpward = i % 2 === 0;

    // Column body
    ctx.beginPath();
    ctx.strokeStyle = isUpward
      ? 'rgba(255, 120, 50, 0.3)'
      : 'rgba(100, 180, 255, 0.3)';
    ctx.lineWidth = 20 + Math.sin(i) * 8;
    ctx.moveTo(x, H - 40);
    ctx.lineTo(x, 30);
    ctx.stroke();

    // Animated particles
    for (let j = 0; j < 8; j++) {
      const py = isUpward
        ? H - 40 - ((time * 40 + j * 35 + i * 20) % (H - 70))
        : 30 + ((time * 30 + j * 35 + i * 20) % (H - 70));
      const px = x + Math.sin(py * 0.03 + i) * 10;
      const size = 2 + Math.random();

      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fillStyle = isUpward
        ? `rgba(255, 160, 80, ${0.5 + Math.random() * 0.3})`
        : `rgba(100, 200, 255, ${0.4 + Math.random() * 0.3})`;
      ctx.fill();
    }

    // Column label
    ctx.font = '9px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.textAlign = 'center';
    ctx.fillText(isUpward ? '↑ hot' : '↓ cold', x, H / 2);
    ctx.textAlign = 'left';
  }
}
