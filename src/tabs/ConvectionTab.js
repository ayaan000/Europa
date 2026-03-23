import katex from 'katex';

/**
 * EUROPA CASE STUDY TAB — Pagnoscin et al. (2026)
 * "Convection in the subsurface ocean of icy moons and response of the upper ice layer"
 * Icarus, 446, 116875. DOI: 10.1016/j.icarus.2025.116875
 *
 * All data in this tab comes directly from or is derived from this publication.
 */
export function renderConvectionTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Ocean Convection & Ice Shell Response</h2>
      <p class="tab-subtitle">
        Pagnoscin et al. (2026) investigate intermediate-scale convective dynamics within icy moon 
        oceans and how these motions generate differential heat fluxes that locally thin or thicken 
        the overlying ice shell. Their work bridges the gap between global-scale models and the 
        localised processes that may produce observable surface signatures.
      </p>
      <div class="paper-citation">
        📄 <a href="https://doi.org/10.1016/j.icarus.2025.116875" target="_blank" rel="noopener">
          Pagnoscin, S. et al. (2026). <em>Icarus</em>, 446, 116875.
        </a>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><span class="icon">🔭</span> Context: Why Intermediate-Scale Convection Matters</div>
      <p style="font-size:13px; color:var(--text-secondary); line-height:1.8;">
        The subsurface oceans of icy moons like Europa lie well outside the traditional habitable zone, 
        yet tidal dissipation and radiogenic heating sustain liquid water beneath their ice shells. 
        <strong>Previous global models</strong> (e.g., Soderlund et al. 2014) showed that large-scale 
        ocean circulation produces latitude-dependent heat flux variations at the ice-ocean boundary. 
        However, the <strong>intermediate-scale, localised convective dynamics</strong> — which may 
        directly control where and how fast the ice melts or grows — have been less explored.
      </p>
      <p style="font-size:13px; color:var(--text-secondary); line-height:1.8; margin-top:10px;">
        Pagnoscin et al. address this gap by coupling a turbulent convective fluid model with a 
        linear freeze-melt approximation for the ice layer. Their key insight: <strong>spatial 
        variability in basal melting/freezing rates can induce measurable ice shell thickness 
        variations</strong> — potentially detectable by JUICE and Europa Clipper.
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">📐</span> Paper's Key Equation: Coupled Heat-Ice Model</div>
        <div class="equation-block" id="eq-boussinesq"></div>
        <div class="equation-block" id="eq-ice-response" style="margin-top:14px;"></div>

        <div class="context-block" style="margin-top:14px;">
          <h4>Model Setup (from paper)</h4>
          <p>
            The authors numerically integrate a 2D Rayleigh-Bénard convection model in the 
            Boussinesq approximation, heated from below and cooled from above. The upper boundary 
            is coupled to a thin ice layer whose local thickness evolves in response to the 
            spatially varying heat flux from the convecting ocean below. Key model choices:
          </p>
          <ul style="margin-top:8px; padding-left:16px; line-height:2;">
            <li>Rayleigh number range: Ra = 10⁶ – 10⁸ (computationally accessible regime that captures the qualitative dynamics)</li>
            <li>Prandtl number: Pr = 7 (appropriate for liquid water)</li>
            <li>Linear ice thickness response: δh/δt ∝ (q - q_critical)</li>
            <li>Periodic lateral boundary conditions</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">📊</span> Key Results (Pagnoscin et al. 2026)</div>
        
        <div style="display:flex; flex-direction:column; gap:14px;">
          <div class="data-item" style="border-left:3px solid var(--accent-primary);">
            <div class="label">Result 1: Intense Thermal Convection</div>
            <p style="font-size:12px; color:var(--text-secondary); line-height:1.7; margin-top:6px;">
              Icy moon oceans are dominated by intense thermal convection that generates 
              <strong>spatially heterogeneous heat flux</strong> at the ice-ocean boundary. 
              Turbulent plumes create regions of enhanced heat delivery (hot spots) alternating 
              with regions of reduced flux.
            </p>
          </div>

          <div class="data-item" style="border-left:3px solid var(--accent-warm);">
            <div class="label">Result 2: Differential Melting/Freezing</div>
            <p style="font-size:12px; color:var(--text-secondary); line-height:1.7; margin-top:6px;">
              The spatial variability in basal heat flux drives <strong>differential melting and 
              freezing rates</strong> at the ice-ocean interface. Where ocean heat flux exceeds 
              the conductive flux through the ice, the ice melts from below; where it falls short, 
              ice accretes (marine ice formation).
            </p>
          </div>

          <div class="data-item" style="border-left:3px solid var(--accent-gold);">
            <div class="label">Result 3: Ice Shell Thickness Variations</div>
            <p style="font-size:12px; color:var(--text-secondary); line-height:1.7; margin-top:6px;">
              The resulting basal topography creates <strong>measurable ice shell thickness 
              variations</strong>. These would produce gravity and altimetry signatures detectable 
              by JUICE (gravity and GALA laser altimeter) and Europa Clipper (G/RS and REASON).
            </p>
          </div>

          <div class="data-item" style="border-left:3px solid var(--accent-green);">
            <div class="label">Result 4: Surface-Interior Coupling</div>
            <p style="font-size:12px; color:var(--text-secondary); line-height:1.7; margin-top:6px;">
              Internal convective processes are <strong>physically coupled with surface 
              dynamics</strong> at intermediate spatial scales. This means surface geological 
              features (chaos terrain, pits, domes) may be direct manifestations of ocean-driven 
              ice shell thickness variations.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🎨</span> Conceptual Figure: Heat Flux & Ice Response</div>
        <div class="canvas-container" style="height:320px;">
          <canvas id="pagnoscin-canvas"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Conceptual recreation based on Pagnoscin et al. (2026) results: spatially variable ocean 
          heat flux (bottom) drives differential melting/freezing of the ice base (top), producing 
          ice shell thickness variations.
        </p>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">💡</span> Implications & Impact</div>
        <div class="context-block" style="margin:0;">
          <h4>Significance for the Field</h4>
          <p>
            <strong>1. Testable predictions for upcoming missions.</strong> The ice thickness 
            variations predicted by this model can be tested by ESA's JUICE (gravity and GALA 
            altimetry) and NASA's Europa Clipper (G/RS + REASON radar). This makes the paper's 
            predictions directly falsifiable.
          </p>
          <p style="margin-top:8px;">
            <strong>2. Bridges scale gap in ocean models.</strong> Previous work focused on either 
            global circulation (O(1000 km)) or micro-scale processes (O(1 m)). Pagnoscin et al. 
            address the intermediate scale (O(10–100 km)) where convective plumes interact 
            with the ice-ocean boundary — the scale most relevant to observable features.
          </p>
          <p style="margin-top:8px;">
            <strong>3. Habitability implications.</strong> Spatial variability in ice thickness 
            affects where the ice is thinnest — and thus where subsurface material (potentially 
            biosignatures) is most accessible to surface sampling. This guides future lander 
            site selection.
          </p>
          <p style="margin-top:8px;">
            <strong>4. Applicable beyond Europa.</strong> The model applies to any icy moon with 
            a convecting subsurface ocean: Enceladus, Ganymede, Titan, Callisto — making it a 
            general framework for ocean-world science.
          </p>
        </div>
        <div style="margin-top:12px;">
          <span class="badge badge-cyan">Hydrodynamics</span>
          <span class="badge badge-purple">Ice Shell</span>
          <span class="badge badge-gold">Habitability</span>
          <span class="badge badge-green">JUICE / Clipper</span>
        </div>
      </div>
    </div>
  `;

  // Equations
  document.getElementById('eq-boussinesq').innerHTML = `
    <div class="equation-label">Boussinesq Momentum Equation (Convection Model)</div>
    ${katex.renderToString(
      '\\frac{\\partial \\vec{u}}{\\partial t} + (\\vec{u} \\cdot \\nabla)\\vec{u} = -\\nabla p + \\text{Ra}\\,\\text{Pr}\\,T\\,\\hat{z} + \\text{Pr}\\,\\nabla^2 \\vec{u}',
      { displayMode: true, throwOnError: false }
    )}
    <div class="equation-explanation">
      Non-dimensionalised Navier-Stokes in the Boussinesq approximation. Ra·Pr·T·ẑ is the 
      buoyancy term driving convection. Pr = ν/κ ≈ 7 for water. The velocity field u 
      determines the local heat flux q = −∂T/∂z + u·T delivered to the ice-ocean boundary.
    </div>
  `;

  document.getElementById('eq-ice-response').innerHTML = `
    <div class="equation-label">Ice Layer Response (Linear Approximation)</div>
    ${katex.renderToString(
      '\\frac{\\partial h}{\\partial t} = \\frac{1}{\\rho_{\\text{ice}}\\,L_V} \\left( k_{\\text{ice}}\\,\\frac{T_m - T_s}{h} - q_{\\text{ocean}} \\right)',
      { displayMode: true, throwOnError: false }
    )}
    <div class="equation-explanation">
      h = local ice thickness, q<sub>ocean</sub> = local heat flux from the convecting ocean, 
      k<sub>ice</sub>(T_m − T_s)/h = conductive heat flux through the ice. Where q<sub>ocean</sub> exceeds the conductive 
      flux, h decreases (melting); where it falls short, h increases (freezing). This is the 
      paper's key coupling equation between the ocean and the ice shell.
    </div>
  `;

  // Draw the conceptual figure
  drawPagnoscin();
}

function drawPagnoscin() {
  const canvas = document.getElementById('pagnoscin-canvas');
  if (!canvas) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * 2;
  canvas.height = 320 * 2;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = '320px';
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  const W = rect.width;
  const H = 320;

  // Background
  ctx.fillStyle = '#040810';
  ctx.fillRect(0, 0, W, H);

  // Ocean region (most of the space)
  const oceanGrad = ctx.createLinearGradient(0, 80, 0, H);
  oceanGrad.addColorStop(0, '#0a3a6b');
  oceanGrad.addColorStop(1, '#0a1a30');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 80, W, H - 80);

  // Generate spatially variable heat flux (sinusoidal + noise)
  const heatFlux = [];
  const iceBase = [];
  for (let x = 0; x < W; x++) {
    const flux = 0.5 + 0.3 * Math.sin(x * 0.025) + 0.15 * Math.sin(x * 0.067 + 1)
      + 0.1 * Math.sin(x * 0.15 + 2);
    heatFlux.push(flux);

    // Ice base responds inversely to heat flux (more heat = thinner ice = deeper base)
    const baseY = 40 + flux * 50;
    iceBase.push(baseY);
  }

  // Draw ice shell with variable thickness
  const iceGrad = ctx.createLinearGradient(0, 0, 0, 90);
  iceGrad.addColorStop(0, '#c0dce8');
  iceGrad.addColorStop(0.5, '#80b0c8');
  iceGrad.addColorStop(1, '#4080a0');
  ctx.fillStyle = iceGrad;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  for (let x = 0; x < W; x++) {
    ctx.lineTo(x, iceBase[x]);
  }
  ctx.lineTo(W, 0);
  ctx.closePath();
  ctx.fill();

  // Ice base boundary
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(0, 212, 255, 0.6)';
  ctx.lineWidth = 2;
  for (let x = 0; x < W; x++) {
    if (x === 0) ctx.moveTo(x, iceBase[x]);
    else ctx.lineTo(x, iceBase[x]);
  }
  ctx.stroke();

  // Convective plumes in ocean
  const plumeCenters = [W * 0.15, W * 0.35, W * 0.55, W * 0.75, W * 0.9];
  plumeCenters.forEach((cx, i) => {
    const strength = heatFlux[Math.round(cx)] || 0.5;

    // Rising plume
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, ${80 + strength * 100}, 40, ${0.15 + strength * 0.25})`;
    ctx.lineWidth = 8 + strength * 15;
    ctx.moveTo(cx, H - 20);
    ctx.quadraticCurveTo(cx + (Math.random() - 0.5) * 20, H * 0.5, cx, iceBase[Math.round(cx)] + 10);
    ctx.stroke();

    // Plume particles
    for (let j = 0; j < 6; j++) {
      const py = iceBase[Math.round(cx)] + 15 + Math.random() * (H - iceBase[Math.round(cx)] - 40);
      const px = cx + (Math.random() - 0.5) * (12 + strength * 10);
      ctx.beginPath();
      ctx.arc(px, py, 1.5 + Math.random(), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 150, 60, ${0.3 + strength * 0.4})`;
      ctx.fill();
    }
  });

  // Heat flux bar at bottom
  const barH = 15;
  const barY = H - barH;
  for (let x = 0; x < W; x++) {
    const flux = heatFlux[x];
    const r = Math.round(255 * flux);
    const g = Math.round(80 * (1 - flux));
    const b = Math.round(30 * (1 - flux));
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;
    ctx.fillRect(x, barY, 1, barH);
  }

  // Labels
  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(60, 100, 120, 0.9)';
  ctx.fillText('ICE SHELL (variable thickness)', 10, 22);

  ctx.fillStyle = 'rgba(100, 200, 255, 0.7)';
  ctx.fillText('OCEAN (convecting)', 10, 120);

  ctx.fillStyle = 'rgba(255, 200, 100, 0.7)';
  ctx.fillText('← Ocean Heat Flux (q_ocean) →', W / 2 - 100, H - 3);

  // Annotations
  // Find max and min ice thickness points
  let minBase = Infinity, maxBase = -Infinity, minX = 0, maxX = 0;
  iceBase.forEach((y, x) => {
    if (y < minBase) { minBase = y; minX = x; }
    if (y > maxBase) { maxBase = y; maxX = x; }
  });

  ctx.font = '9px "Inter", sans-serif';
  ctx.fillStyle = 'rgba(100, 255, 150, 0.7)';
  ctx.fillText('▼ thin (melting)', maxX - 30, maxBase + 14);

  ctx.fillStyle = 'rgba(180, 220, 255, 0.7)';
  ctx.fillText('▲ thick (freezing)', minX - 35, minBase + 14);
}
