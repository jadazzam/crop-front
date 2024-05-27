import { useEffect, useState } from "react";
import Link from "next/link";
import { css } from "@/panda/css";
import Image from "next/image";
import { cropType } from "@/interfaces/crops/crop";
import { CropHandler } from "@/components/buttons/cropHandler";
import { plantType } from "@/interfaces/plants/plant";

type cropProps = {
  crop: cropType;
  deleteCrop: (id: string) => any;
};

interface Synonym {
  id: number;
  name: string;
}

export default function Card({ crop, deleteCrop }: cropProps) {
  const { id, name, trefle } = crop;
  const { image_url, common_name, synonyms, family }: plantType = trefle ?? {};
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const syns: any =
    synonyms && synonyms.length
      ? synonyms.slice(0, 3)
      : [{ id: 0, name: "No Synonyms" }];

  const renderSynonyms = (synonyms: Synonym[]) => {
    return synonyms.map((_s: Synonym) => <p key={_s.id}>{_s.name}</p>);
  };
  const imageStyle = {
    borderRadius: "5%",
    border: "1px solid #fff",
  };

  return (
    <li>
      <div
        className={css({
          border: "3px solid #38785F",
          boxShadow: "4px 4px 0opx #38785F",
          borderRadius: "5px",
          height: 400,
          maxWidth: 350,
          position: "relative",
          overflow: "hidden",
          marginY: 5,
          marginX: 5,
        })}
      >
        <div className={css({ padding: "3px" })}>
          <div className={css({ height: "200px" })}>
            <div className={css({ width: 300, position: "relative" })}>
              <CropHandler onClick={() => deleteCrop(id)} action={"delete"} />
            </div>
            <Link href={`/crops/${id}/page.tsx`} as={`/crops/${id}`}>
              <div className={css({ width: 300 })}>
                <h4 className={css({ fontWeight: 600 })}>My Crop : </h4>
                <p>{name}</p>
                <h2 className={css({ fontWeight: 600 })}>Name : </h2>
                <p>{common_name}</p>
                <h2 className={css({ fontWeight: 600 })}>Family : </h2>
                <p>{family}</p>
                <h3 className={css({ fontWeight: 600 })}>Also called : </h3>
                {renderSynonyms(syns)}
              </div>
            </Link>
          </div>
          <Link href={`/crops/${id}/page.tsx`} as={`/crops/${id}`}>
            <div
              className={css({
                maxHeight: 150,
                maxWidth: 150,
                // position: "absolute",
                margin: "auto",
              })}
            >
              <Image
                src={image_url || ""}
                alt={common_name || ""}
                style={imageStyle}
                height={width < 1024 ? 50 : 55}
                width={width < 1024 ? 50 : 70}
                layout="responsive"
                objectFit={"contain"}
              />
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
}