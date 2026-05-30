export const COLORS = {
  primary: {
    dark: "#131313",
    DEFAULT: "#131313",
    light: "#333333",
  },
  background: {
    DEFAULT: "#EDEDED",
    hero: "#F7F9FC",
    warm: "#F0EBE1",
  },
  accent: {
    DEFAULT: "#8931C4",
    hover: "rgba(137, 49, 196, 0.9)",
  },
  text: {
    primary: "#0A0C10",
    muted: "#4A5568",
    inverse: "#FFFFFF",
  },
  border: {
    DEFAULT: "#D6D6D6",
    light: "rgba(255, 255, 255, 0.2)",
  },
} as const;

export const SPACING = {
  section: {
    desktop: "140px",
    tablet: "96px",
    mobile: "72px",
  }
} as const;

export const CONTAINER_SIZES = {
  max: "1440px",
  content: "1024px",
  reading: "768px",
} as const;

export const RADII = {
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "40px",
  full: "9999px",
} as const;
