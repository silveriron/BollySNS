import { db } from "./firebase";
import { updateDoc, doc } from "firebase/firestore";

const commentSubmit = async (pweet, comment, user) => {
  const userName = user.name ? user.name : "anonymous";
  const pweetRef = doc(db, "pweet", pweet.id);
  const commentObj = {
    comment: comment,
    createAt: new Date(),
    creatorId: user.uid,
    creatorImage: user.photoURL,
    creatorName: userName,
  };

  let newObj;

  if (pweet.comments) {
    const newArray = pweet.comments.concat(commentObj);
    newObj = { comments: newArray };
  } else {
    newObj = { comments: [commentObj] };
  }

  try {
    await updateDoc(pweetRef, newObj);
  } catch (e) {
    console.error(e);
  }
};

export default commentSubmit;
