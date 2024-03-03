import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { css } from "../../../../styled-system/css";
import { hstack } from "../../../../styled-system/patterns";
const Navbar = () => {
  return (
    <div
      className={hstack({
        backgroundColor: "infinum.100",
        color: "infinum.0",
      })}
    >
      <Logo />
      <div>
        <ul
          className={hstack({
            gap: 10,
          })}
        >
          <li>
            <Link href="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <p>Contacts</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;