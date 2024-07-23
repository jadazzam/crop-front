import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { ButtonProps } from '@mui/material/Button';


const SunnyButton = ({ text }: { text: string }) => {
  const SunnyButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#FFFFFF',
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    right: '0.75rem',
    fontWeight: 500,
    fontSize: '0.875rem',
    borderRadius: '0.5rem',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 0.25rem ${theme.palette.secondary.light}`
    }
    // [theme.breakpoints.down('md')]: {
    //   fontSize: '0.75rem',
    //   padding: '0.25rem 0.75rem'
    // },
    // [theme.breakpoints.up('md')]: {
    //   fontSize: '0.875rem',
    //   padding: '0.5rem 1rem'
    // },
    // [theme.breakpoints.up('lg')]: {
    //   fontSize: '1rem',
    //   padding: '0.75rem 1.25rem'
    // }
    // [theme.palette.mode === 'dark']: {
    //   backgroundColor: theme.palette.secondary[600],
    //   '&:hover': {
    //     backgroundColor: theme.palette.secondary[700]
    //   },
    //   '&:focus': {
    //     boxShadow: `0 0 0 0.25rem ${theme.palette.secondary[800]}`
    //   }
    // }
  }));

  // absolute end-2.5 bottom-2.5 bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800
  return (
    <SunnyButton type="submit">
      {text}
    </SunnyButton>
  );
};
export default SunnyButton;