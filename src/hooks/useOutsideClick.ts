import { useEffect, RefObject } from 'react';

/**
 * Custom hook to detect clicks outside of a specified element
 * @param ref React ref object pointing to the element to monitor
 * @param callback Function to call when a click outside is detected
 */
export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: () => void
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};