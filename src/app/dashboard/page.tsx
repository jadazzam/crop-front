"use client";
import React from "react";
import { Button } from "@/components/buttons/Button";

const Dashboard: React.FC = () => {
  const handleClick = () => {
    return "hello";
  };
  return (
    <>
      <p>We are in dashboard folder</p>
      <Button onClick={handleClick}>Click me!</Button>{" "}
    </>
  );
};

export default Dashboard;