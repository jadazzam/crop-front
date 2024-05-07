"use client";
import useSWR from "swr";
import type { cropType } from "@/interfaces/crops/crop";
// import { useUser } from "@auth0/nextjs-auth0/client";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CropsPage() {
  // const { user } = useUser();
  // console.log("user in crops", user);
  const url = "/api/crops";
  const { data, error, isLoading } = useSWR<cropType[]>(url, fetcher);
  return (
    <>
      {/*{data?.forEach((_c) => {*/}
      {/*  {*/}
      {/*    _c?.name;*/}
      {/*  }*/}
      {/*  {*/}
      {/*    _c?.type;*/}
      {/*  }*/}
      {/*})}*/}
    </>
  );
}