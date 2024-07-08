import { Hero } from "@/components/Hero";
import { Info } from "@/components/Info";
import { Section } from "@/components/Section";

interface DataProps {
  name: string;
  firstText: string;
  secondText: string;
  imageUrl: string;
  videoUrl: string | undefined;
  images: string[];
}
[];

export default async function Home() {
  const response = await fetch("http://localhost:3001/data");
  const data = await response.json();

  if (!data) throw new Error("Erro ao trazer os dados.");

  return (
    <>
      <Hero />
      <Info />
      {data.map((data: DataProps, index: number) => (
        <Section
          key={data.name}
          name={data.name}
          imageUrl={data.imageUrl}
          videoUrl={data.videoUrl}
          firstText={data.firstText}
          secondText={data.secondText}
          images={data.images}
          invert={index % 2 !== 0}
          originalAnimation={index % 2 !== 0}
        />
      ))}
    </>
  );
}
