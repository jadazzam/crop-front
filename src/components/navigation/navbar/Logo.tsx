"use client";
import Image from "next/image";
import { css } from "../../../../styled-system/css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../../button/Button";
import logo from "../../../../public/crop.svg";
const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <Link href="/" style={{ display: showButton ? "none" : "block" }}>
        <Image
          src="/crop-white.svg"
          alt="crop"
          width={width < 1024 ? "50" : "75"}
          height={width < 1024 ? "25" : "53"}
          className={css({
            color: "white",
          })}
        />
      </Link>
    </>
  );
};

export default Logo;