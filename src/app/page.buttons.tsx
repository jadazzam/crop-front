'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { TwoColumnsContent } from '../layouts/blocks/TwoColumns';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const FindMyPlantButton = () => {
  const router: AppRouterInstance = useRouter();
  return <TwoColumnsContent.Button onClick={() => router.push('/plants')} />;
};