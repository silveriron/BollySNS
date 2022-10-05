import React, { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../utility/firebase";
import Pweet from "./Pweet";

const Home = ({ userObj }) => {
  const [pweet, onChangePweet, setPweet] = useInput();
  const [pweets, setPweets] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "pweet"), (snapshot) => {
      const pweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      pweetArray.sort((a, b) => b.createAt - a.createAt);
      setPweets(pweetArray);
    });
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (pweet.length > 0) {
      try {
        await addDoc(collection(db, "pweet"), {
          text: pweet,
          createAt: Date.now(),
          creatorId: userObj.uid,
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
          placeholder="어떤 생각을 하고 계시나요?"
          type="text"
          onChange={onChangePweet}
          maxLength={120}
        />
        <input type="submit" value="Pwitter" />
      </form>
      <div>
        {pweets.map((pweet) => {
          return (
            <Pweet
              key={pweet.id}
              pweetObj={pweet}
              isOwner={pweet.creatorId === userObj.uid}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
