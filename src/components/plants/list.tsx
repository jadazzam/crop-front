import { css } from "@/panda/css";
import type { plantType } from "@/interfaces/plants/plant";

import Card from "@/components/plants/card";
import { cropType } from "@/interfaces/crops/crop";

export const PlantsList = (props: {
  data: [];
  setMyCrop: (crop: cropType) => void;
}) => {
  const { data, setMyCrop } = props;
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
        setMyCrop(crop);
      }
    } catch (error) {
      console.error("Error posting crop:", error);
    }
  };
  return (
    <ul>
      <div
        className={css({
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        })}
      >
        {data?.map((_p: plantType) => (
          <Card key={_p.id} plant={_p} addCrop={addCrop} />
        ))}
      </div>
    </ul>
  );
};