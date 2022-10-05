import React from "react";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";

const profile = () => {
  const router = useRouter();
  const auth = getAuth();

  const logOutHandler = () => {
    signOut(auth);
    router.push("/");
  };

  return (
    <div>
      <button onClick={logOutHandler}>Sign out</button>
    </div>
  );
};

export default profile;
