import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        text: "var(--color-text)",
        background: "var(--color-background)",
        "bg-hero": "var(--color-bg-hero)",
      },
      transitionDuration: {
        "2000": "2000ms", // Adiciona uma duração de transição de 2 segundos
      },
      keyframes: {
        slideInFromLeft: {
          "0%": {
            transform: "translateX(-100%)", // Certifique-se que está em minúsculas e correto
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-in-from-left": "slideInFromLeft 2s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
