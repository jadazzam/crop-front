'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

const theme = createTheme({
  palette: {
    primary: {
      light: '#9CDFD2',
      main: '#38785F',
      dark: '#18403B',
      contrastText: '#fff'
    },
    secondary: {
      light: '#FFEFC4',
      main: '#FDB813',
      dark: '#99680B',
      contrastText: '#000'
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#38429E'
          })
        })
      }
    }
  }
});

export default theme;