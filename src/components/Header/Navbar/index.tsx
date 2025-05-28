"use client";
import { useState, useEffect } from 'react';
import { menuData } from '../menuData';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

interface NavbarProps {
  stickyHeader?: boolean;
}

const Navbar = ({ stickyHeader }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (isDesktop && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isDesktop, isMobileMenuOpen]);

  // Close mobile menu when user navigates to a new page
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="flex items-center justify-between">
        {/* Desktop Menu */}
        <DesktopMenu 
          menuItems={menuData}
          stickyHeader={stickyHeader}
        />
        
        {/* Mobile Menu Toggle Button */}
        <button
          className={`navbar-menu-button ${isMobileMenuOpen ? 'navbar-menu-button-open' : ''} lg:hidden`}
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-menu-button-line"></span>
          <span className="navbar-menu-button-line"></span>
          <span className="navbar-menu-button-line"></span>
        </button>
        
        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          menuItems={menuData}
        />
      </div>
    </div>
  );
};

export default Navbar;