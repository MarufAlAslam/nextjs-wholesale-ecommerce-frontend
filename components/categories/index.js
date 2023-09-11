import React from "react";
import c1 from "../../src/assets/img/c1.png";
import c2 from "../../src/assets/img/c2.png";
import c3 from "../../src/assets/img/c3.png";
import c4 from "../../src/assets/img/c4.png";
import c5 from "../../src/assets/img/c5.png";
import c6 from "../../src/assets/img/c6.png";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Office Supplies",
      image: c1,
      href: "/office-supplies",
    },
    {
      id: 2,
      name: "Power Tools",
      image: c2,
      href: "/power-tools",
    },
    {
      id: 3,
      name: "Pumps",
      image: c3,
      href: "/pumps",
    },
    {
      id: 4,
      name: "Welding",
      image: c4,
      href: "/welding",
    },
    {
      id: 5,
      name: "Cleaning",
      image: c5,
      href: "/cleaning",
    },
    {
      id: 6,
      name: "Safety",
      image: c6,
      href: "/safety",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pb-5">
      {categories.map((category) => (
        <Link key={category.id} href={"/collections/"+category.href} className="bg-white shadow-md category-card">
          <div className="card relative rounded-0">
            <Image src={category.image} alt="c1" className="w-full h-full object-cover" />
            <div className="overlay h-full w-full absolute z-20 top-0 left-0 flex justify-start items-end p-5 ">
              <h2 className="text-xl text-black font-[500]">{category.name}</h2>
            </div>
          </div>
          <div className="bg-white p-4 flex justify-between items-center">
            <p>See Whole Collection</p>
            <FaChevronRight />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
