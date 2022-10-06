import React, { useState } from "react";
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import { db, storage } from "../../utility/firebase";
import { ref, deleteObject } from "firebase/storage";
import useInput from "../../hooks/useInput";
import Image from "next/image";
import useImageUpload from "../../hooks/useImageUpload";

const Pweet = ({ pweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newPweet, onChangeNewPweet] = useInput(pweetObj.text);
  const [image, setImage, imageUploadHandler] = useImageUpload();
  const deleteHandler = async () => {
    const ok = confirm(
      "정말 삭제하시겠습니까? 삭제 후에는 복구가 불가능 합니다."
    );
    if (ok) {
      if (pweetObj.imageUrl) {
        const desertRef = ref(
          storage,
          `${pweetObj.creatorId}/${pweetObj.imageName}`
        );
        await deleteObject(desertRef);
      }
      await deleteDoc(doc(db, "pweet", pweetObj.id));
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  const updateHandler = async (e) => {
    e.preventDefault();

    await setDoc(doc(db, "pweet", pweetObj.id), {
      ...pweetObj,
      text: newPweet,
    });
    setEditing((prev) => !prev);
  };

  return (
    <div>
      {pweetObj.imageUrl && (
        <Image
          src={pweetObj.imageUrl}
          width="100"
          height="100"
          alt={pweetObj.text}
        />
      )}
      {editing ? (
        <>
          {image && (
            <div>
              <Image src={image} alt="new image" width="100" height="100" />
            </div>
          )}
          <form onSubmit={updateHandler}>
            <input
              onChange={onChangeNewPweet}
              placeholder="새로운 내용을 적어주세요."
              type="text"
              value={newPweet}
            />
            <input type="file" accept="image/*" onChange={imageUploadHandler} />
            <button onClick={toggleEditing}>Cancle</button>
            <input type="submit" value="Update" />
          </form>
        </>
      ) : (
        <p>{pweetObj.text}</p>
      )}

      {isOwner && (
        <>
          <button onClick={deleteHandler}>Delete Pweet</button>
          <button onClick={toggleEditing}>Update Pweet</button>
        </>
      )}
    </div>
  );
};

export default Pweet;
