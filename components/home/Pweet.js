import React, { useState } from "react";
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "../../utility/firebase";
import useInput from "../../hooks/useInput";

const Pweet = ({ pweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newPweet, onChangeNewPweet] = useInput(pweetObj.text);
  const deleteHandler = async () => {
    const ok = confirm(
      "정말 삭제하시겠습니까? 삭제 후에는 복구가 불가능 합니다."
    );
    if (ok) {
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
      {editing ? (
        <form onSubmit={updateHandler}>
          <input
            onChange={onChangeNewPweet}
            placeholder="새로운 내용을 적어주세요."
            type="text"
            value={newPweet}
          />
          <button onClick={toggleEditing}>Cancle</button>
          <input type="submit" value="Update" />
        </form>
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
