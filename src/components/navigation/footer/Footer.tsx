import Image from 'next/image';
import Box from '@mui/material/Box';
import { socialsOptions } from '@/common/helpers';

export function Footer() {
  return (
    <footer className="w-full bg-secondary-500 py-4 px-8">
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: '1fr 1fr 1fr'
        }
      }}>
        <Box sx={{ height: '2rem', textAlign: { xs: 'center', md: 'start' } }}>
          <span className="text-xs">Confidentiality - CGV</span>
        </Box>
        <Box sx={{ display: 'flex', height: '2rem', alignItems: 'center' }} justifyContent="center">
          <a href={socialsOptions.instagram.href}>
            <Image className="mx-1" width={18} height={18} src={socialsOptions.instagram.src}
                   alt={socialsOptions.instagram.alt} />
          </a>
          <a href={socialsOptions.x.href}>
            <Image className="mx-1" width={18} height={18} src={socialsOptions.x.src} alt={socialsOptions.x.alt} />
          </a>
          <a href={socialsOptions.facebook.href}>
            <Image className="mx-1" width={18} height={18} src={socialsOptions.facebook.src}
                   alt={socialsOptions.facebook.alt} />
          </a>
        </Box>
        <Box sx={{ height: '2rem', textAlign: { xs: 'center', md: 'end' } }}>
          <span className="text-xs text-end">Save my crop ©2025 all rights reserved</span>
        </Box>
      </Box>
    </footer>);
}