import Head from "next/head";
import React from "react";
import Home from "../components/home/Home";
const index = () => {
  return (
    <>
      <Head>
        <title>BollySNS</title>
        <meta property="og:title" content="BollySNS" />
        <meta
          property="og:description"
          content="볼리SNS는 사랑하는 애완동물의 이야기를 서로 자랑할 수 있는 소셜 네트워크 서비스입니다."
        />
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/twitter-clone-2ca69.appspot.com/o/public%2FogImage.jpg?alt=media&token=744ac12d-de6e-47a5-8efd-bae8f96f1bab"
        />
      </Head>
      <Home />
    </>
  );
};

export default index;
