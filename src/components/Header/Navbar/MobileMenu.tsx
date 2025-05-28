"use client";
import { useRef, useEffect } from 'react';
import { Menu } from '@/types/Menu';
import MobileMenuItem from './MobileMenuItem';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: Menu[];
}

const MobileMenu = ({ isOpen, onClose, menuItems }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Close menu when clicking outside
  useOutsideClick(menuRef, () => {
    if (isOpen) onClose();
  });
  
  // Handle keyboard navigation
  useKeyboardNavigation(menuRef, isOpen, onClose);

  // Add body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}
      role="navigation"
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
    >
      <ul>
        {menuItems.map((item) => (
          <MobileMenuItem 
            key={item.id} 
            item={item} 
            onLinkClick={onClose}
          />
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;