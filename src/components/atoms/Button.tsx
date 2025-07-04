import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const base =
    variant === 'primary'
      ? 'btn-primary'
      : 'btn-secondary';
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button; 