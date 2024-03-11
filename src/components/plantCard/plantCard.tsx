import Link from "next/link";
import type { plantType } from "@/interfaces/plants/plant";

type plantProps = {
  plant: plantType;
};

export default function PlantCard({ plant }: plantProps) {
  const { id } = plant;
  return (
    <li>
      <Link href={`/plants/${id}/page.tsx`} as={`/plants/${id}`}>
        {plant.common_name}
      </Link>
    </li>
  );
}