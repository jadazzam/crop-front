import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { ButtonProps } from '@mui/material/Button';


const SearchButton = ({ text }: { text: string }) => {
  const SearchButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#FFFFFF',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    right: '0.25rem',
    fontWeight: 500,
    fontSize: '0.875rem',
    borderRadius: '0.5rem',
    textTransform: 'capitalize',
    height: '6vh',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      boxShadow: `0 0 0 0.25rem ${theme.palette.primary.main}`
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 0.25rem ${theme.palette.primary.main}`
    },
    [theme.breakpoints.up('md')]: {
      right: '0.5rem',
      height: '5vh'
    },
    [theme.breakpoints.up('xl')]: {
      height: '4vh'
    }
  }));

  return (
    <SearchButton type="submit">
      {text}
    </SearchButton>
  );
};
export default SearchButton;