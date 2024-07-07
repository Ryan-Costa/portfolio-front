import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="w-full h-[80vh] flex items-center bg-bg-hero justify-center overflow-hidden">
        <div className="animate-slide-in-from-left">
          <h1 className="text-7xl text-black font-bold">
            Hi, I&apos;m
            <br />
            <span>Ryan Costa</span>
          </h1>
        </div>
        <Image
          src="https://iili.io/dKmV8U7.png"
          alt="Hero Ryan"
          width={550}
          height={550}
        />
      </div>
    </>
  );
};
