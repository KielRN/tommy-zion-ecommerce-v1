import { useEffect, RefObject } from 'react';

/**
 * Custom hook to handle keyboard navigation for menus
 * @param ref React ref object pointing to the menu container element
 * @param isOpen Boolean indicating if the menu is open
 * @param onClose Function to close the menu
 */
export const useKeyboardNavigation = (
  ref: RefObject<HTMLElement>,
  isOpen: boolean,
  onClose: () => void
): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'Tab':
          // If the user is tabbing and the focus is about to leave the menu, close it
          if (!ref.current?.contains(document.activeElement)) {
            onClose();
          }
          break;
        case 'ArrowDown':
          if (ref.current) {
            event.preventDefault();
            const focusableElements = ref.current.querySelectorAll(
              'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            if (firstElement) {
              firstElement.focus();
            }
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, ref]);
};