import React from "react";
import useImageUpload from "../../hooks/useImageUpload";
import useInput from "../../hooks/useInput";
import pweetSubmit from "../../utility/pweetSubmit";
import { useSelector } from "react-redux";
import ImagePreview from "../UI/ImagePreview";
import Hero from "../hero/Hero";
import styles from "./PweetPostForm.module.css";
import useDarkMode from "../../hooks/useDarkMode";
import Button from "../UI/Button";
import TextArea from "../UI/TextArea";
import ImageUploadBtn from "../UI/ImageUploadBtn";

const PweetPostForm = () => {
  const [pweet, onChangePweet, setPweet] = useInput();
  const [image, setImage, imageUploadHandler] = useImageUpload();
  const user = useSelector((state) => state.user);
  const isDarkMode = useDarkMode();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    pweetSubmit(image, pweet, user);
    setPweet("");
    setImage(null);
  };

  return (
    <form className={styles.formContainer} onSubmit={onSubmitHandler}>
      <div className={styles.postBox}>
        <div>
          <Hero />
        </div>
        <div className={styles.postTextBox}>
          <TextArea
            placeholder="어떤 생각을 하고 계시나요?"
            onChange={onChangePweet}
            value={pweet}
          />
          {image && <ImagePreview image={image} setImage={setImage} />}
        </div>
      </div>

      <div className={styles.postBtnBox}>
        <ImageUploadBtn onChange={imageUploadHandler} />
        <Button type="submit">Tweet</Button>
      </div>
    </form>
  );
};

export default PweetPostForm;
