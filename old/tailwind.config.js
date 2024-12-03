/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      headings: [
        "Lexend",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
      ],
      body: ["Inter", "sans-serif"],
    },
    extend: {
      screens: {
        "mantine-xs": "30em",
        "mantine-sm": "48em",
        "mantine-md": "64em",
        lg: "74em",
        xl: "90em",
      },
      spacing: {
        // TODO: Check if there souhldnt be em units in mantine v7
        xs: "0.625rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
