import './styles/index.css';
import 'katex/dist/katex.min.css';
import { createSidebar } from './components/Sidebar.js';
import { createGlossary } from './components/Glossary.js';
import { renderOverviewTab } from './tabs/OverviewTab.js';
import { renderOceanTab } from './tabs/OceanTab.js';
import { renderIceShellTab } from './tabs/IceShellTab.js';
import { renderMushyLayerTab } from './tabs/MushyLayerTab.js';
import { renderJupiterTab } from './tabs/JupiterTab.js';
import { renderGeodeticTab } from './tabs/GeodeticTab.js';
import { renderConvectionTab } from './tabs/ConvectionTab.js';
import { renderClipperTab } from './tabs/ClipperTab.js';
import { renderAnalyticsTab } from './tabs/AnalyticsTab.js';

const TABS = {
  overview:    { render: renderOverviewTab,    label: 'Overview & Constants',          icon: '🌍', section: 'icy' },
  jupiter:     { render: renderJupiterTab,     label: 'Jupiter System & Magneto.',     icon: '🪐', section: 'icy' },
  ocean:       { render: renderOceanTab,       label: 'Ocean Convection Theory',      icon: '🌊', section: 'icy' },
  iceshell:    { render: renderIceShellTab,    label: 'Ice Shell Dynamics',            icon: '❄️', section: 'icy' },
  mushy:       { render: renderMushyLayerTab,  label: 'Ice-Ocean Interface',           icon: '🔬', section: 'icy' },
  geodetic:    { render: renderGeodeticTab,    label: 'Steinbrügge et al. 2026',       icon: '📡', section: 'europa' },
  convection:  { render: renderConvectionTab,  label: 'Pagnoscin et al. 2026',         icon: '🔥', section: 'europa' },
  clipper:     { render: renderClipperTab,     label: 'Europa Clipper Mission',        icon: '🛰️', section: 'europa' },
  analytics:   { render: renderAnalyticsTab,   label: 'Clipper Analytics',             icon: '📊', section: 'europa' },
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
