import './StyleGuidePage.css';

const fontFamilies = [
  { name: 'Primary', var: '--font-family-primary' },
  { name: 'Monospace', var: '--font-family-monospace' },
];

const fontSizes = [
  { name: 'XS', var: '--font-size-xs' },
  { name: 'SM', var: '--font-size-sm' },
  { name: 'Base', var: '--font-size-base' },
  { name: 'MD', var: '--font-size-md' },
  { name: 'LG', var: '--font-size-lg' },
  { name: 'XL', var: '--font-size-xl' },
  { name: '2XL', var: '--font-size-2xl' },
  { name: '3XL', var: '--font-size-3xl' },
  { name: '4XL', var: '--font-size-4xl' },
];

const colors = [
  // Brand
  { name: 'Blue Primary', var: '--color-blue-primary' },
  { name: 'Blue Light', var: '--color-blue-light' },
  { name: 'Blue Dark', var: '--color-blue-dark' },
  { name: 'Teal', var: '--color-teal' },
  { name: 'Purple', var: '--color-purple' },
  // Backgrounds
  { name: 'Black', var: '--color-black' },
  { name: 'Charcoal', var: '--color-charcoal' },
  { name: 'Dark Gray', var: '--color-dark-gray' },
  { name: 'White', var: '--color-white' },
  // Neutrals
  { name: 'Gray 100', var: '--color-gray-100' },
  { name: 'Gray 200', var: '--color-gray-200' },
  { name: 'Gray 300', var: '--color-gray-300' },
  { name: 'Gray 400', var: '--color-gray-400' },
  { name: 'Gray 500', var: '--color-gray-500' },
  { name: 'Gray 600', var: '--color-gray-600' },
  { name: 'Gray 700', var: '--color-gray-700' },
  // Status
  { name: 'Success', var: '--color-success' },
  { name: 'Warning', var: '--color-warning' },
  { name: 'Error', var: '--color-error' },
  { name: 'Info', var: '--color-info' },
];

const spacings = [
  { name: '0', var: '--space-0' },
  { name: '1', var: '--space-1' },
  { name: '2', var: '--space-2' },
  { name: '3', var: '--space-3' },
  { name: '4', var: '--space-4' },
  { name: '5', var: '--space-5' },
  { name: '6', var: '--space-6' },
  { name: '8', var: '--space-8' },
  { name: '10', var: '--space-10' },
  { name: '12', var: '--space-12' },
  { name: '16', var: '--space-16' },
  { name: '20', var: '--space-20' },
  { name: '24', var: '--space-24' },
  { name: '32', var: '--space-32' },
];

const radii = [
  { name: 'None', var: '--radius-none' },
  { name: 'SM', var: '--radius-sm' },
  { name: 'MD', var: '--radius-md' },
  { name: 'LG', var: '--radius-lg' },
  { name: 'XL', var: '--radius-xl' },
  { name: '2XL', var: '--radius-2xl' },
  { name: 'Full', var: '--radius-full' },
];

const shadows = [
  { name: 'None', var: '--shadow-none' },
  { name: 'SM', var: '--shadow-sm' },
  { name: 'MD', var: '--shadow-md' },
  { name: 'LG', var: '--shadow-lg' },
  { name: 'XL', var: '--shadow-xl' },
  { name: 'Inner', var: '--shadow-inner' },
  { name: 'Card', var: '--shadow-card' },
];

const durations = [
  { name: 'Instant', var: '--duration-instant' },
  { name: 'Fast', var: '--duration-fast' },
  { name: 'Normal', var: '--duration-normal' },
  { name: 'Slow', var: '--duration-slow' },
];

const easings = [
  { name: 'Default', var: '--ease-default' },
  { name: 'In', var: '--ease-in' },
  { name: 'Out', var: '--ease-out' },
  { name: 'In Out', var: '--ease-in-out' },
];

