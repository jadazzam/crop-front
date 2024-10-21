import { CircularProgress, Drawer } from '@mui/material';
import Image from 'next/image';
import { renderSunCondition, renderWatering } from '@/common/helpers';
import useSWR from 'swr';
import type { plantType } from '@/interfaces/plants/plant';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type DrawerProps = {
  plant: plantType | null;
  open: boolean;
  handleDrawer: (plant: plantType) => void;
};

const PlantDrawer = ({ plant, open, handleDrawer }: DrawerProps) => {
  const url = `/api/plants/${plant?.id}`;
  const { data, error, isLoading } = useSWR<plantType>(url, fetcher);
  if (data) plant = { ...plant, ...data };
  let content;

  if (plant) {
    const {
      default_image,
      common_name,
      sunlight,
      watering,
      hardiness_location
    } = plant;

    content = (
      <div className="flex flex-col">
        <div className="h-[50vh] relative">
          <Image
            src={default_image?.small_url || default_image?.original_url}
            layout="fill"
            alt={common_name}
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{common_name}</h3>
          <div className="flex mt-5">
            <Image
              className="mr-4"
              width={48}
              height={48}
              src={renderSunCondition(sunlight).src}
              alt={renderSunCondition(sunlight).alt}
            />
            <p>{renderSunCondition(sunlight).description}</p>
          </div>
          <div className="flex mt-5">
            <Image
              className="mr-4"
              width={48}
              height={48}
              src={renderWatering(watering).src}
              alt={renderWatering(watering).alt}
            />
            <p>{renderWatering(watering).description}</p>
          </div>
        </div>
        {hardiness_location?.full_iframe && (
          <div
            className="w-full max-w-full"
            dangerouslySetInnerHTML={{
              __html: hardiness_location.full_iframe.replace(
                '<iframe',
                '<iframe style="width:100%; height:auto;"'
              )
            }}
          />
        )}
        <p>Hello world</p>
      </div>
    );
  } else if (isLoading) {
    content = (
      <div className="m-auto">
        <CircularProgress color="primary" />
      </div>
    );
  } else {
    console.error('error fetching plant :', error);
    content = <p>Error loading plant data...</p>;
  }

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleDrawer}
      sx={{
        width: { xs: '90%', sm: '70%', md: '50%', lg: '40%' }, // Fixed typo in 'md' size
        height: '100%',
        '& .MuiDrawer-paper': { width: 'inherit', height: '100%' }
      }}
    >
      {content}
    </Drawer>
  );
};

export default PlantDrawer;