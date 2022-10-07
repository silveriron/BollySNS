import React from "react";
import useInput from "../../hooks/useInput";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
import useImageUpload from "../../hooks/useImageUpload";
import ImagePreview from "../UI/ImagePreview";
import uploadImage from "../../utility/uploadImage";
import { auth } from "../../utility/firebase";
import { useRouter } from "next/router";

const ProfileChangeForm = () => {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const [newUserName, onChangeUserName] = useInput(user.name);
  const [image, setImage, imageUploadHandler] = useImageUpload();

  const dispatch = useDispatch();

  const nameChangeHandler = async (e) => {
    e.preventDefault();
    if (user.name === newUserName && !image) {
      return;
    } else if (user.name !== newUserName && !image) {
      dispatch(userActions.isLogin({ ...user, name: newUserName }));
      updateProfile(auth.currentUser, {
        displayName: newUserName,
      }).catch((error) => {
        console.log(error);
      });
    } else if (image) {
      const [_, imageUrl] = await uploadImage(image, user.uid, "profile");
      dispatch(
        userActions.isLogin({ ...user, name: newUserName, photoURL: imageUrl })
      );
      updateProfile(auth.currentUser, {
        displayName: newUserName,
        photoURL: imageUrl,
      }).catch((error) => {
        console.log(error);
      });
    }
    setImage(null);
  };

  return (
    <form onSubmit={nameChangeHandler}>
      {image && <ImagePreview image={image} setImage={setImage} />}
      <input type="text" value={newUserName} onChange={onChangeUserName} />
      <input type="file" accept="image/*" onChange={imageUploadHandler} />
      <input type="submit" value="Change" />
    </form>
  );
};

export default ProfileChangeForm;
