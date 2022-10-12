import React from "react";
import PweetPostForm from "../pweet/PweetPostForm";
import PweetList from "../pweet/PweetList";
import Layout from "../UI/Layout";
import Link from "next/link";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Layout>
        <div className={styles.wrap}>
          <div className={styles.headerBg}>
            <Link href="/">
              <h1>Home</h1>
            </Link>
          </div>
        </div>
        <PweetPostForm />
        <PweetList category="all" />
      </Layout>
    </>
  );
};

export default Home;
