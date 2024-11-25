import React from 'react';
import './Breadcrumb.css';

interface BreadcrumbProps {
  datas: string[];
  variant?: 'small' | 'medium' | 'large';
  customSeparator?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ datas, variant = 'medium', customSeparator = '/' }) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'small':
        return 'breadcrumb-small';
      case 'medium':
        return 'breadcrumb-medium';
      case 'large':
        return 'breadcrumb-large';
      default:
        return 'breadcrumb-medium';
    }
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className={`breadcrumb ${getVariantClass()}`}>
        {datas.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            <a href="#">{item}</a>
            {index < datas.length - 1 && <span>{customSeparator}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
