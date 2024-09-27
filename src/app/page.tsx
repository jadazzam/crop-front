'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import HeroSection from '@/components/hero';
import { UserContext } from '../providers';

export default function Page() {
  const { user } = useUser();
  const [search, setSearch] = useState('');
  const router = useRouter();
  return <>
    <UserContext.Provider value={user}>
      <HeroSection search={search} setSearch={(search) => {
        setSearch(search);
        router.push(`/plants?search=${search}`);
      }} />
    </UserContext.Provider>
  </>;
}