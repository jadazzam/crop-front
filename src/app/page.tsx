"use client";
import useSWR from "swr";
import { FormEvent } from "react";
import CropCard from "@/components/cropCard/CropCard";
import type { cropType } from "../interfaces/crop";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Page() {
  const { data, error, isLoading } = useSWR<cropType[]>("/api/crops", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
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
    //     // const getAll = await getCrops();
    //     // console.log("Response from /api/submit", getAll);
    //   } catch (error) {
    //     console.error("Error submitting form:", error);
    //   }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
      <ul>{data?.map((_c: cropType) => <CropCard key={_c.id} crop={_c} />)}</ul>
    </>
  );
}