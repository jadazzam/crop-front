import Grid from '@mui/material/Grid';
import type { cropType } from '@/interfaces/crops/crop';
import CropCard from '@/components/crops/Card';
import { styled } from '@mui/system';
import { cropsTitle } from '@/common/helpers';
import { FindMyPlantButton } from '../../app/page.buttons';
import { errors } from '@/common/errors';
import { useRouter } from 'next/navigation';

const Item = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center'
}));

type CropsListProps = {
  displayError: boolean;
  error: string | undefined;
  crops: cropType[];
  deleteCrop: (id: string) => void;
}

export const CropsList = ({ displayError = false, error = undefined, crops, deleteCrop }: CropsListProps) => {
  const router = useRouter();
  if (displayError && error) {
    if (error === errors.NOT_AUTHENTICATED) {
      setTimeout(() => {
        router.push('/api/auth/login');
      }, 5000);
    } else {
      setTimeout(() => {
        router.push('dashboard');
      }, 5000);
    }

    return (
      <>
        <h4>{`${error === errors.NOT_AUTHENTICATED ? 'Create your own user and search for your plant !' : 'Something went wrong, please come back later :) ...'}`}</h4>
        <h5>You will be redirected in a moment !</h5>
      </>
    );
  } else if (!crops?.length && displayError) {
    return (
      <>
        <h4>{`You don't have any crops ...`}</h4>
        <h5>This way to add one ...</h5>
        <FindMyPlantButton />
      </>
    );
  } else if (!error && crops?.length) {
    return (
      <div>
        <div className="text-center">
          <h2 className="heading-2">My crops : {cropsTitle}</h2>
        </div>
        <Grid container spacing={{ xs: 2, md: 3 }}
              style={{ margin: 0, width: '100%' }}
              columns={{ xs: 4, sm: 8, md: 12 }}>
          {crops?.map((_c: cropType, _i: number) => (
            <Item xs={2} sm={4} md={4} key={_i}>
              <CropCard key={_c.id} crop={_c} deleteCrop={deleteCrop} />
            </Item>
          ))}
        </Grid>
      </div>
    );
  }
};