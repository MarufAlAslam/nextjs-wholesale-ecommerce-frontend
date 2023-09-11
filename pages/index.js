import { Container } from "@mui/material";
import React from "react";
import Hero from "../components/hero";
import Offers from "../components/offers";
import Categories from "../components/categories";
import BestSelling from "../components/best-selling";


// images
import p1 from "../src/assets/img/p1.jpg";
import p1hover from "../src/assets/img/p1-hover.webp";
import p2 from "../src/assets/img/p2.webp";
import p2hover from "../src/assets/img/p2-hover.webp";
import p3 from "../src/assets/img/p3-hover.webp";
import p4 from "../src/assets/img/p4-hover.webp";
import p5 from "../src/assets/img/p5.webp";
import p5hover from "../src/assets/img/p5-hover.webp";
import RecentlyViewed from "../components/recently-viewed";

const Home = () => {
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
    }
  ]
  return (
    <div className="homepage pt-5">
      <Container maxWidth="xl">
        <div className="flex justify-between items-center gap-3 pb-6">
          <div className="w-[85%] h-full">
            <Hero className="w-full" />
          </div>
          <div className="w-[15%]">
            <Offers/>
          </div>
        </div>
        <Categories/>
        <BestSelling products={products}/>
        <RecentlyViewed products={products}/>
      </Container>
    </div>
  );
};

export default Home;
