import Head from "next/head";
import React from "react";
import Home from "../components/home/Home";
const index = ({ test }) => {
  console.log(test);
  return (
    <>
      <Head>
        <title>Twitter_Clone</title>
      </Head>
      <Home />
    </>
  );
};

export default index;
