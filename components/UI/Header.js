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
        {user && (
          <li>
            <Link href="/profile">profile</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
