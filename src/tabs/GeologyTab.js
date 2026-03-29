import katex from 'katex';
import europaMapUrl from '../assets/europa_world_map.png';

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

  // Progressive Clipper Map Logic (2D World Map)
  const canvas = document.getElementById('clipper-map-canvas');
  if (canvas) {
    const W = canvas.parentElement.clientWidth;
    const H = canvas.parentElement.clientHeight;
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    const ctx = canvas.getContext('2d');
    
    // Load high-resolution map
    const img = new Image();
    img.src = europaMapUrl;
    
    let time = 0;
    let animId;
    let imgLoaded = false;
    img.onload = () => { imgLoaded = true; };

    // Dynamic Drift / Continental Annotations
    const markers = [
      { name: 'Conamara Chaos', cx: 0.65, cy: 0.45, type: 'chaos', dx: 0.005, dy: -0.002 },
      { name: 'Thera Macula (Subsumption)', cx: 0.35, cy: 0.65, type: 'subsumption', dx: -0.008, dy: 0.005 },
      { name: 'Astypalaea Linea', cx: 0.5, cy: 0.8, type: 'drift', dx: 0.015, dy: 0.0 }
    ];

    function drawMap() {
      if (!document.getElementById('clipper-map-canvas')) return; 
      animId = window.requestAnimationFrame(drawMap);
      time += 0.5;
      
      const progress = Math.min(100, Math.floor(time * 0.25));
      const progressEl = document.getElementById('clipper-progress');
      if (progressEl) progressEl.textContent = `Resolution: ${progress}%`;
      
      // Base background
      ctx.fillStyle = '#08121f';
      ctx.fillRect(0, 0, W * dpr, H * dpr);
      
      if (imgLoaded) {
          // Progressive pixelation effect: simulate data transmission improving over time
          const pixelSize = progress >= 100 ? 1 : Math.max(1, 40 - Math.floor(progress / 2.5));
          
          if (pixelSize > 1) {
              // Draw small
              const tempW = (W * dpr) / pixelSize;
              const tempH = (H * dpr) / pixelSize;
              ctx.imageSmoothingEnabled = false;
              ctx.drawImage(img, 0, 0, tempW, tempH);
              // Scale up
              ctx.drawImage(canvas, 0, 0, tempW, tempH, 0, 0, W * dpr, H * dpr);
              ctx.imageSmoothingEnabled = true;
          } else {
              // Draw full res
              ctx.drawImage(img, 0, 0, W * dpr, H * dpr);
          }
          
          // Add continental drift markers after 50%
          if (progress > 50) {
              const alpha = (progress - 50) / 50;
              ctx.globalAlpha = alpha;
              
              markers.forEach((m) => {
                  const px = (m.cx * W + Math.sin(time * 0.05) * m.dx * W) * dpr;
                  const py = (m.cy * H + Math.cos(time * 0.05) * m.dy * H) * dpr;
                  
                  // Marker Ring
                  ctx.beginPath();
                  ctx.strokeStyle = m.type === 'chaos' ? '#ffaa00' : m.type === 'subsumption' ? '#ff0055' : '#00ffff';
                  ctx.lineWidth = 2 * dpr;
                  ctx.arc(px, py, 12 * dpr + Math.sin(time*0.1)*3, 0, Math.PI*2);
                  ctx.stroke();
                  
                  // Central Dot
                  ctx.beginPath();
                  ctx.fillStyle = ctx.strokeStyle;
                  ctx.arc(px, py, 3 * dpr, 0, Math.PI*2);
                  ctx.fill();
                  
                  // Label
                  ctx.font = `600 ${11 * dpr}px "Space Mono", monospace`;
                  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
                  ctx.fillText(m.name, px + 18 * dpr, py + 4 * dpr);
                  
                  // Velocity / Drift Arrow
                  ctx.beginPath();
                  ctx.moveTo(px, py);
                  ctx.lineTo(px + m.dx * 1500 * dpr, py + m.dy * 1500 * dpr);
                  ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
                  ctx.lineWidth = 1.5 * dpr;
                  ctx.stroke();
                  
                  // Arrow Tip
                  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                  ctx.beginPath();
                  ctx.arc(px + m.dx * 1500 * dpr, py + m.dy * 1500 * dpr, 2.5 * dpr, 0, Math.PI*2);
                  ctx.fill();
              });
              
              ctx.globalAlpha = 1.0;
          }
          
          // Scanline effect during progressive transmission
          if (progress < 100) {
              const scanY = (progress / 100) * (H * dpr);
              ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
              ctx.fillRect(0, scanY, W * dpr, 2 * dpr);
              ctx.fillStyle = 'rgba(0, 255, 255, 0.05)';
              ctx.fillRect(0, 0, W * dpr, scanY);
          }
      } else {
          ctx.fillStyle = '#00ffff';
          ctx.font = `${12 * dpr}px monospace`;
          ctx.fillText("Receiving high-res orbital telemetry...", 20 * dpr, 30 * dpr);
      }
    }
    
    drawMap();
    return () => { if (animId) cancelAnimationFrame(animId); };
  }
}
