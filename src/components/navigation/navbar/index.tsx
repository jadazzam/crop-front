import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { flex, hstack, vstack } from "@/panda/patterns";
import { css } from "@/panda/css";
import { Button } from "@/components/buttons/Button";
import Avatar from "@/components/navigation/navbar/Avatar";

const Navbar = () => {
  const [width, setWidth] = useState(0);

  return (
    <div
      className={hstack({
        backgroundColor: "infinum.100",
        color: "infinum.0",
        paddingX: "10px",
        width: "100%",
      })}
    >
      <Logo
        className={{
          paddingX: "10px",
          marginLeft: "10px",
          marginRight: "20px",
        }}
      />
      <div
        className={css({
          display: "flex",
          marginY: "auto",
          width: "100%",
          gap: "80px",
          marginLeft: "40px",
        })}
      >
        <Link href="/about">About</Link>

        <Link href="/services">Services</Link>

        <Link href="/contacts">Contacts</Link>
      </div>
      <div
        className={css({
          marginLeft: "0",
          marginY: "auto",
          paddingX: "10px",
        })}
      >
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;