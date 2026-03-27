import katex from 'katex';
import { createEuropaGlobe } from '../three/EuropaGlobe.js';

export function renderOverviewTab(container) {
  // Explanatory text for each globe mode
  const modeContexts = {
    surface: {
      title: "Surface Mapping",
      text: "Europa's surface is one of the smoothest in the solar system, composed mostly of water ice. The red-brown streaks are 'lineae' — cracks in the ice filled with salts (like magnesium sulfate) irradiated by Jupiter's magnetic field."
    },
    internal: {
      title: "Internal Layering",
      text: "Like Earth, Europa is fully differentiated. A metallic iron core is surrounded by a silicate rock mantle, topped by a global liquid water ocean (60-150 km deep), and sealed beneath an outer shell of solid ice."
    },
    convection: {
      title: "Ocean Convection",
      text: "Heat escaping from the silicate mantle drives hydrothermal plumes up through the ocean. These turbulent convective currents apply concentrated heat fluxes to the base of the ice shell, potentially thinning it over geological time."
    },
    magnetic: {
      title: "Induced Magnetic Field",
      text: "As Jupiter's powerful, rotating magnetic field sweeps past Europa, it induces electrical currents within the moon. The fact that an induced counter-field exists is our strongest evidence for a global, conductive, salty ocean."
    },
    tidal: {
      title: "Tidal Stress",
      text: "Europa's eccentric orbit causes varying gravitational pulls from Jupiter. This tidal flexing generates immense frictional heat within the interior and stresses the ice shell, fracturing it into the chaotic terrain we observe."
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
        <div class="three-container" id="globe-container" style="height:400px; position:relative;">
          <div class="three-overlay" style="top:10px; left:10px; right:10px;">
            <div class="toggle-group" id="globe-toggle" style="justify-content:center; flex-wrap:wrap; background:rgba(0,0,0,0.5); backdrop-filter:blur(4px); padding:4px; border-radius:8px;">
              <button class="toggle-option active" data-mode="surface">Surface</button>
              <button class="toggle-option" data-mode="internal">Layers</button>
              <button class="toggle-option" data-mode="convection">Convection</button>
              <button class="toggle-option" data-mode="magnetic">B-Field</button>
              <button class="toggle-option" data-mode="tidal">Tidal Stress</button>
            </div>
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
        
        <div style="border-top:1px solid var(--border-subtle); margin-top:15px; padding-top:15px;">
          <div class="card-title" style="font-size:12px;"><span class="icon">☀️</span> System Albedo & Reflectivity</div>
          <p style="font-size:11px; color:var(--text-muted); margin-bottom:10px;">
            Bond Albedo ($\\alpha$) measures the fraction of incident electromagnetic radiation reflected by a body. 
            Europa's fresh ice makes it one of the brightest objects in the solar system.
          </p>
          
          <!-- Interactive Albedo visualization -->
          <div style="position:relative; height:24px; background:linear-gradient(to right, #000000, #444, #888, #ccc, #ffffff); border-radius:12px; margin-top:15px;">
            <div style="position:absolute; left: 12%; top:-20px; font-size:10px; text-align:center; transform:translateX(-50%); color:#888;">Moon<br>0.12</div>
            <div style="position:absolute; left: 12%; top:0; height:100%; width:2px; background:#fff; opacity:0.3;"></div>

            <div style="position:absolute; left: 30%; top:28px; font-size:10px; text-align:center; transform:translateX(-50%); color:#888;">Earth<br>0.30</div>
            <div style="position:absolute; left: 30%; top:0; height:100%; width:2px; background:#fff; opacity:0.3;"></div>

            <div style="position:absolute; left: 67%; top:-25px; font-size:11px; text-align:center; transform:translateX(-50%); color:#00d4ff; font-weight:bold;">Europa<br>0.67</div>
            <div style="position:absolute; left: 67%; top:0; height:100%; width:3px; background:#00d4ff; box-shadow:0 0 8px #00d4ff;"></div>

            <div style="position:absolute; left: 81%; top:28px; font-size:10px; text-align:center; transform:translateX(-50%); color:#888;">Enceladus<br>0.81</div>
            <div style="position:absolute; left: 81%; top:0; height:100%; width:2px; background:#fff; opacity:0.3;"></div>
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

  toggleGroup.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-option');
    if (!btn) return;
    
    // Update active button
    toggleGroup.querySelectorAll('.toggle-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Change 3D mode
    const mode = btn.dataset.mode;
    globe.setMode(mode);

    // Update context text
    titleEl.textContent = modeContexts[mode].title;
    textEl.textContent = modeContexts[mode].text;
  });

  return () => globe.dispose();
}
