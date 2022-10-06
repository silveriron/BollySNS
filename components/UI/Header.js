import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {user.uid && (
          <li>
            <Link href="/profile">{`${user.name}의 프로필`}</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
