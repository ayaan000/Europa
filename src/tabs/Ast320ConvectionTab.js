import katex from 'katex';

export function renderAst320ConvectionTab(container) {
  let logRa = 6.0;

  container.innerHTML = `
    <div class="tab-header">
      <h2>Convection in the Upper Layers</h2>
      <p class="tab-subtitle">
        According to scaling laws, if the ice shell grows thick enough, conductive heat transfer is no longer 
        sufficient to transport tidal heat. The solid ice becomes ductile and begins to convect, completely 
        transforming the thermal profile of the moon.
      </p>
      <div class="paper-citation">
        📄 <a href="https://doi.org/10.1016/j.icarus.2025.116875" target="_blank" rel="noopener">
          Pappalardo, R. T., et al. (2026). Convection in the subsurface ocean of icy moons and response of the upper ice layer. <em>Icarus</em>, 446, 16875.
        </a>
      </div>
    </div>

    <!-- Interactive Solid-State Convection Visualizer -->
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><span class="icon">🌡️</span> Solid-State Convection Threshold (AST320)</div>
      <p style="font-size:12px; color:var(--text-secondary); margin-bottom:15px;">
        Adjust the thermal gradient parameters ($h$, $\Delta T$, $\nu$) to calculate the localized Rayleigh Number ($Ra$). 
        When $Ra$ exceeds the critical value ($Ra_c \approx 10^3$), plumes of warm ductile ice rise while cold brittle ice sinks.
      </p>

      <div class="grid-2" style="align-items: center;">
        <div>
           <div class="slider-container" style="max-width:300px; margin-bottom:15px;">
             <label>Ice Shell Activating Thickness ($h$) <span class="slider-value" id="ast-val-thick" style="color:#00ffff;">20 km</span></label>
             <input type="range" id="ast-slider-thick" min="5" max="50" value="20" step="1" />
           </div>
           
           <div class="data-grid" style="grid-template-columns: 1fr;">
              <div class="data-item">
                 <div class="label">Calculated Rayleigh Number ($Ra$)</div>
                 <div class="value" id="ast-val-ra" style="color:var(--accent-primary);">--</div>
              </div>
           </div>
        </div>
        
        <div style="padding:10px; background:rgba(0,0,0,0.3); border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
           <h4 id="ast-convection-status" style="margin:0 0 10px 0; color:#00ffff; text-align:center;">Conductive Regime</h4>
           <div style="height:100px; display:flex; align-items:flex-end; gap:5px; justify-content:center;" id="ast-plumes-container">
               <!-- Animated plumes go here via JS -->
           </div>
        </div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">📐</span> AST320 Physics Formulas</div>
        <p style="font-size:11px; color:var(--text-secondary); margin-bottom:10px;">
          From the AST320 course notes, the transition from pure conduction to solid-state convection is governed by the Rayleigh number and the Nusselt number.
        </p>
        <div class="equation-block" id="eq-ast-ra"></div>
        <div class="equation-block" id="eq-ast-nu" style="margin-top:10px;"></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">🧊</span> Stagnant Lid Convection</div>
        <p style="font-size:12px; color:var(--text-secondary); line-height:1.7;">
          The outermost layer of Europa's ice is too cold and brittle to participate in convection—it forms a "stagnant lid."
          Below this lid, the warmer, ductile ice undergoes Rayleigh-Bénard-like convection.
        </p>
        <p style="font-size:12px; color:var(--text-secondary); line-height:1.7; margin-top:10px;">
          This implies that the <strong>temperature profile is not linear</strong>. It drops rapidly through the stagnant lid, but remains nearly isothermal (constant temperature) throughout the convecting sublayer due to efficient mixing.
        </p>
      </div>
    </div>
  `;

  document.getElementById('eq-ast-ra').innerHTML = `
    <div class="equation-label" style="font-size:10px;">Rayleigh Number</div>
    ${katex.renderToString('Ra = \\frac{\\rho g \\alpha \\Delta T h^3}{\\kappa \\nu}', { displayMode: true, throwOnError: false })}
  `;

  document.getElementById('eq-ast-nu').innerHTML = `
    <div class="equation-label" style="font-size:10px;">Nusselt Number Scaling</div>
    ${katex.renderToString('Nu \\sim \\left( \\frac{Ra}{Ra_c} \\right)^{1/3}', { displayMode: true, throwOnError: false })}
  `;

  // Interaction logic
  const slider = document.getElementById('ast-slider-thick');
  const valThick = document.getElementById('ast-val-thick');
  const valRa = document.getElementById('ast-val-ra');
  const statusEl = document.getElementById('ast-convection-status');
  const plumeContainer = document.getElementById('ast-plumes-container');

  function updatePhysics() {
    const h = parseInt(slider.value);
    valThick.textContent = h + ' km';
    
    // Simplistic scaling for interactive toy model: Ra scales with h^3
    // Let's assume h=15km -> Ra = 1000 (critical threshold)
    const rac = 1000;
    const currentRa = Math.floor(rac * Math.pow(h / 15, 3));
    valRa.textContent = currentRa >= 10000 ? currentRa.toExponential(2) : currentRa;

    if (currentRa >= rac) {
        statusEl.textContent = "Convective Regime (Ductile Ice)";
        statusEl.style.color = "#ff00ff";
        
        const plumes = Math.min(8, Math.floor(currentRa / 2000) + 1);
        plumeContainer.innerHTML = '';
        for(let i=0; i<plumes; i++){
            const p = document.createElement('div');
            p.style.width = '20px';
            p.style.background = 'linear-gradient(to top, rgba(255,0,255,0.8), rgba(255,0,255,0))';
            p.style.height = (Math.random()*60 + 40) + '%';
            p.style.borderRadius = '10px';
            p.style.animation = `pulse ${1 + Math.random()}s infinite alternate`;
            plumeContainer.appendChild(p);
        }
    } else {
        statusEl.textContent = "Conductive Regime (Stiff Ice)";
        statusEl.style.color = "#00ffff";
        plumeContainer.innerHTML = '<div style="width:100%; height:10%; background:rgba(0,255,255,0.5);"></div>';
    }
  }

  // Inject CSS keyframes
  if (!document.getElementById('ast-pulse-anim')) {
      const style = document.createElement('style');
      style.id = 'ast-pulse-anim';
      style.textContent = `
         @keyframes pulse {
            0% { transform: scaleY(0.8); opacity: 0.5; }
            100% { transform: scaleY(1.1); opacity: 1; }
         }
      `;
      document.head.appendChild(style);
  }

  slider.addEventListener('input', updatePhysics);
  setTimeout(updatePhysics, 0);
}
