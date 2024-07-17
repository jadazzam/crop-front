import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cropType } from '@/interfaces/crops/crop';
import { CropHandler } from '@/components/buttons/cropHandler';
import { plantType } from '@/interfaces/plants/plant';

type cropProps = {
  crop: cropType;
  deleteCrop: (id: string) => any;
};

export default function Crop({ crop, deleteCrop }: cropProps) {
  const { id, name, perenual, size } = crop;
  let { default_image, common_name, other_name, family }: plantType = perenual ?? {};
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const syns: any =
    other_name && other_name.length
      ? other_name.slice(0, 3)
      : 'N/A';

  const renderSynonyms = (names: string[]) => {
    return names?.map((_s: string) => <span key={_s}>{_s}</span>);
  };
  const imageStyle = {
    borderRadius: '5%',
    border: '1px solid #fff'
  };

  return (
    <li className="max-h-[600px] flex content-center">
      <Link className="flex-1 h-full" href={`/crops/${id}/page.tsx`} as={`/crops/${id}`}>
        {/*<Card*/}
        {/*  className="w-full h-full flex flex-col justify-between"*/}
        {/*  renderImage={() =>*/}
        {/*    <div className="h-[400px] overflow-hidden flex justify-center items-center">*/}
        {/*      <Image width={400} height={400}*/}
        {/*             src={default_image?.small_url} alt={name}*/}
        {/*      /></div>}*/}
        {/*>*/}
        {/*  <div className="flex-1 h-full">*/}
        {/*    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">*/}
        {/*      {name ?? common_name}*/}
        {/*    </h5>*/}
        {/*    <p className="font-normal text-gray-700 dark:text-gray-400">*/}
        {/*      <span className="font-bold">Family :</span> {family} <br />*/}
        {/*      <span className="font-bold">Size :</span> : {size} <br />*/}
        {/*      <span className="font-bold">Synonyms :</span> : {renderSynonyms(syns)} <br />*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</Card>*/}
      </Link>
    </li>
  );
}