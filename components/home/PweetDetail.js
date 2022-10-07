import React, { useState } from "react";
import Image from "next/image";
import PweetEditButton from "./PweetEditButton";
import PweetEditForm from "./PweetEditForm";

const PweetDetail = ({ pweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);

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

      {isOwner && (
        <PweetEditButton setEditing={setEditing} pweetObj={pweetObj} />
      )}
    </li>
  );
};

export default PweetDetail;
