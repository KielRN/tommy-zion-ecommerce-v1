"use client";
import { Menu } from '@/types/Menu';
import DesktopMenuItem from './DesktopMenuItem';

interface DesktopMenuProps {
  menuItems: Menu[];
  stickyHeader?: boolean;
}

const DesktopMenu = ({ menuItems, stickyHeader }: DesktopMenuProps) => {
  return (
    <div
      className="desktop-menu"
      role="navigation"
      aria-label="Desktop navigation"
    >
      <ul className="flex items-center gap-4">
        {menuItems.map((item) => (
          <DesktopMenuItem 
            key={item.id} 
            item={item} 
            stickyHeader={stickyHeader}
          />
        ))}
      </ul>
    </div>
  );
};

export default DesktopMenu;