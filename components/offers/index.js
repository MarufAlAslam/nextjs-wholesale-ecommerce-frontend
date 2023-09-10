import React from "react";
import o1 from "../../src/assets/img/1.png";
import o2 from "../../src/assets/img/2.png";
import o3 from "../../src/assets/img/3.png";
import Link from "next/link";
import Image from "next/image";

const Offers = () => {
  const offers = [
    {
      img: o1,
      href: "/offer/1",
    },
    {
      img: o2,
      href: "/offer/2",
    },
    {
      img: o3,
      href: "/offer/3",
    },
  ];
  return (
    <div className="flex flex-col gap-3 justify-between items-center">
      {offers.map((offer, index) => (
        <Link href={offer.href} key={index} className="offer border border-gray-300">
          <Image src={offer.img} alt="offer" className="w-full object-contain" />
        </Link>
      ))}
    </div>
  );
};

export default Offers;
