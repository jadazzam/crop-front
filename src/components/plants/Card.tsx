import * as React from 'react';
import type { plantType } from '@/interfaces/plants/plant';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Image from 'next/image';
import { descriptionOptions, renderSunCondition, renderWatering } from '@/common/helpers';
import { capitalize } from '@mui/material';

type plantProps = {
  plant: plantType;
  handleModal: (plant: plantType) => void;
  handleDrawer: (plant: plantType) => void,
  handleExpand: (id: number) => void,
  expanded: boolean
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}


export default function Plant({ plant, handleModal, handleDrawer, handleExpand, expanded }: plantProps) {
  //update the size of the card when the size of the screen changes
  const { id, default_image, scientific_name, common_name, sunlight, watering, cycle, other_name } = plant;


  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  }));

  return (
    <Card className={'h-full'}>
      <CardHeader
        className="min-h-[7rem]"
        action={<IconButton onClick={() => handleModal(plant)} aria-label="add crop">
          <AddOutlinedIcon color="secondary" />
        </IconButton>}
        title={
          <span
            className="whitespace-nowrap overflow-ellipsis text-primary-800">{capitalize(common_name)}</span>
        }
        subheader={scientific_name[0]} />
      <CardMedia
        component="img"
        sx={{ height: '14em', objectFit: 'cover' }}
        image={default_image?.regular_url || default_image?.original_url || `/coming-soon.jpg`}
        alt={common_name}
        onClick={() => handleDrawer(plant)} />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="secondary" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon color="secondary" />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={() => handleExpand(id)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon color="secondary" />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ fontWeight: 'semi-bold' }}>Description</Typography>
          <div className="flex mt-4">
            <div className="mr-4">
              <Image width={24} height={24} src={renderSunCondition(sunlight).src}
                     alt={renderSunCondition(sunlight).alt} />
            </div>
            <Typography variant="body2" color="text.secondary">{renderSunCondition(sunlight).description}</Typography>
          </div>
          <div className="flex mt-5">
            <div className="mr-4">
              <Image width={24} height={24} src={renderWatering(watering).src}
                     alt={renderWatering(watering).alt} />
            </div>
            <Typography variant="body2" color="text.secondary">{renderWatering(watering).description}</Typography>
          </div>
          <Typography paragraph sx={{ marginTop: 2 }} className="mt-10" variant="body2" color="text.secondary">
            {descriptionOptions({
              common_name,
              scientific_name: scientific_name,
              cycle,
              sunlight,
              other_name: other_name,
              watering
            })}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}