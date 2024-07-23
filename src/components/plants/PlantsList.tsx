import type { plantType } from '@/interfaces/plants/plant';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


import PlantCard from '@/components/plants/PlantCard';
import { cropType } from '@/interfaces/crops/crop';
import { searchPlantType } from '@/interfaces/plants/search';

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
    <Grid container spacing={4}>
      {search?.data?.map((_p: plantType) => (
        <Grid xs={2} sm={4} md={4} key={_p.id}>
          <PlantCard key={_p.id} plant={_p} addCrop={addCrop} />
        </Grid>
      ))}
    </Grid>
  );
};