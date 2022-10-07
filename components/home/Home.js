import React from "react";
import PweetPostForm from "./PweetPostForm";
import PweetList from "./PweetList";

const Home = () => {
  return (
    <>
      <PweetPostForm />
      <PweetList category="all" />
    </>
  );
};

export default Home;
