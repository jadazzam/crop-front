"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import type { plantType } from "@/interfaces/plants/plant";
import Link from "next/link";
import { css } from "@/panda/css";
import Image from "next/image";
import { AddCrop } from "@/components/buttons/AddCrop";

type plantProps = {
  plant: plantType;
};

export default function Card({ plant }: plantProps) {
  //update the size of the card when the size of the screen changes
  const { id, image_url, common_name, family, synonyms } = plant;
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  const addCrop = async () => {
    const trefleId = id && id.toString();
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
      }).then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      });
      console.log("response => , ", response);
      // TODO to continue
      // What do we do once we have added crop
    } catch (error) {
      console.error("Error posting crop:", error);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

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
              <AddCrop onClick={addCrop} />
            </div>
            <Link href={`/plants/${id}/page.tsx`} as={`/plants/${id}`}>
              <div className={css({ width: 300 })}>
                <h2 className={css({ fontWeight: 600 })}>Name : </h2>
                <p>{common_name}</p>
                <h2 className={css({ fontWeight: 600 })}>Family : </h2>
                <p>{family}</p>
                <h3 className={css({ fontWeight: 600 })}>Also called : </h3>
                {renderSynonyms(threeSynonyms)}
              </div>
            </Link>
          </div>
          <Link href={`/plants/${id}/page.tsx`} as={`/plants/${id}`}>
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