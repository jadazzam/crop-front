import { useRouter } from "next/router";
import useSWR from "swr";
import type { cropType } from "../../../interfaces/crop";
import { responseError } from "../../../interfaces/responseError";
// const fetcher = async (url: string) => {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log("data in fetcher => ", data);
//   if (res.status !== 200) {
//     throw new Error(data.message);
//   }
//   return data;
// };

export default function CropPage({ params }: { params: { id: string } }) {
  // const { query } = useRouter();
  // console.log("query", query);
  // const { data, error, isLoading, isValidating } = useSWR<
  //   cropType,
  //   responseError
  // >(() => (query.id ? `api/crop/${query.id}` : null), fetcher);
  // console.log("do we get there");
  // if (error) return <div>{error.message}</div>;
  // if (isLoading) return <div>Loading...</div>;
  // if (!data) return null;
  //
  // return <div>{params.slug}</div>;
}