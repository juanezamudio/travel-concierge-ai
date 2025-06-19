import React from 'react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
}

const Toast: React.FC<ToastProps> = ({ message, type = 'success' }) => {
  const color =
    type === 'success' ? 'bg-green-100 text-green-700' :
    type === 'error' ? 'bg-red-100 text-red-700' :
    'bg-blue-100 text-blue-700';
  return (
    <div
      className={`fixed bottom-6 right-6 px-4 py-3 rounded shadow-lg ${color} z-50 animate-fade-in`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
};

export default Toast; 