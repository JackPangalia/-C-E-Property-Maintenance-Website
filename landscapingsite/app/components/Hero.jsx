import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[85vh] overflow-hidden ">
      <Image
        src="/hero_house.jpg"
        alt="img"
        width="1920"
        height="1080"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 flex items-start justify-center flex-col">
        <h2 className=" text-white rounded-full lg:text-6xl md:text-5xl  text-4xl transition-all duration-300 lg:ml-[15rem] md:ml-[8rem] ml-[1rem]">
          Elevate Your Property
        </h2>
        <Link href = '#contact' className = 'lg:ml-[15rem] md:ml-[8rem] ml-[1rem] text-white border-[1px] lg:px-10 lg:py-2 md:px-8 md:py-1 py-1 px-4 mt-4 md:text-lg hover:bg-black hover:bg-opacity-30 transition-all duration-300'>Get a quote</Link>
      </div>
    </section>
  );
}
