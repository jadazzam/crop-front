"use client";
import useSWR, { preload } from "swr";
import { FormEvent } from "react";
import PlantCard from "@/components/plantCard/plantCard";
import type { plantType } from "@/interfaces/plants/plant";
import { css } from "@/panda/css";
// import { useUser } from "@auth0/nextjs-auth0/client";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Page() {
  // const { user } = useUser();
  // console.log("user in main page", user);
  const { data, error, isLoading } = useSWR("/api/plants", fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  // preload("/api/plants", fetcher);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    //   event.preventDefault();
    //
    //   const formData = new FormData(event.currentTarget);
    //   const formDataObject: any = {};
    //   for (const [key, value] of formData.entries()) {
    //     formDataObject[key] = formData.get("name");
    //   }
    //   console.log("formData", formDataObject);
    //   try {
    //     // const getAll = await getPlants();
    //     // console.log("Response from /api/submit", getAll);
    //   } catch (error) {
    //     console.error("Error submitting form:", error);
    //   }
  }
  // return !user && <a href="/api/auth/login">Login</a>;

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        <div
          className={css({
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          })}
        >
          {data?.map((_p: plantType) => <PlantCard key={_p.id} plant={_p} />)}
        </div>
      </ul>
    </>
  );
}