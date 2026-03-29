import { renderIceShellTab } from './IceShellTab.js';
import { renderMushyLayerTab } from './MushyLayerTab.js';
import { renderConvectionTab } from './ConvectionTab.js';

export function renderIceSystemTab(container) {
  // Master Header
  const header = document.createElement('div');
  header.className = 'tab-header';
  header.innerHTML = `
    <h2>Ice-Ocean System Mechanics</h2>
    <p class="tab-subtitle">
      A comprehensive synthesis of Europa's rigid lithosphere, convective sub-layer, and the reactive 
      mushy interface binding the ice to the global ocean below.
    </p>
    <div class="paper-citation" style="display:flex; gap:10px; flex-wrap:wrap; margin-top:10px;">
      <span style="background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:4px; font-size:10px;">
        📄 <a href="https://doi.org/10.1007/s11214-025-01250-x" target="_blank" style="color:#00d4ff;">Steinbrügge et al. (2026)</a>
      </span>
      <span style="background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:4px; font-size:10px;">
        📄 <a href="https://doi.org/10.1016/j.icarus.2025.116875" target="_blank" style="color:#ff00ff;">Pagnoscin et al. (2026)</a>
      </span>
    </div>
  `;
  container.appendChild(header);

  // Section 1: Ice Shell Dynamics (Thermal Gradient)
  const iceFrame = document.createElement('div');
  iceFrame.style.marginBottom = '40px';
  container.appendChild(iceFrame);
  const cleanIce = renderIceShellTab(iceFrame);
  // Strip the redundant .tab-header from the child
  const hIce = iceFrame.querySelector('.tab-header');
  if (hIce) hIce.remove();

  // Section Divider
  const div1 = document.createElement('div'); div1.className = 'section-gap'; div1.style.height = '40px'; 
  div1.style.borderTop = '1px dashed rgba(255,255,255,0.1)'; container.appendChild(div1);

  // Section 2: Pagnoscin Convection
  const convFrame = document.createElement('div');
  convFrame.style.marginBottom = '40px';
  container.appendChild(convFrame);
  const cleanConv = renderConvectionTab(convFrame);
  const hConv = convFrame.querySelector('.tab-header');
  if (hConv) {
    const title = document.createElement('h3');
    title.style.color = '#ff00ff';
    title.style.marginBottom = '15px';
    title.innerHTML = '<span class="icon">🌊</span> Ocean Convection (Pagnoscin et al.)';
    hConv.replaceWith(title);
  }

  // Section Divider
  const div2 = document.createElement('div'); div2.className = 'section-gap'; div2.style.height = '40px'; 
  div2.style.borderTop = '1px dashed rgba(255,255,255,0.1)'; container.appendChild(div2);

  // Section 3: Mushy Layer (Reactive Transport)
  const mushyFrame = document.createElement('div');
  container.appendChild(mushyFrame);
  const cleanMushy = renderMushyLayerTab(mushyFrame);
  const hMushy = mushyFrame.querySelector('.tab-header');
  if (hMushy) {
    const title = document.createElement('h3');
    title.style.color = '#00ffff';
    title.style.marginBottom = '15px';
    title.innerHTML = '<span class="icon">🔬</span> Ice-Ocean Interface (Mushy Layer)';
    hMushy.replaceWith(title);
  }

  return () => {
    if (cleanIce) cleanIce();
    if (cleanConv) cleanConv();
    if (cleanMushy) cleanMushy();
  };
}
