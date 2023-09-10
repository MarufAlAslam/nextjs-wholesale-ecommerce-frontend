import { Container } from "@mui/material";
import React from "react";
import Hero from "../components/hero";
import Offers from "../components/offers";

const Home = () => {
  return (
    <div className="homepage">
      <Container maxWidth="xl">
        <div className="flex justify-between items-center gap-3 pb-6">
          <div className="w-[85%] h-full">
            <Hero className="w-full" />
          </div>
          <div className="w-[15%]">
            <Offers/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
