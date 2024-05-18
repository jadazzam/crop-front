"use client";
import useSWR, { preload } from "swr";
import { FormEvent, useEffect, useState } from "react";
import { getPlantsByName } from "@/services/crop-api/plants/GET";
import { PlantsList } from "@/components/plants/list";
import { cropType } from "@/interfaces/crops/crop";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Page() {
  const [myCrops, setMyCrops] = useState<cropType[]>([]);
  const [search, setSearch] = useState(null);
  const { data, error, isLoading } = useSWR("/api/plants", fetcher);

  useEffect(() => {
    fetch("/api/crops")
      .then((res) => res.json())
      .then((myCrops) => {
        setMyCrops(myCrops);
      });
  }, []);

  const addCrop = async (id: string) => {
    const trefleId = id.toString();
    try {
      const response = await fetch("/api/crops", {
        method: "POST",
        body: JSON.stringify({
          trefleId: trefleId,
          name: `Front + ${Date.now()}`,
          size: "1-2-f",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.error("Failed to post crop:", await response.text());
        return;
      }
      const crop: cropType = await response.json();
      if (crop) {
        setMyCrops([...myCrops, crop]);
      }
    } catch (error) {
      console.error("Error posting crop:", error);
    }
  };
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
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  return (
    <>
      {myCrops.length > 0 &&
        myCrops.map((_c: cropType) => {
          return (
            <>
              <div key={_c.id}>
                <p>
                  {_c?.name} + {_c.size}
                </p>
              </div>
            </>
          );
        })}
      <form onSubmit={onSubmit}>
        <input type="text" name="search" />
        <button type="submit">Submit</button>
      </form>
      {search ? (
        <PlantsList addCrop={addCrop} data={search}></PlantsList>
      ) : (
        <PlantsList addCrop={addCrop} data={data} />
      )}
    </>
  );
}