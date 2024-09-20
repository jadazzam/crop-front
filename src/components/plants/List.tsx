import type { plantType } from '@/interfaces/plants/plant';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


import Plant from '@/components/plants/Card';
import { cropType } from '@/interfaces/crops/crop';
import { searchPlantType } from '@/interfaces/plants/search';
import { styled } from '@mui/system';


const Item = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center'
}));

export const PlantsList = (props: {
  search: searchPlantType | null;
  setCrop: (crop: cropType) => void;
}) => {
  const { search, setCrop } = props;
  const addCrop = async (id: string) => {
    const perenualId = id.toString();
    try {
      const response = await fetch('/api/crops', {
        method: 'POST',
        body: JSON.stringify({
          perenualId: perenualId,
          name: `Front + ${Date.now()}`,
          size: '1-2-f'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        console.error('Failed to post crop:', await response.text());
        return;
      }
      const crop: cropType = await response.json();
      if (crop) {
        setCrop(crop);
      }
    } catch (error) {
      console.error('Error posting crop:', error);
    }
  };
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {search?.data?.map((_p: plantType, _i) => (
        <Item xs={2} sm={4} md={4} key={_i}>
          <Plant plant={_p} addCrop={addCrop} />
        </Item>
      ))}
    </Grid>
  );
};