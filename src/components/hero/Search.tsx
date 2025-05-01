'use client';
import { HeroSectionBlock } from '@/components/hero/index';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export function HeroSectionBlockSearch() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  return (
    <HeroSectionBlock.Search search={search} setSearch={(search: string) => {
      setSearch(search);
      router.push(`/plants?search=${search}`);
    }}></HeroSectionBlock.Search>
  );
}