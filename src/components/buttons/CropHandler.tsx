import React from 'react';
import Icon from '@mdi/react';
import { mdiMinusCircle, mdiPlus } from '@mdi/js';
import { z } from 'zod'; // Adjust the path based on your project structure

const Schema = z.record(z.any());
export type Props = z.infer<typeof Schema>;
export const CropHandler = ({ onClick, type, action }: Props) => {

  return (
    <>
      <button type={type} onClick={onClick}>
        <Icon
          path={action === 'add' ? mdiPlus : mdiMinusCircle}
          size={2}
        />
      </button>
    </>
  );
};