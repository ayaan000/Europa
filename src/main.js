import './styles/index.css';
import 'katex/dist/katex.min.css';
import { createSidebar } from './components/Sidebar.js';
import { createGlossary } from './components/Glossary.js';
import { renderOverviewTab } from './tabs/OverviewTab.js';
import { renderJupiterTab } from './tabs/JupiterTab.js';
import { renderGeodeticTab } from './tabs/GeodeticTab.js';
import { renderIceSystemTab } from './tabs/IceSystemTab.js';
import { renderCombinedClipperTab } from './tabs/CombinedClipperTab.js';
import { renderGeologyTab } from './tabs/GeologyTab.js';
import { renderAstrobiologyTab } from './tabs/AstrobiologyTab.js';
import { renderPosterTab } from './tabs/PosterTab.js';
import { renderNasaEyesTab } from './tabs/NasaEyesTab.js';

const TABS = {
  overview:    { render: renderOverviewTab,    label: 'Overview & Constants',          icon: '🌍', section: 'icy' },
  jupiter:     { render: renderJupiterTab,     label: 'Jupiter System & Magneto.',     icon: '🪐', section: 'icy' },
  geology:     { render: renderGeologyTab,     label: 'Surface Mapping & Tectonics',   icon: '🗺️', section: 'icy' },
  icesystem:   { render: renderIceSystemTab,   label: 'Ice-Ocean System Unit',         icon: '🧊', section: 'icy' },
  astro:       { render: renderAstrobiologyTab,label: 'Astrobiology & Organics',       icon: '🦠', section: 'icy' },
  geodetic:    { render: renderGeodeticTab,    label: 'Steinbrügge et al. 2026',       icon: '📡', section: 'europa' },
  clipper:     { render: renderCombinedClipperTab, label: 'Europa Clipper Mission',    icon: '🛰️', section: 'europa' },
  nasaeyes:    { render: renderNasaEyesTab,    label: 'NASA Eyes Explorer',            icon: '🔭', section: 'europa' },
  poster:      { render: renderPosterTab,      label: 'Cross Section Poster',          icon: '🖼️', section: 'icy' },
};

let activeTab = 'overview';
let mainContent = null;
let cleanupFn = null;

function init() {
  const app = document.getElementById('app');

  const sidebar = createSidebar(TABS, activeTab, switchTab);
  app.appendChild(sidebar);

  mainContent = document.createElement('main');
  mainContent.className = 'main-content';
  mainContent.id = 'main-content';
  app.appendChild(mainContent);

  const glossary = createGlossary();
  app.appendChild(glossary);

  renderActiveTab();
}

function switchTab(tabId) {
  if (tabId === activeTab) return;
  activeTab = tabId;
  updateSidebarActive();
  renderActiveTab();
}

function updateSidebarActive() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.tab === activeTab);
  });
}

function renderActiveTab() {
  if (cleanupFn) {
    cleanupFn();
    cleanupFn = null;
  }
  mainContent.innerHTML = '';
  const tab = TABS[activeTab];
  if (tab) {
    const result = tab.render(mainContent);
    if (typeof result === 'function') {
      cleanupFn = result;
    }
  }
}

// Expose switchTab globally for sidebar clicks
window.__switchTab = switchTab;
window.__openGlossary = () => {
  document.getElementById('glossary-modal')?.classList.add('open');
};

document.addEventListener('DOMContentLoaded', init);
