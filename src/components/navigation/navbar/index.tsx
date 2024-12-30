'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { navbarSections } from '@/common/helpers';
import Link from 'next/link';
import MenuBurger from '@/components/menu/MenuBurger';
import LoginButton from '@/components/buttons/Login';
import { OverridableComponent } from '@mui/types';
import { SvgIconTypeMap } from '@mui/material';

export type NavbarType = {
  bgColor?: 'transparent' | 'primary' | 'secondary',
  position?: 'static' | 'absolute' | 'relative'
}

function Navbar({ bgColor, position = 'static' }: NavbarType) {

  return (
    <AppBar sx={{ boxShadow: 'none' }} color={bgColor || 'primary'} position={position}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Link key={'logo'} passHref href="/">
            <Image className="mr-2 mt-2" width={50} height={50} src="/crop-white.svg"
                   alt="Save My Crop Logo" />
          </Link>
          <div className="block mr-0 ml-auto md:hidden">

            <MenuBurger />
          </div>
          <div className="max-md:hidden flex w-full">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mx: 5,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'white',
                textDecoration: 'none',
                alignContent: 'center'
              }}
            >
              Save My crop
            </Typography>

            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              {navbarSections.map((_s: {
                title: string,
                icon: OverridableComponent<SvgIconTypeMap> & { muiName: string; },
                link: string
              }, _i: number) => (
                <Button
                  key={_i}
                  onClick={() => location.href = _s.link}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {_s.title}
                </Button>
              ))}
            </Box>

            <LoginButton />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;