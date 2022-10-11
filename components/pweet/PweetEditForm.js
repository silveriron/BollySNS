import React from "react";
import Image from "next/image";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../utility/firebase";
import useInput from "../../hooks/useInput";
import useImageUpload from "../../hooks/useImageUpload";

const PweetEditForm = ({ pweetObj, setEditing }) => {
  const [newPweet, onChangeNewPweet] = useInput(pweetObj.text);
  const [image, setImage, imageUploadHandler] = useImageUpload();

  const updateHandler = async (e) => {
    e.preventDefault();

    await setDoc(doc(db, "pweet", pweetObj.id), {
      ...pweetObj,
      text: newPweet,
    });
    setEditing((prev) => !prev);
  };

  return (
    <form onSubmit={updateHandler}>
      {image && (
        <div>
          <Image src={image} alt="new image" width="100" height="100" />
        </div>
      )}
      <input
        onChange={onChangeNewPweet}
        placeholder="새로운 내용을 적어주세요."
        type="text"
        value={newPweet}
      />
      <input type="file" accept="image/*" onChange={imageUploadHandler} />
      <button onClick={setEditing((prev) => !prev)}>Cancle</button>
      <input type="submit" value="Update" />
    </form>
  );
};

export default PweetEditForm;
