import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../../utility/firebase";
import { ref, deleteObject } from "firebase/storage";

const PweetEditButton = ({ pweetObj, setEditing }) => {
  const toggleEditing = () => setEditing((prev) => !prev);

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

  return (
    <div>
      <button onClick={deleteHandler}>Delete Pweet</button>
      <button onClick={toggleEditing}>Update Pweet</button>
    </div>
  );
};

export default PweetEditButton;
