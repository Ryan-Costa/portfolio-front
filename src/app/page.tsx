import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

export default async function Home() {
  const response = await fetch("https://api.github.com/users/Ryan-Costa/repos");
  const repositories = await response.json();

  console.log(repositories);

  return (
    <>
      <Hero />
      {repositories.map((repo: any) => (
        <Section
          key={repo.id}
          name={repo.name}
          description={repo.description}
          language={repo.language}
        />
      ))}
    </>
  );
}
