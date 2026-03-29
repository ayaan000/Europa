export function renderEuropaPosterTab(container) {
  const baseUrl = '/Europa/'; 
  const pdfUrl = `${baseUrl}EuropaPoster.pdf`;

  // Store original styles for cleanup
  const originalPadding = container.style.padding;
  const originalOverflow = container.style.overflow;

  // Maximize view
  container.style.padding = '0';
  container.style.overflow = 'hidden';

  container.innerHTML = `
    <div style="width: 100%; height: 100%; background: #000; position: relative; overflow: hidden;">
      <iframe 
        src="${pdfUrl}" 
        width="100%" 
        height="100%" 
        style="border: none; display: block; filter: contrast(1.1) brightness(1.05);"
        title="Europa Cross Section Poster"
      ></iframe>
      
      <!-- Floating Action Button for Accessibility -->
      <a href="${pdfUrl}" target="_blank" 
         style="position: absolute; bottom: 30px; right: 30px; 
                padding: 12px 24px; background: rgba(0, 0, 0, 0.75); 
                border: 1px solid var(--accent-primary); color: var(--accent-primary); 
                border-radius: 8px; font-family: var(--font-mono); font-size: 13px;
                text-decoration: none; backdrop-filter: blur(8px);
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), var(--glow-soft);
                z-index: 1000; transition: all 0.3s ease; display: block;">
        <span class="icon">↗️</span> OPEN FULLSCREEN
      </a>
    </div>
  `;

  return () => {
    container.style.padding = originalPadding;
    container.style.overflow = originalOverflow;
  };
}

