import React from "react";
import HeroImage from "../UI/HeroImage";
import styles from "./CommentDetail.module.css";
import Delete from "../../public/delete_FILL0_wght400_GRAD0_opsz24.svg";
import { useSelector } from "react-redux";

const CommentDetail = ({ commentData, deleteCommentHandler }) => {
  const user = useSelector((state) => state.user);
  const { comment, createAt, creatorId, creatorName } = commentData;

  const date = `${createAt.toDate().getFullYear()}년 ${
    createAt.toDate().getMonth() + 1
  }월 ${createAt.toDate().getDate()}일 ${createAt
    .toDate()
    .getHours()}:${createAt.toDate().getMinutes()}`;

  const onDelete = () => {
    deleteCommentHandler(createAt);
  };

  return (
    <li>
      <div className={styles.authorBox}>
        <HeroImage data={commentData} size="30" />
        <span>{creatorName}</span>
        {user.uid === creatorId && (
          <Delete fill="white" name={createAt} onClick={onDelete} />
        )}
      </div>
      <div>
        <p className={styles.comment}>{comment}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </li>
  );
};

export default CommentDetail;
