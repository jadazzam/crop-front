import { styled } from '@mui/system';
import { ButtonProps } from '@mui/material/Button';
import { Button } from '@mui/material';

const LoginButton = ({ text }: { text: string }) => {
  const StyledLogin = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#FFFFFF',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    right: '1.5rem',
    top: '1.5rem',
    fontWeight: 500,
    fontSize: '0.875rem',
    borderRadius: '0.5rem',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 0.25rem ${theme.palette.primary.light}`
    }
  }));

  return (
    <StyledLogin
      href="/api/auth/login"
      type="button"
    >
      {text}
    </StyledLogin>
  );
};

export default LoginButton;