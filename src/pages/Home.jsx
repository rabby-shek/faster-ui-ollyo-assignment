import React from "react";
import {
  Contact,
  Footer,
  FrequentlyAsked,
  Header,
  HeroSection,
  OurWorks,
  Pricing,
  WhatWeDo,
} from "../components";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhatWeDo />
      {/* <OurWorks /> */}
      <Pricing />
      <FrequentlyAsked />
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
