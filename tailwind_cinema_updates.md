# Tailwind Configuration Updates for Cinema Theme

The following changes to the `tailwind.config.ts` file will implement the cinema-themed color palette and styling options:

```typescript
// Add to the existing colors section
colors: {
  current: "currentColor",
  transparent: "transparent",
  white: "#FFFFFF",
  // ... existing colors ...
  
  // Enhanced tommyzion colors with cinema theme
  tommyzion: {
    // Existing colors
    black: {
      DEFAULT: "#000000",
      rich: "#1A1A1A",
      charcoal: "#2D2D2D"
    },
    red: {
      DEFAULT: "#8B0000",
      crimson: "#A50000",
      bright: "#FF0000",
      light: "#FF4444"
    },
    metallic: {
      silver: "#C0C0C0",
      gold: "#B8860B",
      slate: "#708090"
    },
    // New cinema-themed colors
    cinema: {
      // Dark theater-inspired colors
      theater: {
        dark: "#121212",      // Dark theater walls
        seats: "#2C1A1A",     // Dark red theater seats
        curtain: "#571D1D",   // Theater curtain red
      },
      // Film-inspired colors
      film: {
        strip: "#333333",     // Film strip color
        frame: "#DDD6C9",     // Vintage film frame
        silver: "#E5E5E5",    // Silver screen
      },
      // Spotlight/Premiere colors
      spotlight: {
        gold: "#FFD700",      // Award/Oscar gold
        red: "#CC0000",       // Red carpet
        flash: "#FFFAFA",     // Camera flash
      }
    }
  },
},

// Add to the extend section
extend: {
  // ... existing extensions ...
  
  // Cinema-themed extensions
  backgroundImage: {
    'film-grain': "url('/images/textures/film-grain.png')",
    'theater-curtain': "url('/images/textures/theater-curtain.png')",
    'film-strip': "url('/images/textures/film-strip.png')",
  },
  
  // Cinema-themed box shadows
  boxShadow: {
    // ... existing shadows ...
    'spotlight': '0 0 20px 10px rgba(255, 255, 255, 0.25)',
    'spotlight-gold': '0 0 15px 5px rgba(255, 215, 0, 0.3)',
    'poster': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.2)',
    'marquee': '0 0 10px 2px rgba(204, 0, 0, 0.5), 0 0 15px 5px rgba(255, 215, 0, 0.3)',
  },
  
  // Animation keyframes for cinema effects
  keyframes: {
    flicker: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.9' },
    },
    projector: {
      '0%, 100%': { opacity: '0.95' },
      '50%': { opacity: '1' },
    },
    marquee: {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(-100%)' },
    }
  },
  
  // Animation definitions
  animation: {
    'flicker': 'flicker 0.5s ease-in-out infinite',
    'projector': 'projector 3s ease-in-out infinite',
    'marquee': 'marquee 25s linear infinite',
  },
  
  // Border styles for film strip effects
  borderWidth: {
    'film': '8px',
  },
  
  // Border radius for movie poster styling
  borderRadius: {
    'poster': '0.375rem',
  },
}
```

## Custom Utilities to Add

Add these custom utilities to your CSS to create cinema-specific effects:

```css
@layer utilities {
  /* Film grain overlay effect */
  .film-grain-overlay {
    position: relative;
  }
  
  .film-grain-overlay::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/textures/film-grain.png');
    opacity: 0.05;
    pointer-events: none;
    z-index: 10;
  }
  
  /* Letterbox effect for cinematic framing */
  .letterbox {
    position: relative;
    padding-top: 5%;
    padding-bottom: 5%;
  }
  
  .letterbox::before,
  .letterbox::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 5%;
    background-color: #000000;
    z-index: 5;
  }
  
  .letterbox::before {
    top: 0;
  }
  
  .letterbox::after {
    bottom: 0;
  }
  
  /* Theater curtain background */
  .theater-bg {
    background-color: #2C1A1A;
    background-image: url('/images/textures/theater-curtain.png');
    background-size: cover;
  }
  
  /* Film strip border */
  .film-strip-border {
    border-style: solid;
    border-width: 8px;
    border-image: url('/images/textures/film-strip.png') 8 repeat;
  }
  
  /* Movie poster styling */
  .movie-poster {
    @apply relative overflow-hidden rounded-poster shadow-poster;
  }
  
  /* Star rating styling */
  .star-rating .star {
    @apply text-tommyzion-cinema-spotlight-gold;
  }
  
  /* Ticket-styled button */
  .ticket-btn {
    @apply relative px-6 py-3 bg-tommyzion-red rounded-lg overflow-hidden;
  }
  
  .ticket-btn::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -5px;
    width: 10px;
    background-image: radial-gradient(circle, white 1px, transparent 1.5px);
    background-size: 10px 5px;
    background-repeat: repeat-y;
  }
  
  .ticket-btn::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: -5px;
    width: 10px;
    background-image: radial-gradient(circle, white 1px, transparent 1.5px);
    background-size: 10px 5px;
    background-repeat: repeat-y;
  }
}
```

## Required Assets

To implement these effects, you'll need to create the following texture assets:

1. `/images/textures/film-grain.png` - A subtle film grain texture
2. `/images/textures/theater-curtain.png` - A red theater curtain texture
3. `/images/textures/film-strip.png` - A film strip border texture

## Implementation Notes

1. The texture files should be created or sourced and placed in the public directory.
2. Some effects may need to be optimized for performance on mobile devices.
3. Consider creating React components for reusable cinema effects like film strips and star ratings.
4. For the best visual impact, these effects should be applied selectively rather than to the entire site.