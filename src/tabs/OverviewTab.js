import katex from 'katex';
import { createEuropaGlobe } from '../three/EuropaGlobe.js';

export function renderOverviewTab(container) {
  // Explanatory text for each globe mode
  const modeContexts = {
    surface: {
      title: "Surface Mapping",
      text: "Europa's surface is one of the smoothest in the solar system, composed mostly of water ice. The red-brown streaks are 'lineae' — cracks in the ice filled with salts (like magnesium sulfate) irradiated by Jupiter's magnetic field.",
      physicsTitle: "Ice Shell Stress Analysis",
      physicsDesc: "Tidal and rotational stresses dictate the geometry of surface fracturing. The principal tensile stress generates propagating cycloidal cracks.",
      equation: "\\sigma_{tidal} = \\frac{3}{2} \\mu \\left( \\frac{R}{a} \\right)^3 e"
    },
    internal: {
      title: "Internal Layering",
      text: "Like Earth, Europa is fully differentiated. A metallic iron core is surrounded by a silicate rock mantle, topped by a global liquid water ocean (60-150 km deep), and sealed beneath an outer shell of solid ice.",
      physicsTitle: "Hydrostatic Pressure Gradient",
      physicsDesc: "The internal structure is maintained by hydrostatic equilibrium, balancing gravitational compression against the material's bulk modulus.",
      equation: "\\frac{dP}{dr} = -\\rho(r) g(r)"
    },
    magnetic: {
      title: "Induced Magnetic Field",
      text: "As Jupiter's powerful, rotating magnetic field sweeps past Europa, it induces electrical currents within the moon. The fact that an induced counter-field exists is our strongest evidence for a global, conductive, salty ocean.",
      physicsTitle: "Magnetic Induction & Skin Depth",
      physicsDesc: "The time-varying Jovian field penetrates the ocean, inducing opposed eddy currents. The skin depth δ dictates how deep the field penetrates the conductive fluid.",
      equation: "\\delta = \\sqrt{\\frac{2}{\\mu_0 \\sigma \\omega}} \\approx 100 \\text{ km}"
    },
    tidal: {
      title: "Tidal Stress",
      text: "Europa's eccentric orbit causes varying gravitational pulls from Jupiter. This tidal flexing generates immense frictional heat within the interior and stresses the ice shell, fracturing it into the chaotic terrain we observe. Note the gravity arrows pointing towards the Jovian bodies.",
      physicsTitle: "Tidal Heating Rate",
      physicsDesc: "The power dissipated by tidal friction is heavily dependent on eccentricity e and semi-major axis a. This heating sustains the liquid ocean.",
      equation: "\\dot{E}_{tidal} = \\frac{21}{2} \\frac{k_2}{Q} \\frac{G M_J^2 R^5 n e^2}{a^6}"
    },
    mineral: {
      title: "Resource & Mineral Concentration",
      text: "Spectroscopic data hints at non-ice materials on the surface. Yellow indicates hydrated salts (magnesium sulfate) bubbling up from the ocean. Magenta traces exogenic sulfuric acid from Io's plasma torus on the trailing hemisphere. Cyan marks theoretical trace organics.",
      physicsTitle: "Radiolytic Processing",
      physicsDesc: "Energetic electrons and ions from Jupiter bombard the surface ice, dissociating water molecules into reactive oxidants that can eventually mix into the ocean.",
      equation: "H_2O \\xrightarrow{e^-, \\, \\gamma} \\text{Radiolytic Products} \\, (O_2, H_2O_2)"
    },
    convection: {
      title: "Ocean Convection (Pagnoscin et al. 2026)",
      text: "Intermediate-scale turbulent convection in Europa's ocean generates spatially heterogeneous basal heat fluxes. This dictates the thickness variations of the overlying ice shell, creating the chaotic terrain features we observe.",
      physicsTitle: "Boussinesq Approximation",
      physicsDesc: "The ocean's buoyancy-driven flow is modeled using the Boussinesq approximation, where density variations are only considered in the buoyancy term.",
      equation: "\\frac{\\partial \\vec{u}}{\\partial t} + (\\vec{u} \\cdot \\nabla)\\vec{u} = -\\nabla p + \\text{Ra}\\,\\text{Pr}\\,T\\,\\hat{z} + \\text{Pr}\\,\\nabla^2 \\vec{u}"
    }
  };

  container.innerHTML = `
    <div class="tab-header">
      <h2>Overview & Astrophysical Constants</h2>
      <p class="tab-subtitle">
        Europa is a prime target for astrobiology. Beneath its heavily fractured ice shell lies a global 
        saltwater ocean containing twice the liquid water of all Earth's oceans combined.
      </p>
    </div>

    <!-- Top Half: Globe & Mode Context -->
    <div class="grid-2">
      <div class="card" style="margin-bottom: 20px;">
        <div class="card-title"><span class="icon">🌐</span> 3D Interactive Europa Model</div>
        <div class="three-container" id="globe-container" style="height:600px; position:relative;">
          <div class="three-overlay" style="top:10px; left:10px; right:10px; display:flex; justify-content:space-between; align-items:flex-start;">
            <div class="toggle-group" id="globe-toggle" style="flex-wrap:wrap; background:rgba(0,0,0,0.5); backdrop-filter:blur(4px); padding:4px; border-radius:8px; max-width:60%;">
              <button class="toggle-option active" data-mode="surface">Surface</button>
              <button class="toggle-option" data-mode="internal">Layers</button>
              <button class="toggle-option" data-mode="magnetic">B-Field</button>
              <button class="toggle-option" data-mode="tidal">Tidal Stress</button>
              <button class="toggle-option" data-mode="mineral">Mineral Map</button>
              <button class="toggle-option" data-mode="convection">Convection</button>
            </div>
            
            <div style="display:flex; flex-direction:column; gap:8px;">
              <select id="color-filter" style="background:rgba(0,0,0,0.5); color:var(--text-primary); border:1px solid rgba(255,255,255,0.2); border-radius:6px; padding:6px 10px; font-family:'Space Mono', monospace; font-size:11px; cursor:pointer; backdrop-filter:blur(4px); outline:none;">
                <option value="truecolor">True Color (Default)</option>
                <option value="synthwave">Retro Synthwave</option>
                <option value="infrared">Infrared Thermal</option>
              </select>

              <div style="display:flex; flex-direction:column; gap:4px; background:rgba(0,0,0,0.5); backdrop-filter:blur(4px); padding:6px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.2);">
                <label style="color:var(--text-secondary); font-size:10px; font-family:var(--font-mono); text-transform:uppercase;">Simulation Speed <span id="val-speed" style="color:var(--text-primary); float:right;">1.0x</span></label>
                <input type="range" id="sim-speed" min="0.1" max="50" step="0.1" value="1.0" style="width:120px;" />
              </div>
            </div>
          </div>
          
          <!-- Dynamic Physics Legend -->
          <div id="globe-legend" style="position:absolute; bottom:15px; left:15px; background:rgba(0,0,0,0.65); backdrop-filter:blur(4px); padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.15); display:none; flex-direction:column; gap:6px;">
          </div>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px; text-align:center;">
          Drag to rotate · Scroll to zoom
        </p>
      </div>

      <!-- Detail Card for the currently selected globe mode -->
      <div class="card" style="margin-bottom: 20px; display:flex; flex-direction:column; justify-content:center;">
        <div class="card-title"><span class="icon">🔍</span> Current View Details</div>
        <div id="mode-detail-content" style="padding: 10px 0;">
          <h3 id="mode-title" style="color:var(--text-primary); margin-bottom:10px;">${modeContexts.surface.title}</h3>
          <p id="mode-text" style="color:var(--text-secondary); font-size:14px; line-height:1.6;">
            ${modeContexts.surface.text}
          </p>
        </div>
        
        <div id="mode-physics-container" style="border-top:1px solid var(--border-subtle); margin-top:15px; padding-top:15px;">
          <div class="card-title" style="font-size:12px;" id="physics-title"><span class="icon">⚛️</span> ${modeContexts.surface.physicsTitle}</div>
          <p style="font-size:11px; color:var(--text-muted); margin-bottom:10px;" id="physics-desc">
            ${modeContexts.surface.physicsDesc}
          </p>
          <div class="equation-block" id="physics-equation" style="font-size:14px; padding:10px; min-height:60px; display:flex; align-items:center; justify-content:center;">
          </div>
        </div>
      </div>
    </div>

    <div class="grid-2">
      <!-- Parameters -->
      <div class="card">
        <div class="card-title"><span class="icon">📊</span> Physical Parameters</div>
        <div class="data-grid" id="data-panel" style="grid-template-columns: 1fr 1fr;"></div>
      </div>

      <!-- Hydrostatic Equilibrium -->
      <div class="card">
        <div class="card-title"><span class="icon">⚖️</span> Theoretical Framework: Hydrostatic Equilibrium</div>
        <div class="equation-block" id="eq-hydrostatic"></div>
        <p style="font-size:12px; color:var(--text-secondary); margin-top:12px; line-height:1.5;">
          The weight of overlying material is perfectly balanced by the outward pressure gradient. 
          For the ice shell ($g \\approx 1.3$ m/s², $\\rho \\approx 920$ kg/m³), the pressure at the ocean interface 
          (depth $d$) is approximated by $P \\approx \\rho g d$. At 25 km depth, $P \\approx 30$ MPa. 
          This differential pressure keeps the differentiated layers intact.
        </p>
      </div>
    </div>
  `;

  // Render parameters
  const params = [
    { label: 'Mean Radius', value: '1560.8', unit: 'km' },
    { label: 'Surface Gravity', value: '1.314', unit: 'm/s²' },
    { label: 'Mean Density', value: '3.013', unit: 'g/cm³' },
    { label: 'Bond Albedo', value: '0.67', unit: '' },
    { label: 'Orbital Period', value: '3.551', unit: 'days' },
    { label: 'Surface Temp', value: '~100', unit: 'K' },
  ];

  document.getElementById('data-panel').innerHTML = params.map(p => `
    <div class="data-item">
      <div class="label" style="font-size:10px;">${p.label}</div>
      <div class="value" style="font-size:15px;">${p.value}<span class="unit">${p.unit}</span></div>
    </div>
  `).join('');

  // Render equation
  document.getElementById('eq-hydrostatic').innerHTML = `
    ${katex.renderToString('\\frac{dP}{dr} = -g(r)\\,\\rho(r)', { displayMode: true, throwOnError: false })}
  `;

  // Initialize globe
  const globeContainer = document.getElementById('globe-container');
  const globe = createEuropaGlobe(globeContainer, 'surface');

  // Handle toggles and UI text updates
  const toggleGroup = document.getElementById('globe-toggle');
  const titleEl = document.getElementById('mode-title');
  const textEl = document.getElementById('mode-text');
  const globeLegend = document.getElementById('globe-legend');

  // Initial physics render
  document.getElementById('physics-equation').innerHTML = katex.renderToString(
    modeContexts.surface.equation, { displayMode: true, throwOnError: false }
  );

  toggleGroup.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-option');
    if (!btn) return;
    
    // Update active button
    toggleGroup.querySelectorAll('.toggle-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Change 3D mode
    const mode = btn.dataset.mode;
    globe.setMode(mode);

    // Update Legend
    if (mode === 'magnetic') {
      globeLegend.style.display = 'flex';
      globeLegend.innerHTML = `
        <strong style="font-size:11px; color:#fff; margin-bottom:2px;">B-Field Legend</strong>
        <div style="font-size:10px; color:#aaa; display:flex; align-items:center; gap:6px;"><span style="color:#ffaa00; font-size:12px;">■</span> Jupiter Primary Dipole</div>
        <div style="font-size:10px; color:#aaa; display:flex; align-items:center; gap:6px;"><span style="color:#ff00ff; font-size:12px;">■</span> Europa Induced Field</div>
        <div style="font-size:10px; color:#aaa; display:flex; align-items:center; gap:6px;"><span style="color:#39ff14; font-size:12px;">■</span> Ocean Eddy Currents</div>
      `;
    } else if (mode === 'tidal') {
      globeLegend.style.display = 'flex';
      globeLegend.innerHTML = `
        <strong style="font-size:11px; color:#fff; margin-bottom:2px;">Tidal Stress Legend</strong>
        <div style="font-size:10px; color:#aaa; display:flex; align-items:center; gap:6px;"><span style="color:#ffaa00; font-size:12px;">■</span> Jupiter Primary Pull</div>
        <div style="font-size:10px; color:#aaa; display:flex; align-items:center; gap:6px;"><span style="color:#ffff00; font-size:12px;">■</span> Io Resonance Pull</div>
        <div style="font-size:10px; color:#aaa; display:flex; align-items:center; gap:6px;"><span style="color:#8800ff; font-size:12px;">■</span> Ganymede Resonance Pull</div>
        <div style="font-size:10px; color:#aaa; display:flex; align-items:center; gap:6px;"><span style="color:#ff00aa; font-size:12px;">■</span> High Strain (Bulge Peak)</div>
        <div style="font-size:10px; color:#fcfc00; display:flex; align-items:center; gap:6px;"><b>→</b> Restoring Force Direction</div>
      `;
    } else {
      globeLegend.style.display = 'none';
      globeLegend.innerHTML = '';
    }

    // Update context text
    titleEl.textContent = modeContexts[mode].title;
    textEl.textContent = modeContexts[mode].text;
    
    // Update dynamic physics panel
    document.getElementById('physics-title').innerHTML = '<span class="icon">⚛️</span> ' + modeContexts[mode].physicsTitle;
    document.getElementById('physics-desc').textContent = modeContexts[mode].physicsDesc;
    document.getElementById('physics-equation').innerHTML = katex.renderToString(
      modeContexts[mode].equation, { displayMode: true, throwOnError: false }
    );
  });

  const filterSelect = document.getElementById('color-filter');
  filterSelect.addEventListener('change', (e) => {
    if (globe.setFilter) globe.setFilter(e.target.value);
  });

  const speedSlider = document.getElementById('sim-speed');
  const speedVal = document.getElementById('val-speed');
  speedSlider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    speedVal.textContent = val.toFixed(1) + 'x';
    if (globe.setTimeMultiplier) globe.setTimeMultiplier(val);
  });

  return () => globe.dispose();
}
