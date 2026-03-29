import katex from 'katex';

export function renderIceShellTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Ice Shell Dynamics: 1D Thermal Gradient</h2>
      <p class="tab-subtitle">
        Explore the non-linear bifurcation between conductive and convective heat transport. Drag the slider to adjust Europa's ice shell thickness to observe the onset of convective instability.
      </p>
    </div>

    <div class="grid-2">
      <!-- Left: Interactive Controls -->
      <div class="card">
        <div class="card-title"><span class="icon">🎛️</span> Shell Parameter Control</div>
        
        <div class="slider-container" style="margin:20px 0;">
          <label>Shell Thickness ($d$) <span class="slider-value" id="val-thick" style="color:var(--accent-primary)">15 km</span></label>
          <input type="range" id="slider-thick" min="5" max="60" value="15" step="1" />
        </div>

        <div class="data-grid" style="margin-bottom:20px;">
          <div class="data-item">
            <div class="label">Dominant Regime</div>
            <div class="value" id="out-regime" style="color:var(--accent-secondary); font-size:16px;">Conductive</div>
          </div>
          <div class="data-item">
            <div class="label">Nusselt Number ($Nu$)</div>
            <div class="value" id="out-nu">1.0</div>
          </div>
          <div class="data-item">
            <div class="label">Basal Heat Flux</div>
            <div class="value" id="out-flux">-- <span class="unit">mW/m²</span></div>
          </div>
        </div>

        <div id="regime-desc" style="font-size:13px; color:var(--text-secondary); line-height:1.6; border-left:3px solid var(--accent-primary); padding-left:15px; margin-top:20px;">
        </div>
      </div>

      <!-- Right: Equations -->
      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">📐</span> Heat Transport Physics</div>
          <p style="font-size:13px; color:var(--text-secondary); margin-bottom:15px;">When the conductive temperature gradient steepens sufficiently to overcome viscous resistance, the solid ice undergoes solid-state convection.</p>
          <div class="equation-block" id="eq-fourier" style="margin-bottom:15px;"></div>
          <div class="equation-block" id="eq-schwarzschild"></div>
        </div>
      </div>
    </div>

    <!-- Canvas Visualization -->
    <div class="card" style="margin-top:20px;">
      <div class="card-title"><span class="icon">📊</span> Interactive T-z Thermal Profile</div>
      <div class="canvas-container" style="height:350px; border:1px solid rgba(255,255,255,0.05); border-radius:8px; overflow:hidden;">
        <canvas id="thermal-canvas"></canvas>
      </div>
    </div>
  `;

  document.getElementById('eq-fourier').innerHTML = `
    <div class="equation-label" style="margin-bottom:5px; color:var(--text-muted)">Fourier's Law (Conductive Base Flux)</div>
    ${katex.renderToString('q = k \\frac{\\Delta T}{d} \\cdot Nu', { displayMode: true, throwOnError: false })}
  `;

  document.getElementById('eq-schwarzschild').innerHTML = `
    <div class="equation-label" style="margin-bottom:5px; color:var(--text-muted)">Critical Convection Thickness ($d_c$)</div>
    ${katex.renderToString('d_c \\approx \\left( \\frac{Ra_c \\kappa \\eta}{\\alpha g \\rho \\Delta T} \\right)^{1/3} \\approx 22 \\text{ km}', { displayMode: true, throwOnError: false })}
  `;

  const slider = document.getElementById('slider-thick');
  const outRegime = document.getElementById('out-regime');
  const outNu = document.getElementById('out-nu');
  const outFlux = document.getElementById('out-flux');
  const desc = document.getElementById('regime-desc');
  const canvas = document.getElementById('thermal-canvas');

  function update() {
    const d = parseFloat(slider.value); // km
    document.getElementById('val-thick').textContent = d + ' km';

    // Physics
    const k = 2.3; // W/mK for ice at roughly 200K
    const dT = 270 - 100; // Ocean - Surface
    const CRITICAL_THICK = 22; // km
    
    let isConvective = d > CRITICAL_THICK;
    let Nu = 1.0;
    
    if (isConvective) {
      // Strongly sub-critical parameterization for demonstration purposes
      Nu = 1.0 + Math.pow((d - CRITICAL_THICK) / 8, 1.3); 
    }

    const q = (k * dT) / (d * 1000) * Nu; // W/m^2
    const heatFlux_mW = (q * 1000).toFixed(1);

    outNu.textContent = Nu.toFixed(2);
    outFlux.textContent = heatFlux_mW + ' mW/m²';

    if (!isConvective) {
      outRegime.textContent = 'Stagnant Conductive Lid';
      outRegime.style.color = '#00ffff';
      outRegime.style.textShadow = '0 0 10px rgba(0,255,255,0.4)';
      desc.innerHTML = `<strong>Thin Shell Regime:</strong> Heat is transported purely by solid-state conduction. The temperature gradient is linear (sub-adiabatic). This shell is structurally rigid but can support global tectonic fractures.`;
      desc.style.borderColor = '#00ffff';
    } else {
      outRegime.textContent = 'Solid-State Convection';
      outRegime.style.color = '#ff00ff';
      outRegime.style.textShadow = '0 0 10px rgba(255,0,255,0.4)';
      desc.innerHTML = `<strong>Thick Shell Regime:</strong> The shell is thick enough that the conductive profile exceeds the adiabatic limit. The ice destabilizes into convective plumes. The interior becomes nearly isothermal, bounded by sharp thermal boundary layers (TBLs).`;
      desc.style.borderColor = '#ff00ff';
    }

    drawThermalProfile(canvas, d, isConvective, Nu);
  }

  slider.addEventListener('input', update);
  window.addEventListener('resize', update);
  setTimeout(update, 50);
}

function drawThermalProfile(canvas, d, isConvective, Nu) {
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

  // Clear background
  ctx.fillStyle = '#110022'; // Deep synthwave void
  ctx.fillRect(0, 0, W, H);

  // Depth mapping (max slider is 60km, use 70km as total Y axis to leave breathing room)
  const MAX_DEPTH = 70;
  const depthScale = H / MAX_DEPTH; 
  const iceBottomY = d * depthScale;

  // Split View: Left 25% is Ice graphics, Right 75% is Graph
  const splitX = W * 0.25;
  
  // Ocean Graphics
  const oceanGrad = ctx.createLinearGradient(0, iceBottomY, 0, H);
  oceanGrad.addColorStop(0, '#0055ff');
  oceanGrad.addColorStop(1, '#001133');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, iceBottomY, splitX, H - iceBottomY);

  // Ice Shell Graphics
  const iceGrad = ctx.createLinearGradient(0, 0, 0, iceBottomY);
  iceGrad.addColorStop(0, '#d0f0ff');
  iceGrad.addColorStop(1, '#206080');
  ctx.fillStyle = iceGrad;
  ctx.fillRect(0, 0, splitX, iceBottomY);

  // Divider Line
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(splitX, 0); ctx.lineTo(splitX, H);
  ctx.stroke();

  // Draw Grid Lines on Graph
  const graphX = splitX + 20;
  const graphW = W - graphX - 20;
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.font = '10px monospace';
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  
  // Depth guides
  for(let z=10; z<=60; z+=10) {
    const y = z * depthScale;
    ctx.beginPath(); ctx.moveTo(graphX, y); ctx.lineTo(W, y); ctx.stroke();
    ctx.fillText(z + 'km', graphX - 30, y + 4);
  }

  // T bounds (100K -> 270K)
  const T_min = 90;
  const T_max = 280;
  const mapT = (T) => graphX + ((T - T_min) / (T_max - T_min)) * graphW;

  // Temp guides
  for(let T=100; T<=270; T+=30) {
    const x = mapT(T);
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    ctx.fillText(T + 'K', x - 10, H - 5);
  }

  // Plot profile
  ctx.beginPath();
  ctx.strokeStyle = isConvective ? '#ff00ff' : '#00ffff';
  ctx.lineWidth = 4;

  ctx.moveTo(mapT(100), 0); // Surface temp
  
  if (!isConvective) {
    // Linear conductive profile
    ctx.lineTo(mapT(270), iceBottomY);
  } else {
    // Convective profile: Stagnant lid, isothermal interior, bottom thermal boundary layer (TBL)
    const TBL_thickness = d / (2 * Nu); 
    const topBdY = TBL_thickness * depthScale;
    const botBdY = (d - TBL_thickness) * depthScale;
    const interiorTemp = 240; 
    
    // Smooth bezier curve approximations for natural looking boundary layers
    ctx.bezierCurveTo(
      mapT(100), topBdY - topBdY*0.5, // control point 1
      mapT(interiorTemp), topBdY*0.5,   // control point 2
      mapT(interiorTemp), topBdY        // end point (base of conductive lid)
    );
    // Isothermal convection core
    ctx.lineTo(mapT(interiorTemp + 5), botBdY);
    // Bottom boundary layer
    ctx.bezierCurveTo(
      mapT(interiorTemp + 5), botBdY + TBL_thickness*0.5, 
      mapT(270), iceBottomY - TBL_thickness*0.5,
      mapT(270), iceBottomY
    );
  }

  ctx.shadowColor = isConvective ? 'rgba(255,0,255,0.8)' : 'rgba(0,255,255,0.8)';
  ctx.shadowBlur = 12;
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Ice-Ocean interface Line
  ctx.strokeStyle = '#ff0055';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath(); ctx.moveTo(graphX, iceBottomY); ctx.lineTo(W, iceBottomY); ctx.stroke();
  ctx.setLineDash([]);
}
