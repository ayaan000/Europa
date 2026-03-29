import katex from 'katex';

export function renderOceanTab(container) {
  // Clear any existing animation frame
  if (window.oceanAnimId) {
    cancelAnimationFrame(window.oceanAnimId);
  }

  container.innerHTML = `
    <div class="tab-header">
      <h2>Ocean Convection Theory</h2>
      <p class="tab-subtitle">
        Europa's subsurface ocean dynamics depend on the Rayleigh Number (Ra). Adjust the basal heating and ocean depth to trigger convective instability and watch Taylor columns form under rapid planetary rotation.
      </p>
    </div>

    <div class="grid-2">
      <!-- Left: Interactive Simulator -->
      <div class="card">
        <div class="card-title"><span class="icon">🌊</span> Fast-Rotating Convection Simulator</div>
        
        <div class="slider-container" style="margin:10px 0 5px 0;">
          <label>Ocean Depth ($d$) <span class="slider-value" id="val-depth" style="color:var(--accent-primary)">100 km</span></label>
          <input type="range" id="slider-depth" min="10" max="150" value="100" step="1" />
        </div>
        
        <div class="slider-container" style="margin-bottom:10px;">
          <label>Basal Temp Anomaly ($\\Delta T$) <span class="slider-value" id="val-dt" style="color:var(--accent-warm)">10 mK</span></label>
          <input type="range" id="slider-dt" min="0" max="50" value="10" step="1" />
        </div>

        <div class="data-grid" style="margin-bottom:10px;">
          <div class="data-item">
            <div class="label">Calculated Rayleigh No. ($Ra$)</div>
            <div class="value" id="out-ra" style="font-size:16px;">--</div>
          </div>
          <div class="data-item">
            <div class="label">Ocean State</div>
            <div class="value" id="out-state" style="font-size:16px;">--</div>
          </div>
        </div>

        <div class="canvas-container" style="height: 180px; border:1px solid rgba(0,255,255,0.2); border-radius:8px; overflow:hidden;">
          <canvas id="convection-canvas"></canvas>
        </div>
        <p style="font-size:10px; color:var(--text-muted); margin-top:8px;">
          Below critical $Ra$, the ocean is stably stratified. Above $Ra_c$, buoyant plumes organize into geostrophic Taylor columns aligned with the rotation axis. Fast rotation forces thin columns.
        </p>
      </div>

      <!-- Right: Theory & Equations -->
      <div>
        <div class="card" style="margin-bottom: 10px;">
          <div class="card-title"><span class="icon">📐</span> Dimensionless Scaling</div>
          <div class="equation-block" style="padding: 10px;" id="eq-rayleigh"></div>
          <div class="equation-block" style="padding: 10px;" id="eq-ekman"></div>
          <div class="equation-block" style="padding: 10px;" id="eq-taylor"></div>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">🏛️</span> Theoretical Framework</div>
          <p style="font-size:12px; color:var(--text-secondary); line-height:1.5; margin-bottom:8px;">
            <strong>Convection Threshold:</strong> The Rayleigh number ($Ra$) measures the ratio of buoyancy forces to viscous dissipation. In rotating systems, the critical Rayleigh number ($Ra_c$) is immensely elevated.
          </p>
          <p style="font-size:12px; color:var(--text-secondary); line-height:1.5;">
            <strong>Taylor-Proudman Constraint:</strong> Due to Europa's rapid rotation (Ekman number $\\approx 10^{-12}$), the Coriolis force perfectly balances pressure gradients. The Navier-Stokes equations reduce to geostrophic balance, forcing vertical plumes into rigid vertical cylinders known as Taylor columns ($2\\vec{\\Omega} \\cdot \\nabla \\vec{u} = 0$).
          </p>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 20px;">
      <div class="card-title"><span class="icon">⚖️</span> Ocean Comparison: Earth vs. Europa</div>
      <table class="data-table" style="width:100%; text-align:left; font-size:13px; color:var(--text-secondary); border-collapse:collapse;">
        <thead>
          <tr style="border-bottom:1px solid rgba(0,255,255,0.2); color:var(--accent-primary);">
            <th style="padding:10px;">Parameter</th>
            <th style="padding:10px;">Earth</th>
            <th style="padding:10px;">Europa</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
            <td style="padding:10px;"><strong>Volume</strong></td>
            <td style="padding:10px;">1.33 × 10⁹ km³</td>
            <td style="padding:10px; color:var(--accent-secondary);">2.60 × 10⁹ km³ (~2x Earth)</td>
          </tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
            <td style="padding:10px;"><strong>Max Depth</strong></td>
            <td style="padding:10px;">~11 km (Mariana Trench)</td>
            <td style="padding:10px; color:var(--accent-secondary);">~100 km (Global)</td>
          </tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
            <td style="padding:10px;"><strong>Primary Heating</strong></td>
            <td style="padding:10px;">Solar Radiation (Top-Down)</td>
            <td style="padding:10px; color:var(--accent-warm);">Tidal Dissipation (Bottom-Up)</td>
          </tr>
          <tr>
            <td style="padding:10px;"><strong>Dynamics</strong></td>
            <td style="padding:10px;">Wind-driven gyres & thermohaline</td>
            <td style="padding:10px; color:var(--accent-primary);">Taylor columns, zonal jets & Rossby waves</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  document.getElementById('eq-rayleigh').innerHTML = `
    <div class="equation-label" style="color:var(--text-muted); margin-bottom:4px;">Rayleigh Number</div>
    ${katex.renderToString('Ra = \\frac{g\\,\\alpha\\,\\Delta T\\,d^3}{\\nu\\,\\kappa}', { displayMode: true, throwOnError: false })}
  `;

  document.getElementById('eq-ekman').innerHTML = `
    <div class="equation-label" style="color:var(--text-muted); margin-bottom:4px; margin-top:10px;">Ekman Number</div>
    ${katex.renderToString('Ek = \\frac{\\nu}{\\Omega\\,d^2}', { displayMode: true, throwOnError: false })}
  `;

  document.getElementById('eq-taylor').innerHTML = `
    <div class="equation-label" style="color:var(--text-muted); margin-bottom:4px; margin-top:10px;">Taylor-Proudman Theorem</div>
    ${katex.renderToString('(2\\vec{\\Omega} \\cdot \\nabla)\\,\\vec{u} = 0', { displayMode: true, throwOnError: false })}
  `;

  const sDepth = document.getElementById('slider-depth');
  const sDt = document.getElementById('slider-dt');
  const outRa = document.getElementById('out-ra');
  const outState = document.getElementById('out-state');
  const canvas = document.getElementById('convection-canvas');

  // Interactive Loop state
  let config = { d: 100, dT: 10, Ra: 0, isConvecting: true };

  function updatePhysics() {
    config.d = parseFloat(sDepth.value);
    config.dT = parseFloat(sDt.value);

    document.getElementById('val-depth').textContent = config.d + ' km';
    document.getElementById('val-dt').textContent = config.dT + ' mK';

    // OOM calculation for Europa: Ra scales with dT * d^3
    config.Ra = config.dT * Math.pow(config.d, 3) * 6e5;
    
    // Critical Ra for rotating systems
    const RAC = 1e14; 
    config.isConvecting = config.Ra > RAC;

    outRa.textContent = config.Ra === 0 ? "0" : config.Ra.toExponential(2);
    
    if (config.isConvecting) {
      outState.textContent = 'Turbulent Taylor Columns';
      outState.style.color = '#ff00ff';
      outState.style.textShadow = '0 0 10px rgba(255,0,255,0.4)';
    } else {
      outState.textContent = 'Stagnant Stratification';
      outState.style.color = '#00ffff';
      outState.style.textShadow = '0 0 10px rgba(0,255,255,0.4)';
    }
  }

  sDepth.addEventListener('input', updatePhysics);
  sDt.addEventListener('input', updatePhysics);
  updatePhysics();

  // Animation Loop
  function animate(t) {
    drawConvectionCanvas(canvas, config, t);
    window.oceanAnimId = requestAnimationFrame(animate);
  }
  window.oceanAnimId = requestAnimationFrame(animate);
}

function drawConvectionCanvas(canvas, config, time) {
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

  // Background Water
  const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  bgGrad.addColorStop(0, '#001a33');
  bgGrad.addColorStop(1, '#000511');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Stably stratified layers
  if (!config.isConvecting) {
    for (let i = 0; i < 10; i++) {
       ctx.fillStyle = `rgba(0, 255, 255, ${0.08 - i*0.006})`;
       ctx.fillRect(0, H - (i/10)*H, W, H/10);
    }
  }

  // TBL: Base Heating
  const heatThickness = 20;
  ctx.fillStyle = `rgba(255, 0, 85, ${0.2 + (config.dT/50)*0.5})`;
  ctx.fillRect(0, H - heatThickness, W, heatThickness);

  // TBL: Ice
  ctx.fillStyle = 'rgba(0, 255, 255, 0.3)';
  ctx.fillRect(0, 0, W, 15);

  if (config.isConvecting) {
    // Vigor scales with Ra past threshold
    const overcritical = Math.max(0, config.Ra - 1e14);
    const vigor = 0.5 + Math.min(2.0, overcritical / 1e16);
    const speed = time * 0.04 * vigor;
    const columnCount = Math.max(4, Math.floor(W / 45));

    for (let i = 0; i < columnCount; i++) {
      const x = W * (i + 1) / (columnCount + 1);
      const isUpward = i % 2 === 0;

      // Glow column sheath
      ctx.beginPath();
      ctx.strokeStyle = isUpward ? 'rgba(255, 0, 85, 0.15)' : 'rgba(0, 255, 255, 0.15)';
      ctx.lineWidth = 15 + Math.sin(speed*0.01 + i) * 6;
      ctx.moveTo(x, H - heatThickness);
      ctx.lineTo(x, 15);
      ctx.stroke();

      // Plume particles in corkscrews
      for (let j = 0; j < 6; j++) {
        let py;
        if (isUpward) {
            py = (H - heatThickness) - ((speed + j*45 + i*30) % (H - heatThickness - 15));
        } else {
            py = 15 + ((speed + j*45 + i*30) % (H - heatThickness - 15));
        }
        
        const px = x + Math.sin(py * 0.05 - speed*0.05) * 8;
        
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI*2);
        ctx.fillStyle = isUpward ? '#ff0055' : '#00ffff';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Dynamic horizontal zonal jets
    for(let k = 0; k < 5; k++) {
      const jetY = 30 + k * ((H - 60)/4);
      const jetSpeed = (time * 0.05 * vigor) * (k % 2 === 0 ? 1 : -1);
      ctx.fillStyle = k % 2 === 0 ? 'rgba(0, 255, 255, 0.4)' : 'rgba(255, 0, 85, 0.4)';
      for(let w = 0; w < 4; w++) {
        const jetX = (jetSpeed + w * W/3) % W;
        const drawX = jetX < 0 ? jetX + W : jetX;
        ctx.beginPath();
        ctx.arc(drawX, jetY + Math.sin(drawX * 0.05) * 5, 2, 0, Math.PI*2);
        ctx.fill();
      }
    }
  }

  // Overlays
  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillStyle = '#00ffff';
  ctx.fillText('ICE SHELL', 10, 11);
  ctx.fillStyle = '#ff00ff';
  ctx.fillText('HEAT FLUX (SILICATE MANTLE)', 10, H - 6);
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillText('ROTATION Ω →', W - 80, 11);
}
