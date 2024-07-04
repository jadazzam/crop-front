import useSWR from 'swr';
import { useEffect, useState } from 'react';
import type { plantType } from '@/interfaces/plants/plant';
import Link from 'next/link';
import Image from 'next/image';
import { CropHandler } from '@/components/buttons/cropHandler';

type plantProps = {
  plant: plantType;
  addCrop: (id: string) => void;
};

export default function Card({ plant, addCrop }: plantProps) {
  //update the size of the card when the size of the screen changes
  const { id, default_image, common_name, family, other_name } = plant;
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
  }, []);

  const threeSynonyms =
    other_name && other_name.length > 3
      ? other_name.splice(0, 3)
      : other_name || ['No Synonyms'];
  const renderSynonyms = (other_name: string[]) => {
    return other_name.map((string: string) => (
      <p key={threeSynonyms?.indexOf(string)}>{string}</p>
    ));
  };
  const imageStyle = {
    borderRadius: '5%',
    border: '1px solid #fff'
  };

  return (
    <li>
      <div
        // className={css({
        //   border: "3px solid #FFBA08",
        //   boxShadow: "4px 4px 0opx #FFBA08",
        //   borderRadius: "5px",
        //   height: 400,
        //   maxWidth: 350,
        //   position: "relative",
        //   overflow: "hidden",
        //   marginY: 5,
        //   marginX: 5,
        // })}
      >
        <div>
          <div>
            {/*<div className={css({ padding: "3px" })}>*/}
            {/*  <div className={css({ height: "200px" })}>*/}
            {/*    <div className={css({ width: 300, position: "relative" })}>*/}
            <CropHandler
              onClick={() => addCrop(id.toString())}
              action={'add'}
            />
            {/*</div>*/}
            <Link href={`/plants/${id}/page.tsx`} as={`/plants/${id}`}>
              {/*<div className={css({ width: 300 })}>*/}
              <div>
                {/*<h2 className={css({ fontWeight: 600 })}>Name : </h2>*/}
                {/*<p>{common_name}</p>*/}
                {/*<h2 className={css({ fontWeight: 600 })}>Family : </h2>*/}
                <p>{family}</p>
                <h3 className="">Also called : </h3>
                {renderSynonyms(threeSynonyms)}
              </div>
            </Link>
          </div>
          <Link href={`/plants/${id}/page.tsx`} as={`/plants/${id}`}>
            <div
              // className={css({
              //   maxHeight: 150,
              //   maxWidth: 150,
              //   // position: "absolute",
              //   margin: "auto",
              // })}
            >
              <Image
                src={default_image?.small_url || default_image?.medium_url || ''}
                alt={common_name || ''}
                style={imageStyle}
                height={width < 1024 ? 10 : 11}
                width={width < 1024 ? 10 : 14}
                layout="responsive"
                objectFit={'contain'}
              />
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
}