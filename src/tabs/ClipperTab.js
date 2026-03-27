import katex from 'katex';

/**
 * EUROPA CASE STUDY TAB — Europa Clipper Mission
 * Connects mission instruments to science goals from the cited papers.
 */
export function renderClipperTab(container) {
  const instruments = [
    {
      id: 'reason',
      name: 'REASON',
      fullName: 'Radar for Europa Assessment & Sounding: Ocean to Near-surface',
      icon: '📡',
      color: 'var(--accent-primary)',
      specs: [
        { label: 'HF Array', value: '9 MHz' },
        { label: 'VHF Array', value: '60 MHz (interferometric)' },
        { label: 'Max Penetration', value: '~30 km' },
        { label: 'Developer', value: 'UT Austin (UTIG)' },
      ],
      science: `REASON will provide the <strong>first direct measurements of Europa's ice shell 
        subsurface structure</strong>. The 9 MHz HF array penetrates deep into the ice crust, searching 
        for the ice-ocean interface, while the 60 MHz VHF array provides high-resolution near-surface 
        sounding and altimetry. As described by Steinbrügge et al. (2026), REASON altimetry contributes 
        to measuring h₂ (tidal shape deformation) and identifying shallow subsurface water bodies.`,
      connection: `Connects to Pagnoscin et al. (2026): the ice shell thickness variations predicted 
        by differential ocean heat flux would appear as undulations in REASON radar reflections from 
        the ice-ocean interface — providing a direct test of the convection-ice coupling model.`,
    },
    {
      id: 'ecm',
      name: 'ECM',
      fullName: 'Europa Clipper Magnetometer',
      icon: '🧲',
      color: 'var(--accent-tertiary)',
      specs: [
        { label: 'Sensors', value: '3 fluxgate magnetometers' },
        { label: 'Boom Length', value: '8.5 m' },
        { label: 'Sensitivity', value: '< 0.1 nT' },
        { label: 'Positions', value: '8.5m, 6.8m, 5.2m on boom' },
      ],
      science: `ECM measures the <strong>induced magnetic field</strong> of Europa. Jupiter's time-varying 
        magnetic field drives currents in Europa's conducting saltwater ocean, which generate a secondary 
        field detectable by ECM. The strength and phase of this induced field constrain the ocean's 
        <strong>depth, thickness, and electrical conductivity (salinity)</strong>. The three-sensor 
        gradiometric configuration removes spacecraft magnetic contamination.`,
      connection: `Ocean salinity directly affects the conductivity measured by ECM. Pagnoscin et al.'s 
        model predicts spatially varying freeze-melt rates — which would create local salinity anomalies 
        (brine rejection during freezing) potentially detectable as spatial variations in the induced field. 
        ECM works with PIMS (Plasma Instrument for Magnetic Sounding) to separate ocean signals from 
        plasma currents in Jupiter's magnetosphere.`,
    },
    {
      id: 'eis',
      name: 'EIS',
      fullName: 'Europa Imaging System',
      icon: '📷',
      color: 'var(--accent-gold)',
      specs: [
        { label: 'Cameras', value: 'Wide-Angle + Narrow-Angle' },
        { label: 'Resolution', value: '< 0.5 m (close approach)' },
        { label: 'Purpose', value: 'Stereo imaging, shape, geology' },
      ],
      science: `EIS provides <strong>high-resolution stereo imaging</strong> for global shape modelling. 
        As described by Steinbrügge et al. (2026), limb profile analysis at different tidal phases 
        constrains h₂ — the surface tidal deformation. EIS also maps surface geology: lineae, chaos 
        terrain, and ridges — features that may correlate with ice shell thickness variations predicted 
        by Pagnoscin et al. (2026).`,
      connection: `Chaos terrain locations can be compared against model predictions of thin-ice regions 
        (where convective ocean heat flux is highest). If chaos features cluster above predicted plume 
        sites, this supports the convection-ice coupling hypothesis.`,
    },
    {
      id: 'grs',
      name: 'G/RS',
      fullName: 'Gravity / Radio Science',
      icon: '📻',
      color: 'var(--accent-green)',
      specs: [
        { label: 'Method', value: 'Doppler tracking (X+Ka band)' },
        { label: 'Measures', value: 'J₂, C₂₂, k₂, gravity anomalies' },
      ],
      science: `G/RS determines Europa's gravity field through precision Doppler tracking. 
        Steinbrügge et al. (2026) describe how repeated flyby tracking at different orbital phases 
        yields k₂ — distinguishing a decoupled (ocean-bearing) shell from a frozen-solid body. 
        Higher-degree gravity anomalies can reveal lateral density variations within the ice shell.`,
      connection: `Ice shell thickness variations (Pagnoscin et al.) produce gravity anomalies: 
        thinner ice (lower density) above upwelling plumes creates negative Bouguer anomalies. 
        G/RS gravity maps can test this prediction.`,
    },
  ];

  let activeInstrument = 'reason';

  container.innerHTML = `
    <div class="tab-header">
      <h2>Europa Clipper Mission (2030–2034)</h2>
      <p class="tab-subtitle">
        NASA's Europa Clipper will perform ~49 close flybys of Europa (25–100 km altitude), 
        carrying a suite of 9 instruments to investigate the moon's habitability. This tab connects 
        the mission's key instruments to the science described by Steinbrügge et al. (2026) and 
        Pagnoscin et al. (2026).
      </p>
    </div>

    <div class="grid-2" style="margin-bottom:20px;">
      <div class="card">
        <div class="card-title"><span class="icon">🛰️</span> Mission Overview</div>
        <div class="data-grid">
          <div class="data-item">
            <div class="label">Total Flybys</div>
            <div class="value">~49</div>
          </div>
          <div class="data-item">
            <div class="label">Closest Approach</div>
            <div class="value">25<span class="unit">km</span></div>
          </div>
          <div class="data-item">
            <div class="label">Orbit</div>
            <div class="value" style="font-size:14px;">Jupiter orbit</div>
          </div>
          <div class="data-item">
            <div class="label">Prime Mission</div>
            <div class="value" style="font-size:14px;">~4 years</div>
          </div>
        </div>
        <div class="context-block" style="margin-top:14px;">
          <h4>Predictive Science: Testing the Papers</h4>
          <p>
            The two papers cited in this dashboard make predictions that Europa Clipper can test:
          </p>
          <ul style="margin-top:6px; padding-left:16px; font-size:12px; line-height:1.8;">
            <li><strong>Steinbrügge et al.:</strong> k₂ ≈ 0.25 if a global ocean exists</li>
            <li><strong>Steinbrügge et al.:</strong> h₂ ≈ 1.35 → ~30 m tidal amplitude</li>
            <li><strong>Pagnoscin et al.:</strong> Ice shell thickness varies spatially due to ocean convection</li>
            <li><strong>Pagnoscin et al.:</strong> Surface geology correlates with sub-ice plume locations</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">🔧</span> Instrument Suite — Click to Explore</div>
        <div id="instrument-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;"></div>
      </div>
    </div>

    <div class="card" id="instrument-detail">
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🎓</span> Theoretical Framework: Remote Sensing & Field Induction</div>
      <div class="grid-2">
        <div class="context-block" style="margin:0;">
          <h4>Electromagnetic Induction</h4>
          <p>
            The fundamental physics behind ECM's ocean detection is Faraday's law: a time-varying 
            external magnetic field (Jupiter's rotating dipole) induces currents in any conductor 
            (Europa's salty ocean). These currents produce a secondary field whose amplitude and 
            phase depend on the conductor's geometry and conductivity — encoding the ocean's depth, 
            thickness, and salinity.
          </p>
          <div class="equation-block" id="eq-faraday" style="margin-top:12px;"></div>
        </div>
        <div class="context-block" style="margin:0;">
          <h4>Radar Sounding Principle</h4>
          <p>
            REASON operates on the principle of dielectric contrast: when a radar pulse encounters 
            a boundary between materials with different dielectric constants (ice ε ≈ 3.2, water ε ≈ 80), 
            part of the energy is reflected. The two-way travel time of the reflection encodes the 
            depth of the interface.
          </p>
          <div class="equation-block" id="eq-radar" style="margin-top:12px;"></div>
        </div>
      </div>
    </div>
  `;

  // Render instrument cards
  const grid = document.getElementById('instrument-grid');
  instruments.forEach(inst => {
    const card = document.createElement('div');
    card.className = `instrument-card${inst.id === activeInstrument ? ' active' : ''}`;
    card.id = `inst-card-${inst.id}`;
    card.innerHTML = `
      <div style="font-size:20px; margin-bottom:6px;">${inst.icon}</div>
      <div class="inst-name">${inst.name}</div>
      <div class="inst-desc">${inst.fullName}</div>
    `;
    card.addEventListener('click', () => {
      activeInstrument = inst.id;
      document.querySelectorAll('.instrument-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      renderDetail(inst);
    });
    grid.appendChild(card);
  });

  // Initial detail
  renderDetail(instruments[0]);

  // Equations
  document.getElementById('eq-faraday').innerHTML = `
    <div class="equation-label">Faraday's Law of Induction</div>
    ${katex.renderToString('\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}', { displayMode: true, throwOnError: false })}
  `;

  document.getElementById('eq-radar').innerHTML = `
    <div class="equation-label">Radar Depth from Two-Way Travel Time</div>
    ${katex.renderToString('d = \\frac{c \\cdot \\Delta t}{2\\sqrt{\\varepsilon_{\\text{ice}}}}', { displayMode: true, throwOnError: false })}
  `;

  function renderDetail(inst) {
    const detail = document.getElementById('instrument-detail');
    detail.innerHTML = `
      <div class="card-title" style="color:${inst.color};">
        <span class="icon">${inst.icon}</span> ${inst.name}: ${inst.fullName}
      </div>
      <div class="grid-2">
        <div>
          <h4 style="font-size:13px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:10px; font-family:var(--font-mono);">Specifications</h4>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${inst.specs.map(s => `
              <div class="data-item">
                <div class="label">${s.label}</div>
                <div class="value" style="font-size:14px;">${s.value}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div>
          <h4 style="font-size:13px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:10px; font-family:var(--font-mono);">Science & Paper Connections</h4>
          <p style="font-size:13px; color:var(--text-secondary); line-height:1.8; margin-bottom:12px;">
            ${inst.science}
          </p>
          <div class="context-block">
            <h4>Connection to Cited Papers</h4>
            <p>${inst.connection}</p>
          </div>
        </div>
      </div>
    `;
  }
}
