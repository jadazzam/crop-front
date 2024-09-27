import React from 'react';
import { z } from 'zod';

const Schema = z.record(z.any());
export type Props = z.infer<typeof Schema>;
export const Input = ({ type, name, value, children }: Props) => {

  return (
    <input type={type} name={name} value={value}>
      {children}
    </input>
  );
};