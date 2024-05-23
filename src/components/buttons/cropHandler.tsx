import React from "react";
import { css } from "@/panda/css";
import Icon from "@mdi/react";
import { mdiMinusCircle, mdiPlus } from "@mdi/js";
import { z } from "zod"; // Adjust the path based on your project structure

const Schema = z.record(z.any());
export type Props = z.infer<typeof Schema>;
export const CropHandler = ({ onClick, type, action }: Props) => {
  const buttonStyle = css({
    backgroundColor: "infinum.100",
    color: "infinum.0",
    cursor: "pointer",
    display: "block",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    right: "0px",
    position: "absolute",
  });

  const iconStyle = css({
    margin: "auto",
  });

  return (
    <>
      <button type={type} className={buttonStyle} onClick={onClick}>
        <Icon
          className={iconStyle}
          path={action === "add" ? mdiPlus : mdiMinusCircle}
          size={2}
        />
      </button>
    </>
  );
};