"use client";
import useSWR from "swr";
import type { cropType } from "@/interfaces/crops/crop";
import Link from "next/link";
import { CropsList } from "@/components/crops/list";
import { useEffect, useState } from "react";
// import { useUser } from "@auth0/nextjs-auth0/client";

export default function CropsPage() {
  const [myCrops, setMyCrops] = useState<cropType[]>([]);
  useEffect(() => {
    fetch("/api/crops")
      .then((res) => res.json())
      .then((crops) => {
        if (crops && !crops.error) setMyCrops(crops);
      });
  }, []);
  return (
    <>
      <CropsList
        data={myCrops}
        setMyCrop={(crop) => {
          const crops = myCrops.filter((_c) => _c.id !== crop.id);
          setMyCrops(crops);
        }}
      ></CropsList>
    </>
  );
}