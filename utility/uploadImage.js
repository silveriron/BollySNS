import { v4 as uuidv4 } from "uuid";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

const uploadImage = async (image, uid, type = null) => {
  let imageName = null;
  let imageUrl = null;

  if (image && type === null) {
    imageName = uuidv4();
    const storageRef = ref(storage, `${uid}/${imageName}`);
    const response = await uploadString(storageRef, image, "data_url");
    imageUrl = await getDownloadURL(ref(storageRef));
  } else if (image && type === "profile") {
    const storageRef = ref(storage, `profile/${uid}`);
    const response = await uploadString(storageRef, image, "data_url");
    imageUrl = await getDownloadURL(ref(storageRef));
  }
  return [imageName, imageUrl];
};

export default uploadImage;
