import katex from 'katex';

export function renderClipperTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>Europa Clipper Mission</h2>
      <p class="tab-subtitle">
        NASA's flagship mission designed to characterize Europa's outer shell and internal ocean. Explore the actual 3D telemetry model below to investigate the target instruments.
      </p>
    </div>

    <div class="grid-2">
      <!-- 3D Viewer left -->
      <div class="card" style="display:flex; flex-direction:column; padding:0; overflow:hidden;">
        <div class="card-title" style="margin:20px 20px 10px 20px;"><span class="icon">🛰️</span> Authentic NASA Spacecraft Viewer</div>
        <div id="clipper-3d-container" style="flex:1; min-height:500px; background:#000;">
          <iframe src="https://eyes.nasa.gov/apps/solar-system/#/sc_europa_clipper?embed=true" width="100%" height="100%" style="border:none; display:block;" allowfullscreen></iframe>
        </div>
      </div>

      <!-- Instrument List Right -->
      <div class="card">
        <div class="card-title"><span class="icon">🔭</span> Primary Instruments</div>
        <p style="font-size:12px; color:var(--text-muted); margin-bottom:15px;">Explore the highlighted instruments providing the payload for scientific investigation.</p>
        
        <div class="instrument-list">
          <div class="inst-btn" data-inst="REASON">
            <div style="display:flex; gap:15px; align-items:center;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Europa_Clipper_spacecraft_model.png/320px-Europa_Clipper_spacecraft_model.png" alt="REASON Radar" style="width:60px; height:60px; object-fit:cover; border-radius:4px; opacity:0.8; filter:grayscale(50%); border:1px solid rgba(0,255,255,0.3); background:#000;" />
              <div>
                <strong style="font-size:14px; color:var(--accent-primary);">REASON (Ice Penetrating Radar)</strong><br/>
                <span style="font-size:12px; color:var(--text-secondary); line-height:1.5;">VHF/HF radar designed to sound the ice shell, locating shallow water lakes and confirming the crust-ocean interface depth.</span>
              </div>
            </div>
          </div>
          
          <div class="inst-btn" data-inst="ICEMAG">
            <div style="display:flex; gap:15px; align-items:center;">
              <img src="https://images.nasa.gov/docs/images/nasa_logo_only_hires.png" alt="Magnetometer" style="width:60px; height:60px; object-fit:contain; padding:5px; border-radius:4px; opacity:0.8; border:1px solid rgba(0,255,255,0.3); background:#050510;" />
              <div>
                <strong style="font-size:14px; color:var(--accent-primary);">ICEMAG / ECM (Magnetometer)</strong><br/>
                <span style="font-size:12px; color:var(--text-secondary); line-height:1.5;">Measures induced magnetic fields to determine ocean depth and salinity. Mounted on a long boom to escape EM noise.</span>
              </div>
            </div>
          </div>
          
          <div class="inst-btn" data-inst="HGA">
            <div style="display:flex; gap:15px; align-items:center;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Europa_Clipper_HGA.png/320px-Europa_Clipper_HGA.png" alt="High Gain Antenna" style="width:60px; height:60px; object-fit:cover; border-radius:4px; opacity:0.8; border:1px solid rgba(0,255,255,0.3); background:#050510;" />
              <div>
                <strong style="font-size:14px; color:var(--accent-primary);">High Gain Antenna (Gravity Science)</strong><br/>
                <span style="font-size:12px; color:var(--text-secondary); line-height:1.5;">Large dish for Earth communication. Crucial for gravity science experiments to measure the tidal deformation Love number ($k_2$).</span>
              </div>
            </div>
          </div>
          
          <div class="inst-btn" data-inst="SUDA">
            <div style="display:flex; gap:15px; align-items:center;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Europa_Clipper_SUDA.png/320px-Europa_Clipper_SUDA.png" alt="SUDA Dust Analyzer" style="width:60px; height:60px; object-fit:cover; border-radius:4px; opacity:0.8; border:1px solid rgba(0,255,255,0.3); background:#050510;" />
              <div>
                <strong style="font-size:14px; color:var(--accent-primary);">SUDA (Surface Dust Analyzer)</strong><br/>
                <span style="font-size:12px; color:var(--text-secondary); line-height:1.5;">Maps surface composition by catching microscopic particles ejected by micrometeorite impacts to analyze chemistry.</span>
              </div>
            </div>
          </div>
          
          <div class="inst-btn" data-inst="MASPEX">
            <div style="display:flex; gap:15px; align-items:center;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Europa_Clipper_MASPEX.jpg/320px-Europa_Clipper_MASPEX.jpg" alt="MASPEX Mass Spec" style="width:60px; height:60px; object-fit:cover; border-radius:4px; opacity:0.8; border:1px solid rgba(0,255,255,0.3); background:#050510;" />
              <div>
                <strong style="font-size:14px; color:var(--accent-primary);">MASPEX (Mass Spectrometer)</strong><br/>
                <span style="font-size:12px; color:var(--text-secondary); line-height:1.5;">Samples trace gases exhaled from the subsurface ocean (via plumes) to detect organics and highly volatile biosignatures.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Inject styles for the instrument buttons dynamically
  const styles = document.createElement('style');
  styles.innerHTML = `
    .inst-btn {
      display: block; width: 100%; text-align: left; background: rgba(0,0,0,0.4); 
      border: 1px solid rgba(0,255,255,0.2); color: white; padding: 14px; 
      margin-bottom: 10px; border-radius: 6px; transition: all 0.2s;
    }
  `;
  container.appendChild(styles);

  const el = container.querySelector('.inst-btn[data-inst="HGA"] span');
  if (el) {
    el.innerHTML = el.innerHTML.replace('$k_2$', katex.renderToString('k_2', {throwOnError:false}));
  }
}
