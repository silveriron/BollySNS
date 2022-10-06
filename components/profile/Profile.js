import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../../utility/firebase";
import { useSelector } from "react-redux";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../utility/firebase";
import Pweet from "../home/Pweet";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";

const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [pweets, setPweets] = useState();

  useEffect(() => {
    const myPweetRef = collection(db, "pweet");
    const q = query(myPweetRef, where("creatorId", "==", user.uid));
    onSnapshot(q, (snapshot) => {
      const pweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      pweetArray.sort((a, b) => b.createAt - a.createAt);
      setPweets(pweetArray);
    });
  });

  const logOutHandler = () => {
    signOut(auth);
    dispatch(userActions.isLogin());
    router.push("/");
  };

  return (
    <div>
      <button onClick={logOutHandler}>Sign out</button>
      {pweets &&
        pweets.map((pweet) => (
          <Pweet key={pweet.id} pweetObj={pweet} isOwner={true} />
        ))}
    </div>
  );
};

export default Profile;
