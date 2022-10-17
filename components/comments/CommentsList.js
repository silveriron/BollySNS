import React from "react";
import commentDelete from "../../utility/commentDelete";
import CommentDetail from "./CommentDetail";

const CommentsList = ({ pweetObj, comments }) => {
  const deleteCommentHandler = (createAt) => {
    const newCommentsList = comments.filter((comment) => {
      return comment.createAt !== createAt;
    });
    commentDelete(pweetObj, newCommentsList);
  };

  return (
    <>
      {comments?.length > 0 ? (
        <ul>
          {comments.map((comment) => {
            return (
              <CommentDetail
                key={comment.createAt}
                deleteCommentHandler={deleteCommentHandler}
                commentData={comment}
              />
            );
          })}
        </ul>
      ) : (
        <p>댓글이 없습니다.</p>
      )}
    </>
  );
};

export default CommentsList;
