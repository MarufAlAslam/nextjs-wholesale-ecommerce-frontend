import { Container } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
// images
import p1 from "../../src/assets/img/p1.jpg";
import p1hover from "../../src/assets/img/p1-hover.webp";
import p2 from "../../src/assets/img/p2.webp";
import p2hover from "../../src/assets/img/p2-hover.webp";
import p3 from "../../src/assets/img/p3-hover.webp";
import p4 from "../../src/assets/img/p4-hover.webp";
import p5 from "../../src/assets/img/p5.webp";
import p5hover from "../../src/assets/img/p5-hover.webp";
import ProductCard from "../../components/product-card";

const Collections = () => {
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
    {
      id: 6,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      image: p1,
      hoverImage: p1hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 7,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      prevPrice: 9123,
      image: p2,
      hoverImage: p2hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 8,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      prevPrice: 11123,
      image: p3,
      hoverImage: p3,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 9,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      image: p4,
      hoverImage: p4,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 10,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      image: p5,
      hoverImage: p5hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 11,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      image: p1,
      hoverImage: p1hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 12,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      prevPrice: 9123,
      image: p2,
      hoverImage: p2hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 13,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      prevPrice: 11123,
      image: p3,
      hoverImage: p3,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 14,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      image: p4,
      hoverImage: p4,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 15,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      image: p5,
      hoverImage: p5hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 16,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      image: p1,
      hoverImage: p1hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 17,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      prevPrice: 9123,
      image: p2,
      hoverImage: p2hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 18,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      prevPrice: 11123,
      image: p3,
      hoverImage: p3,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 19,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      image: p4,
      hoverImage: p4,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 20,
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      reviews: 4,
      price: 8123,
      image: p5,
      hoverImage: p5hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
  ];
  // get the slug from the url
  const { slug } = useRouter().query;
  return (
    <div className="collection-page py-10">
      <Container maxWidth="xl">
        <h2 className="text-3xl font-bold mb-5">{slug}</h2>
        <div className="products mt-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </Container>
    </div>
  );
};

export default Collections;
