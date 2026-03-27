import katex from 'katex';

export function renderIceShellTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Ice Shell Dynamics & Regime Switches</h2>
      <p class="tab-subtitle">
        Icy moon shells can exist in two distinct thermal states — thin conductive or thick convective — 
        depending on the balance between tidal heat production and heat loss to space. 
        The transition between these states may exhibit hysteresis, meaning the system can "jump" 
        between stable configurations.
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🔄</span> Hysteresis Toggle: Shell Regime</div>
        <div class="toggle-group" id="shell-toggle" style="margin-bottom:20px;">
          <button class="toggle-option active" data-mode="thin">Thin Conductive (~10 km)</button>
          <button class="toggle-option" data-mode="thick">Thick Convective (~30 km)</button>
        </div>
        <div class="canvas-container" style="height:340px;">
          <canvas id="shell-canvas"></canvas>
        </div>
        <div id="shell-description" style="margin-top:14px;"></div>
      </div>

      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">📐</span> Heat Transport Equation</div>
          <div class="equation-block" id="eq-heat"></div>
          <div class="equation-block" id="eq-nusselt"></div>
        </div>

        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">📊</span> Regime Comparison</div>
          <table style="width:100%; font-size:13px; color:var(--text-secondary); border-collapse:collapse;">
            <thead>
              <tr style="border-bottom:1px solid var(--border-subtle);">
                <th style="text-align:left; padding:8px; color:var(--text-muted); font-size:11px; text-transform:uppercase; letter-spacing:1px;">Property</th>
                <th style="text-align:center; padding:8px; color:var(--accent-primary);">Conductive</th>
                <th style="text-align:center; padding:8px; color:var(--accent-warm);">Convective</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid var(--border-subtle);">
                <td style="padding:8px;">Thickness</td>
                <td style="text-align:center; padding:8px;">~5–15 km</td>
                <td style="text-align:center; padding:8px;">~25–40 km</td>
              </tr>
              <tr style="border-bottom:1px solid var(--border-subtle);">
                <td style="padding:8px;">Heat transport</td>
                <td style="text-align:center; padding:8px;">Conduction only</td>
                <td style="text-align:center; padding:8px;">Conduction + convection</td>
              </tr>
              <tr style="border-bottom:1px solid var(--border-subtle);">
                <td style="padding:8px;">Nusselt number</td>
                <td style="text-align:center; padding:8px;">Nu = 1</td>
                <td style="text-align:center; padding:8px;">Nu ≫ 1</td>
              </tr>
              <tr style="border-bottom:1px solid var(--border-subtle);">
                <td style="padding:8px;">Surface features</td>
                <td style="text-align:center; padding:8px;">Smooth ridges</td>
                <td style="text-align:center; padding:8px;">Chaos terrain</td>
              </tr>
              <tr>
                <td style="padding:8px;">Schwarzschild</td>
                <td style="text-align:center; padding:8px;">Sub-adiabatic</td>
                <td style="text-align:center; padding:8px;">Super-adiabatic</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">🎓</span> Theoretical Framework: Internal Dynamics</div>
          <div class="context-block" style="margin:0;">
            <h4>Schwarzschild Criterion in Ice Shells</h4>
            <p>
              The Schwarzschild criterion from stellar interiors applies directly: when the 
              conductive temperature gradient exceeds the adiabatic gradient, convection onsets. 
              In an ice shell, the conductive gradient steepens as the shell thickens 
              (∝ ΔT/d), but the adiabatic gradient is nearly fixed. Beyond a critical thickness 
              (~15 km for Europa-like conditions), convection kicks in and the shell transitions 
              to the thick convective regime. This is a "finite-amplitude" bifurcation — the shell 
              doesn't smoothly transition but jumps.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Render equations
  document.getElementById('eq-heat').innerHTML = `
    <div class="equation-label">Fourier's Law (Conductive Heat Flux)</div>
    ${katex.renderToString('q_{\\text{cond}} = -k\\,\\frac{dT}{dz} \\approx k\\,\\frac{T_m - T_s}{d}', { displayMode: true, throwOnError: false })}
    <div class="equation-explanation">k = thermal conductivity of ice (~2.3 W/m·K), T_m = melting point (~273 K), T_s = surface temp (~100 K), d = shell thickness.</div>
  `;

  document.getElementById('eq-nusselt').innerHTML = `
    <div class="equation-label">Nusselt Number (Convective Enhancement)</div>
    ${katex.renderToString('Nu = \\frac{q_{\\text{total}}}{q_{\\text{cond}}}', { displayMode: true, throwOnError: false })}
    <div class="equation-explanation">Nu = 1 for purely conductive shells. Nu ≫ 1 when vigorous convection enhances heat transport beyond conduction alone.</div>
  `;

  // Shell mode
  let currentMode = 'thin';
  drawShell(currentMode);
  updateDescription(currentMode);

  document.getElementById('shell-toggle').addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-option');
    if (!btn) return;
    document.querySelectorAll('#shell-toggle .toggle-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMode = btn.dataset.mode;
    drawShell(currentMode);
    updateDescription(currentMode);
  });
}

