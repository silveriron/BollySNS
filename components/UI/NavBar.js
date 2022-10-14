import React from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../../utility/firebase";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
import logo from "../../public/favicon.ico";
import Home from "../../public/home_FILL1_wght400_GRAD0_opsz40.svg";
import Profile from "../../public/person_FILL1_wght400_GRAD0_opsz40.svg";
import Image from "next/image";
import Button from "./Button";

const NavBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    signOut(auth);
    router.push("/");
    dispatch(userActions.isLogin());
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.logo}>
          <Link href="/">
            <a>
              <Image src={logo} alt="logo" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.link}>
              <Home fill="white" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a className={styles.link}>
              <Profile fill="white" />
              <span>Profile</span>
            </a>
          </Link>
        </li>
        <li>
          <Button onClick={logOutHandler}>로그아웃</Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
