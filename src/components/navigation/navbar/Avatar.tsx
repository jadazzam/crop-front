"use client";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Avatar = () => {
  const Profile = () => {
    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <p>Indisponible</p>;
    if (!user) {
      return (
        <>
          <a href="/api/auth/login">Sign in</a>
        </>
      );
    } else {
      return <div>{user.name}</div>;
    }
  };
  return <>{Profile()}</>;
};

export default Avatar;