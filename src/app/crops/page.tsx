'use client';
import useSWR from 'swr';
import type { cropType } from '@/interfaces/crops/crop';
import Link from 'next/link';
import { CropsList } from '@/components/crops/list';
import { useEffect, useState } from 'react';
import { cropsTitle } from '@/common/helpers';

const url = '/api/crops';
const fetcher = (url: string) => fetch(url)
  .then((res) => res.json());


export default function CropsPage() {
  const [myCrops, setMyCrops] = useState<cropType[]>([]);
  const [title, setTitle] = useState<string | null>(null);
  const { data, error, isLoading } = useSWR<cropType[]>(url, fetcher);
  useEffect(() => {
    setTitle(cropsTitle);
  }, []);

  return (
    <>
      <div className="text-center">
        <h2 className="heading-2">{title ? `My crops : ${title}` : `My crops`}</h2>
      </div>
      <CropsList
        data={data}
        setMyCrop={(crop) => {
          const crops = data && data.filter((_c) => _c.id !== crop.id);
          crops && setMyCrops(crops);
        }}
      ></CropsList>
    </>
  );
}