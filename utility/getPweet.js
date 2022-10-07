import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

const getPweet = (category, setPweets, user) => {
  if (category === "all") {
    onSnapshot(collection(db, "pweet"), (snapshot) => {
      const pweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      pweetArray.sort((a, b) => b.createAt - a.createAt);
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
