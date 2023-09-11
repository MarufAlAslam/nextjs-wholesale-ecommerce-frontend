import Image from "next/image";
import Link from "next/link";
import { Container } from "postcss";
import React from "react";
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import ProductCard from "../product-card";

const RecentlyViewed = ({ products }) => {
    // reverse the products array to show the latest products first
    products = products.reverse();
  return (
    <div className="py-5">
      <div className="flex md:flex-row flex-col md:justify-between justify-start gap-4 md:items-center items-start">
        <h2 className="text-2xl font-[600]">
          Recently Viewed <span className="text-[#D1323D]">Products</span>
        </h2>
        <Link
          href="/collections/all"
          className="text-[#D1323D] flex justify-start items-center gap-1 text-lg"
        >
          View All <FaLongArrowAltRight className="mt-1" />
        </Link>
      </div>

      <div className="products mt-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
