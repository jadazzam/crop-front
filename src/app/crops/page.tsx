'use client';
import useSWR from 'swr';
import type { cropType } from '@/interfaces/crops/crop';
import { CropsList } from '@/components/crops/list';
import { useEffect, useState } from 'react';
import { cropsTitle } from '@/common/helpers';

const url = '/api/crops';
const fetcher = (url: string) => fetch(url)
  .then((res) => res.json());

export default function CropsPage() {
  const { data, error } = useSWR(url, fetcher);
  const [myCrops, setMyCrops] = useState<cropType[]>([]);
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    if (!data?.error || error) setMyCrops(data);
    setTitle(cropsTitle);
  }, [data, error]);

  return (
    <>
      <div className="text-center">
        <h2 className="heading-2">{title ? `My crops : ${title}` : `My crops`}</h2>
      </div>
      <CropsList
        data={myCrops}
        setMyCrop={(crop) => {
          const crops = myCrops.filter((_c) => _c.id !== crop.id);
          crops && setMyCrops(crops);
        }}
      ></CropsList>
    </>
  );
}