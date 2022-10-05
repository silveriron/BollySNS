import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
