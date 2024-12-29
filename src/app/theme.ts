'use client';
import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#38785F',
      dark: '#204E44'
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