import { CropsList } from '@/components/crops/List';

// const url = '/api/crops';
// const fetcher = (url: string) => fetch(url)
//   .then((res) => res.json());

export default function CropsPage() {
  // const { data, error } = useSWR(url, fetcher);
  // const [myCrops, setMyCrops] = useState<cropType[]>([]);
  // const [title, setTitle] = useState<string | null>(null);
  //
  // useEffect(() => {
  //   if (!data?.error || error) setMyCrops(data);
  //   setTitle(cropsTitle);
  // }, [data, error]);

  return (
    <>
      <CropsList />
    </>
  );
}