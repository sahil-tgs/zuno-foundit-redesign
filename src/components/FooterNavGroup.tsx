import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Footer.css';

interface FooterNavGroupProps {
  title: string;
  children: React.ReactNode;
}

const FooterNavGroup: React.FC<FooterNavGroupProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="footer-nav-group">
      <button 
        className="footer-nav-title"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown 
          className={`chevron-icon ${isOpen ? 'open' : ''}`} 
          size={20} 
        />
      </button>
      <div className={`footer-nav-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default FooterNavGroup;