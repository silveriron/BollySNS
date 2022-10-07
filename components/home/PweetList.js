import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../utility/firebase";
import Pweet from "./Pweet";
import { useSelector } from "react-redux";
import getPweet from "../../utility/getPweet";

const PweetList = ({ category }) => {
  const [pweets, setPweets] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    getPweet(category, setPweets, user);
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
