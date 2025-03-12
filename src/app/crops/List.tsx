'use client';
import React, { useEffect, useState } from 'react';
import { CropsList } from '@/components/crops/List';
import type { cropType } from '@/interfaces/crops/crop';
import { useUser } from '@auth0/nextjs-auth0/client';
import { errors } from '@/common/errors';

export const CropsListBlock = ({ displayError }: { displayError: boolean }) => {
  const [crops, setCrops] = useState<cropType[]>([]);
  const [error, setError] = useState<string>('');
  const { user } = useUser() || undefined;

  const fetchCrops = () => {
    return fetch('/api/crops')
      .then((res: Response) => res.json())
      .then((res: cropType[]) => {
        setCrops(res);
        return res;
      })
      .catch((e) => {
        if (e === errors.NOT_AUTHENTICATED) setError(errors.NOT_AUTHENTICATED);
        else setError(errors.SOMETHING_WENT_WRONG);
      });
  };

  useEffect(() => {
      user && fetchCrops();
      if (!user) setError(errors.NOT_AUTHENTICATED);
    },
    [user]);


  const deleteCrop = async (id: string) => {
    try {
      const crop = await fetch(`/api/crops/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res: Response) => res.json());

      if (!crop) {
        new Error('Failed to load crops');
      }
      if (crop) {
        setCrops(prevState => prevState.filter((_c: cropType) => _c.id !== id));
      }
      return crop;
    } catch (error) {
      console.error('Error DELETE crop:', error);
      throw error;
    }
  };

  return (
    <CropsList displayError={displayError} crops={crops} error={error} deleteCrop={deleteCrop} />
  );
};