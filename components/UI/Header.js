import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utility/firebase";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import { useRouter } from "next/router";

const Header = () => {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    signOut(auth);
    dispatch(userActions.isLogin());
    router.push("/");
  };
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {user.uid && (
          <>
            <li>
              <Link href="/profile">{`${user.name}의 프로필`}</Link>
            </li>
            <li>
              <button onClick={logOutHandler}>Sign out</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
