import { Hero } from "@/components/Hero";
import ImageToVideo from "@/components/ImageToVideo";
import { Section } from "@/components/Section";
import Image from "next/image";

interface DataProps {
  name: string;
  description: string;
  imageUrl: string;
  videoUrl: string | undefined;
}
[];

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/data");
  const data = await response.json();

  if (!data) throw new Error("Erro ao trazer os dados.");

  return (
    <>
      <Hero />

      {data.map((data: DataProps, index: number) => (
        <Section
          key={data.name}
          name={data.name}
          imageUrl={data.imageUrl}
          videoUrl={data.videoUrl}
          description={data.description}
          invert={index % 2 !== 0}
        />
      ))}
    </>
  );
}
