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
import Hero from "../UI/Hero";
import styles from "./ProfileChangeForm.module.css";
import Edit from "../../public/edit_FILL0_wght400_GRAD0_opsz24.svg";
import useDarkMode from "../../hooks/useDarkMode";

const ProfileChangeForm = () => {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const [newUserName, onChangeUserName] = useInput(user.name);
  const [image, setImage, imageUploadHandler] = useImageUpload();
  const fill = useDarkMode();

  const dispatch = useDispatch();

  const profileUpdate = (updateObj) => {
    updateProfile(auth.currentUser, updateObj)
      .then(() => {
        if (updateObj.displayName) {
          dispatch(
            userActions.isLogin({ ...user, name: updateObj.displayName })
          );
        } else {
          console.log(updateObj.photoURL);
          dispatch(
            userActions.isLogin({ ...user, photoURL: updateObj.photoURL })
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const profileNameChange = async (e) => {
    e.preventDefault();
    profileUpdate({ displayName: newUserName });
  };

  const profilePhotoChange = async (e) => {
    imageUploadHandler(e);
    const [_, imageUrl] = await uploadImage(image, user.uid, "profile");
    profileUpdate({ photoURL: imageUrl });
  };

  return (
    <div className={styles.profileBox}>
      <h1>{user.name}님의 프로필</h1>
      <form className={styles.profileform} onSubmit={profileNameChange}>
        <div className={styles.profilePhoto}>
          <Hero />
          <label htmlFor="photo">Edit</label>
          <input
            id="photo"
            type="file"
            accept="image/*"
            onChange={profilePhotoChange}
          />
        </div>
        <div className={styles.profileName}>
          <input type="text" value={newUserName} onChange={onChangeUserName} />
          <button type="submit">
            <Edit fill={fill} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileChangeForm;
