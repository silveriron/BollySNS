import React from "react";
import { useSelector } from "react-redux";
import HeroImage from "./HeroImage";

const Hero = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <HeroImage data={user} category="hero" size="100" />
    </>
  );
};

export default Hero;
