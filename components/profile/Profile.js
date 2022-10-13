import React from "react";
import PweetList from "../pweet/PweetList";
import Layout from "../UI/Layout";
import ProfileChangeForm from "./ProfileChangeForm";

const Profile = () => {
  return (
    <Layout>
      <ProfileChangeForm />
      <PweetList category="my" />
    </Layout>
  );
};

export default Profile;
