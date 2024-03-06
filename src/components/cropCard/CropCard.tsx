import Link from "next/link";
import type { cropType } from "../../interfaces/crop";

type cropProps = {
  crop: cropType;
};

export default function CropCard({ crop }: cropProps) {
  return (
    <li>
      <Link href={`/crops/${crop.id}/page.tsx`} as={`/crops/${crop.id}`}>
        {crop.name}
      </Link>
    </li>
  );
}