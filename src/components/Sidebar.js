export function createSidebar(tabs, activeTab, onSwitch) {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';

  // Brand
  const brand = document.createElement('div');
  brand.className = 'sidebar-brand';
  brand.innerHTML = `
    <h1>Europa Dashboard</h1>
    <div class="subtitle">AST320 Research Platform</div>
  `;
  sidebar.appendChild(brand);

  // Icy World Physics section
  const icySection = document.createElement('div');
  icySection.className = 'sidebar-section';
  icySection.innerHTML = `<div class="sidebar-section-label">Icy World Physics</div>`;
  const icyNav = document.createElement('nav');
  icyNav.className = 'sidebar-nav';

  Object.entries(tabs).forEach(([id, tab]) => {
    if (tab.section !== 'icy') return;
    const item = createNavItem(id, tab, activeTab);
    icyNav.appendChild(item);
  });
  icySection.appendChild(icyNav);
  sidebar.appendChild(icySection);

  // Europa Case Study section
  const europaSection = document.createElement('div');
  europaSection.className = 'sidebar-section';
  europaSection.innerHTML = `<div class="sidebar-section-label">Europa Case Study</div>`;
  const europaNav = document.createElement('nav');
  europaNav.className = 'sidebar-nav';

  Object.entries(tabs).forEach(([id, tab]) => {
    if (tab.section !== 'europa') return;
    const item = createNavItem(id, tab, activeTab);
    europaNav.appendChild(item);
  });
  europaSection.appendChild(europaNav);
  sidebar.appendChild(europaSection);

  // Footer with Glossary
  const footer = document.createElement('div');
  footer.className = 'sidebar-footer';
  footer.innerHTML = `
    <button class="glossary-btn" onclick="window.__openGlossary()">
      <span class="nav-icon">📖</span>
      AST320 Glossary
    </button>
  `;
  sidebar.appendChild(footer);

  return sidebar;
}

function createNavItem(id, tab, activeTab) {
  const item = document.createElement('div');
  item.className = `nav-item${id === activeTab ? ' active' : ''}`;
  item.dataset.tab = id;
  item.innerHTML = `
    <span class="nav-icon">${tab.icon}</span>
    <span>${tab.label}</span>
  `;
  item.addEventListener('click', () => window.__switchTab(id));
  return item;
}
