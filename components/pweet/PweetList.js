import React, { useState, useEffect } from "react";
import PweetDetail from "./PweetDetail";
import { useSelector } from "react-redux";
import getPweet from "../../utility/getPweet";
import getUser from "../../utility/getUser";

const PweetList = ({ category }) => {
  const [pweets, setPweets] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    getUser().then((user) => {
      getPweet(category, setPweets, user);
    });
  }, [category]);

  return (
    <ul>
      {pweets.map((pweet) => {
        return <PweetDetail key={pweet.id} pweetObj={pweet} user={user} />;
      })}
    </ul>
  );
};

export default PweetList;
