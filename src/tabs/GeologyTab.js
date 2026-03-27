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
}
