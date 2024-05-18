import { css } from "@/panda/css";
import type { plantType } from "@/interfaces/plants/plant";

import Card from "@/components/plants/card";

export const PlantsList = (props: {
  data: [];
  addCrop: (id: string) => void;
}) => {
  const { data, addCrop } = props;
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