import React, { ReactNode } from 'react';
import PrimaryButton from '@/components/buttons/Primary';
import HeadingSecondary from '@/components/titles';
import { FormControl, FormHelperText, Input, InputLabel, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'white',
  borderRadius: '12px',
  boxShadow: 24,
  p: 6
};

const FieldStyle = {
  margin: '1rem 0'
};
type CreateCropFormContainerProps = {
  children: ReactNode,
}
CreateCropForm.Container = function Container({ children }: CreateCropFormContainerProps) {
  return (
    { children }
  );
};


type CreateCropFormTitleProps = {
  children: ReactNode
}
CreateCropForm.Title = function Title({ children }: CreateCropFormTitleProps) {
  return (
    <div className="mb-6">
      <HeadingSecondary>{children}</HeadingSecondary>
    </div>
  );
};

type CreateCropFormInputProps = {
  children: ReactNode,
  helper: string,
  className?: string,
  id: string,
  defaultValue: string
}
CreateCropForm.Input = function Component({ children, helper, id, defaultValue }: CreateCropFormInputProps) {
  const helperTextId = `${id}-helper-text`;
  return (
    <FormControl sx={FieldStyle} fullWidth>
      <InputLabel htmlFor={id}>{children}</InputLabel>
      <Input required defaultValue={defaultValue} name={id} aria-describedby={helperTextId}
      />
      <FormHelperText id={helperTextId}>{helper}</FormHelperText>
    </FormControl>
  );
};

type CreateCropFormSelectProps = {
  className?: string,
  items: Record<string, string | null>,
  helper?: string,
  label: string,
  id: string,
}
CreateCropForm.Select = function Component({
                                             helper,
                                             items,
                                             label,
                                             id
                                           }: CreateCropFormSelectProps) {
  return (
    <FormControl fullWidth sx={FieldStyle}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        label={label}
        name={id}
        className="max-h-16"
        required
      >
        {Object.keys(items).map((_i, index) => {
          return <MenuItem key={_i} value={index + 1}>
            {_i}{items[_i] && <span
            className="text-[11px] text-primary-300"> - {items[_i]}</span>}</MenuItem>;

        })}
      </Select>
      <FormHelperText id={id}>{helper}</FormHelperText>
    </FormControl>

  );
};


type CreateCropFormProps = any
export default function CreateCropForm({ defaultValues, onSubmit }: CreateCropFormProps) {


  const healthItems = {
    Healthy: 'Optimal health with vibrant growth and no issues.',
    'Minor stress': 'Slight yellowing or wilting; reversible with care.',
    'Significant distress': 'Pronounced health issues requiring immediate intervention.',
    Dying: 'Severely damaged; recovery uncertain, but some tissue may be alive.'
  };

  const sizeItems = {
    Seedlings: 'Young plants that have just germinated. They are often very small and delicate',
    Juvenile: 'Plants that are still in the early stages of growth but are larger than seedlings. They have developed a few true leaves.',
    'Young Plants': 'More developed than juveniles, with a robust structure and several sets of leaves.',
    'Mature Plants': 'Fully developed plants that have reached their maximum growth for their species. They may be flowering or fruiting.',
    'Over-Mature': 'Plants that are past their peak growth and may show signs of decline.'
  };
  return (
    <Box sx={modalStyle} component="form" onSubmit={onSubmit}>
      <CreateCropForm.Title>Add plant to your crops</CreateCropForm.Title>
      <div className="mt-10 mb-10">

        <CreateCropForm.Input className="mb-5" defaultValue={defaultValues?.name} id="name"
                              helper="We&#39;ll never share your email.">
          Name of my plant
        </CreateCropForm.Input>
        <CreateCropForm.Select id="health" label="How is your crop currently doing?"
                               items={healthItems}></CreateCropForm.Select>
        <CreateCropForm.Select id="size" label="What is the current size of your crop?"
                               items={sizeItems}></CreateCropForm.Select>
      </div>
      <div className="flex">
        <PrimaryButton SxProps={{
          width: '90%',
          margin: '1rem auto'

        }} type="submit">Confirm</PrimaryButton>
      </div>
    </Box>
  );
};