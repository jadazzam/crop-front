import React from "react";
import { css } from "@/panda/css";
import { z } from "zod"; // Adjust the path based on your project structure

const Schema = z.record(z.any());
export type Props = z.infer<typeof Schema>;
export const Button = ({ onClick, children, type }: Props) => {
  const buttonStyle = css({
    backgroundColor: "infinum.100",
    color: "infinum.0",
    py: "4",
    px: "10",
    rounded: "md",
  });

  return (
    <button type={type} className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};