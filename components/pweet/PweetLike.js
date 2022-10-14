import React, { useEffect, useState } from "react";
import ThumbUp from "../../public/thumb_up_FILL0_wght400_GRAD0_opsz24.svg";
import ThumbUp_fill from "../../public/thumb_up_FILL1_wght400_GRAD0_opsz24.svg";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../utility/firebase";
import styles from "./PweetLike.module.css";

const PweetLike = ({ isOwner, user, pweetObj }) => {
  const [isLiked, setIsLiked] = useState();
  const [likes, setLikes] = useState();

  useEffect(() => {
    setLikes(pweetObj.liked.length);
    setIsLiked(pweetObj.liked.includes(user.uid));
  }, [pweetObj, user]);

  const likeHandler = async () => {
    if (isOwner) {
      return;
    } else {
      const newLiked = pweetObj.liked.concat(user.uid);
      await updateDoc(doc(db, "pweet", pweetObj.id), {
        liked: newLiked,
      });
    }
  };

  const unLikeHandler = async () => {
    if (isOwner) {
      return;
    } else {
      const newLiked = pweetObj.liked.filter((like) => like !== user.uid);
      await updateDoc(doc(db, "pweet", pweetObj.id), {
        liked: newLiked,
      });
    }
  };

  return (
    <>
      {isOwner && <ThumbUp_fill fill="white" />}
      {isOwner === false && (
        <>
          {isLiked ? (
            <ThumbUp_fill onClick={unLikeHandler} fill="white" />
          ) : (
            <ThumbUp onClick={likeHandler} fill="white" />
          )}
        </>
      )}
      <span>{likes}</span>
    </>
  );
};

export default PweetLike;
