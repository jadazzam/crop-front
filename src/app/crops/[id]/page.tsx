'use client';
import useSWR from 'swr';
import type { cropType } from '@/interfaces/crops/crop';
import Image from 'next/image';
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import MenuBreadcrumbs from '@/components/breadcrumbs';
import { Crops, Home, HomeIcon, ManyPlants, OnePlant } from '@/common/helpers';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CropPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const url = `/api/crops/${id}`;
  const { data, error, isLoading } = useSWR<cropType>(url, fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  const image = data?.perenual?.default_image?.original_url;
  const name = data?.name;
  const links: { label: string | undefined, href: string | undefined, icon: string | undefined }[] = [
    {
      label: Home,
      href: '/',
      icon: HomeIcon
    },
    {
      label: Crops,
      href: './',
      icon: ManyPlants
    },
    {
      label: name,
      href: `./${id}`,
      icon: OnePlant
    }
  ];
  return (
    <>
      <Grid key={id} container>
        <MenuBreadcrumbs links={links}></MenuBreadcrumbs>
        <Grid xs={4}>
          <Image className="m-20" width={500} height={500} src={image || ''}
                 alt="Save My Crop Logo" />
        </Grid>
        <Grid container>
          <h3 className="heading-3">How to take care of {name}</h3>
        </Grid>
      </Grid>
    </>
  );
}