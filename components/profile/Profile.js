import React from "react";
import PweetList from "../home/PweetList";
import ProfileChangeForm from "./ProfileChangeForm";

const Profile = () => {
  return (
    <>
      <ProfileChangeForm />
      <PweetList category="my" />
    </>
  );
};

export default Profile;
