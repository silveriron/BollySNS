import { db } from "./firebase";
import { updateDoc, doc } from "firebase/firestore";

const commentDelete = async (pweet, commentsList) => {
  const pweetRef = doc(db, "pweet", pweet.id);

  try {
    await updateDoc(pweetRef, { comments: commentsList });
  } catch (e) {
    console.error(e);
  }
};

export default commentDelete;
