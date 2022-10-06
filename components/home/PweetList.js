import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../utility/firebase";
import Pweet from "./Pweet";
import { useSelector } from "react-redux";

const PweetList = () => {
  const [pweets, setPweets] = useState([]);
  const user = useSelector((state) => state.user);

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

  return (
    <ul>
      {pweets.map((pweet) => {
        return (
          <Pweet
            key={pweet.id}
            pweetObj={pweet}
            isOwner={pweet.creatorId === user.uid}
          />
        );
      })}
    </ul>
  );
};

export default PweetList;
