import Grid from '@mui/material/Grid';
import Plant from '@/components/plants/Card';
import { cropType } from '@/interfaces/crops/crop';
import { searchType } from '@/interfaces/plants/search';
import PlantDrawer from '@/components/drawer/Drawer';
import * as React from 'react';
import { FormEvent, useEffect, useState } from 'react';
import { plantType } from '@/interfaces/plants/plant';
import { Modal } from '@mui/material';
import CreateCropForm from '@/components/forms/CreateCrop';
import { withoutAuth } from '@/services/crop-api/headers';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material';
import { useRouter } from 'next/navigation';


export const PlantsList = (props: {
  search: searchType | null;
}) => {
  const router = useRouter();
  const { search } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selected, setSelected] = useState<plantType | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleDrawer = (plant: plantType): void => {
    if (plant.id) setSelected(plant);
    else setSelected(null);
    setOpenDrawer(prevState => !prevState);
  };
  const handleModal = (plant?: plantType): void => {
    if (plant) setSelected(plant);
    setOpenModal(prevState => !prevState);
  };

  const handleExpand = (id: number): void => {
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
      if (response.status === 401) {
        setOpenModal(false);
        setErrorMessage('Please log in to add a plant to your crops. Redirecting you to the sign-in page...');
        setTimeout(() => {
          router.push('/api/auth/login');
        }, 5000);
      }
      if (!response.ok) {
        console.error('Failed to post crop:', await response.text());
        return;
      }
      const crop: cropType = await response.json();
      if (crop) {
        setOpenModal(false);
      }
    } catch (error) {
      console.error('Error posting crop:', error);
    }
  };
  return (<>
      <Box>
        <Grid container
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              rowSpacing={{ xs: 1, sm: 2, md: 3 }}
              direction="row"
              alignItems="normal">
          {search?.data?.map((_p: plantType, _i) => (
            <Grid item xs={12} sm={6} md={4} xl={2} key={_i}>
              <Plant expanded={expanded[_p.id]} plant={_p} handleModal={handleModal} handleDrawer={handleDrawer}
                     handleExpand={handleExpand} />
            </Grid>
          ))}
        </Grid>
        {selected &&
          <PlantDrawer open={openDrawer} handleDrawer={handleDrawer} plant={selected} handleModal={handleModal} />}
        <Modal
          open={openModal}
          onClose={() => handleModal()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <CreateCropForm handleModal={handleModal} defaultValues={{ name: selected?.common_name }}
                          onSubmit={onSubmit} />
        </Modal>
      </Box>
      {errorMessage && <div className="w-full absolute top-[10%]">
        <Alert className="flex justify-center w-1/2 m-auto font-bold border p-4"
               style={{
                 boxShadow: '1px 1px 1px 1px #EF7A29, 0 1px 2px -1px #EF7A29',
                 borderColor: '#EF7A29'
               }}
               severity="warning">{errorMessage}</Alert>
      </div>}
    </>
  );
};