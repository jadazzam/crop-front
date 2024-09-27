import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import type { cropType } from '@/interfaces/crops/crop';
import Crop from '@/components/crops/Card';
import { styled } from '@mui/system';

const Item = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center'
}));

export const CropsList = (props: {
  data: cropType[];
  setMyCrop: (crop: cropType) => void;
}) => {
  const { data, setMyCrop } = props;
  const deleteCrop = async (id: string) => {
    try {
      const crop = await fetch(`/api/crops/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json());

      if (!crop) {
        console.error('Failed to post crop:');
        return;
      }
      if (crop) {
        setMyCrop(crop);
      }
      return crop;
    } catch (error) {
      console.error('Error posting crop:', error);
    }
  };
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
      {data?.map((_c: cropType, _i: number) => (
        <Item xs={2} sm={4} md={4} key={_i}>
          <Crop key={_c.id} crop={_c} deleteCrop={deleteCrop} />
        </Item>
      ))}
    </Grid>
  );
};