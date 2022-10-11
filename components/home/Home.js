import React from "react";
import PweetPostForm from "../pweet/PweetPostForm";
import PweetList from "../pweet/PweetList";
import Hero from "../hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <PweetPostForm />
      <PweetList category="all" />
    </>
  );
};

export default Home;
