import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ label, href, variant = 'primary', ...props }) {
  return (
    <Link
      className={`sg-btn sg-btn--${variant}`}
      to={href}
      {...props}
    >
      <span>{label}</span>
      <span className="sg-btn-arrow" aria-hidden="true">&rarr;</span>
    </Link>
  );
}

export default Button; 