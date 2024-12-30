import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cropType } from '@/interfaces/crops/crop';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import { renderSunCondition, renderWatering } from '@/common/helpers';

type cropProps = {
  crop: cropType;
  deleteCrop: (id: string) => any;
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

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
export default function CropCard({ crop, deleteCrop }: cropProps) {
  const { id, name, perenual } = crop;
  let default_image,
    common_name,
    sunlight,
    watering = '';
  if (perenual) {
    default_image = perenual.default_image;
    common_name = perenual.common_name;
    sunlight = perenual.sunlight;
    watering = perenual.watering;
  }
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card sx={{ maxWidth: 345, borderRadius: 10 }}>
      <CardHeader
        action={
          <IconButton onClick={() => {
            if (id) deleteCrop(id);
          }} aria-label="delete- crop">
            <RemoveOutlinedIcon color="secondary" />
          </IconButton>
        }
        title={<span className="heading-4">{name}</span>}
        subheader={common_name || 'No common name available'}
      />
      <Link href={`/crops/${id}/page.tsx`} as={`/crops/${id}`}>
        <CardMedia
          component="img"
          sx={{ width: 345, height: 345 }}
          image={default_image?.small_url || default_image?.original_url || '/coming-soon.jpg'}
          alt={common_name || 'coming soon'}
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {crop.description || 'No description available for this crop.'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="secondary" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon color="secondary" />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon color="secondary" />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description</Typography>
          <div className="flex">
            <Image
              className="mr-4"
              width={48}
              height={48}
              src={renderSunCondition(sunlight)?.src || '/default-sun-icon.png'}
              alt={renderSunCondition(sunlight)?.alt || 'Sun condition placeholder'}
            />
            {renderSunCondition(sunlight)?.description || 'No sunlight info available'}
          </div>
          <div className="flex mt-5">
            <Image
              className="mr-4"
              width={48}
              height={48}
              src={renderWatering(watering)?.src}
              alt={renderWatering(watering)?.alt}
            />
            <p>{renderWatering(watering)?.description || 'No watering info available'}</p>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
};