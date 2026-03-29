export function renderEuropaPosterTab(container) {
  const baseUrl = '/Europa/'; 
  const pdfUrl = `${baseUrl}EuropaPoster.pdf`;

  container.innerHTML = `
    <div class="tab-header" style="margin-bottom: 24px; padding: 20px; background: rgba(0, 0, 0, 0.3); border-radius: 12px; border: 1px solid rgba(0, 255, 255, 0.1);">
      <h2 style="color: var(--accent-primary); margin-bottom: 8px; font-size: 28px;">Europa Cross Section Poster</h2>
      <p class="tab-subtitle" style="color: var(--text-secondary); font-size: 16px; margin: 0;">
        A comprehensive look at Europa's fully differentiated interior layers, from the irradiated surface to the metallic iron core.
      </p>
    </div>

    <div class="card" style="height: calc(100vh - 220px); padding: 0; overflow: hidden; border-radius: 12px; border: 1px solid rgba(0, 255, 255, 0.2); background: #000; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
      <iframe 
        src="${pdfUrl}" 
        width="100%" 
        height="100%" 
        style="border: none; display: block;"
        title="Europa Cross Section Poster"
      ></iframe>
    </div>
    
    <div style="margin-top: 20px; text-align: center;">
      <a href="${pdfUrl}" target="_blank" class="toggle-option" style="display: inline-block; padding: 10px 20px; text-decoration: none; background: rgba(0, 255, 255, 0.1); border: 1px solid var(--accent-primary); border-radius: 6px; color: var(--accent-primary); transition: all 0.3s ease;">
        <span class="icon">↗️</span> Open Poster in New Tab
      </a>
    </div>
  `;
}
