import React from "react";
import Image from "next/image";
import Input from "../UI/Input";
import useImageUpload from "../../hooks/useImageUpload";
import useInput from "../../hooks/useInput";
import pweetSubmit from "../../utility/pweet";
import { useSelector } from "react-redux";

const PweetForm = () => {
  const [pweet, onChangePweet, setPweet] = useInput();
  const [image, setImage, imageUploadHandler] = useImageUpload();
  const user = useSelector((state) => state.user);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    pweetSubmit(image, pweet, user.uid);
    setPweet("");
    setImage(null);
  };

  const onClearImageHandler = () => setImage(null);

  return (
    <form onSubmit={onSubmitHandler}>
      {image && (
        <div>
          <Image src={image} alt={image} width="200" height="200" />
          <button onClick={onClearImageHandler}>Clear</button>
        </div>
      )}
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

export default PweetForm;
