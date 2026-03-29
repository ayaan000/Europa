export function renderPosterTab(container) {
  container.innerHTML = `
    <div class="tab-header" style="margin-bottom: 20px;">
      <h2>Europa Cross Section Poster</h2>
      <p class="tab-subtitle">
        A comprehensive look at Europa's fully differentiated interior layers, from the irradiated surface to the metallic iron core.
      </p>
    </div>

    <!-- PDF Viewer -->
    <div class="card" style="height: calc(100vh - 200px); padding: 0; overflow: hidden; border: 1px solid rgba(0,255,255,0.2);">
      <iframe src="/EuropaPoster.pdf" width="100%" height="100%" style="border: none;"></iframe>
    </div>
  `;
}
