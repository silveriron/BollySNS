import React from "react";
import useInput from "../../hooks/useInput";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utility/firebase";

const Home = () => {
  const [pweet, onChangePweet, setPweet] = useInput();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (pweet.length > 0) {
      try {
        await addDoc(collection(db, "pweet"), {
          pweet,
          createAt: Date.now(),
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    setPweet("");
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          value={pweet}
          placeholder="무슨 생각하고 계시나요?"
          type="text"
          onChange={onChangePweet}
          maxLength={120}
        />
        <input type="submit" value="Pwitter" />
      </form>
    </>
  );
};

export default Home;
