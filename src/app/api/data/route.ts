import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      name: "Sobre",
      imageUrl: "https://iili.io/dKm00zl.jpg",
      videoUrl: "/video-hobby.mp4",
      description:
        "Desenvolvedor Front-end especializado em criação e desenvolvimento de páginas web e aplicativos, experiência com NextJS, React, React Native, proficiência com HTML e CSS, vivência com Sass, Tailwindcss e Styled-components. Contato diário com Typescript, Figma, Git, metodologia ágil (Scrum). Sou proativo, colaborativo, trabalho bem em equipe e tenho boa comunicação.",
    },
    {
      name: "Hobbies",
      imageUrl: "https://iili.io/dKm00zl.jpg",
      videoUrl: "/video-hobby.mp4",
      description: "Desenvolvedor.",
    },
    {
      name: "Motivações",
      imageUrl: "https://iili.io/dKm00zl.jpg",
      description:
        "Desenvolvedor ASHUASHSAUHSAUSAHUSAHUSAHSAU AHSUAHSUAHSAUSH.",
    },
  ]);
}
