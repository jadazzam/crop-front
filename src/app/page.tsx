"use client";
import useSWR, { preload } from "swr";
import { FormEvent, useEffect, useState } from "react";
import { getPlantsByName } from "@/services/crop-api/plants/GET";
import { PlantsList } from "@/components/plants/list";
import { cropType } from "@/interfaces/crops/crop";
import Link from "next/link";
import { Button } from "@/components/buttons/Button";
import { CropsList } from "@/components/crops/list";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Page() {
  const [myCrops, setMyCrops] = useState<cropType[]>([]);
  const [search, setSearch] = useState(null);
  const { data, error, isLoading } = useSWR("/api/plants", fetcher);

  const fetchCrops = async () => {
    const crops = await fetch("/api/crops")
      .then((res) => res.json())
      .then((myCrops) => {
        setMyCrops(myCrops);
      });
    return crops;
  };
  useEffect(() => {
    fetchCrops();
  }, []);

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

  console.log("data", data);
  if (!data)
    return (
      <div>
        <Button onCLick={fetchCrops}>Refresh</Button>
      </div>
    );
  return (
    <>
      {myCrops?.length > 0 && (
        <div>
          <CropsList
            data={myCrops}
            setMyCrop={(crop) => {
              const crops = myCrops.filter((_c) => _c.id !== crop.id);
              setMyCrops(crops);
            }}
          ></CropsList>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <input type="text" name="search" />
        <button type="submit">Submit</button>
      </form>
      {search ? (
        <PlantsList
          setMyCrop={(crop) => setMyCrops([...myCrops, crop])}
          data={search}
        ></PlantsList>
      ) : (
        <PlantsList
          setMyCrop={(crop: cropType) => setMyCrops([...myCrops, crop])}
          data={data}
        />
      )}
    </>
  );
}