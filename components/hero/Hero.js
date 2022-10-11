import React from "react";
import { useSelector } from "react-redux";
import HeroImage from "../UI/HeroImage";

const Hero = () => {
  const user = useSelector((state) => state.user);
  return (
    <section>
      <HeroImage data={user} category="hero" />
    </section>
  );
};

export default Hero;
