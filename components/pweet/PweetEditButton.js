import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../../utility/firebase";
import { ref, deleteObject } from "firebase/storage";
import styles from "./PweetEditButton.module.css";

const PweetEditButton = ({ pweetObj, setEditing, setIsViewMenu }) => {
  const toggleEditing = () => {
    setEditing((prev) => !prev);
    setIsViewMenu((prev) => !prev);
  };

  const deleteHandler = async () => {
    const ok = confirm(
      "정말 삭제하시겠습니까? \n삭제 후에는 복구가 불가능 합니다."
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
    <div className={styles.menuBox}>
      <button onClick={deleteHandler}>삭제</button>
      <button onClick={toggleEditing}>수정</button>
    </div>
  );
};

export default PweetEditButton;
