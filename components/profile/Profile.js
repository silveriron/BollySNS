import React from "react";
import PweetList from "../pweet/PweetList";
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
