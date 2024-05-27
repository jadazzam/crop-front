"use client";
import type { plantType } from "@/interfaces/plants/plant";

import { useEffect, useState } from "react";
import { PlantsList } from "@/components/plants/list";

export default function PlantsPage() {
  const [plants, setPlants] = useState<plantType[]>([]);
  useEffect(() => {
    fetch("/api/plants")
      .then((res) => res.json())
      .then((plants) => {
        setPlants(plants);
      });
  }, []);
  return (
    <>
      <PlantsList
        data={plants}
        setCrop={(crop) => console.log("crop added =>", crop)}
      ></PlantsList>
    </>
  );
}