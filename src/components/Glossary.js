import katex from 'katex';

export function createGlossary() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'glossary-modal';
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });

  const entries = [
    {
      term: 'Hydrostatic Equilibrium',
      equation: '\\frac{dP}{dr} = -g(r)\\,\\rho(r)',
      desc: 'The balance between the inward pull of gravity and the outward pressure gradient. In an icy moon, each layer — ice shell, ocean, mantle, core — satisfies this relation, determining the pressure profile with depth. This is directly applied in modelling Europa\'s internal density structure.'
    },
    {
      term: 'Schwarzschild Criterion',
      equation: '\\left|\\frac{dT}{dr}\\right|_{\\text{actual}} > \\left|\\frac{dT}{dr}\\right|_{\\text{adiabat}}',
      desc: 'A layer becomes convectively unstable when the actual temperature gradient exceeds the adiabatic gradient. In Europa\'s ice shell, this criterion governs whether heat is transported conductively (thin shell) or convectively (thick shell), creating the bistability explored by Pagnoscin et al. (2026).'
    },
    {
      term: 'Virial Theorem',
      equation: '2K + U_{\\text{grav}} = 0',
      desc: 'For a self-gravitating system in equilibrium, twice the total kinetic (thermal) energy equals the magnitude of the gravitational potential energy. Applied to icy moons, it constrains the global energy budget linking tidal heating, radiogenic heating, and the thermal state of the interior.'
    },
    {
      term: 'Rayleigh Number (Ra)',
      equation: 'Ra = \\frac{g\\,\\alpha\\,\\Delta T\\,d^3}{\\nu\\,\\kappa}',
      desc: 'A dimensionless number measuring the vigour of thermal convection. Europa\'s subsurface ocean has Ra ~ 10²⁰–10²⁶, meaning convection is extremely turbulent. Pagnoscin et al. (2026) use Ra as the key control parameter for their convective fluid simulations.'
    },
    {
      term: 'Ekman Number (Ek)',
      equation: 'Ek = \\frac{\\nu}{\\Omega\\,d^2}',
      desc: 'The ratio of viscous forces to Coriolis forces. Europa\'s small Ek (≈ 10⁻¹²–10⁻¹¹) indicates strong rotational influence on ocean currents, organizing flow into Taylor columns aligned with the rotation axis.'
    },
    {
      term: 'Taylor-Proudman Theorem',
      equation: '(2\\vec{\\Omega} \\cdot \\nabla)\\vec{u} = 0',
      desc: 'In rapidly rotating fluids (low Ek), flows tend to be invariant along the rotation axis, forming "Taylor columns". These columnar flows are expected to dominate Europa\'s ocean circulation and control the spatial pattern of heat delivery to the ice-ocean boundary.'
    },
    {
      term: 'Tidal Love Number (k₂)',
      equation: 'k_2 = \\frac{\\text{induced gravity field}}{\\text{tidal potential}}',
      desc: 'A dimensionless parameter characterising a body\'s deformation response to tidal forcing. Steinbrügge et al. (2026) describe how Europa Clipper will measure k₂ to constrain the ice shell thickness and confirm the ocean\'s existence — a decoupled ice shell yields k₂ ≈ 0.25.'
    },
    {
      term: 'Nusselt Number (Nu)',
      equation: 'Nu = \\frac{\\text{total heat flux}}{\\text{conductive heat flux}}',
      desc: 'The ratio of total (convective + conductive) heat transport to purely conductive transport. Nu > 1 indicates active convection. In Pagnoscin et al. (2026), the Nusselt number at the ice-ocean boundary quantifies how convective plumes enhance local melting and freezing rates.'
    },
    {
      term: 'Stefan Condition (Phase Interface)',
      equation: '\\rho L_V \\frac{dh}{dt} = k\\frac{\\partial T}{\\partial z}\\Big|_{\\text{ice}} - k\\frac{\\partial T}{\\partial z}\\Big|_{\\text{ocean}}',
      desc: 'Governs the advance or retreat of an ice-ocean boundary. The difference in heat flux on either side of the interface determines the rate of freezing or melting. This is the key equation for ice shell thickness evolution.'
    },
  ];

  let entriesHTML = entries.map(e => {
    const eqHtml = katex.renderToString(e.equation, { throwOnError: false, displayMode: true });
    return `
      <div class="glossary-entry">
        <h4>${e.term}</h4>
        <div class="equation-block" style="margin: 10px 0;">${eqHtml}</div>
        <p>${e.desc}</p>
      </div>
    `;
  }).join('');

  overlay.innerHTML = `
    <div class="modal">
      <button class="modal-close" onclick="document.getElementById('glossary-modal').classList.remove('open')">✕</button>
      <h3 style="font-family: var(--font-display); font-size: 22px; margin-bottom: 4px;">AST320 Glossary</h3>
      <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 20px;">Key concepts linking planetary dynamics to introductory astrophysics.</p>
      ${entriesHTML}
    </div>
  `;

  return overlay;
}
