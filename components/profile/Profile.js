import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signOut, updateProfile } from "firebase/auth";
import { auth } from "../../utility/firebase";
import { useSelector } from "react-redux";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../utility/firebase";
import Pweet from "../home/Pweet";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import useInput from "../../hooks/useInput";

const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [pweets, setPweets] = useState();
  const [newUserName, onChangeUserName] = useInput(user.name);

  useEffect(() => {
    if (user.uid) {
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
    }
  }, []);

  const logOutHandler = () => {
    signOut(auth);
    dispatch(userActions.isLogin());
    router.push("/");
  };

  const nameChangeHandler = (e) => {
    e.preventDefault();
    if (user.name !== newUserName) {
      dispatch(userActions.isLogin({ ...user, name: newUserName }));
      updateProfile(auth.currentUser, {
        displayName: newUserName,
      }).catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <>
      <form onSubmit={nameChangeHandler}>
        <input type="text" value={newUserName} onChange={onChangeUserName} />
        <input type="file" accept="image/*" />
        <input type="submit" value="Change" />
      </form>
      <button onClick={logOutHandler}>Sign out</button>
      <div>
        {pweets &&
          pweets.map((pweet) => (
            <Pweet key={pweet.id} pweetObj={pweet} isOwner={true} />
          ))}
      </div>
    </>
  );
};

export default Profile;
