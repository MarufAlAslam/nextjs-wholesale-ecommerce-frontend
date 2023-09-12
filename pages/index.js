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
import WheelsTires from "../components/wheels-and-tires";
import Lighting from "../components/lighting";
import Interior from "../components/interior";
import AudioAndElectronics from "../components/audio-and-electronics";

const Home = () => {
  const products = [
    {
      id: 1,
      vendor: "AF",
      code: "AF-123",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["red", "blue", "green", "yellow", "pink"],
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      details: "package includes: 1pc car body cover, 1pc carry bag, 1pc steel cable, 1pc lock, 1pc antenna patch, 1pc buckle, 1pc warranty card, 1pc manual. 100% waterproof, protects from dust, dents and dings uv ray protection (uv rays cause paint fading). very light and easily handled. matches body profile perfectly. clamp mechanism. elegant silver color. body covers are mainly used to protect two wheelers from weather extremes, fading away from sunlight, scratching etc. they are mainly designed to provide all weather protection to two wheeler body parts. body covers are designed for everyday indoor use, long term storage and outdoor use. features: high quality fabric. water resistant. all weather cover. tie-strap mechanism to hold cover in place. covers entire body of the bike. extremely lightweight and durable. note: do not use the cover on bike which has been recently ridden. this may cause damage to the cover.",
      availability: "In Stock",
      availableQuantity: 10,
      reviews: 4,
      price: 8123,
      image: p1,
      hoverImage: p1hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 2,
      vendor: "AF",
      code: "AF-123",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["red", "blue", "green", "yellow", "pink"],
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      details: "package includes: 1pc car body cover, 1pc carry bag, 1pc steel cable, 1pc lock, 1pc antenna patch, 1pc buckle, 1pc warranty card, 1pc manual. 100% waterproof, protects from dust, dents and dings uv ray protection (uv rays cause paint fading). very light and easily handled. matches body profile perfectly. clamp mechanism. elegant silver color. body covers are mainly used to protect two wheelers from weather extremes, fading away from sunlight, scratching etc. they are mainly designed to provide all weather protection to two wheeler body parts. body covers are designed for everyday indoor use, long term storage and outdoor use. features: high quality fabric. water resistant. all weather cover. tie-strap mechanism to hold cover in place. covers entire body of the bike. extremely lightweight and durable. note: do not use the cover on bike which has been recently ridden. this may cause damage to the cover.",
      availability: "In Stock",
      availableQuantity: 10,
      reviews: 4,
      price: 8123,
      prevPrice: 9123,
      image: p2,
      hoverImage: p2hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 3,
      vendor: "AF",
      code: "AF-123",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["red", "blue", "green", "yellow", "pink"],
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      details: "package includes: 1pc car body cover, 1pc carry bag, 1pc steel cable, 1pc lock, 1pc antenna patch, 1pc buckle, 1pc warranty card, 1pc manual. 100% waterproof, protects from dust, dents and dings uv ray protection (uv rays cause paint fading). very light and easily handled. matches body profile perfectly. clamp mechanism. elegant silver color. body covers are mainly used to protect two wheelers from weather extremes, fading away from sunlight, scratching etc. they are mainly designed to provide all weather protection to two wheeler body parts. body covers are designed for everyday indoor use, long term storage and outdoor use. features: high quality fabric. water resistant. all weather cover. tie-strap mechanism to hold cover in place. covers entire body of the bike. extremely lightweight and durable. note: do not use the cover on bike which has been recently ridden. this may cause damage to the cover.",
      availability: "In Stock",
      availableQuantity: 10,
      reviews: 4,
      price: 8123,
      prevPrice: 11123,
      image: p3,
      hoverImage: p3,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 4,
      vendor: "AF",
      code: "AF-123",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["red", "blue", "green", "yellow", "pink"],
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      details: "package includes: 1pc car body cover, 1pc carry bag, 1pc steel cable, 1pc lock, 1pc antenna patch, 1pc buckle, 1pc warranty card, 1pc manual. 100% waterproof, protects from dust, dents and dings uv ray protection (uv rays cause paint fading). very light and easily handled. matches body profile perfectly. clamp mechanism. elegant silver color. body covers are mainly used to protect two wheelers from weather extremes, fading away from sunlight, scratching etc. they are mainly designed to provide all weather protection to two wheeler body parts. body covers are designed for everyday indoor use, long term storage and outdoor use. features: high quality fabric. water resistant. all weather cover. tie-strap mechanism to hold cover in place. covers entire body of the bike. extremely lightweight and durable. note: do not use the cover on bike which has been recently ridden. this may cause damage to the cover.",
      availability: "In Stock",
      availableQuantity: 10,
      reviews: 4,
      price: 8123,
      image: p4,
      hoverImage: p4,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
    {
      id: 5,
      vendor: "AF",
      code: "AF-123",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["red", "blue", "green", "yellow", "pink"],
      name: "AF Premium SIlber Car Body Cover for Nissan SUNNY",
      details: "package includes: 1pc car body cover, 1pc carry bag, 1pc steel cable, 1pc lock, 1pc antenna patch, 1pc buckle, 1pc warranty card, 1pc manual. 100% waterproof, protects from dust, dents and dings uv ray protection (uv rays cause paint fading). very light and easily handled. matches body profile perfectly. clamp mechanism. elegant silver color. body covers are mainly used to protect two wheelers from weather extremes, fading away from sunlight, scratching etc. they are mainly designed to provide all weather protection to two wheeler body parts. body covers are designed for everyday indoor use, long term storage and outdoor use. features: high quality fabric. water resistant. all weather cover. tie-strap mechanism to hold cover in place. covers entire body of the bike. extremely lightweight and durable. note: do not use the cover on bike which has been recently ridden. this may cause damage to the cover.",
      availability: "In Stock",
      availableQuantity: 10,
      reviews: 4,
      price: 8123,
      image: p5,
      hoverImage: p5hover,
      href: "/products/af-premium-silber-car-body-cover-for-nissan-sunny",
    },
  ];
  return (
    <div className="homepage pt-5">
      <Container maxWidth="xl">
        <div className="flex justify-between items-center gap-3 pb-6">
          <div className="w-[85%] h-full">
            <Hero className="w-full" />
          </div>
          <div className="w-[15%]">
            <Offers />
          </div>
        </div>
        <Categories />
        <BestSelling products={products} />
        <RecentlyViewed products={products} />
        <WheelsTires products={products} />
        <Lighting products={products} />
        <Interior products={products} />
        <AudioAndElectronics products={products} />
      </Container>
    </div>
  );
};

export default Home;
