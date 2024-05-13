import { useEffect, useState } from "react";
import type { plantType } from "@/interfaces/plants/plant";
import Link from "next/link";
import { css } from "@/panda/css";
import Image from "next/image";

type plantProps = {
  plant: plantType;
};

export default function Card({ plant }: plantProps) {
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

  const { id, image_url, common_name, family, synonyms } = plant;
  const threeSynonyms =
    synonyms && synonyms.length > 3
      ? synonyms.splice(0, 3)
      : synonyms || ["No Synonyms"];
  const renderSynonyms = (synonyms: string[]) => {
    return synonyms.map((string: string) => (
      <p key={threeSynonyms?.indexOf(string)}>{string}</p>
    ));
  };
  const imageStyle = {
    borderRadius: "5%",
    border: "1px solid #fff",
  };

  return (
    <li>
      <div
        className={css({
          border: "3px solid #FFBA08",
          boxShadow: "4px 4px 0opx #FFBA08",
          borderRadius: "5px",
          padding: 6,
          height: 400,
          maxWidth: 350,
          position: "relative",
          overflow: "hidden",
          marginY: 5,
          marginX: 5,
        })}
      >
        <Link href={`/plants/${id}/page.tsx`} as={`/plants/${id}`}>
          <div>
            <div className={css({ width: 350 })}>
              <h2 className={css({ fontWeight: 600 })}>Name : </h2>
              <p>{common_name}</p>
              <h2 className={css({ fontWeight: 600 })}>Family : </h2>
              <p>{family}</p>
              <h3 className={css({ fontWeight: 600 })}>Also called : </h3>
              {renderSynonyms(threeSynonyms)}
            </div>
            <div
              className={css({
                maxHeight: 55,
                maxWidth: 70,
                marginBottom: 5,
                position: "absolute",
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
          </div>
        </Link>
      </div>
    </li>
  );
}