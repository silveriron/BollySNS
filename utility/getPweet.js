import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";

const getPweet = (category, setPweets, user) => {
  if (category === "all") {
    const myPweetRef = collection(db, "pweet");
    const q = query(myPweetRef, orderBy("createAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const pweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPweets(pweetArray);
    });
  } else if (category === "my") {
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
};

export default getPweet;
