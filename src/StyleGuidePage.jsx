import './StyleGuidePage.css';
import { designTokens } from './design-tokens';

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
            <div className="sg-token-label">Typeface</div>
            <div className="sg-typeface-name" style={{ fontFamily: `var(--font-family-primary)`, fontWeight: 700 }}>Open Sans</div>
            <div className="sg-typeface-chars" style={{ fontFamily: `var(--font-family-primary)` }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              1234567890!@#$%^&*()
            </div>
          </div>
          <div className="sg-font-families">
            {designTokens.fontFamily.map(f => (
              <div className="sg-font-family" key={f.value} style={{ fontFamily: f.value }}>
                <div className="sg-token-label">{f.name} <span className="sg-token-var">{f.value}</span></div>
                <div className="sg-font-sample">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br/>a b c d e f g h i j k l m n o p q r s t u v w x y z</div>
              </div>
            ))}
          </div>
          <div className="sg-font-sizes">
            {designTokens.fontSize.map(s => (
              <div className="sg-font-size" key={s.value}>
                <span className="sg-font-size-label">{s.name}</span>
                <span className="sg-font-size-var">{s.value}</span>
                <span className="sg-font-sample" style={{ fontSize: s.value }}>The quick brown fox jumps over the lazy dog.</span>
              </div>
            ))}
          </div>
        </section>
        <section id="colors">
          <h2>Colors</h2>
          <div className="sg-color-swatches">
            {designTokens.colors.map(c => (
              <div className="sg-color-swatch" key={c.value}>
                <div className="sg-color-chip" style={{ background: c.value }} />
                <div className="sg-token-label">{c.name} <span className="sg-token-var">{c.value}</span></div>
                <div className="sg-token-value" style={{ color: '#888', fontSize: '0.85em' }}>{getComputedStyle(document.documentElement).getPropertyValue(c.value)}</div>
              </div>
            ))}
          </div>
        </section>
        <section id="spacing">
          <h2>Spacing</h2>
          <div className="sg-spacing-scale">
            {designTokens.spacing.map(s => (
              <div className="sg-spacing-item" key={s.value}>
                <div className="sg-spacing-rect" style={{ width: s.value, height: '2rem' }} />
                <div className="sg-token-label">{s.name} <span className="sg-token-var">{s.value}</span></div>
                <div className="sg-token-value">{getComputedStyle(document.documentElement).getPropertyValue(s.value)}</div>
              </div>
            ))}
          </div>
        </section>
        <section id="borders">
          <h2>Borders & Radii</h2>
          <div className="sg-border-radii">
            {designTokens.radii.map(r => (
              <div className="sg-border-radius-item" key={r.value}>
                <div className="sg-border-radius-demo" style={{ borderRadius: r.value }} />
                <div className="sg-token-label">{r.name} <span className="sg-token-var">{r.value}</span></div>
                <div className="sg-token-value">{getComputedStyle(document.documentElement).getPropertyValue(r.value)}</div>
              </div>
            ))}
          </div>
        </section>
        <section id="shadows">
          <h2>Shadows</h2>
          <div className="sg-shadows">
            {designTokens.shadows.map(sh => (
              <div className="sg-shadow-item" key={sh.value}>
                <div className="sg-shadow-demo" style={{ boxShadow: sh.value }} />
                <div className="sg-token-label">{sh.name} <span className="sg-token-var">{sh.value}</span></div>
                <div className="sg-token-value">{getComputedStyle(document.documentElement).getPropertyValue(sh.value)}</div>
              </div>
            ))}
          </div>
        </section>
        <section id="animations">
          <h2>Animations & Transitions</h2>
          <div className="sg-animations">
            {designTokens.durations.map(d => (
              <div className="sg-animation-item" key={d.value}>
                <div className="sg-animation-demo" style={{ transition: `opacity ${d.value}` }} />
                <div className="sg-token-label">{d.name} <span className="sg-token-var">{d.value}</span></div>
                <div className="sg-token-value">{getComputedStyle(document.documentElement).getPropertyValue(d.value)}</div>
              </div>
            ))}
            {designTokens.easings.map(e => (
              <div className="sg-animation-item" key={e.value}>
                <div className="sg-animation-demo" style={{ transitionTimingFunction: e.value }} />
                <div className="sg-token-label">{e.name} <span className="sg-token-var">{e.value}</span></div>
                <div className="sg-token-value">{getComputedStyle(document.documentElement).getPropertyValue(e.value)}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default StyleGuidePage; 