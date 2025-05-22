import './StyleGuidePage.css';
import { designTokens } from './design-tokens';

function StyleGuidePage() {
  return (
    <div className="sg-root">
      <aside className="sg-sidebar">
        <nav>
          <ul>
            <li><a href="#typography"><H1Icon style={{ color: 'var(--color-gray-400)', width: 20, height: 20, marginRight: 8, verticalAlign: 'middle' }} />Typography</a></li>
            <li><a href="#colors"><DocMagnifierIcon style={{ color: 'var(--color-gray-400)', width: 20, height: 20, marginRight: 8, verticalAlign: 'middle' }} />Colors</a></li>
            <li><a href="#spacing"><AdjustmentsIcon style={{ color: 'var(--color-gray-400)', width: 20, height: 20, marginRight: 8, verticalAlign: 'middle' }} />Spacing</a></li>
            <li><a href="#borders"><DocCheckIcon style={{ color: 'var(--color-gray-400)', width: 20, height: 20, marginRight: 8, verticalAlign: 'middle' }} />Borders</a></li>
            <li><a href="#shadows"><CogIcon style={{ color: 'var(--color-gray-400)', width: 20, height: 20, marginRight: 8, verticalAlign: 'middle' }} />Shadows</a></li>
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
      </main>
    </div>
  );
}

// Inline SVG icon components
function H1Icon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M2.24316 4.49316V11.9939M2.24316 11.9939V19.4946M2.24316 11.9939L12.7434 11.9946M12.7434 4.49389V11.9946M12.7434 11.9946V19.4953M17.244 10.8682L19.494 9.3681V19.4941M19.494 19.4941H17.244M19.494 19.4941H21.744" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function DocMagnifierIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M13.4812 15.7312L15 17.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V19.875C4.5 20.4963 5.00368 21 5.625 21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25ZM14.25 13.875C14.25 15.3247 13.0747 16.5 11.625 16.5C10.1753 16.5 9 15.3247 9 13.875C9 12.4253 10.1753 11.25 11.625 11.25C13.0747 11.25 14.25 12.4253 14.25 13.875Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function AdjustmentsIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M10.5 6L20.25 6M10.5 6C10.5 6.82843 9.82843 7.5 9 7.5C8.17157 7.5 7.5 6.82843 7.5 6M10.5 6C10.5 5.17157 9.82843 4.5 9 4.5C8.17157 4.5 7.5 5.17157 7.5 6M3.75 6H7.5M10.5 18H20.25M10.5 18C10.5 18.8284 9.82843 19.5 9 19.5C8.17157 19.5 7.5 18.8284 7.5 18M10.5 18C10.5 17.1716 9.82843 16.5 9 16.5C8.17157 16.5 7.5 17.1716 7.5 18M3.75 18L7.5 18M16.5 12L20.25 12M16.5 12C16.5 12.8284 15.8284 13.5 15 13.5C14.1716 13.5 13.5 12.8284 13.5 12M16.5 12C16.5 11.1716 15.8284 10.5 15 10.5C14.1716 10.5 13.5 11.1716 13.5 12M3.75 12H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function DocCheckIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M10.125 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.625M10.125 2.25H10.5C15.4706 2.25 19.5 6.27944 19.5 11.25V11.625M10.125 2.25C11.989 2.25 13.5 3.76104 13.5 5.625V7.125C13.5 7.74632 14.0037 8.25 14.625 8.25H16.125C17.989 8.25 19.5 9.76104 19.5 11.625M9 15L11.25 17.25L15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CogIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4.50073 11.9993C4.50073 16.1414 7.8586 19.4993 12.0007 19.4993C16.1429 19.4993 19.5007 16.1414 19.5007 11.9993M4.50073 11.9993C4.50073 7.85712 7.8586 4.49925 12.0007 4.49925C16.1429 4.49926 19.5007 7.85712 19.5007 11.9993M4.50073 11.9993L3.00073 11.9993M19.5007 11.9993L21.0007 11.9993M19.5007 11.9993L12.0007 11.9993M3.54329 15.0774L4.95283 14.5644M19.0482 9.43411L20.4578 8.92108M5.1062 17.785L6.25527 16.8208M17.7459 7.17897L18.895 6.21479M7.50064 19.7943L8.25064 18.4952M15.7506 5.50484L16.5006 4.2058M10.4378 20.8633L10.6983 19.386M13.303 4.61393L13.5635 3.13672M13.5635 20.8633L13.303 19.3861M10.6983 4.61397L10.4378 3.13676M16.5007 19.7941L15.7507 18.4951M7.50068 4.20565L12.0007 11.9993M18.8952 17.7843L17.7461 16.8202M6.25542 7.17835L5.10635 6.21417M20.458 15.0776L19.0485 14.5646M4.95308 9.43426L3.54354 8.92123M12.0007 11.9993L8.25073 18.4944" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function PlayCircleIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 9L15 12L10 15V9Z" fill="currentColor"/>
    </svg>
  );
}

export default StyleGuidePage; 