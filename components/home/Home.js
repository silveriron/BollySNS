import React, { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../utility/firebase";

const Home = () => {
  const [pweet, onChangePweet, setPweet] = useInput();
  const [pweets, setPweets] = useState([]);

  const getPweets = async () => {
    const data = await getDocs(collection(db, "pweet"));
    const pweetList = [];
    data.forEach((doc) => {
      const pweetObject = {
        ...doc.data(),
        id: doc.id,
      };
      pweetList.push(pweetObject);
    });
    setPweets(pweetList);
  };

  useEffect(() => {
    getPweets();
  }, []);

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
      <div>
        {pweets.map((pweet) => {
          return (
            <div key={pweet.id}>
              <p>{pweet.pweet}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
