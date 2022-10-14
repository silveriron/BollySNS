import React from "react";
import Image from "next/image";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "../../utility/firebase";
import { ref, deleteObject } from "firebase/storage";
import useInput from "../../hooks/useInput";
import useImageUpload from "../../hooks/useImageUpload";
import uploadImage from "../../utility/uploadImage";
import TextArea from "../UI/TextArea";
import ImageUploadBtn from "../UI/ImageUploadBtn";
import Button from "../UI/Button";
import styles from "./PweetEditForm.module.css";

const PweetEditForm = ({ pweetObj, setEditing, user }) => {
  const [newPweet, onChangeNewPweet] = useInput(pweetObj.text);
  const [image, setImage, imageUploadHandler] = useImageUpload();

  const updateHandler = async (e) => {
    e.preventDefault();

    if (image) {
      if (pweetObj.imageUrl) {
        const desertRef = ref(
          storage,
          `${pweetObj.creatorId}/${pweetObj.imageName}`
        );
        await deleteObject(desertRef);
      }
      const [imageName, imageUrl] = await uploadImage(image, user.uid);
      await setDoc(doc(db, "pweet", pweetObj.id), {
        ...pweetObj,
        text: newPweet,
        imageName,
        imageUrl,
      });

      setEditing((prev) => !prev);
    }

    await setDoc(doc(db, "pweet", pweetObj.id), {
      ...pweetObj,
      text: newPweet,
    });
    setEditing((prev) => !prev);
  };

  const toggleEditHandler = () => {
    setEditing((prev) => !prev);
  };

  return (
    <form onSubmit={updateHandler}>
      {image && (
        <div>
          <Image src={image} alt="new image" width="100" height="100" />
        </div>
      )}
      <TextArea
        onChange={onChangeNewPweet}
        placeholder="새로운 내용을 적어주세요."
        value={newPweet}
      />
      <div className={styles.postBtnBox}>
        <ImageUploadBtn onChange={imageUploadHandler} />
        <Button
          style={{ background: "rgba(255, 255, 255, 0.5)", color: "white" }}
          onClick={toggleEditHandler}
        >
          취소
        </Button>
        <Button type="submit">수정</Button>
      </div>
    </form>
  );
};

export default PweetEditForm;
