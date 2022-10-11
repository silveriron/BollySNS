import React from "react";
import AuthForm from "./AuthForm";
import Social from "./Social";
import logo from "../../public/favicon.ico";
import Image from "next/image";
import bg from "../../public/img/lohp_1302x955.png";
import styles from "./Auth.module.css";

const Auth = () => {
  const w = window.screen.availWidth / 2;
  const h = window.screen.availHeight;

  return (
    <div className={styles.authMainContainer}>
      <div className={styles.imgDiv}>
        <Image
          src={bg}
          width={w}
          height={h}
          layout="fixed"
          alt="background image"
        />
      </div>
      <section className={styles.container}>
        <Image src={logo} alt="bolly logo" />
        <h1>지금 일어나고 있는 일</h1>
        <p>오늘 트위터에 가입하세요.</p>
        <Social />
        <div>
          <div className={styles.line}> 또는 </div>
        </div>
        <AuthForm />
      </section>
    </div>
  );
};

export default Auth;
