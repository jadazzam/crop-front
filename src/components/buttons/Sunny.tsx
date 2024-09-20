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

  }));

  return (
    <SunnyButton type="submit">
      {text}
    </SunnyButton>
  );
};
export default SunnyButton;