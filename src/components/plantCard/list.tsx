import { css } from "@/panda/css";
import type { plantType } from "@/interfaces/plants/plant";

import Card from "@/components/plantCard/card";

export const PlantsList = (props: { data: [] }) => {
  const { data } = props;
  return (
    <ul>
      <div
        className={css({
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        })}
      >
        {data?.map((_p: plantType) => <Card key={_p.id} plant={_p} />)}
      </div>
    </ul>
  );
};