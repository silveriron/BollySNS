import React, { useState } from "react";
import Image from "next/image";
import PweetEditButton from "./PweetEditButton";
import PweetEditForm from "./PweetEditForm";
import PweetLike from "./PweetLike";
import HeroImage from "../UI/HeroImage";
import styles from "./PweetDetail.module.css";
import elapsedTime from "../../utility/elapsedTime";
import Horiz from "../../public/more_horiz_FILL0_wght400_GRAD0_opsz20.svg";
import useDarkMode from "../../hooks/useDarkMode";

const PweetDetail = ({ pweetObj, user }) => {
  const [editing, setEditing] = useState(false);
  const [isViewMenu, setIsViewMenu] = useState(false);
  const isOwner = pweetObj.creatorId === user.uid;
  const isDarkMode = useDarkMode();

  const date = pweetObj.createAt.toDate();

  const postTime = elapsedTime(date);

  const toggleMenu = () => {
    setIsViewMenu((prev) => !prev);
  };

  return (
    <li>
      <div className={styles.pweetInfoDiv}>
        {isOwner && (
          <div className={styles.horiz}>
            <Horiz fill={isDarkMode ? "white" : "black"} onClick={toggleMenu} />
          </div>
        )}
        {isViewMenu && (
          <div className={styles.menu}>
            <PweetEditButton
              setIsViewMenu={setIsViewMenu}
              setEditing={setEditing}
              pweetObj={pweetObj}
            />
          </div>
        )}
        <HeroImage data={pweetObj} category="pweet" />
        <div className={styles.pweetTextDiv}>
          <p>
            <span>{pweetObj.creatorName}</span>
            <span className={styles.postTime}>{postTime}</span>
          </p>
          {editing ? (
            <PweetEditForm
              setEditing={setEditing}
              pweetObj={pweetObj}
              user={user}
            />
          ) : (
            <p>{pweetObj.text}</p>
          )}
          {pweetObj.imageUrl && (
            <div className={styles.imgBox}>
              <Image
                src={pweetObj.imageUrl}
                width={400}
                height={500}
                layout="responsive"
                alt={pweetObj.text}
              />
            </div>
          )}
          <PweetLike isOwner={isOwner} user={user} pweetObj={pweetObj} />
        </div>
      </div>
    </li>
  );
};

export default PweetDetail;
