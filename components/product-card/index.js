import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <Link
      key={product.id}
      href={product.href}
      className="product-card bg-white p-2"
    >
      <div className="card relative rounded-0 overflow-hidden">
        <div className="img-holder relative overflow-hidden">
          <div className="top-left"></div>
          <div className="top-right"></div>
          <div className="bottom-left"></div>
          <div className="bottom-right"></div>
          <Image
            src={product.image}
            alt="c1"
            className="w-full h-full object-cover featured-img"
          />
          <Image
            src={product.hoverImage}
            alt="c1"
            className="w-full h-full object-cover hoverImg"
          />
        </div>
        <p className="text-sm">{product.name}</p>
        <p>
          {product.reviews > 0 ? (
            <span className="text-[#FFBA00] flex items-center text-sm my-2 gap-1">
              {product.reviews} <FaStar className="mb-1" />
            </span>
          ) : (
            <span className="text-[#FFBA00]">No Reviews</span>
          )}
        </p>
        <div className="flex justify-start items-center gap-2">
          <h2 className="text-xl font-bold text-[#D1323D]">৳{product.price}</h2>
          {product.prevPrice && (
            <del className="text-[gray]">৳{product.prevPrice}</del>
          )}
        </div>

        <hr className="my-2" />

        <div className="flex mt-4 justify-between items-center">
          <button className="bg-[#D1323D] text-white px-3 py-1 rounded-0 text-sm">
            Add to Cart
          </button>
          <button className="rounded-0 text-xl">
            <AiOutlineHeart />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
