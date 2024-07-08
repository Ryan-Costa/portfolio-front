import Image from "next/image";
import { Title } from "../Title";

export const Hero = () => {
  return (
    <>
      <div className="w-full h-[85vh] flex items-center bg-bg-hero justify-center overflow-hidden">
        <Title />
        <Image
          src="https://iili.io/dKmV8U7.png"
          alt="Hero Ryan"
          width={550}
          height={550}
          className="-mb-10"
        />
      </div>
    </>
  );
};
