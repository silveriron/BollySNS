import React from "react";
import useInput from "../../hooks/useInput";
import Button from "../UI/Button";
import TextArea from "../UI/TextArea";
import { useSelector } from "react-redux";
import commentSubmit from "../../utility/commentSubmit";
import styles from "./CommentPostForm.module.css";

const CommentPostForm = ({ pweetObj }) => {
  const [comment, onChangeComment] = useInput();
  const user = useSelector((state) => state.user);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    commentSubmit(pweetObj, comment, user);
  };
  return (
    <form className={styles.formBox} onSubmit={onSubmitHandler}>
      <TextArea
        placeholder="댓글을 달아주세요"
        onChange={onChangeComment}
        value={comment}
      />
      <Button type="submit" style={{ width: "70px" }}>
        보내기
      </Button>
    </form>
  );
};

export default CommentPostForm;
