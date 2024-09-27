import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import ForestIcon from '@mui/icons-material/Forest';
import { OnePlant, ManyPlants } from '@/common/helpers';

interface Link {
  label: string | undefined,
  href: string | undefined,
  icon: string | undefined,
}


export default function MenuBreadcrumbs({ links, ...rest }: { links: Link[] }) {
  return (
    <div className="p-10" role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {links && links?.map((_l: Link, _i: number) => {
          const display = (i: string | undefined) => {
            switch (i) {
              case ManyPlants:
                return <ForestIcon sx={{ mr: 0.5 }} fontSize="inherit" />;
              case OnePlant :
                return <YardOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />;
              default:
                return <HomeOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />;
            }

          };
          return (
            <Link
              key={_i}
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href={_l.href}
            >
              <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
              >
                {display(_l.icon)}
                {_l.label}
              </Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}