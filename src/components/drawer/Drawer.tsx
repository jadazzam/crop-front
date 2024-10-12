import React, { useEffect } from 'react';
import { Drawer } from '@mui/material';
import Image from 'next/image';
import { renderSunCondition, renderWatering } from '@/common/helpers';
import useSWR from 'swr';
import type { plantType } from '@/interfaces/plants/plant';


const fetcher = (url: string) => fetch(url).then((res) => res.json());
type DrawerProps = Record<string, any>


const PlantDrawer = ({ plant, open, handleDrawer }: DrawerProps) => {

  const url = `/api/plants/${plant?.id}`;

  const { data, error, isLoading } = useSWR<plantType>(url, fetcher);
  if (data) plant = Object.assign({}, plant, data);

  if (isLoading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner if desired
  }

  if (error || !plant) {
    return <p>Error loading plant data...</p>;
  }

  const {
    default_image,
    scientific_name,
    common_name,
    family,
    other_name,
    sunlight,
    watering,
    cycle
  } = plant;

  return (
    <Drawer
      anchor={'right'}
      open={open || false}
      onClose={handleDrawer}
      sx={{
        width: { xs: '90%', sm: '70%', md: '40%', lg: '30%' },  // Control the drawer's width
        height: '100%',  // Control the height of the drawer
        '& .MuiDrawer-paper': { width: 'inherit', height: '100%' }  // Ensure paper follows custom size
      }}
    >
      <div className="flex flex-col">
        <div className="h-[50vh]">

          <Image
            src={default_image?.small_url || default_image?.original_url}
            fill
            alt={common_name}
            loading="lazy"
            style={{
              objectFit: 'cover',
              maxHeight: '50vh', // Ensure image does not exceed the height of the div
              maxWidth: '100vh'
            }}
          />
        </div>
        <div className="mt-6  p-6">
          <span className="heading-3">{common_name}</span>
          <div className="flex mt-5">

            <Image className="mr-4" width={48} height={48} src={renderSunCondition(sunlight).src}
                   alt={renderSunCondition(sunlight).alt} /> {renderSunCondition(sunlight).description}
          </div>
          <div className="flex mt-5">

            <Image className="mr-4" width={48} height={48} src={renderWatering(watering).src}
                   alt={renderWatering(watering).alt} />
            <p>{renderWatering(watering).description}</p>
          </div>
        </div>
      </div>
    </Drawer>
  );

};

export default PlantDrawer;