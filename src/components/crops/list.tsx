import type { cropType } from '@/interfaces/crops/crop';

import Crop from '@/components/crops/card';

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
    <ul className="grid grid-cols-4 gap-4 place-items-center items-stretch">
      {data?.map((_c: cropType) => (
        <Crop key={_c.id} crop={_c} deleteCrop={deleteCrop} />
      ))}
    </ul>
  );
};