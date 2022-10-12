import React from "react";
import { useSelector } from "react-redux";
import HeroImage from "../UI/HeroImage";

const Hero = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <HeroImage data={user} category="hero" />
    </>
  );
};

export default Hero;
