import katex from 'katex';

export function renderAstrobiologyTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Astrobiology & Organic Synthesis</h2>
      <p class="tab-subtitle">
        Europa's global subsurface ocean is considered one of the most promising locations for finding extraterrestrial life. 
        Habitability relies on the convergence of liquid water, essential elements, and chemical energy gradients.
      </p>
    </div>

    <div class="grid-2">
      <!-- Left Column: Content -->
      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">🦠</span> The Redox Energy Gradient</div>
          <p style="font-size:13px; color:var(--text-secondary); line-height:1.7; margin-bottom:12px;">
            Life on Earth relies heavily on oxidation-reduction (redox) reactions to generate ATP. For Europa's ocean to be habitable, a steady supply of oxidants and reductants is crucial.
          </p>
          <ul style="font-size:13px; color:var(--text-secondary); line-height:1.8; margin-left:20px;">
            <li><strong style="color:var(--accent-primary)">Top-Down Oxidants:</strong> Jupiter's intense radiation belt bombards Europa's surface, radiolytically processing water ice into $O_2$, $H_2O_2$, and sulfates. Conveyance to the ocean is driven by surface subsumption.</li>
            <li><strong style="color:var(--accent-secondary)">Bottom-Up Reductants:</strong> Water interacting with the rocky silicate mantle at the ocean floor can undergo serpentinization, releasing $H_2$, $CH_4$, and other reduced species.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">🔬</span> Target Clipper Investigations</div>
          <p style="font-size:13px; color:var(--text-secondary); line-height:1.7; margin-bottom:10px;">
            Upcoming missions will search for key biosignatures and preconditions for life without directly sampling the ocean volume.
          </p>
          <div class="data-grid">
            <div class="data-item">
              <div class="label">SUDA</div>
              <div class="value" style="font-size:14px; font-family:var(--font-body); color:var(--text-primary)">Analyzes ejecta chemistry</div>
            </div>
            <div class="data-item">
              <div class="label">MASPEX</div>
              <div class="value" style="font-size:14px; font-family:var(--font-body); color:var(--text-primary)">Samples exhaled gases</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: OOM Energy Flux -->
      <div>
        <div class="card">
          <div class="card-title"><span class="icon">⚡</span> OOM Analysis: Oxygen Flux</div>
          <div class="context-block">
            <h4>Can Europa's surface oxidants sustain a biosphere?</h4>
            <p>
              We can estimate the mass flux of $O_2$ delivered to the ocean.
              Assume a radiolytic oxygen production rate of $P_{O2} \\approx 10^{10} \\text{ mol/yr}$, and a delivery efficiency $f \\approx 0.1$ via subsumption.
            </p>
          </div>

          <div class="equation-block" id="eq-o2-flux"></div>
          
          <p style="font-size:13px; color:var(--text-secondary); margin-top:15px; line-height:1.6;">
            If we assume microbial life requires $\\approx 10^{-13}$ W/cell, this chemical energy flux 
            could hypothetically sustain large populations, comparable to Earth's deep ocean biomass, providing a compelling theoretical basis for habitability.
          </p>
        </div>
      </div>
    </div>
  `;

  document.getElementById('eq-o2-flux').innerHTML = `
    <div class="equation-label">O₂ Delivery Rate</div>
    ${katex.renderToString(
      '\\Phi_{O2} = P_{O2} \\cdot f \\approx 10^{9} \\text{ mol/yr}',
      { displayMode: true, throwOnError: false }
    )}
  `;
}
