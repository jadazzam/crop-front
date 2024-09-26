import { styled } from '@mui/system';
import { ButtonProps } from '@mui/material/Button';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import { AboutUs, Logout, MyCrops, Plants, Profile, userSettings } from '@/common/helpers';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useContext } from 'react';
import { UserContext } from '../../providers';
import { UserProfile } from '@auth0/nextjs-auth0/client';
import Box from '@mui/material/Box';

const LoginButton = ({ text }: { text: string }) => {
  const user: UserProfile | undefined = useContext(UserContext);
  const SignInButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#FFFFFF',
    backgroundColor: theme.palette.primary.main,
    fontWeight: 500,
    width: 100,
    fontSize: '1rem',
    borderRadius: '0.5rem',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      boxShadow: `0 0 0 0.25rem ${theme.palette.primary.main}`
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 0.25rem ${theme.palette.primary.light}`
    }
  }));

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenu = (setting: string) => {
    if (setting === Logout) location.href = '/api/auth/logout';
    if (setting === MyCrops) location.href = '/crops';
    if (setting === Profile) location.href = '/profile';
  };
  const handleNavMenu = (setting: string) => {
    if (setting === AboutUs) location.href = '/about';
    if (setting === MyCrops) location.href = '/crops';
    if (setting === Plants) location.href = '/plants';
  };

  console.log('user in login button =>', user);
  return (
    <>
      <Box className={'right-6 top-6 absolute'} sx={{ flexGrow: 0 }}>
        {!user ?
          <SignInButton href="/api/auth/login">
            Sign in
          </SignInButton>
          :
          <div>
            <Tooltip title="Open settings">
              <Button sx={{
                color: '#FFFFFF',
                backgroundColor: 'primary.main',
                fontWeight: 500,
                fontSize: '0.875rem',
                textTransform: 'lowercase',
                borderRadius: '0.5rem',
                padding: '0.5rem 1rem',
                '&:hover': {
                  backgroundColor: 'primary.dark'
                },
                '&:focus': {
                  outline: 'none',
                  boxShadow: '0 0 0 0.2rem'
                }
              }} onClick={handleOpenUserMenu}>{user.email}</Button>
            </Tooltip>
            <Menu
              sx={{ width: '100%', mt: '45px' }}
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
              {userSettings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </div>
        }

      </Box>
    </>);
};

export default LoginButton;