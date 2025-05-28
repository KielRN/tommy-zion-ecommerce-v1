import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive behavior based on media queries
 * @param query CSS media query string (e.g., '(min-width: 768px)')
 * @returns boolean indicating if the media query matches
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    
    // Initial check
    setMatches(media.matches);

    // Setup listener for changes
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);

    // Cleanup
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};