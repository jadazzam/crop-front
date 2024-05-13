"use client";
import useSWR, { preload } from "swr";
import { FormEvent, useState } from "react";
import Card from "@/components/plantCard/card";
import type { plantType } from "@/interfaces/plants/plant";
import { css } from "@/panda/css";
import { getPlantsByName } from "@/services/crop-api/plants/GET";
import { PlantsList } from "@/components/plantCard/list";
// import { useUser } from "@auth0/nextjs-auth0/client";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Page() {
  const [search, setSearch] = useState(null);
  // const { user } = useUser();
  // console.log("user in main page", user);
  const { data, error, isLoading } = useSWR("/api/plants", fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  // preload("/api/plants", fetcher);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formDataObject: any = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = formData.get("search");
    }
    try {
      if (formDataObject?.search) {
        const res = await getPlantsByName(formDataObject.search);
        if (res?.data) setSearch(res.data);
      }
      console.log("Response from /api/submit");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  // return !user && <a href="/api/auth/login">Login</a>;

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="search" />
        <button type="submit">Submit</button>
      </form>
      {search ? (
        <PlantsList data={search}></PlantsList>
      ) : (
        <PlantsList data={data} />
      )}
    </>
  );
}