function updateDescription(mode) {
  const el = document.getElementById('shell-description');
  if (mode === 'thin') {
    el.innerHTML = `
      <div class="context-block" style="border-color: rgba(0, 212, 255, 0.3);">
        <h4 style="color: var(--accent-primary);">Thin Conductive Shell (~10 km)</h4>
        <p>Heat is transported purely by conduction. The shell is thin enough that the temperature 
        gradient remains sub-adiabatic (Schwarzschild stability). Surface features are dominated by 
        tectonic ridges and lineae. The ocean is relatively close to the surface.</p>
      </div>
    `;
  } else {
    el.innerHTML = `
      <div class="context-block" style="border-color: rgba(255, 107, 107, 0.3);">
        <h4 style="color: var(--accent-warm);">Thick Convective Shell (~30 km)</h4>
        <p>The shell is thick enough for the temperature gradient to exceed the adiabatic gradient, 
        triggering solid-state convection (warm ice rising, cold ice sinking). This produces <strong>chaos 
        terrain</strong> — disrupted blocks of ice tilted at odd angles, formed when warm diapirs 
        partially melt through the shell. The "finite-amplitude jump" in heat flux occurs because 
        convection suddenly becomes the dominant transport mechanism.</p>
      </div>
    `;
  }
}

function drawShell(mode) {
  const canvas = document.getElementById('shell-canvas');
  if (!canvas) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * 2;
  canvas.height = 340 * 2;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = '340px';
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  const W = rect.width;
  const H = 340;

  // Background
  ctx.fillStyle = '#060a14';
  ctx.fillRect(0, 0, W, H);

  // Ocean (bottom)
  const oceanTop = mode === 'thin' ? 80 : 180;

  const oceanGrad = ctx.createLinearGradient(0, oceanTop, 0, H);
  oceanGrad.addColorStop(0, '#0a3d6b');
  oceanGrad.addColorStop(1, '#051e36');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, oceanTop, W, H - oceanTop);

  // Ice shell
  const iceGrad = ctx.createLinearGradient(0, 0, 0, oceanTop);
  iceGrad.addColorStop(0, '#d0e8f0');
  iceGrad.addColorStop(0.3, '#a0c8d8');
  iceGrad.addColorStop(1, '#4a8aaa');
  ctx.fillStyle = iceGrad;
  ctx.fillRect(0, 0, W, oceanTop);

  // Labels
  ctx.font = '12px "JetBrains Mono", monospace';
  ctx.fillStyle = '#2a4a5a';
  ctx.fillText(`ICE SHELL (~${mode === 'thin' ? '10' : '30'} km)`, 12, oceanTop / 2);

  ctx.fillStyle = 'rgba(100, 200, 255, 0.7)';
  ctx.fillText('SUBSURFACE OCEAN', 12, oceanTop + 30);

  // Ice-ocean boundary line
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(0, 212, 255, 0.6)';
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.moveTo(0, oceanTop);
  ctx.lineTo(W, oceanTop);
  ctx.stroke();
  ctx.setLineDash([]);

  // Thickness annotation
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.lineWidth = 1;
  ctx.moveTo(W - 30, 5);
  ctx.lineTo(W - 30, oceanTop - 5);
  ctx.stroke();
  ctx.moveTo(W - 35, 5);
  ctx.lineTo(W - 25, 5);
  ctx.stroke();
  ctx.moveTo(W - 35, oceanTop - 5);
  ctx.lineTo(W - 25, oceanTop - 5);
  ctx.stroke();

  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.save();
  ctx.translate(W - 18, oceanTop / 2 + 10);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(`~${mode === 'thin' ? '10' : '30'} km`, 0, 0);
  ctx.restore();

  // Convective features in thick mode
  if (mode === 'thick') {
    // Convection cells in ice
    for (let i = 0; i < 5; i++) {
      const cx = W * (i + 0.5) / 5;
      const isUp = i % 2 === 0;
      ctx.beginPath();
      ctx.strokeStyle = isUp ? 'rgba(255, 100, 60, 0.25)' : 'rgba(100, 180, 220, 0.25)';
      ctx.lineWidth = 3;

      if (isUp) {
        drawArrow(ctx, cx, oceanTop - 20, cx, 30);
      } else {
        drawArrow(ctx, cx, 30, cx, oceanTop - 20);
      }
    }

    // Chaos terrain on surface
    ctx.fillStyle = 'rgba(80, 50, 30, 0.4)';
    for (let i = 0; i < 8; i++) {
      const bx = 30 + Math.random() * (W - 60);
      const bw = 15 + Math.random() * 30;
      const bh = 5 + Math.random() * 10;
      ctx.save();
      ctx.translate(bx, 3 + Math.random() * 8);
      ctx.rotate((Math.random() - 0.5) * 0.3);
      ctx.fillRect(-bw / 2, -bh / 2, bw, bh);
      ctx.restore();
    }

    ctx.font = '10px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(255, 120, 80, 0.7)';
    ctx.fillText('↑ CHAOS TERRAIN', W / 2 - 50, 16);
  }
}

function drawArrow(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  // arrowhead
  const angle = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - 8 * Math.cos(angle - 0.4), y2 - 8 * Math.sin(angle - 0.4));
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - 8 * Math.cos(angle + 0.4), y2 - 8 * Math.sin(angle + 0.4));
  ctx.stroke();
}
