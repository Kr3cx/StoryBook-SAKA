import React from 'react';
import './globals.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: 'small' | 'medium' | 'large';
  type?: 'rounded' | 'simple';
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, size = 'medium', type = 'simple', children }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    small: 'w-64',
    medium: 'w-80',
    large: 'w-96',
  };

  const typeClasses = {
    rounded: 'rounded-lg shadow-lg',
    simple: 'shadow-md',
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className={`bg-white p-6 ${sizeClasses[size]} ${typeClasses[type]} relative`}>
        <button 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" 
          onClick={onClose}
        >
          &times;
        </button>
        <div className="text-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
