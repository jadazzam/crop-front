import React, { ReactNode, MouseEvent } from 'react';
import { Button, SxProps } from '@mui/material';
import { Theme } from '@mui/material';

type PrimaryButtonProps = {
  children: ReactNode,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
  SxProps?: SxProps<Theme>,
  type?: 'button' | 'submit' | 'reset' | undefined
}
export default function PrimaryButton({ children, type, onClick, SxProps = {} }: PrimaryButtonProps) {
  return (
    <Button
      type={type}
      sx={{
        ...SxProps,
        '&:hover': {
          backgroundColor: 'primary.dark',
          boxShadow: '5px 5px 5px primary.dark'
        }
      }}
      variant="contained"
      onClick={onClick}>{children}</Button>
  );
}