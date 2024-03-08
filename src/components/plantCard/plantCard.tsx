import Link from "next/link";
import type { plantType } from "@/interfaces/plants/plant";

type plantProps = {
  plant: plantType;
};

export default function PlantCard({ plant }: plantProps) {
  return (
    <li>
      <Link href={`/plants/${plant.id}/page.tsx`} as={`/plants/${plant.id}`}>
        {plant.common_name}
      </Link>
    </li>
  );
}