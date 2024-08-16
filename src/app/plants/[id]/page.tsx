'use client';
import useSWR from 'swr';
import type { plantType } from '@/interfaces/plants/plant';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PlantPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const url = `/api/plants/${id}`;
  const { data, error, isLoading } = useSWR<plantType>(url, fetcher);
  return (
    <>
      {data?.common_name}
    </>
  );
}