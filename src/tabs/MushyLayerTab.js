import katex from 'katex';

export function renderMushyLayerTab(container) {
  if (window.mushyAnimId) cancelAnimationFrame(window.mushyAnimId);

  container.innerHTML = `
    <div class="tab-header">
      <h2>Ice-Ocean Interface: The Mushy Layer</h2>
      <p class="tab-subtitle">
        Europa's ice-ocean boundary is not a sharp line, but a porous "mushy layer" of reactive ice crystals and hypersaline brine. Adjust the freezing rate to see how salt rejection drives deep ocean mixing.
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">❄️</span> Reactive Transport Simulator</div>
        
        <div class="slider-container" style="margin:15px 0 10px 0;">
          <label>Freezing Velocity ($V$) <span class="slider-value" id="val-v" style="color:var(--accent-primary)">1.0 cm/yr</span></label>
          <input type="range" id="slider-v" min="0.1" max="10.0" value="1.0" step="0.1" />
        </div>
        
        <div class="slider-container" style="margin-bottom:20px;">
          <label>Porosity ($\\phi$) <span class="slider-value" id="val-phi" style="color:var(--accent-warm)">15%</span></label>
          <input type="range" id="slider-phi" min="5" max="40" value="15" step="1" />
        </div>

        <div class="data-grid" style="margin-bottom:15px;">
          <div class="data-item">
            <div class="label">Darcy-Rayleigh No. ($Ra_m$)</div>
            <div class="value" id="out-ram" style="font-size:16px;">--</div>
          </div>
          <div class="data-item">
            <div class="label">Brine Flux State</div>
            <div class="value" id="out-state" style="font-size:16px;">--</div>
          </div>
        </div>

        <div class="canvas-container" style="height: 180px; border:1px solid rgba(0,255,255,0.2); border-radius:8px; overflow:hidden;">
          <canvas id="mushy-canvas"></canvas>
        </div>
        <p style="font-size:10px; color:var(--text-muted); margin-top:8px;">
          Visualization: Fast freezing traps salt inside low-porosity ice. Slower freezing combined with high porosity allows heavy brine to drain via chimneys, powering ocean convection through compositional buoyancy.
        </p>
      </div>

      <div>
        <div class="card" style="margin-bottom: 10px;">
          <div class="card-title"><span class="icon">📐</span> Porous Media Equations</div>
          <div class="equation-block" style="padding: 10px;" id="eq-darcy"></div>
          <div class="equation-block" style="padding: 10px;" id="eq-salt"></div>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">🔬</span> Theoretical Framework</div>
          <p style="font-size:12px; color:var(--text-secondary); line-height:1.5; margin-bottom:8px;">
            <strong>Brine Rejection:</strong> As pure water crystallizes into ice, salt is rejected into the interstitial pore space. This brine becomes locally dense and cold.
          </p>
          <p style="font-size:12px; color:var(--text-secondary); line-height:1.5;">
            <strong>Darcy-Rayleigh Instability:</strong> If the mushy layer is thick and permeable enough ($Ra_m > Ra_{crit}$), the heavy brine undergoes a fingering instability. It melts localized vertical channels ("chimneys") and plummets into the ocean, driving compositional convection capable of transporting oceanic nutrients globally.
          </p>
        </div>
      </div>
    </div>
  `;

  document.getElementById('eq-darcy').innerHTML = `
    <div class="equation-label" style="color:var(--text-muted); margin-bottom:4px;">Darcy-Rayleigh Number (Mushy Layer)</div>
    ${katex.renderToString('Ra_m = \\frac{g \\beta \\Delta C \\Pi}{\\kappa_m \\nu}', { displayMode: true, throwOnError: false })}
  `;

  document.getElementById('eq-salt').innerHTML = `
    <div class="equation-label" style="color:var(--text-muted); margin-bottom:4px; margin-top:10px;">Reactive Transport (Salt Conservation)</div>
    ${katex.renderToString('\\frac{\\partial}{\\partial t}(\\phi C_l + (1-\\phi)C_s) + \\nabla \\cdot (\\vec{u} C_l) = \\kappa_m \\nabla^2 C_l', { displayMode: true, throwOnError: false })}
  `;

  const sV = document.getElementById('slider-v');
  const sPhi = document.getElementById('slider-phi');
  const outRam = document.getElementById('out-ram');
  const outState = document.getElementById('out-state');
  const canvas = document.getElementById('mushy-canvas');

  let config = { v: 1.0, phi: 0.15, Ram: 0, draining: false };

  function update() {
    config.v = parseFloat(sV.value);
    config.phi = parseFloat(sPhi.value) / 100;

    document.getElementById('val-v').textContent = config.v.toFixed(1) + ' cm/yr';
    document.getElementById('val-phi').textContent = (config.phi * 100).toFixed(0) + '%';

    // Permeability scales roughly as phi^3 / (1-phi)^2 (Kozeny-Carman relation)
    const Pi = Math.pow(config.phi, 3) / Math.pow(1 - config.phi, 2);
    // Ram is inversely proportional to v (assuming steady state thickness ~ kappa/v)
    // OOM Scaling Factor chosen for aesthetic slider response
    config.Ram = (Pi / config.v) * 2e4;
    
    // Critical Darcy-Rayleigh is typically ~ 15-25 depending on boundary constraints
    config.draining = config.Ram > 15;

    outRam.textContent = config.Ram.toFixed(1);

    if (config.draining) {
      outState.textContent = 'Active Brine Drainage';
      outState.style.color = '#ff00ff';
      outState.style.textShadow = '0 0 10px rgba(255,0,255,0.4)';
    } else {
      outState.textContent = 'Salt Entrapment (Solidifying)';
      outState.style.color = '#00ffff';
      outState.style.textShadow = '0 0 10px rgba(0,255,255,0.4)';
    }
  }

  sV.addEventListener('input', update);
  sPhi.addEventListener('input', update);
  update();

  let lastTime = performance.now();
  function animate(t) {
    drawMushyCanvas(canvas, config, t);
    window.mushyAnimId = requestAnimationFrame(animate);
  }
  window.mushyAnimId = requestAnimationFrame(animate);
}

