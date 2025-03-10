import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#D4AF37", // Soft Gold
          secondary: "#8B0000", // Deep Red
          interactive: "#000080", // Navy Blue
        },
        background: {
          main: "#FAF9F6", // Off-White
          card: "#FFFFFF", // White
        },
        text: {
          primary: "#333333", // Dark Gray
          secondary: "#4F4F4F", // Lighter Dark Gray
        },
        utility: {
          lightGray: "#E0E0E0",
          border: "#D3D3D3",
        },
        alternative: {
          primaryDark: "#B8860B", // Dark Goldenrod
          primaryLight: "#EAC117", // Lighter Gold
          secondaryBright: "#DC143C", // Crimson
          secondaryDark: "#800000", // Maroon
          interactiveLight: "#4169E1", // Royal Blue
          interactiveDark: "#00008B", // Dark Blue
          backgroundWarm: "#FDF5E6", // Old Lace
          backgroundCool: "#F8F8FF", // Ghost White
          cardSoft: "#F5F5F5", // White Smoke
          textDark: "#1C1C1C",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
