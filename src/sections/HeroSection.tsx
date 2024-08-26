import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";

const HeroSection = () => {
  return (
    <div className="relative overflow-x-clip py-32 md:py-48 lg:py-60">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="hero-ring size-[620px]"></div>
      <div className="hero-ring size-[820px]"></div>
      <div className="hero-ring size-[1020px]"></div>
      <div className="hero-ring size-[1220px]"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="size-[800px] border border-red-500">
          <div className="borer-green-500 inline-flex border">
            <StarIcon className="size-28 text-emerald-300" />
          </div>
        </div>
      </div>
      <div className="container"></div>
      <div className="flex flex-col items-center">
        <Image
          src={memojiImage}
          className="size-[100px]"
          alt="Person peeking behind laptop"
        />
        <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
          <div className="size-2.5 rounded-full bg-green-500"></div>
          <div className="text-sm font-medium">Available for new projects</div>
        </div>
      </div>
      <div className="mx-auto max-w-lg">
        <h1 className="mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl">
          Building Exceptional User Experiences
        </h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">
          I specialize in transforming designs into functional, high performing
          web applications. Let's discuss your next project.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center">
        <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6">
          <span className="font-semibold">Explore my work</span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900">
          <span>👋</span>
          <span className="font-semibold">Let's Connect</span>
        </button>
      </div>
    </div>
  );
};

export { HeroSection };
