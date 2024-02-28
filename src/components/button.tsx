import React from "react";
import { css } from "../../styled-system/css"; // Adjust the path based on your project structure

// Define the Button component using styled-system css function
export const Button = ({ onClick, children }: any) => {
  const buttonStyle = css({
    // Define your styled-system CSS properties here
    backgroundColor: "blue.500",
    color: "white",
    py: "2",
    px: "4",
    rounded: "md",
  });

  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};