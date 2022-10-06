import { v4 as uuidv4 } from "uuid";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const pweetSubmit = async (image, pweet, uid) => {
  let imageUrl = null;
  let imageName = null;
  if (image) {
    imageName = uuidv4();
    const storageRef = ref(storage, `${uid}/${imageName}`);
    const response = await uploadString(storageRef, image, "data_url");
    imageUrl = await getDownloadURL(ref(storageRef));
  }

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
