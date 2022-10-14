import React, { useState } from "react";
import useImageUpload from "../../hooks/useImageUpload";
import useInput from "../../hooks/useInput";
import pweetSubmit from "../../utility/pweetSubmit";
import { useSelector } from "react-redux";
import ImagePreview from "../UI/ImagePreview";
import Hero from "../UI/Hero";
import styles from "./PweetPostForm.module.css";
import Button from "../UI/Button";
import TextArea from "../UI/TextArea";
import ImageUploadBtn from "../UI/ImageUploadBtn";

const PweetPostForm = () => {
  const [pweet, onChangePweet, setPweet] = useInput();
  const [image, setImage, imageUploadHandler] = useImageUpload();
  const user = useSelector((state) => state.user);
  const randomNumber = Math.floor(Math.random() * 3);
  const [postStatus, setPostStatus] = useState();

  const placeholderList = [
    "어떤 생각을 하고 계시나요?",
    "오늘은 무슨 일이 있었나요?",
    "오늘 있었던 신나는 일을 공유해보세요.",
  ];

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await pweetSubmit(image, pweet, user);
    setPweet("");
    setImage(null);
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={onSubmitHandler}>
        <div className={styles.postBox}>
          <div>
            <Hero />
          </div>
          <div className={styles.postTextBox}>
            <TextArea
              placeholder={placeholderList[randomNumber]}
              onChange={onChangePweet}
              value={pweet}
            />
            {image && <ImagePreview image={image} setImage={setImage} />}
          </div>
        </div>

        <div className={styles.postBtnBox}>
          <ImageUploadBtn onChange={imageUploadHandler} />
          <Button type="submit">글쓰기</Button>
        </div>
      </form>
    </>
  );
};

export default PweetPostForm;
