import katex from 'katex';

export function renderMushyLayerTab(container) {
  _mushyCanvasInit = false;
  
  // State variables for physics
  let state = {
    velocity: 85,
    tOcean: 273,
    tIce: 100,
    dIce: 15 // km
  };

  container.innerHTML = `
    <div class="tab-header">
      <h2>Ice-Ocean Interface: Thermodynamics & Mushy Layers</h2>
      <p class="tab-subtitle">
        A porous "mushy layer" mediates heat and mass exchange. Modify the thermal boundary conditions 
        below to observe how they govern the localized temperature gradient, basal pressure, and convective transport.
      </p>
    </div>

    <div class="grid-2">
      <!-- Left Column: Canvas & Equations -->
      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">🔬</span> Interface Cross-Section</div>
          <div class="canvas-container" style="height: 400px; position:relative;">
            <canvas id="mushy-canvas"></canvas>
            <div id="temp-grad-overlay" style="position:absolute; right:10px; top:10px; font-size:11px; color:#ff6b6b; font-family:'JetBrains Mono', monospace;"></div>
          </div>
          <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
            Dendritic ice structure. Red/blue arrows indicate density-driven submesoscale ocean convection.
          </p>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">📐</span> Boundary Physics</div>
          <div class="equation-block" id="eq-mushy"></div>
          <div class="equation-block" id="eq-stefan" style="margin-top:12px;"></div>
        </div>

        <div class="card" style="margin-top:20px;">
          <div class="card-title"><span class="icon">⚗️</span> Two-Phase Reactive Transport</div>
          <p style="font-size:13px; color:var(--text-secondary); line-height:1.7;">
            The mushy layer is a porous medium where solid ice coexists with interstitial liquid brine. 
            Coupling heat and solute transport reveals that buoyancy-driven convection within the brine channels 
            is critical for salt rejection.
          </p>
          <div class="equation-block" id="eq-brine" style="margin-top:12px;"></div>
        </div>
      </div>

      <!-- Right Column: Controls & Dashboard -->
      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">🎛️</span> Thermodynamics Controls</div>
          
          <div class="slider-container" style="margin-bottom:15px;">
            <label>Ice Surface Temp ($T_{ice}$) <span class="slider-value" id="val-tIce">100 K</span></label>
            <input type="range" id="slider-tIce" min="50" max="150" value="100" step="1" />
          </div>

          <div class="slider-container" style="margin-bottom:15px;">
            <label>Ocean Top Temp ($T_{ocean}$) <span class="slider-value" id="val-tOcean">273 K</span></label>
            <input type="range" id="slider-tOcean" min="250" max="300" value="273" step="1" />
          </div>

          <div class="slider-container" style="margin-bottom:15px;">
            <label>Ice Shell Thickness ($d_{ice}$) <span class="slider-value" id="val-dIce">15 km</span></label>
            <input type="range" id="slider-dIce" min="5" max="50" value="15" step="1" />
          </div>

          <div class="slider-container">
            <label>Vertical Plume Velocity <span class="slider-value" id="val-vel">85 m/day</span></label>
            <input type="range" id="slider-vel" min="0" max="170" value="85" step="1" />
          </div>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">📊</span> Live Physics Output</div>
          <div class="data-grid">
            <div class="data-item">
              <div class="label">Basal Pressure ($P$)</div>
              <div class="value" id="out-pressure">-- <span class="unit">MPa</span></div>
            </div>
            <div class="data-item">
              <div class="label">Geothermal Temp Grad. ($\\nabla T$)</div>
              <div class="value" id="out-grad">-- <span class="unit">K/km</span></div>
            </div>
            <div class="data-item">
              <div class="label">Conductive Heat Flux ($q$)</div>
              <div class="value" id="out-flux">-- <span class="unit">mW/m²</span></div>
            </div>
            <div class="data-item">
              <div class="label">Nutrient Delivery Regime</div>
              <div class="value" id="out-regime" style="font-size:14px; color:#4caf50;">--</div>
            </div>
          </div>
          <p style="font-size:11px; margin-top:12px; color:var(--text-secondary);">
            Assuming $\\rho_{ice} = 920$ kg/m³ and $g = 1.314$ m/s². $k_{ice}$ approximated at $2.5$ W/(m·K).
          </p>
        </div>
      </div>
    </div>
  `;

  // Render Equations
  document.getElementById('eq-stefan').innerHTML = `
    <div class="equation-label">Stefan Condition</div>
    ${katex.renderToString(
      '\\rho L_V \\frac{dh}{dt} = k_{ice}\\nabla T_{ice} - k_{oc}\\nabla T_{oc}',
      { displayMode: true, throwOnError: false }
    )}
    <div style="font-size:11px; color:var(--text-muted); margin-top:5px;">Balance of heat flux drives melting ($-$) or freezing ($+$).</div>
  `;
  document.getElementById('eq-mushy').innerHTML = `
    <div class="equation-label">Hydrostatic Pressure</div>
    ${katex.renderToString(
      'P_{base} = \\rho_{ice} \\cdot g \\cdot d_{ice}',
      { displayMode: true, throwOnError: false }
    )}
  `;

  document.getElementById('eq-brine').innerHTML = `
    <div class="equation-label">Darcy-Rayleigh Number ($Ra_{m}$)</div>
    ${katex.renderToString(
      'Ra_m = \\frac{\\Delta \\rho g \\Pi H}{\\mu \\kappa}',
      { displayMode: true, throwOnError: false }
    )}
    <div style="font-size:11px; color:var(--text-muted); margin-top:5px;">Governs the onset of convection (salt rejection) in the porous slurry.</div>
  `;

  // Bind sliders
  const sTIce = document.getElementById('slider-tIce');
  const sTOcean = document.getElementById('slider-tOcean');
  const sDIce = document.getElementById('slider-dIce');
  const sVel = document.getElementById('slider-vel');

  function updatePhysics() {
    state.tIce = parseInt(sTIce.value);
    state.tOcean = parseInt(sTOcean.value);
    state.dIce = parseInt(sDIce.value);
    state.velocity = parseInt(sVel.value);

    // Update labels
    document.getElementById('val-tIce').textContent = state.tIce + ' K';
    document.getElementById('val-tOcean').textContent = state.tOcean + ' K';
    document.getElementById('val-dIce').textContent = state.dIce + ' km';
    document.getElementById('val-vel').textContent = state.velocity + ' m/day';

    // Calculate live physics
    const g = 1.314;
    const rho = 920; 
    const k_ice = 2.5;

    // P = rho * g * d (converted to MPa)
    const pressure = (rho * g * (state.dIce * 1000)) / 1e6;
    document.getElementById('out-pressure').textContent = pressure.toFixed(1);

    // grad T = dT / dz
    const gradT = (state.tOcean - state.tIce) / state.dIce;
    document.getElementById('out-grad').textContent = gradT.toFixed(2);

    // q = k * gradT (mW/m^2)
    const flux = k_ice * gradT * 1000 / 1000; // technically just k * gradT inside km = W/km, let's normalize to mW/m^2: k*(gradT/1000)*1000 = k*gradT
    document.getElementById('out-flux').textContent = (k_ice * gradT).toFixed(0);

    // Regime classification
    let regime = 'Diffusion';
    let color = '#a0aec0';
    if (state.velocity > 120) { regime = 'Turbulent Upwelling'; color = '#ff6b6b'; }
    else if (state.velocity > 40) { regime = 'Submesoscale Fronts'; color = '#4caf50'; }
    
    document.getElementById('out-regime').textContent = regime;
    document.getElementById('out-regime').style.color = color;

    document.getElementById('temp-grad-overlay').innerHTML = `$\\nabla T$ = ${gradT.toFixed(1)} K/km`;

    // Redraw canvas with new state
    drawMushy(state);
  }

  [sTIce, sTOcean, sDIce, sVel].forEach(s => s.addEventListener('input', updatePhysics));

  // Init
  updatePhysics();

  // Simple animation loop for the convective arrows
  _mushyAnimTime = 0;
  if(_mushyAnimFrame) cancelAnimationFrame(_mushyAnimFrame);
  
  function animate() {
    _mushyAnimTime += 0.05;
    drawMushy(state, _mushyAnimTime);
    _mushyAnimFrame = requestAnimationFrame(animate);
  }
  animate();

  return () => {
    if(_mushyAnimFrame) cancelAnimationFrame(_mushyAnimFrame);
  };
}

