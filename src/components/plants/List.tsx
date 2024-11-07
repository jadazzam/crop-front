import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Plant from '@/components/plants/Card';
import { cropType } from '@/interfaces/crops/crop';
import { searchType } from '@/interfaces/plants/search';
import { styled } from '@mui/system';
import PlantDrawer from '@/components/drawer/Drawer';
import * as React from 'react';
import { FormEvent, useState } from 'react';
import { plantType } from '@/interfaces/plants/plant';
import { Modal } from '@mui/material';
import CreateCropForm from '@/components/forms/CreateCrop';
import { withoutAuth } from '@/services/crop-api/headers';


const Item = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center'
}));

export const PlantsList = (props: {
  search: searchType | null;
}) => {
  const { search } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selected, setSelected] = useState<plantType | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [openModal, setOpenModal] = useState(false);

  const handleDrawer = (plant: plantType | null) => {
    setSelected(plant);
    setOpenDrawer(!openDrawer);
  };
  const handleModal = (plant: plantType) => {
    setSelected(plant);
    setOpenModal(prevState => !prevState);
  };

  const handleExpand = (id: number) => {
    setExpanded(prevState => (
      {
        ...prevState, [id]: !prevState[id]
      }
    ));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    let perenualId;
    if (selected) perenualId = selected?.id;
    const formData: FormData = new FormData(e.currentTarget);
    const name = formData.get('name') as string | null;
    const size = formData.get('size') as string;
    const health = formData.get('health') as string;
    try {
      const response: Response = await fetch('/api/crops', {
        method: 'POST',
        body: JSON.stringify({
          perenualId: perenualId,
          name: name,
          size: +size,
          health: +health
        }),
        headers: withoutAuth
      });
      if (!response.ok) {
        console.error('Failed to post crop:', await response.text());
        return;
      }
      const crop: cropType = await response.json();
      if (crop) {
        setTimeout(() => setOpenModal(false), 200);
      }
    } catch (error) {
      console.error('Error posting crop:', error);
    }
  };

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} style={{ margin: 0, width: '100%' }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {search?.data?.map((_p: plantType, _i) => (
        <Item xs={2} sm={4} md={4} key={_i}>
          <Plant expanded={expanded[_p.id]} plant={_p} handleModal={handleModal} handleDrawer={handleDrawer}
                 handleExpand={handleExpand} />
        </Item>
      ))}
      <PlantDrawer open={openDrawer} handleDrawer={handleDrawer} plant={selected} handleModal={handleModal} />
      <Modal
        open={openModal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreateCropForm defaultValues={{ name: selected?.common_name }} onSubmit={onSubmit} />
      </Modal>
    </Grid>
  );
};