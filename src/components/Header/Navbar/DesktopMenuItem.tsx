"use client";
import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@/types/Menu';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';

interface DesktopMenuItemProps {
  item: Menu;
  stickyHeader?: boolean;
}

const DesktopMenuItem = ({ item, stickyHeader }: DesktopMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const isActive = pathname === item.path;
  
  const hasSubmenu = !!item.submenu && item.submenu.length > 0;
  
  // Close dropdown when clicking outside
  useOutsideClick(itemRef, () => {
    if (isOpen) setIsOpen(false);
  });
  
  // Handle keyboard navigation
  useKeyboardNavigation(itemRef, isOpen, () => setIsOpen(false));
  
  const handleMouseEnter = () => {
    if (hasSubmenu) {
      setIsOpen(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (hasSubmenu) {
      setIsOpen(false);
    }
  };
  
  const handleClick = (e: React.MouseEvent) => {
    if (hasSubmenu) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };
  
  return (
    <li
      ref={itemRef}
      className={`menu-item desktop-menu-item ${isOpen ? 'desktop-menu-item-open' : ''}
                  group relative spotlight-hover film-separator before:w-0 before:h-[3px] before:bg-tommyzion-red
                  before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out
                  before:duration-200 hover:before:w-full ${isActive ? 'before:!w-full' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hasSubmenu ? (
        <>
          <a
            href="#"
            onClick={handleClick}
            className={`menu-link ${isActive ? 'menu-link-active' : ''}
                       hover:text-tommyzion-cinema-spotlight-gold text-custom-sm font-medium
                       text-white flex items-center gap-1.5 capitalize ${
                         stickyHeader ? "py-2" : "py-3"
                       }`}
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
          
          <ul
            className="desktop-submenu film-grain-light"
            role="menu"
            aria-hidden={!isOpen}
          >
            {item.submenu?.map((subItem) => (
              <li key={subItem.id} className="desktop-submenu-item" role="none">
                <Link
                  href={subItem.path || '#'}
                  className={`menu-link ${pathname === subItem.path ? 'menu-link-active' : ''}`}
                  onClick={() => setIsOpen(false)}
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
          className={`menu-link ${isActive ? 'menu-link-active' : ''}
                     hover:text-tommyzion-cinema-spotlight-gold text-custom-sm font-medium
                     text-white flex ${stickyHeader ? "py-2" : "py-3"}`}
          target={item.newTab ? '_blank' : undefined}
          rel={item.newTab ? 'noopener noreferrer' : undefined}
        >
          {item.title}
        </Link>
      )}
    </li>
  );
};

export default DesktopMenuItem;