'use client';
import { Cormorant_Infant } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Cormorant_Infant({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#38785F'
    },
    secondary: {
      main: '#FDB813'
    }
  },
  typography: {
    fontFamily: '"Cormorant Infant", serif'
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