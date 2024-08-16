import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Claims } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import { styled } from '@mui/system';

const pages = ['My crops', 'Plants', 'About us'];
const settings = ['Profile', 'My crops', 'Logout'];

const SignInButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: 'white',
  backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark
  },
  width: 100,
  height: 50,
  textTransform: 'capitalize'
}));

function NavBar(props: { user?: Claims | undefined }) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenu = (setting: string) => {
    if (setting === 'Logout') location.href = '/api/auth/logout';
  };
  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Image className="mr-2 mt-2 mb-2" width={50} height={50} src="/crop-white.svg" alt="Save My Crop Logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Save My crop
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Save My crop
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!props?.user ?
              <SignInButton href="/api/auth/login">
                Sign in
              </SignInButton>
              : <Tooltip title="Open settings"><IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}><Avatar
                alt={props.user ? props.user.nickname : 'user avatar'} src={props.user.picture} /> </IconButton>
              </Tooltip>
            }
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;


//
// import React, { useState } from 'react';
// import Link from 'next/link';
// import Logo from './Logo';
// import { string } from 'zod';
// import { Claims } from '@auth0/nextjs-auth0';
//
// const Nav = (props: { user: Claims | undefined }) => {
//   const [width, setWidth] = useState(0);
//   const { user } = props;
//
//   return (
//     <>
//       {/*<Navbar className="bg-cropy" fluid>*/}
//       {/*  <Navbar.Brand href="./">*/}
//       {/*    <img src="/crop-white.svg" className="mr-3 h-6 sm:h-9" alt="Save My Crop Logo" />*/}
//       {/*    <span*/}
//       {/*      className="self-center whitespace-nowrap text-xl font-semibold text-white dark:text-white">Save my crop</span>*/}
//       {/*  </Navbar.Brand>*/}
//       {/*  <div className="flex md:order-2">*/}
//       {/*    {!user ? (*/}
//       {/*      <div className="nav-btn-sign-in">*/}
//       {/*        <a*/}
//       {/*          href="/api/auth/login"><Button className="btn-sign-in">Sign*/}
//       {/*          in</Button></a>*/}
//       {/*      </div>*/}
//       {/*    ) : <Dropdown*/}
//       {/*      arrowIcon={false}*/}
//       {/*      inline*/}
//       {/*      label={*/}
//       {/*        <Avatar alt="user"*/}
//       {/*                img="/Jad.jpg" rounded />*/}
//       {/*      }*/}
//       {/*    >*/}
//       {/*      <Dropdown.Header>*/}
//       {/*        <span className="block text-sm">{user.nickname}</span>*/}
//       {/*        <span className="block truncate text-sm font-medium">{user.email}</span>*/}
//       {/*      </Dropdown.Header>*/}
//       {/*      <Dropdown.Item>Dashboard</Dropdown.Item>*/}
//       {/*      <Dropdown.Item>Settings</Dropdown.Item>*/}
//       {/*      <Dropdown.Item>Earnings</Dropdown.Item>*/}
//       {/*      <Dropdown.Divider />*/}
//       {/*      <a href="/api/auth/logout"><Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item></a>*/}
//       {/*    </Dropdown>}*/}
//       {/*    <Navbar.Toggle />*/}
//       {/*  </div>*/}
//       {/*  <Navbar.Collapse>*/}
//       {/*    <Navbar.Link href="#" active>*/}
//       {/*      Home*/}
//       {/*    </Navbar.Link>*/}
//       {/*    <Navbar.Link href="#">About</Navbar.Link>*/}
//       {/*    <Navbar.Link href="#">Services</Navbar.Link>*/}
//       {/*    <Navbar.Link href="#">Pricing</Navbar.Link>*/}
//       {/*    <Navbar.Link href="#">Contact</Navbar.Link>*/}
//       {/*  </Navbar.Collapse>*/}
//       {/*</Navbar>*/}
//
//     </>
//
//   )
//     ;
// };
//
// export default Nav;