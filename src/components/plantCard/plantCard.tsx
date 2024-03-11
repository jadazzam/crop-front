import { useEffect, useState } from "react";
import type { plantType } from "@/interfaces/plants/plant";
import Link from "next/link";
import Image from "next/image";

type plantProps = {
  plant: plantType;
};

export default function PlantCard({ plant }: plantProps) {
  //update the size of the card when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  const { id, image_url, common_name } = plant;

  return (
    <li>
      <Link href={`/plants/${id}/page.tsx`} as={`/plants/${id}`}>
        {common_name}
        <Image
          src={image_url || ""}
          alt={common_name}
          width={width < 1024 ? "50" : "75"}
          height={width < 1024 ? "25" : "53"}
          layout="responsive"
        />
      </Link>
    </li>
  );
}