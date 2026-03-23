import katex from 'katex';

/**
 * EUROPA CASE STUDY TAB — Steinbrügge et al. (2026)
 * "Geodetic Investigations of the Europa Clipper Mission"
 * Space Science Reviews, 222, 17. DOI: 10.1007/s11214-025-01250-x
 *
 * All data in this tab comes directly from or is derived from this publication.
 */
export function renderGeodeticTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Geodetic Investigations of the Europa Clipper Mission</h2>
      <p class="tab-subtitle">
        The Europa Clipper mission will assess Europa's habitability through geodetic measurements — 
        global shape, rotation, gravity, and tidal deformation. This tab summarises the key science 
        from Steinbrügge et al. (2026), which describes how cross-instrument geodetic data will 
        constrain Europa's ice shell thickness, ocean presence, and interior mass distribution.
      </p>
      <div class="paper-citation">
        📄 <a href="https://doi.org/10.1007/s11214-025-01250-x" target="_blank" rel="noopener">
          Steinbrügge, G. et al. (2026). <em>Space Sci. Rev.</em>, 222, 17.
        </a>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><span class="icon">🔭</span> Context: Why Geodesy Matters</div>
      <p style="font-size:13px; color:var(--text-secondary); line-height:1.8;">
        Europa is one of the most promising places in the solar system to search for habitable 
        environments. Its subsurface ocean — inferred from Galileo magnetometer data, surface 
        geology, and theoretical models — lies beneath an ice shell of uncertain thickness. 
        <strong>Geodetic measurements provide the most direct constraints on Europa's interior 
        structure</strong> because they are sensitive to the bulk mechanical response of the body 
        to tidal forcing. Steinbrügge et al. (2026) describe how the Europa Clipper Geodesy Focus 
        Group (GFG) will coordinate data from four instruments to build a comprehensive geodetic 
        dataset over ~49 flybys.
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">📐</span> Key Observable: Tidal Love Numbers</div>
        <div class="equation-block" id="eq-love-k2"></div>
        <div class="equation-block" id="eq-love-h2" style="margin-top:12px;"></div>
        <div class="context-block" style="margin-top:14px;">
          <h4>What Love Numbers Tell Us (Steinbrügge et al.)</h4>
          <p>
            The degree-2 tidal Love numbers k₂ and h₂ quantify how Europa's gravity field and 
            shape, respectively, respond to Jupiter's tidal potential. A <strong>decoupled ice shell</strong> 
            floating on a global ocean produces k₂ ≈ 0.25 and h₂ ≈ 1.35 — values that are 
            <em>diagnostic</em> of an ocean's existence. If the ice shell were frozen to the 
            mantle, k₂ would be much smaller (~0.02). The Clipper mission aims to measure k₂ 
            with sufficient precision to distinguish these scenarios.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">🛰️</span> Cross-Instrument Geodesy (Fig. concept from paper)</div>
        <p style="font-size:13px; color:var(--text-secondary); margin-bottom:16px;">
          Steinbrügge et al. describe how four instruments contribute complementary geodetic measurements:
        </p>
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${instrumentEntry('G/RS', 'Gravity / Radio Science', 
            'Measures the gravity field via Doppler tracking of the spacecraft. Determines J₂, C₂₂, and higher-degree gravity coefficients. Constrains k₂ through repeated flyby tracking at different orbital phases of Europa around Jupiter.')}
          ${instrumentEntry('EIS', 'Europa Imaging System', 
            'Provides stereo imaging for shape modelling. Measures h₂ through limb profile changes at different tidal phases. Establishes a cartographic control network for georeferencing all other datasets.')}
          ${instrumentEntry('REASON', 'Radar for Europa Assessment & Sounding', 
            'Dual-frequency ice-penetrating radar (9 MHz HF + 60 MHz VHF). Probes ice shell structure down to ~30 km. Also provides high-precision altimetry for shape determination and tidal deformation (h₂).')}
          ${instrumentEntry('Europa-UVS', 'Ultraviolet Spectrograph', 
            'Stellar occultations constrain Europa\'s limb shape and atmosphere/exosphere. Provides independent shape data points at UV wavelengths.')}
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🌐</span> Geodetic Reference System</div>
        <p style="font-size:13px; color:var(--text-secondary); line-height:1.8;">
          A critical contribution of the GFG is establishing a <strong>precise cartographic 
          reference system</strong> for Europa. This requires:
        </p>
        <ul style="font-size:13px; color:var(--text-secondary); line-height:2; padding-left:20px; margin-top:8px;">
          <li>Determining the rotation state (pole orientation, spin rate, possible librations)</li>
          <li>Fitting a global triaxial ellipsoid from shape data (EIS + REASON altimetry)</li>
          <li>Defining a coordinate system anchored to surface control points</li>
          <li>Accounting for tidal deformation when registering images across different flyby epochs</li>
        </ul>
        <div class="data-grid" style="margin-top:16px;">
          <div class="data-item">
            <div class="label">Planned Flybys</div>
            <div class="value">49</div>
          </div>
          <div class="data-item">
            <div class="label">Closest Approach</div>
            <div class="value">25–100<span class="unit">km</span></div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">💡</span> Implications & Impact</div>
        <div class="context-block" style="margin:0;">
          <h4>Why This Paper Matters for the Field</h4>
          <p>
            <strong>1. First direct measurement of Europa's tidal response.</strong> While Galileo 
            provided indirect evidence for an ocean (induced magnetic field), Clipper will directly 
            measure the body's mechanical response to tides via k₂ and h₂ — an unambiguous ocean indicator.
          </p>
          <p style="margin-top:8px;">
            <strong>2. Ice shell thickness constraint.</strong> The combination of k₂, h₂, and 
            REASON radar sounding will provide the first observational bound on ice shell thickness — 
            a parameter that controls habitability by governing surface-ocean material exchange.
          </p>
          <p style="margin-top:8px;">
            <strong>3. Establishes methodology for all icy moon geodesy.</strong> The cross-instrument 
            approach described here will serve as the template for future missions (e.g., JUICE at 
            Ganymede, Dragonfly at Titan, Enceladus orbiters).
          </p>
        </div>
        <div style="margin-top:12px;">
          <span class="badge badge-cyan">Geodesy</span>
          <span class="badge badge-purple">Interior Structure</span>
          <span class="badge badge-gold">Habitability</span>
        </div>
      </div>
    </div>
  `;

  // Render equations
  document.getElementById('eq-love-k2').innerHTML = `
    <div class="equation-label">Degree-2 Tidal Love Number k₂ (Gravity Response)</div>
    ${katex.renderToString(
      'k_2 = \\frac{\\delta \\Phi_{\\text{induced}}}{\\Phi_{\\text{tidal}}}',
      { displayMode: true, throwOnError: false }
    )}
    <div class="equation-explanation">
      k₂ measures the ratio of the induced gravitational potential perturbation to the applied 
      tidal potential from Jupiter. For a body with a global subsurface ocean decoupling the ice 
      shell from the interior: k₂ ≈ 0.25 (Steinbrügge et al. 2026). Without an ocean: k₂ ≈ 0.02.
    </div>
  `;

  document.getElementById('eq-love-h2').innerHTML = `
    <div class="equation-label">Degree-2 Tidal Love Number h₂ (Shape Response)</div>
    ${katex.renderToString(
      'h_2 = \\frac{\\delta r_{\\text{surface}}}{\\Phi_{\\text{tidal}} / g}',
      { displayMode: true, throwOnError: false }
    )}
    <div class="equation-explanation">
      h₂ measures the radial surface displacement normalised by the tidal potential. 
      With an ocean: h₂ ≈ 1.35 (the surface deforms by ~30 m peak-to-peak). 
      Without an ocean: h₂ ≈ 0.04 (deformation < 1 m).
    </div>
  `;
}

function instrumentEntry(abbrev, name, desc) {
  return `
    <div class="instrument-card">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:6px;">
        <span class="badge badge-cyan">${abbrev}</span>
        <span class="inst-name">${name}</span>
      </div>
      <div class="inst-desc">${desc}</div>
    </div>
  `;
}
