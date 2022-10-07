import { db, storage } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import uploadImage from "./uploadImage";

const pweetSubmit = async (image, pweet, uid) => {
  const [imageName, imageUrl] = await uploadImage(image, uid);
  const pweetObj = {
    text: pweet,
    createAt: Date.now(),
    creatorId: uid,
    imageUrl,
    imageName,
  };
  try {
    await addDoc(collection(db, "pweet"), pweetObj);
  } catch (e) {
    console.error(e);
  }
};

export default pweetSubmit;
