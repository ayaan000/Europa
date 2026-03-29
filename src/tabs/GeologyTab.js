import katex from 'katex';

export function renderGeologyTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Surface Mapping & Tectonics</h2>
      <p class="tab-subtitle">
        Europa's surface is a dynamic, fractured ice shell crisscrossed by lineae, bands, and chaos terrains. 
        Unlike geologically dead moons, Europa exhibits active resurfacing and complex tectonic behavior driven by tidal flexing.
      </p>
    </div>

    <div class="card" style="margin-bottom:20px;">
      <div class="card-title" style="text-align:left;"><span class="icon">🛰️</span> Europa Clipper Progressive Surface Map</div>
      <p style="font-size:12px; color:var(--text-secondary); text-align:left; margin-bottom:10px;">
        Telemetry feed simulating the high-resolution mapping of Europa's chaotic terrain and tectonic lineae over time.
      </p>
      <div class="canvas-container" style="height:350px; border-radius:8px; border:1px solid rgba(0,255,255,0.2); overflow:hidden; position:relative;">
        <canvas id="clipper-map-canvas"></canvas>
        <div id="clipper-progress" style="position:absolute; top:10px; right:10px; font-family:'Space Mono', monospace; font-size:12px; color:#00ffff; background:rgba(0,0,0,0.6); padding:4px 8px; border-radius:4px;">Recv: 0%</div>
      </div>
    </div>

    <div class="grid-2">
      <!-- Left Column: Surface Features -->
      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">🗺️</span> Geological Features</div>
          <p style="font-size:13px; color:var(--text-secondary); line-height:1.7; margin-bottom:12px;">
            The surface is incredibly smooth on a global scale but complex locally. It lacks heavily cratered terrains, indicating an exceptionally young surface age of ~40 to 90 million years.
          </p>
          <ul style="font-size:13px; color:var(--text-secondary); line-height:1.8; margin-left:20px;">
            <li><strong style="color:var(--text-primary)">Lineae & Ridges:</strong> Double ridges spanning thousands of kilometers, likely formed by tidal stress fracturing and upwelling brines.</li>
            <li><strong style="color:var(--text-primary)">Chaos Terrains:</strong> Regions like Conamara Chaos where the ice shell has been shattered, translated, and frozen in a matrix, indicative of localized melting or diapirism.</li>
            <li><strong style="color:var(--text-primary)">Subduction Bands:</strong> Compressive features analogous to plate tectonics on Earth, where old ice is "subsumed" into the warmer, ductile ice shell beneath.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">🔍</span> "Sumsumption" Plate Tectonics</div>
          <p style="font-size:13px; color:var(--text-secondary); line-height:1.7;">
            Europa is one of the only planetary bodies outside Earth showing evidence of plate tectonic-like activity. 
            Because new crust is constantly formed at dilational bands, surface area must be conserved. This drives 
            <strong>sumsumption</strong> (ice subduction) at specific convergent boundaries.
          </p>
        </div>
      </div>

      <!-- Right Column: OOM & Properties -->
      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">🧮</span> OOM Analysis: Resurfacing Rate</div>
          <div class="context-block">
            <h4>How fast is the surface replaced?</h4>
            <p>
              Given its paucity of impact craters, Europa's surface is estimated to be roughly $t_{age} = 50$ Myr old.
              We can perform an Order of Magnitude (OOM) calculation to find the mean resurfacing rate.
            </p>
          </div>
          
          <div class="data-grid" style="margin-bottom:12px;">
            <div class="data-item">
              <div class="label">Radius ($R$)</div>
              <div class="value">1,560 <span class="unit">km</span></div>
            </div>
            <div class="data-item">
              <div class="label">Surface Area ($A$)</div>
              <div class="value">~3 $\\times 10^7$ <span class="unit">km²</span></div>
            </div>
          </div>

          <div class="equation-block" id="eq-resurface"></div>
          <p style="font-size:12px; color:var(--text-muted); margin-top:10px;">
            This implies that on average, $0.6$ km² of Europa's surface is recycled into the interior every year—a process
            driven by extensive tidal dissipation.
          </p>
        </div>
      </div>
    </div>
  `;

  document.getElementById('eq-resurface').innerHTML = `
    <div class="equation-label">Mean Resurfacing Rate</div>
    ${katex.renderToString(
      '\\dot{A} \\approx \\frac{4\\pi R^2}{t_{age}} \\approx 0.6 \\text{ km}^2/\\text{yr}',
      { displayMode: true, throwOnError: false }
    )}
  `;

  // Progressive Clipper Map Logic
  const canvas = document.getElementById('clipper-map-canvas');
  if (canvas) {
    const W = canvas.parentElement.clientWidth;
    const H = canvas.parentElement.clientHeight;
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    // Background 
    ctx.fillStyle = '#08121f';
    ctx.fillRect(0, 0, W, H);
    
    // Generate static lineae paths representing the mapping
    const paths = [];
    for(let i=0; i<200; i++) {
        const x = Math.random() * W;
        const y = Math.random() * H;
        const a = Math.random() * Math.PI;
        const len = 30 + Math.random() * 200;
        paths.push({ x, y, a, len, color: Math.random() > 0.7 ? '#a54432' : '#355c7d', width: 0.5 + Math.random()*2 });
    }

    let time = 0;
    let animId;
    function drawMap() {
      if (!document.getElementById('clipper-map-canvas')) return; 
      animId = window.requestAnimationFrame(drawMap);
      time += 0.5;
      
      const progress = Math.min(100, Math.floor(time * 0.5));
      const progressEl = document.getElementById('clipper-progress');
      if (progressEl) progressEl.textContent = `Telemetry: ${progress}%`;
      
      if (progress >= 100) return; // Map complete

      ctx.fillStyle = '#08121f';
      ctx.fillRect(0, 0, W, H);

      // Noise
      ctx.fillStyle = 'rgba(255,255,255,0.03)';
      for(let k=0; k<1500; k++) ctx.fillRect(Math.random()*W, Math.random()*H, 2, 2);

      paths.forEach((p, idx) => {
         const revealThreshold = (idx / paths.length) * 150;
         if (time > revealThreshold) {
            const drawLen = Math.min(p.len, (time - revealThreshold) * 1.5);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.quadraticCurveTo(p.x + p.len*0.5*Math.cos(p.a) + 30, p.y + p.len*0.5*Math.sin(p.a) - 30, p.x + drawLen*Math.cos(p.a), p.y + drawLen*Math.sin(p.a));
            ctx.strokeStyle = p.color;
            ctx.lineWidth = p.width;
            ctx.stroke();

            // Leading Edge "Laser" Dot
            if (drawLen < p.len) {
                ctx.fillStyle = '#00ffff';
                ctx.beginPath();
                ctx.arc(p.x + drawLen*Math.cos(p.a), p.y + drawLen*Math.sin(p.a), 1.5, 0, Math.PI*2);
                ctx.fill();
            }
         }
      });
    }
    drawMap();
    return () => { if (animId) cancelAnimationFrame(animId); };
  }
}
