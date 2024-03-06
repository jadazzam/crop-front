import React from "react";
import { css } from "@/panda/css";
import { z } from "zod";

const Schema = z.record(z.any());
export type Props = z.infer<typeof Schema>;
export const Input = ({ type, name, value, children }: Props) => {
  const inputStyle = css({
    color: "infinum.0",
    rounded: "md",
    bg: "infinum.50",
  });

  return (
    <input type={type} name={name} value={value} className={inputStyle}>
      {children}
    </input>
  );
};