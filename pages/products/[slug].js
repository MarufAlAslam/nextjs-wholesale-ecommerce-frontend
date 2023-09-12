import { Container, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import productBanner from "../../src/assets/img/product-banner.webp";
import productBanner2 from "../../src/assets/img/product-banner-2.webp";
import payment from "../../src/assets/img/payment.png";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import RelatedProducts from "../../components/related-products";
// images
import p1 from "../../src/assets/img/p1.jpg";
import p1hover from "../../src/assets/img/p1-hover.webp";
import p2 from "../../src/assets/img/p2.webp";
import p2hover from "../../src/assets/img/p2-hover.webp";
import p3 from "../../src/assets/img/p3-hover.webp";
import p4 from "../../src/assets/img/p4-hover.webp";
import p5 from "../../src/assets/img/p5.webp";
import p5hover from "../../src/assets/img/p5-hover.webp";

const ProductDetails = () => {
  const query = useRouter().query;
  const productString = query.product;
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("Yellow");
  useEffect(() => {
    if (productString) {
      setProduct(JSON.parse(productString));
    }
  }, [productString]);

  const products = [
    {
      id: 1,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      image: p1,
      hoverImage: p1hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 2,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      prevPrice: 9123,
      image: p2,
      hoverImage: p2hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 3,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      prevPrice: 11123,
      image: p3,
      hoverImage: p3,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 4,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      image: p4,
      hoverImage: p4,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 5,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      image: p5,
      hoverImage: p5hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
  ];

  return (
    <div className="product-details py-5">
      <div className="breadcrumb mb-5">
        <Container maxWidth="xl">
          <div className="breadcrumb__inner text-sm">
            <Link href="/" className="text-[#D3313D]">
              Home
            </Link>
            <span> / </span>
            <a href="/products">Products</a>
            <span> / </span>
            <span>{product.name}</span>
          </div>
        </Container>
      </div>
      <Container maxWidth="xl">
        <Image
          src={productBanner}
          alt="product banner"
          className="w-full mb-10"
        />

        <div className="flex justify-between items-start gap-10">
          <div className="md:w-5/12 w-full">
            <Image
              src={product.image}
              alt="product"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-7/12 w-full">
            <p className="text-xl mb-3">Vendor Name</p>
            <h1 className="text-[25px] font-bold mb-4">{product.name}</h1>
            <div className="flex justify-start items-center gap-4">
              <p>Product Code</p>
              <span>|</span>
              <p>In Stock - 17 left</p>
            </div>
            <p>
              {product.reviews > 0 ? (
                <span className="text-[#FFBA00] flex items-center text-sm my-2 gap-1">
                  {product.reviews} <FaStar className="mb-1" />
                </span>
              ) : (
                <span className="text-[#FFBA00]">No Reviews</span>
              )}
            </p>
            <h3 className="text-[22px] font-bold text-[#D3313D] flex gap-2">
              ৳{product.price}
              {product.prevPrice && (
                <del className="text-[gray] font-[400]">
                  ৳{product.prevPrice}
                </del>
              )}
            </h3>

            <div className="size-chart mt-5">
              <p className="text-xl font-bold mb-3">Size: {size}</p>
              <div className="flex gap-2">
                <button
                  className={`size-btn ${size === "S" && "active"}`}
                  onClick={() => setSize("S")}
                >
                  S
                </button>
                <button
                  className={`size-btn ${size === "M" && "active"}`}
                  onClick={() => setSize("M")}
                >
                  M
                </button>
                <button
                  className={`size-btn ${size === "L" && "active"}`}
                  onClick={() => setSize("L")}
                >
                  L
                </button>
                <button
                  className={`size-btn ${size === "XL" && "active"}`}
                  onClick={() => setSize("XL")}
                >
                  XL
                </button>
                <button
                  className={`size-btn ${size === "XXL" && "active"}`}
                  onClick={() => setSize("XXL")}
                >
                  XXL
                </button>
              </div>
            </div>
            <div className="size-chart mt-8">
              <p className="text-xl font-bold mb-3">Color: {color}</p>
              <div className="flex gap-2">
                <Tooltip title="Yellow" placement="top">
                  <button
                    className={`color-btn bg-yellow-500 ${
                      color === "Yellow" && "active"
                    }`}
                    onClick={() => setColor("Yellow")}
                  ></button>
                </Tooltip>
                <button
                  className={`color-btn bg-red-500 ${
                    color === "Red" && "active"
                  }`}
                  onClick={() => setColor("Red")}
                ></button>
                <button
                  className={`color-btn bg-blue-500 ${
                    color === "Blue" && "active"
                  }`}
                  onClick={() => setColor("Blue")}
                ></button>
                <button
                  className={`color-btn bg-green-500 ${
                    color === "Green" && "active"
                  }`}
                  onClick={() => setColor("Green")}
                ></button>
                <button
                  className={`color-btn bg-pink-500 ${
                    color === "Pink" && "active"
                  }`}
                  onClick={() => setColor("Pink")}
                ></button>
              </div>
            </div>

            <div className="flex mt-10 justify-between items-center gap-4">
              <div className="quantity md:w-2/12 w-full border border-gray-400 gap-4 py-2 px-4 flex justify-between items-center">
                <button className="text-3xl">-</button>
                <input
                  type="text"
                  className="text-center w-full text-xl outline-none shadow-none bg-transparent"
                  readOnly
                  value="1"
                />
                <button className="text-3xl">+</button>
              </div>
              <button className="md:w-10/12 w-full flex justify-center items-center gap-2 bg-black p-3 border-black border text-xl text-white">
                Add to Cart <FaShoppingCart />
              </button>
            </div>

            <div className="mt-5 flex justify-start items-center gap-2">
              <AiOutlineHeart /> Add to Wishlist
            </div>
            <Image src={payment} alt="payment" className="mt-5" />
          </div>
        </div>

        <div className="my-10">
          <h2 className="text-2xl font-bold mb-2">Product Details</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptatibus, quibusdam, quia, quos voluptas voluptatem
            quod quae doloribus quidem? Quisquam voluptatum, voluptatibus,
            quibusdam, quia, quos voluptas voluptatem quod quae doloribus
            quidem? Quisquam voluptatum, voluptatibus, quibusdam, quia, quos
            voluptas voluptatem quod quae doloribus quidem? Quisquam voluptatum,
            voluptatibus, quibusdam, quia, quos voluptas voluptatem quod quae
            doloribus quidem? Quisquam voluptatum, voluptatibus, quibusdam,
            quia, quos voluptas voluptatem quod quae doloribus quidem? Quisquam
            voluptatum, voluptatibus, quibusdam, quia, quos voluptas voluptatem
            quod quae doloribus quidem? Quisquam voluptatum, voluptatibus,
            quibusdam, quia, quos voluptas voluptatem quod quae doloribus
            quidem? Quisquam voluptatum, voluptatibus, quibusdam, quia, quos
            voluptas voluptatem quod quae doloribus quidem? Quisquam voluptatum,
            voluptatibus, quibusdam, quia, quos voluptas voluptatem quod quae
            doloribus quidem? Quisquam voluptatum, voluptatibus, quibusdam,
            quia, quos voluptas voluptatem quod quae doloribus quidem? Quisquam
            voluptatum, voluptatibus,
          </p>
        </div>
        <RelatedProducts products={products} />
        <Image
          src={productBanner2}
          alt="product banner"
          className="w-full my-10"
        />
      </Container>
    </div>
  );
};

export default ProductDetails;
