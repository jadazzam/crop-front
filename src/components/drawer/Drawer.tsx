import * as React from 'react';
import { CircularProgress, Drawer, Modal } from '@mui/material';
import Image from 'next/image';
import { renderSunCondition, renderWatering } from '@/common/helpers';
import useSWR from 'swr';
import type { plantType } from '@/interfaces/plants/plant';
import HeadingSecondary from '@/components/titles';
import PrimaryButton from '@/components/buttons/Primary';
import { FormEvent, useState } from 'react';
import CreateCropForm from '@/components/forms/CreateCrop';
import { cropType } from '@/interfaces/crops/crop';
import { withoutAuth } from '@/services/crop-api/headers';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type DrawerProps = {
  plant: plantType;
  open: boolean;
  handleDrawer: (plant: plantType) => void;
};


const PlantDrawer = ({ plant, open, handleDrawer }: DrawerProps) => {
  const [openModal, setOpenModal] = useState(false);
  const url = `/api/plants/${plant?.id}`;
  const { data, error, isLoading } = useSWR<plantType>(url, fetcher);
  if (data) plant = { ...plant, ...data };

  const handleModal = () => {
    setOpenModal(prevState => !prevState);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const size = formData.get('size');
    const health = formData.get('health');
    const perenualId: string = plant?.id.toString();
    try {
      const response = await fetch('/api/crops', {
        method: 'POST',
        body: JSON.stringify({
          perenualId: perenualId,
          name: name,
          size: size,
          health: health
        }),
        headers: withoutAuth
      });
      if (!response.ok) {
        console.error('Failed to post crop:', await response.text());
        return;
      }
      const crop: cropType = await response.json();
      if (crop) {
        setTimeout(() => setOpenModal(false), 400);
      }
    } catch (error) {
      console.error('Error posting crop:', error);
    }
  };

  let content;

  if (plant) {
    const {
      default_image,
      common_name,
      sunlight,
      watering,
      hardiness_location,
      description
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
          <HeadingSecondary>{common_name}</HeadingSecondary>
          <div className="flex mt-5">
            <Image
              className="mr-4"
              width={24}
              height={24}
              src={renderSunCondition(sunlight).src}
              alt={renderSunCondition(sunlight).alt}
            />
            <p>{renderSunCondition(sunlight).description}</p>
          </div>
          <div className="flex mt-5">
            <Image
              className="mr-4"
              width={24}
              height={24}
              src={renderWatering(watering).src}
              alt={renderWatering(watering).alt}
            />
            <p>{renderWatering(watering).description}</p>
          </div>
          <p className="mt-5">

            {description}
          </p>
          {/*{hardiness_location?.full_iframe && (*/}
          {/*  <div*/}
          {/*    className="w-full max-w-full"*/}
          {/*    dangerouslySetInnerHTML={{*/}
          {/*      __html: hardiness_location.full_iframe.replace(*/}
          {/*        '<iframe',*/}
          {/*        '<iframe style="width:100%; height:auto;"'*/}
          {/*      )*/}
          {/*    }}*/}
          {/*  />*/}
          {/*)}*/}
          <div className="w-full my-5 text-center">
            <PrimaryButton SxProps={{ marginTop: '2rem', width: '60%' }} onClick={handleModal}>Add
              plant
              to my crops</PrimaryButton>
          </div>
        </div>
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
    <>
      <Drawer
        ModalProps={{
          keepMounted: true
        }}
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
      <Modal
        open={openModal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreateCropForm defaultValues={{ name: plant?.common_name }} onSubmit={onSubmit} />
      </Modal>
    </>
  );
};

export default PlantDrawer;