function drawMushyCanvas(canvas, config, time) {
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

  // Bulk Ocean backfill
  ctx.fillStyle = '#0a1020';
  ctx.fillRect(0, 0, W, H);

  // Mushy layer thickness varies inversely with freezing rate v
  const mushThickness = Math.max(50, 200 - config.v * 15);
  const mushY = 30;

  // Solid Ice Block
  ctx.fillStyle = '#b0e0e6';
  ctx.fillRect(0, 0, W, mushY);
  
  // Porous Mushy Layer Background
  const mushGrad = ctx.createLinearGradient(0, mushY, 0, mushY + mushThickness);
  mushGrad.addColorStop(0, '#3080a0');
  mushGrad.addColorStop(1, '#0a1020');
  ctx.fillStyle = mushGrad;
  ctx.fillRect(0, mushY, W, mushThickness);

  // Procedural porosity (brine pockets)
  const spacing = 10 + (config.phi * 20);
  const size = 1 + config.phi * 8;
  
  ctx.fillStyle = 'rgba(255, 0, 255, 0.7)';
  for (let y = mushY + 5; y < mushY + mushThickness; y += spacing) {
    for (let x = 5; x < W; x += spacing) {
      // Create organic looking sponge structure
      const noise = Math.sin(x*0.1 + y*0.1);
      if (Math.random() < 0.6 + noise*0.2) {
        ctx.beginPath();
        ctx.arc(x + Math.sin(y)*5, y, size * (0.5+Math.random()*0.5), 0, Math.PI*2);
        ctx.fill();
      }
    }
  }

  // Draw Sinking Brine Chimneys
  if (config.draining) {
    const vigor = Math.min(2.0, config.Ram / 25);
    const speed = time * 0.04 * vigor;
    const channels = Math.floor(W / 55);

    for (let c = 0; c < channels; c++) {
      const cx = W * (c + 0.5) / channels;
      
      // Chimney Path
      ctx.beginPath();
      ctx.lineWidth = 12 + vigor * 6;
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.3)';
      ctx.moveTo(cx, mushY + 15);
      ctx.lineTo(cx, mushY + mushThickness);
      ctx.stroke();

      // Dense Brine Droplets plummeting
      for(let d = 0; d < 6; d++) {
        let py = mushY + 15 + ((speed + d*40 + c*25) % (H - mushY - 15));
        
        ctx.beginPath();
        ctx.arc(cx + Math.sin(py*0.06)*4, py, Math.max(1, 4 - (py-mushY)/80), 0, Math.PI*2);
        ctx.fillStyle = '#ff00ff';
        ctx.shadowColor = '#ff00ff';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
  }

  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillStyle = '#00ffff';
  ctx.fillText('SOLID ICE', 10, 15);
  ctx.fillStyle = '#ff00ff';
  ctx.fillText('MUSHY LAYER', 10, mushY + 15);
  ctx.fillStyle = '#00ffff';
  ctx.fillText('BULK OCEAN', 10, H - 10);
}
