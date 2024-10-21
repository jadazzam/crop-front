'use client';
import { createTheme } from '@mui/material/styles';

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