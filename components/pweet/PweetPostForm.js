import React from "react";
import Input from "../UI/Input";
import useImageUpload from "../../hooks/useImageUpload";
import useInput from "../../hooks/useInput";
import pweetSubmit from "../../utility/pweetSubmit";
import { useSelector } from "react-redux";
import ImagePreview from "../UI/ImagePreview";

const PweetPostForm = () => {
  const [pweet, onChangePweet, setPweet] = useInput();
  const [image, setImage, imageUploadHandler] = useImageUpload();
  const user = useSelector((state) => state.user);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    pweetSubmit(image, pweet, user);
    setPweet("");
    setImage(null);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {image && <ImagePreview image={image} setImage={setImage} />}
      <Input
        value={pweet}
        placeholder="어떤 생각을 하고 계시나요?"
        type="text"
        onChange={onChangePweet}
        maxLength={120}
      />
      <Input type="file" onChange={imageUploadHandler} />
      <Input type="submit" value="Pwitter" />
    </form>
  );
};

export default PweetPostForm;
