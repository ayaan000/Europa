import katex from 'katex';

export function renderAstrobiologyTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Astrobiology & Organic Synthesis</h2>
      <p class="tab-subtitle">
        Habitability relies on the convergence of liquid water, essential elements, and chemical energy gradients. Use the interactive calculator below to explore radiolytic preservation depths.
      </p>
    </div>

    <div class="grid-2">
      <!-- Left Column: Content -->
      <div style="display:flex; flex-direction:column; gap:20px;">
        <div class="card">
          <div class="card-title"><span class="icon">🌊</span> Subsurface Hydrothermal Vents</div>
          <p style="font-size:13px; color:var(--text-secondary); line-height:1.6; margin-bottom:10px;">
            The engine of Europa's potential biosphere lies at the seafloor. Tidal flexing dissipates heat into the rocky mantle, driving water through silicates to power <strong>Hydrothermal Vents (Black/White Smokers)</strong>.
          </p>
          <ul style="font-size:13px; color:var(--text-secondary); line-height:1.6; padding-left:20px;">
            <li><strong style="color:var(--accent-secondary)">Serpentinization:</strong> Water reacting with olivine crust produces copious amounts of $H_2$, $CH_4$, and heat—a primary energy source for chemosynthetic microbial life.</li>
            <li><strong style="color:var(--accent-primary)">Redox Gradients:</strong> Mixing highly reduced vent fluids with heavily oxidized downwelling meltwater (delivered via chaotic terrain) creates the voltage gradients necessary for biological metabolism.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">🧬</span> Origins of Organic Matter</div>
          <p style="font-size:13px; color:var(--text-secondary); line-height:1.6; margin-bottom:10px;">
            Liquid water and energy are insufficient alone; life requires a carbon framework. Europa's organic inventory is theorized to have a dual origin:
          </p>
          <ul style="font-size:13px; color:var(--text-secondary); line-height:1.6; padding-left:20px;">
            <li><strong>Exogenous Delivery:</strong> Billions of years of cometary and meteoritic impacts steadily deposit prebiotic organic molecules (like amino acids) onto the ice shell.</li>
            <li><strong>Endogenous Synthesis:</strong> High-pressure Fischer-Tropsch type reactions deep at the core-ocean interface can assemble dissolved $CO_2$ and $H_2$ into complex hydrocarbons autonomously.</li>
          </ul>
        </div>

        <div class="card" style="border-color:var(--accent-green); box-shadow:0 0 20px rgba(0,255,100,0.1);">
          <div class="card-title" style="color:var(--accent-green);"><span class="icon">🌍</span> Implications of a Second Genesis</div>
          <p style="font-size:13px; color:var(--text-secondary); line-height:1.6;">
            If we verify the existence of life on Europa, it would represent a <em>Second Genesis</em>—an independent origin of life entirely separate from Earth. If life arose twice in just one solar system, it statistically implies that the universe is teeming with biological complexity. It redefines life from a fragile miracle to a universal thermodynamic imperative.
          </p>
        </div>
      </div>

      <!-- Right Column: Interactive Radiation Profile & Big Questions -->
      <div style="display:flex; flex-direction:column; gap:20px;">
        <div class="card" style="border-color:#ff00ff; box-shadow:0 0 20px rgba(255,0,255,0.1);">
          <div class="card-title" style="color:#ff00ff;"><span class="icon">🌌</span> The Ultimate Questions</div>
          <ul style="font-size:14px; font-family:var(--font-heading); color:var(--text-primary); line-height:1.5; padding-left:20px;">
            <li style="margin-bottom:8px;">Are we alone in the dark, or is the subsurface cosmos inhabited?</li>
            <li style="margin-bottom:8px;">Can life persist and thrive indefinitely without photosynthesis?</li>
            <li style="margin-bottom:8px;">What are the true theoretical bounds of planetary habitability?</li>
            <li>Does life inevitably emerge wherever water, organics, and energy gradients intersect?</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">☢️</span> Radiolytic Yield & Preservation</div>
          <div class="context-block">
            <h4>How deep must organics be to survive?</h4>
            <p>
              High-energy electrons from Jupiter obliterate complex organics on the absolute surface. Radiation dose decays exponentially with depth:
            </p>
            <div class="equation-block" id="eq-radiation" style="padding:5px;"></div>
          </div>

          <div class="slider-container" style="margin:20px 0;">
            <label>Sampling Depth ($z$) <span class="slider-value" id="val-depth">10 cm</span></label>
            <input type="range" id="slider-depth" min="0" max="200" value="10" step="1" />
          </div>

          <div class="data-grid">
            <div class="data-item">
              <div class="label">Accumulated Dose (10 Myr)</div>
              <div class="value" id="out-dose">-- <span class="unit">eV/molecule</span></div>
            </div>
            <div class="data-item">
              <div class="label">Organic Preservation</div>
              <div class="value" id="out-survival">--</div>
            </div>
          </div>
          
          <p style="font-size:12px; color:var(--text-muted); margin-top:15px; line-height:1.6;">
            Assuming a surface dose $D_0 \\approx 100$ eV/molecule over 10 Myr, an e-folding depth $z_e \\approx 20$ cm for high-energy electrons.
            A dose $>1$ eV/mol typically destroys amino acids. Find optimal digging depths to ensure future landers retrieve intact biosignatures.
          </p>
        </div>
      </div>
    </div>
  `;

  document.getElementById('eq-radiation').innerHTML = `
    ${katex.renderToString(
      'D(z) = D_0 e^{-z / z_e}',
      { displayMode: true, throwOnError: false }
    )}
  `;

  const sDepth = document.getElementById('slider-depth');
  function updatePhysics() {
    const z = parseFloat(sDepth.value);
    document.getElementById('val-depth').textContent = z + ' cm';

    const D0 = 100; // eV/mol
    const ze = 20; // cm
    const dose = D0 * Math.exp(-z / ze);

    document.getElementById('out-dose').textContent = dose.toExponential(1);

    const survivalEl = document.getElementById('out-survival');
    if (dose > 1.0) {
      survivalEl.textContent = 'Destroyed';
      survivalEl.style.color = '#ff0055'; // Neaon Pink
      survivalEl.parentElement.style.border = '1px solid rgba(255,0,85,0.4)';
    } else if (dose > 0.1) {
      survivalEl.textContent = 'Degraded';
      survivalEl.style.color = '#ffea00'; // Laser Lemon
      survivalEl.parentElement.style.border = '1px solid rgba(255,234,0,0.4)';
    } else {
      survivalEl.textContent = 'Pristine';
      survivalEl.style.color = '#00ffff'; // Electric Cyan
      survivalEl.parentElement.style.border = '1px solid rgba(0,255,255,0.5)';
      survivalEl.parentElement.style.boxShadow = 'inset 0 0 15px rgba(0,255,255,0.2)';
    }
  }

  sDepth.addEventListener('input', updatePhysics);
  updatePhysics();
}
