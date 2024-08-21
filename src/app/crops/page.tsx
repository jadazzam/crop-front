'use client';
import type { cropType } from '@/interfaces/crops/crop';
import Link from 'next/link';
import { CropsList } from '@/components/crops/list';
import { useEffect, useState } from 'react';
import { cropsTitle } from '@/common/helpers';
// import { useUser } from "@auth0/nextjs-auth0/client";

export default function CropsPage() {
  const [myCrops, setMyCrops] = useState<cropType[]>([]);
  const [title, setTitle] = useState<string | null>(null);
  useEffect(() => {
    fetch('/api/crops')
      .then((res) => res.json())
      .then((crops) => {
        if (crops && !crops.error) setMyCrops(crops);
      });
    setTitle(cropsTitle);
  }, []);

  return (
    <>
      <div className="text-center">
        <h2 className="heading-2">{title ? `My crops : ${title}` : `My crops`}</h2>
      </div>
      <CropsList
        data={myCrops}
        setMyCrop={(crop) => {
          const crops = myCrops.filter((_c) => _c.id !== crop.id);
          setMyCrops(crops);
        }}
      ></CropsList>
    </>
  );
}