import React from 'react';
import './Button.css';

function Button({ label, href, variant = 'primary', ...props }) {
  return (
    <a
      className={`sg-btn sg-btn--${variant}`}
      href={href}
      {...props}
    >
      <span>{label}</span>
      <span className="sg-btn-arrow" aria-hidden="true">&rarr;</span>
    </a>
  );
}

export default Button; 