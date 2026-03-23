import katex from 'katex';

export function renderConvectionTab(container) {
  let logRa = 7.0;

  container.innerHTML = `
    <div class="tab-header">
      <h2>Ocean Convection (Pagnoscin et al. 2026)</h2>
      <p class="tab-subtitle">
        Intermediate-scale turbulent convection in Europa's ocean generates spatially heterogeneous 
        basal heat fluxes. This visually demonstrates how the Rayleigh number ($Ra$) dictates the turbulence 
        and thickness variations of the overlying ice shell.
      </p>
      <div class="paper-citation">
        📄 <a href="https://doi.org/10.1016/j.icarus.2025.116875" target="_blank" rel="noopener">
          Pagnoscin, S. et al. (2026). <em>Icarus</em>, 446, 116875.
        </a>
      </div>
    </div>

    <!-- Boussinesq Visualizer -->
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><span class="icon">🌊</span> Boussinesq Convection Visualizer</div>
      <p style="font-size:12px; color:var(--text-secondary); margin-bottom:15px;">
        Adjust the ocean's thermal driving force (Rayleigh number). Higher values correspond to lower ocean 
        viscosity or steeper temperature gradients, leading to intense plume formation and highly variable ice melting.
      </p>

      <div class="slider-container" style="max-width:400px; margin-bottom:15px;">
        <label>Log₁₀(Rayleigh Number) <span class="slider-value" id="ra-val">10⁷</span></label>
        <input type="range" id="slider-ra" min="4" max="10" value="7" step="0.1" />
      </div>

      <div class="canvas-container" style="height:280px; position:relative;">
        <canvas id="pagnoscin-canvas"></canvas>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">📐</span> Coupled Heat-Ice Model (Boussinesq)</div>
        <div class="equation-block" id="eq-boussinesq"></div>
        <div class="equation-block" id="eq-ice" style="margin-top:10px;"></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">💡</span> Implications for Clipper</div>
        <ul style="font-size:12px; color:var(--text-secondary); line-height:1.6; padding-left:15px;">
          <li style="margin-bottom:6px;"><strong>Gravity/Shape Signatures:</strong> The basal topography created by localized melting/freezing generates measurable gravity anomalies for the G/RS instrument.</li>
          <li style="margin-bottom:6px;"><strong>Surface Coupling:</strong> Intermediate-scale convection ($10-100$ km) is directly coupled to surface observables like chaos terrain.</li>
          <li><strong>Habitability:</strong> Thin ice regions are optimal for future landers to sample oceanic material.</li>
        </ul>
      </div>
    </div>
  `;

  document.getElementById('eq-boussinesq').innerHTML = `
    <div class="equation-label" style="font-size:10px;">Boussinesq Momentum</div>
    ${katex.renderToString('\\frac{\\partial \\vec{u}}{\\partial t} + (\\vec{u} \\cdot \\nabla)\\vec{u} = -\\nabla p + \\text{Ra}\\,\\text{Pr}\\,T\\,\\hat{z} + \\text{Pr}\\,\\nabla^2 \\vec{u}', { displayMode: true, throwOnError: false })}
  `;
  document.getElementById('eq-ice').innerHTML = `
    <div class="equation-label" style="font-size:10px;">Differential Ice Melting</div>
    ${katex.renderToString('\\frac{\\partial h}{\\partial t} \\propto \\left( q_{\\text{cond}} - q_{\\text{ocean}} \\right)', { displayMode: true, throwOnError: false })}
  `;

  let animId = null;

  function updateVisualizer() {
    logRa = parseFloat(document.getElementById('slider-ra').value);
    
    // Format scientific notation
    let displayRa = "10";
    const pow = Math.round(logRa);
    const superscripts = {
      '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
      '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '10': '¹⁰'
    };
    if (logRa % 1 === 0) {
      document.getElementById('ra-val').textContent = displayRa + superscripts[pow];
    } else {
      document.getElementById('ra-val').textContent = "10^" + logRa.toFixed(1);
    }
    
    if(animId) cancelAnimationFrame(animId);
    animId = startAnimation();
  }

  document.getElementById('slider-ra').addEventListener('input', updateVisualizer);
  setTimeout(updateVisualizer, 0);

  function startAnimation() {
    const canvas = document.getElementById('pagnoscin-canvas');
    if (!canvas) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = 280 * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = '280px';
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = 280;

    let time = 0;

    function loop() {
      animId = requestAnimationFrame(loop);
      time += 0.05 * (logRa / 5);

      ctx.clearRect(0,0,W,H);
      ctx.fillStyle = '#0a1a30';
      ctx.fillRect(0,0,W,H);

      // Convection Simulation intensity depends on Ra
      // High Ra (10^9) -> chaos, thin ice. Low Ra (10^4) -> smooth, thick ice.
      const turbulence = (logRa - 4) / 6; // 0 to 1

      const numPlumes = Math.floor(3 + turbulence * 6);
      
      const iceBase = [];
      for (let x = 0; x < W; x++) {
        let flux = 0;
        for (let i = 0; i < numPlumes; i++) {
          const plumeX = (W / (numPlumes+1)) * (i+1) + Math.sin(time*0.5 + i)*20*turbulence;
          const dist = Math.abs(x - plumeX);
          flux += Math.exp(-dist / (30 - turbulence*10));
        }
        
        // Ice base responds inversely to heat flux
        const baseY = 80 - turbulence*40 + Math.min(60, flux * 30 * turbulence);
        iceBase.push(baseY);
      }

      // Draw Ice
      const iceGrad = ctx.createLinearGradient(0,0,0,100);
      iceGrad.addColorStop(0, '#c0dce8');
      iceGrad.addColorStop(1, '#4080a0');
      ctx.fillStyle = iceGrad;
      ctx.beginPath();
      ctx.moveTo(0,0);
      for(let x=0; x<W; x++) ctx.lineTo(x, iceBase[x]);
      ctx.lineTo(W,0); ctx.closePath(); ctx.fill();

      // Plumes
      for (let i = 0; i < numPlumes; i++) {
        const cx = (W / (numPlumes+1)) * (i+1) + Math.sin(time*0.5 + i)*20*turbulence;
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, ${100 + turbulence*100}, 40, ${0.2 + turbulence*0.4})`;
        ctx.lineWidth = 10 + turbulence * 20;
        ctx.moveTo(cx, H);
        ctx.quadraticCurveTo(cx + Math.sin(time+i)*30, H/2, cx, iceBase[Math.round(cx)]);
        ctx.stroke();

        // Particles
        for (let j = 0; j < 5; j++) {
           const phase = (time*20 + j*H/5 + i*13) % H;
           const px = cx + Math.sin((phase/H)*Math.PI + time)*15;
           const py = H - phase;
           
           if(py > iceBase[Math.round(cx)]) {
             ctx.fillStyle = `rgba(255, 200, 100, ${0.5 + turbulence*0.5})`;
             ctx.beginPath(); ctx.arc(px, py, 1.5, 0, Math.PI*2); ctx.fill();
           }
        }
      }

      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.font = '10px sans-serif';
      ctx.fillText('Solid Ice', 10, 20);
      ctx.fillText('Liquid Ocean', 10, H - 20);
    }

    loop();
    return animId;
  }

  return () => { if(animId) cancelAnimationFrame(animId); }
}
