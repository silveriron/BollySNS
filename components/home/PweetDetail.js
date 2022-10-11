import React, { useState } from "react";
import Image from "next/image";
import PweetEditButton from "./PweetEditButton";
import PweetEditForm from "./PweetEditForm";
import PweetLike from "./PweetLike";

const PweetDetail = ({ pweetObj, user }) => {
  const [editing, setEditing] = useState(false);
  const isOwner = pweetObj.creatorId === user.uid;

  return (
    <li>
      {pweetObj.imageUrl && (
        <Image
          src={pweetObj.imageUrl}
          width="100"
          height="100"
          alt={pweetObj.text}
        />
      )}
      {editing ? (
        <PweetEditForm setEditing={setEditing} pweetObj={pweetObj} />
      ) : (
        <p>{pweetObj.text}</p>
      )}
      <PweetLike isOwner={isOwner} user={user} pweetObj={pweetObj} />
      {isOwner && (
        <PweetEditButton setEditing={setEditing} pweetObj={pweetObj} />
      )}
    </li>
  );
};

export default PweetDetail;
