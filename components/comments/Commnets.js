import React from "react";
import CommentPostForm from "./CommentPostForm";
import CommentsList from "./CommentsList";

const Commnets = ({ pweetObj }) => {
  return (
    <>
      <CommentsList pweetObj={pweetObj} comments={pweetObj.comments} />
      <CommentPostForm pweetObj={pweetObj} />
    </>
  );
};

export default Commnets;
