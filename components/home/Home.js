import React from "react";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";

const Home = () => {
  const router = useRouter();
  const auth = getAuth();

  const logOutHandler = () => {
    signOut(auth);
  };
  return (
    <>
      <div>Home</div>
      <button onClick={logOutHandler}>Log out</button>
    </>
  );
};

export default Home;
