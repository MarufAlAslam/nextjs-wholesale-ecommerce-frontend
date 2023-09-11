import Image from "next/image";
import React from "react";
import hero from "../../src/assets/img/banner.webp";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero h-full relative">
      <Image src={hero} alt="hero" className="w-full h-full object-cover" />
      <div
        className="overlay absolute z-10 top-0 bg-black bg-opacity-50 h-full flex flex-col justify-center items-start gap-3 p-10 w-full"
      >
        <h1 className="text-5xl font-bold text-white">Automobile</h1>
        <p className="text-white">
          We provide the best automobile services in the city
        </p>
        <Link href="/" className="bg-[#D1323D] text-white px-10 py-2 mt-6">Shop Now</Link>
      </div>
    </div>
  );
};

export default Hero;
