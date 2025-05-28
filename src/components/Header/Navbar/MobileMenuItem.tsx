"use client";
import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@/types/Menu';

interface MobileMenuItemProps {
  item: Menu;
  onLinkClick: () => void;
}

const MobileMenuItem = ({ item, onLinkClick }: MobileMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === item.path;
  
  const toggleSubmenu = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <li className={`mobile-menu-item ${isOpen ? 'mobile-menu-item-open' : ''}`}>
      {item.submenu ? (
        <>
          <a
            href="#"
            onClick={toggleSubmenu}
            className={`menu-link ${isActive ? 'menu-link-active' : ''}`}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            {item.title}
            <svg
              className="dropdown-icon"
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.95363 5.67461C3.13334 5.46495 3.44899 5.44067 3.65866 5.62038L7.99993 9.34147L12.3412 5.62038C12.5509 5.44067 12.8665 5.46495 13.0462 5.67461C13.2259 5.88428 13.2017 6.19993 12.992 6.37964L8.32532 10.3796C8.13808 10.5401 7.86178 10.5401 7.67453 10.3796L3.00787 6.37964C2.7982 6.19993 2.77392 5.88428 2.95363 5.67461Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <ul className="mobile-submenu" role="menu">
            {item.submenu.map((subItem) => (
              <li key={subItem.id} className="mobile-submenu-item" role="none">
                <Link
                  href={subItem.path || '#'}
                  className={`menu-link ${pathname === subItem.path ? 'menu-link-active' : ''}`}
                  onClick={onLinkClick}
                  role="menuitem"
                >
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link
          href={item.path || '#'}
          className={`menu-link ${isActive ? 'menu-link-active' : ''}`}
          onClick={onLinkClick}
        >
          {item.title}
        </Link>
      )}
    </li>
  );
};

export default MobileMenuItem;