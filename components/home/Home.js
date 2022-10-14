import React, { useEffect, useState } from "react";
import PweetPostForm from "../pweet/PweetPostForm";
import PweetList from "../pweet/PweetList";
import Layout from "../UI/Layout";
import Link from "next/link";
import styles from "./Home.module.css";
import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utility/firebase";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import { useRouter } from "next/router";
import logo from "../../public/favicon.ico";

const Home = () => {
  const [init, setInit] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          userActions.isLogin({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
          })
        );
        setInit(true);
      } else {
        router.push("/auth");
      }
    });
  }, [dispatch, router]);

  return (
    <>
      {init ? (
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
      ) : (
        <div>
          <Image src={logo} alt="logo" />
        </div>
      )}
    </>
  );
};

export default Home;