function StyleGuidePage() {
  return (
    <div className="sg-root">
      <aside className="sg-sidebar">
        <nav>
          <ul>
            <li><a href="#typography">Typography</a></li>
            <li><a href="#colors">Colors</a></li>
            <li><a href="#spacing">Spacing</a></li>
            <li><a href="#borders">Borders</a></li>
            <li><a href="#shadows">Shadows</a></li>
            <li><a href="#animations">Animations</a></li>
          </ul>
        </nav>
      </aside>
      <main className="sg-main">
        <header className="sg-header">
          <h1>Design System</h1>
        </header>
        <section id="typography">
          <h2>Typography</h2>
          <div className="sg-typeface-block">
            <div className="sg-typeface-name" style={{ fontFamily: `var(--font-family-primary)`, fontWeight: 700 }}>Open Sans</div>
            <div className="sg-typeface-chars" style={{ fontFamily: `var(--font-family-primary)` }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              1234567890!@#$%^&*()
            </div>
          </div>
          <div className="sg-font-families">
            {fontFamilies.map(f => (
              <div className="sg-font-family" key={f.var} style={{ fontFamily: `var(${f.var})` }}>
                <div className="sg-token-label">{f.name} <span className="sg-token-var">{f.var}</span></div>
                <div className="sg-font-sample">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br/>a b c d e f g h i j k l m n o p q r s t u v w x y z</div>
              </div>
            ))}
          </div>
          <div className="sg-font-sizes">
            {fontSizes.map(s => (
              <div className="sg-font-size" key={s.var}>
                <span className="sg-font-size-label">{s.name}</span>
                <span className="sg-font-size-var">{s.var}</span>
                <span className="sg-font-sample" style={{ fontSize: `var(${s.var})` }}>The quick brown fox jumps over the lazy dog.</span>
              </div>
            ))}
          </div>
        </section>
        <section id="colors">
          <h2>Colors</h2>
          <div className="sg-color-swatches">
            {colors.map(c => (
              <div className="sg-color-swatch" key={c.var}>
                <div className="sg-color-chip" style={{ background: `var(${c.var})` }} />
                <div className="sg-token-label">{c.name} <span className="sg-token-var">{c.var}</span></div>
                <div className="sg-token-value" style={{ color: '#888', fontSize: '0.85em' }}>{getComputedStyle(document.documentElement).getPropertyValue(c.var)}</div>
              </div>
            ))}
          </div>
        </section>
        <section id="spacing">
          <h2>Spacing</h2>
          <div className="sg-spacing-scale">
            {spacings.map(s => (
              <div className="sg-spacing-item" key={s.var}>
                <div className="sg-spacing-rect" style={{ width: `var(${s.var})`, height: '2rem' }} />
                <div className="sg-token-label">{s.name} <span className="sg-token-var">{s.var}</span></div>
                <div className="sg-token-value">{getComputedStyle(document.documentElement).getPropertyValue(s.var)}</div>
              </div>
            ))}
          </div>
        </section>
        <section id="borders">
          <h2>Borders & Radii</h2>
          <div className="sg-border-radii">
            {radii.map(r => (
              <div className="sg-border-radius-item" key={r.var}>
                <div className="sg-border-radius-demo" style={{ borderRadius: `var(${r.var})` }} />
                <div className="sg-token-label">{r.name} <span className="sg-token-var">{r.var}</span></div>
                <div className="sg-token-value">{getComputedStyle(document.documentElement).getPropertyValue(r.var)}</div>
              </div>
            ))}
          </div>
        </section>
        <section id="shadows">
          <h2>Shadows</h2>
          <div className="sg-shadows">
            {shadows.map(sh => (
              <div className="sg-shadow-item" key={sh.var}>
                <div className="sg-shadow-demo" style={{ boxShadow: `var(${sh.var})` }} />
                <div className="sg-token-label">{sh.name} <span className="sg-token-var">{sh.var}</span></div>
                <div className="sg-token-value">{getComputedStyle(document.documentElement).getPropertyValue(sh.var)}</div>
              </div>
            ))}
          </div>
        </section>
        <section id="animations">
          <h2>Animations & Transitions</h2>
          <div className="sg-animations">
            {durations.map(d => (
              <div className="sg-animation-item" key={d.var}>
                <div className="sg-animation-demo" style={{ transition: `opacity var(${d.var})` }} />
                <div className="sg-token-label">{d.name} <span className="sg-token-var">{d.var}</span></div>
                <div className="sg-token-value">{getComputedStyle(document.documentElement).getPropertyValue(d.var)}</div>
              </div>
            ))}
            {easings.map(e => (
              <div className="sg-animation-item" key={e.var}>
                <div className="sg-animation-demo" style={{ transitionTimingFunction: `var(${e.var})` }} />
                <div className="sg-token-label">{e.name} <span className="sg-token-var">{e.var}</span></div>
                <div className="sg-token-value">{getComputedStyle(document.documentElement).getPropertyValue(e.var)}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default StyleGuidePage; 