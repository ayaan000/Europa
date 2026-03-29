export function renderNasaEyesTab(container) {
  container.innerHTML = `
    <div class="tab-header">
      <h2>NASA Eyes on the Solar System: Europa</h2>
      <p class="tab-subtitle">
        The official NASA interactive 3D application providing real-time telemetry, orbital mechanics, and high-fidelity planetary models straight from the Jet Propulsion Laboratory.
      </p>
    </div>
    <div class="card" style="padding:0; overflow:hidden; border-color:var(--accent-primary); box-shadow:0 0 20px rgba(0,212,255,0.15); height:650px; border-radius:8px;">
      <iframe src="https://eyes.nasa.gov/apps/solar-system/#/europa" width="100%" height="100%" style="border:none; display:block;" allowfullscreen></iframe>
    </div>
  `;
}
