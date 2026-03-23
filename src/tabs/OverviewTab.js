import katex from 'katex';
import { createEuropaGlobe } from '../three/EuropaGlobe.js';

export function renderOverviewTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Overview & Astrophysical Constants</h2>
      <p class="tab-subtitle">
        General properties of icy moons in the outer solar system. These bodies maintain subsurface oceans 
        beneath ice shells, kept liquid by tidal dissipation and radiogenic heating — far outside the 
        traditional habitable zone.
      </p>
    </div>

    <div class="grid-2">
      <div>
        <div class="card" style="margin-bottom: 20px;">
          <div class="card-title"><span class="icon">🌐</span> 3D Icy Moon Model</div>
          <div class="three-container" id="globe-container">
            <div class="three-overlay">
              <div class="toggle-group" id="globe-toggle">
                <button class="toggle-option active" data-mode="surface">Surface Mapping</button>
                <button class="toggle-option" data-mode="internal">Internal Layers</button>
              </div>
            </div>
          </div>
          <p style="font-size:11px; color:var(--text-muted); margin-top:8px; text-align:center;">
            Drag to rotate · Scroll to zoom · Procedural texture inspired by Galileo SSI / Voyager imagery
          </p>
        </div>
      </div>

      <div>
        <div class="card" style="margin-bottom: 20px;">
          <div class="card-title"><span class="icon">📊</span> Icy Moon Physical Parameters</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-bottom:14px;">
            Representative values for a Europa-class icy moon. These set the scale for interior modelling 
            and are inputs to hydrostatic equilibrium calculations.
          </p>
          <div class="data-grid" id="data-panel"></div>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">⚖️</span> Hydrostatic Equilibrium</div>
          <div class="equation-block" id="eq-hydrostatic"></div>
          <div id="eq-hydrostatic-explanation"></div>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🎓</span> AST320 — Course Concept: Layered Density</div>
      <div class="context-block">
        <h4>Why Hydrostatic Equilibrium Matters for Icy Moons</h4>
        <p>
          An icy moon like Europa is a gravitationally bound, differentiated body — meaning heavier materials 
          (iron, silicates) have sunk to the centre, leaving lighter materials (water ice, liquid water) on 
          top. Each shell satisfies hydrostatic equilibrium: the weight of overlying material is balanced by 
          the pressure gradient. This yields a density profile ρ(r) that increases inward, and a pressure 
          profile P(r) that increases from ~0 at the surface to ~200–300 MPa at the ice-ocean boundary, 
          then to ~2 GPa at the core.
        </p>
        <p style="margin-top:10px;">
          <strong>Dimensional analysis exercise:</strong> Using g ≈ 1.3 m/s² and ρ<sub>ice</sub> ≈ 920 kg/m³, 
          the pressure at depth d in the ice shell is approximately P ≈ ρgd. At d = 25 km, 
          P ≈ 920 × 1.3 × 25000 ≈ 30 MPa — consistent with the ice-ocean transition.
        </p>
      </div>
    </div>
  `;

  // Render data panel
  const params = [
    { label: 'Mean Radius', value: '1560.8', unit: 'km', symbol: 'R' },
    { label: 'Surface Gravity', value: '1.314', unit: 'm/s²', symbol: 'g' },
    { label: 'Mean Density', value: '3.013', unit: 'g/cm³', symbol: 'ρ' },
    { label: 'Bond Albedo', value: '0.67', unit: '', symbol: 'α' },
    { label: 'Orbital Period', value: '3.551', unit: 'days', symbol: 'T' },
    { label: 'Surface Temp', value: '~100', unit: 'K', symbol: 'T_s' },
    { label: 'Tidal Heating', value: '~10¹²', unit: 'W', symbol: 'Q̇' },
    { label: 'Ocean Depth (est.)', value: '60–150', unit: 'km', symbol: 'd' },
  ];

  const dataPanel = document.getElementById('data-panel');
  dataPanel.innerHTML = params.map(p => `
    <div class="data-item">
      <div class="label">${p.label} (${p.symbol})</div>
      <div class="value">${p.value}<span class="unit">${p.unit}</span></div>
    </div>
  `).join('');

  // Render equation
  const eqContainer = document.getElementById('eq-hydrostatic');
  eqContainer.innerHTML = `
    <div class="equation-label">Hydrostatic Equilibrium</div>
    ${katex.renderToString('\\frac{dP}{dr} = -g(r)\\,\\rho(r)', { displayMode: true, throwOnError: false })}
  `;

  const explContainer = document.getElementById('eq-hydrostatic-explanation');
  explContainer.innerHTML = `
    <div class="equation-explanation">
      <strong>Derivation:</strong> Consider a thin shell at radius r with thickness dr. 
      The weight per unit area of this shell is ρ(r) · g(r) · dr. In equilibrium, this must 
      equal the pressure difference dP across the shell, giving dP/dr = −g(r)ρ(r). 
      Here g(r) = GM(r)/r² where M(r) is the mass enclosed within radius r. 
      For a differentiated icy moon, ρ(r) is piecewise constant across each layer 
      (ice ≈ 0.92, ocean ≈ 1.02, mantle ≈ 3.5, core ≈ 5.5 g/cm³).
    </div>
  `;

  // Initialize 3D globe
  const globeContainer = document.getElementById('globe-container');
  const globe = createEuropaGlobe(globeContainer, 'surface');

  // Toggle handler
  const toggleGroup = document.getElementById('globe-toggle');
  toggleGroup.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-option');
    if (!btn) return;
    toggleGroup.querySelectorAll('.toggle-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    globe.setMode(btn.dataset.mode);
  });

  // Return cleanup function
  return () => globe.dispose();
}
