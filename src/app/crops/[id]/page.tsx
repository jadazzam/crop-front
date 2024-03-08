"use client";
import useSWR from "swr";
import type { cropType } from "@/interfaces/crops/crop";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CropPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const url = `/api/crops/${id}`;
  const { data, error, isLoading } = useSWR<cropType>(url, fetcher);

  return (
    <>
      {data?.name} {data?.type}
    </>
  );
}