import React from 'react';

interface ToastProps {
  variant: 'success' | 'danger' | 'warning';
  size: 'small' | 'medium' | 'large';
  type: 'notification' | 'information';
  message: string;
  subMessage?: string;
  time?: string;
}

const Toast: React.FC<ToastProps> = ({ variant, size, type, message, subMessage, time }) => {
  const baseStyles = `p-4 rounded-lg shadow-md flex items-start space-x-3`;

  const variantStyles = {
    success: 'bg-green-100 border-green-500 text-green-800',
    danger: 'bg-red-100 border-red-500 text-red-800',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-800',
  };

  const sizeStyles = {
    small: 'w-64',
    medium: 'w-80',
    large: 'w-95',
  };

  const icon = {
    success: '✅',
    danger: '❌',
    warning: '⚠️',
    notification: '🔔',
    information: 'ℹ️',
  };

  return (
    <div className="flex justify-center">
    <div className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}>
      <div className="flex-shrink-0">
        <span className="text-xl">{icon[type]}</span>
      </div>
      <div className="flex-1">
        <div className="font-bold">{message}</div>
        {subMessage && <div className="text-sm">{subMessage}</div>}
        {time && <div className="text-xs text-gray-500">{time}</div>}
      </div>
      <button className="text-gray-600 hover:text-black ml-auto">✖️</button>
    </div>
    </div>
  );
};

export default Toast;
