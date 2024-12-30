'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import type { cropType } from '@/interfaces/crops/crop';
import CropCard from '@/components/crops/Card';
import { styled } from '@mui/system';
import { cropsTitle } from '@/common/helpers';

const Item = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center'
}));

export const CropsList = () => {
  const { user } = useUser();
  const [title, setTitle] = useState<string | null>(null);
  const [crops, setCrops] = useState([]);
  const ref = useRef<HTMLInputElement>(null);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const fetchCrops = () => {
    if (!user) return [];
    return fetch('/api/crops')
      .then((res) => res.json())
      .then((res) => setCrops(res))
      .catch(e => console.log('GET Crops error', e));
  };

  useEffect(() => {
    if (crops?.length) setTimeout(() => handleScroll(), 3000);
  });

  useEffect(() => {
    user && fetchCrops();
    setTitle(cropsTitle);
  }, [user]);

  const deleteCrop = async (id: string) => {
    try {
      const crop = await fetch(`/api/crops/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json());

      if (!crop) {
        console.error('Failed to post crop:');
        return;
      }
      if (crop) {
        setCrops(prevState => prevState.filter((_c: cropType) => _c.id !== id));
      }
      return crop;
    } catch (error) {
      console.error('Error posting crop:', error);
    }
  };
  return (
    <div>
      <div className="text-center">
        <h2 className="heading-2">{title ? `My crops : ${title}` : `My crops`}</h2>
      </div>
      <Grid ref={ref} container spacing={{ xs: 2, md: 3 }}
            style={{ margin: 0, width: '100%' }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
        {crops?.map((_c: cropType, _i: number) => (
          <Item xs={2} sm={4} md={4} key={_i}>
            <CropCard key={_c.id} crop={_c} deleteCrop={deleteCrop} />
          </Item>
        ))}
      </Grid>
    </div>
  );
};