import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        text: "var(--color-text)",
        background: "var(--color-background)",
      },
      transitionDuration: {
        "2000": "2000ms", // Adiciona uma duração de transição de 2 segundos
      },
    },
  },
  plugins: [],
};
export default config;
