import { renderClipperTab } from './ClipperTab.js';
import { renderAnalyticsTab } from './AnalyticsTab.js';

export function renderCombinedClipperTab(container) {
  // Section 1: Clipper Mission & 3D Model
  const clipperFrame = document.createElement('div');
  container.appendChild(clipperFrame);
  const cleanClipper = renderClipperTab(clipperFrame);

  // Section Divider
  const div1 = document.createElement('div'); div1.className = 'section-gap'; div1.style.height = '40px'; 
  div1.style.borderTop = '1px dashed rgba(255,255,255,0.1)'; container.appendChild(div1);

  // Section 2: Clipper Analytics
  const analyticsFrame = document.createElement('div');
  container.appendChild(analyticsFrame);
  const cleanAnalytics = renderAnalyticsTab(analyticsFrame);
  const hAnalytics = analyticsFrame.querySelector('.tab-header');
  if (hAnalytics) {
    const title = document.createElement('h3');
    title.style.color = '#00ffff';
    title.style.marginBottom = '15px';
    title.innerHTML = '<span class="icon">📊</span> Live Mission Analytics Simulator';
    hAnalytics.replaceWith(title);
  }

  return () => {
    if (cleanClipper) cleanClipper();
    if (cleanAnalytics) cleanAnalytics();
  };
}
