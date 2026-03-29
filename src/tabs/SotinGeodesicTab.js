import katex from 'katex';

export function renderSotinGeodesicTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Geodesic Mapping Investigations</h2>
      <p class="tab-subtitle">
        Europa Clipper's mission will heavily rely on geodesic mapping to determine the exact 
        dimensions of the moon's tidal flexing. We can measure both gravity anomalies ($k_2$) 
        and the physical surface deformation ($h_2$).
      </p>
      <div class="paper-citation">
        📄 <a href="https://doi.org/10.1007/s11214-025-01250-x" target="_blank" rel="noopener">
          Sotin, C., et al. (2026). Geodetic Investigations of the Europa Clipper Mission. <em>Space Sci. Rev.</em>, 222, 17.
        </a>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🌊</span> The Free-Air Gravity Anomaly</div>
        <p style="font-size:12px; color:var(--text-secondary); margin-bottom:12px;">
          As Europa is pushed and pulled by Jupiter's massive gravity, its ocean sloshes around, bulging outward. 
          This movement of mass changes the local gravity field that the Europa Clipper spacecraft detects as it flies by.
        </p>
        <div class="equation-block" id="eq-sotin-1"></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">📡</span> Radar & Altimetry ($h_2$)</div>
        <p style="font-size:12px; color:var(--text-secondary); margin-bottom:12px;">
          While gravity tells us about the mass underneath, radar altimeters (like REASON) actually measure the 
          physical rise and fall of the ice shell. This is defined by the Love number $h_2$, which dictates the radial deformation.
        </p>
        <div class="equation-block" id="eq-sotin-2"></div>
      </div>
    </div>

    <div class="card" style="margin-top:20px;">
      <div class="card-title"><span class="icon">✈️</span> Doppler Shift Flyby Technique</div>
      <p style="font-size:13px; color:var(--text-secondary); line-height:1.7;">
        By transmitting a continuous radio wave from Earth to Europa Clipper and bouncing it back, we can measure microscopic 
        changes in the spacecraft's velocity via the Doppler effect. These velocity changes map directly to variations in Europa's gravity field, 
        giving us a high-resolution map of the ocean's interior mass distribution without ever penetrating the ice!
      </p>
    </div>
  `;

  document.getElementById('eq-sotin-1').innerHTML = `
    <div class="equation-label" style="font-size:10px;">Gravity Anomaly ($\Delta g$)</div>
    ${katex.renderToString('\\Delta g = \\gamma \\left( C_{20} P_{20}(\\cos\\theta) + C_{22} P_{22}(\\cos\\theta)\\cos(2\\lambda) \\right)', { displayMode: true, throwOnError: false })}
  `;

  document.getElementById('eq-sotin-2').innerHTML = `
    <div class="equation-label" style="font-size:10px;">Radial Surface Deformation</div>
    ${katex.renderToString('u_r = h_2 \\frac{V_{tidal}}{g}', { displayMode: true, throwOnError: false })}
  `;
}
