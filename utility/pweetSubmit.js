import { db, storage } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import uploadImage from "./uploadImage";

const pweetSubmit = async (image, pweet, user) => {
  const [imageName, imageUrl] = await uploadImage(image, user.uid);
  const pweetObj = {
    text: pweet,
    createAt: new Date(),
    creatorName: user.name,
    creatorId: user.uid,
    creatorImage: user.photoURL,
    imageUrl,
    imageName,
    liked: [],
  };
  try {
    await addDoc(collection(db, "pweet"), pweetObj);
  } catch (e) {
    console.error(e);
  }
};

export default pweetSubmit;
