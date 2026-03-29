export function renderPosterTab(container) {
  container.innerHTML = `
    <div class="tab-header" style="margin-bottom: 20px;">
      <h2>Europa Cross Section Poster</h2>
      <p class="tab-subtitle">
        A comprehensive look at Europa's fully differentiated interior layers, from the irradiated surface to the metallic iron core.
      </p>
    </div>

    <!-- PDF Placeholder -->
    <div class="card" style="height: calc(100vh - 200px); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; border: 2px dashed var(--accent-primary); background: rgba(0,255,255,0.05);">
      <div style="font-size: 40px; margin-bottom: 10px;">📄</div>
      <h3 style="color: var(--accent-primary); margin-bottom: 15px;">Poster PDF Placeholder</h3>
      <p style="color: var(--text-secondary); max-width: 400px; font-size: 14px; line-height: 1.6;">
        Replace the contents of this div with an <code>&lt;iframe&gt;</code> or <code>&lt;object&gt;</code> tag pointing to your PDF when it is ready.
        <br><br>
        Example:<br>
        <code>&lt;iframe src="/path/to/poster.pdf" width="100%" height="100%"&gt;&lt;/iframe&gt;</code>
      </p>
    </div>
  `;
}