let _mushyCanvasInit = false;
let _mushyW = 0;
let _mushyAnimTime = 0;
let _mushyAnimFrame = null;

function drawMushy(state, time = 0) {
  const canvas = document.getElementById('mushy-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const H = 400;

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

  // Clear
  ctx.fillStyle = '#050a14';
  ctx.fillRect(0, 0, W, H);

  // Dynamic boundaries based on dIce (5-50km)
  // Let dIce=5 map to iceBottom=60, dIce=50 map to iceBottom=200
  const iceDepthPct = (state.dIce - 5) / 45; 
  const iceBottom = 60 + iceDepthPct * 140; 
  const mushyBottom = iceBottom + 80;

  // Solid Ice
  const iceGrad = ctx.createLinearGradient(0, 0, 0, iceBottom);
  iceGrad.addColorStop(0, '#90b8cc');
  iceGrad.addColorStop(1, '#5a90aa');
  ctx.fillStyle = iceGrad;
  ctx.fillRect(0, 0, W, iceBottom);

  // Mushy
  const mushyGrad = ctx.createLinearGradient(0, iceBottom, 0, mushyBottom);
  mushyGrad.addColorStop(0, '#3a7090');
  mushyGrad.addColorStop(1, '#0a3a60');
  ctx.fillStyle = mushyGrad;
  ctx.fillRect(0, iceBottom, W, mushyBottom - iceBottom);

  // Ocean
  const oceanGrad = ctx.createLinearGradient(0, mushyBottom, 0, H);
  oceanGrad.addColorStop(0, '#0a3a60');
  oceanGrad.addColorStop(1, '#051e36');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, mushyBottom, W, H - mushyBottom);

  // Draw convection arrows in the ocean
  drawConvectionArrows(ctx, W, mushyBottom, H, time, state.velocity);

  // Brine channels
  const channelCount = 6;
  for (let i = 0; i < channelCount; i++) {
    const cx = W * (i + 0.6) / (channelCount + 0.2);
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 200, 50, ${0.1 + state.velocity/300})`;
    ctx.lineWidth = 3;
    ctx.moveTo(cx, mushyBottom);
    for (let y = mushyBottom; y > iceBottom + 10; y -= 5) {
      ctx.lineTo(cx + Math.sin(y * 0.1 + i) * 6, y);
    }
    ctx.stroke();

    // Nutrients rising
    const pCount = Math.min(10, Math.round(state.velocity / 15));
    for (let j = 0; j < pCount; j++) {
      // animate particles
      const phase = (time * (state.velocity/50) + j * 10) % (mushyBottom - iceBottom);
      const py = mushyBottom - phase;
      const px = cx + Math.sin(py * 0.1 + i) * 6;
      ctx.fillStyle = `rgba(255, 220, 80, ${1 - phase/(mushyBottom-iceBottom)})`;
      ctx.beginPath();
      ctx.arc(px, py, 1.5, 0, Math.PI*2);
      ctx.fill();
    }
  }

  // Draw solid ice cracks
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.lineWidth = 1;
  for(let i=0; i<15; i++) {
    const cx = (i/15)*W + Math.random()*20;
    ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx + (Math.random()-0.5)*40, iceBottom*0.8); ctx.stroke();
  }

  // Labels
  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(40, 70, 90, 0.9)';
  ctx.fillText('SOLID ICE', 10, 30);
  ctx.fillStyle = 'rgba(150, 200, 230, 0.9)';
  ctx.fillText('MUSHY LAYER', 10, iceBottom + 25);
  ctx.fillStyle = 'rgba(100, 200, 255, 0.7)';
  ctx.fillText('OCEAN', 10, mushyBottom + 30);

  // Boundary lines
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.beginPath(); ctx.moveTo(0, iceBottom); ctx.lineTo(W, iceBottom); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, mushyBottom); ctx.lineTo(W, mushyBottom); ctx.stroke();
  ctx.setLineDash([]);

  // Temp Profile
  drawTempProfile(ctx, W - 40, iceBottom, mushyBottom, H, state);

  ctx.restore();
}

function drawConvectionArrows(ctx, W, top, bottom, time, velocity) {
  // We draw circulating cells
  const cells = 3;
  const cellW = W / cells;
  const h = bottom - top;
  const cy = top + h/2;

  ctx.lineWidth = 1.5;
  const speed = velocity / 50;

  for(let i=0; i<cells; i++) {
    const cx = i * cellW + cellW/2;
    // alternating rotation
    const dir = i % 2 === 0 ? 1 : -1;
    
    // Upward warm plume
    const plumeX = cx + dir * cellW/3;
    const shiftUp = (time * speed * 30) % h;
    const yUp = bottom - shiftUp;
    
    // draw red arrow moving up
    ctx.fillStyle = 'rgba(255, 80, 80, 0.6)';
    ctx.beginPath();
    ctx.moveTo(plumeX, yUp);
    ctx.lineTo(plumeX-4, yUp+6);
    ctx.lineTo(plumeX+4, yUp+6);
    ctx.fill();
    ctx.fillRect(plumeX-1, yUp+6, 2, 10);

    // Downward cold plume
    const coldX = cx - dir * cellW/3;
    const shiftDown = (time * speed * 30) % h;
    const yDown = top + shiftDown;

    ctx.fillStyle = 'rgba(80, 160, 255, 0.6)';
    ctx.beginPath();
    ctx.moveTo(coldX, yDown);
    ctx.lineTo(coldX-4, yDown-6);
    ctx.lineTo(coldX+4, yDown-6);
    ctx.fill();
    ctx.fillRect(coldX-1, yDown-16, 2, 10);
  }
}

function drawTempProfile(ctx, x, mushyTop, mushyBottom, H, state) {
  // Line representing temperature
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(255, 100, 50, 0.8)';
  ctx.lineWidth = 2;
  
  // Depth 0 -> H
  // T goes from tIce -> tOcean
  const tMin = 50; 
  const tMax = 300;
  
  const getX = (t) => {
    return x - 30 + ((t - tMin) / (tMax - tMin)) * 40;
  };

  // Surface point
  ctx.moveTo(getX(state.tIce), 0);
  
  // Linear through ice
  ctx.lineTo(getX(Math.min(state.tIce + 80, state.tOcean-10)), mushyTop); // At mushy layer top, temp is close to freezing
  
  // Curve through mushy
  ctx.lineTo(getX(state.tOcean - 2), mushyBottom);
  
  // Ocean holds steady
  ctx.lineTo(getX(state.tOcean), H);

  ctx.stroke();

  // Axis
  ctx.font = '9px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(255, 100, 50, 0.8)';
  ctx.fillText('T(z)', x - 10, 15);
}
