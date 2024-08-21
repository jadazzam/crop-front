import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cropType } from '@/interfaces/crops/crop';
import { CropHandler } from '@/components/buttons/cropHandler';
import { plantType } from '@/interfaces/plants/plant';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import * as React from 'react';
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
export default function Crop({ crop, deleteCrop }: cropProps) {
  const { id, name, perenual, size } = crop;
  let { default_image, common_name, other_name, family, sunlight, watering }: plantType = perenual ?? {};
  console.log('crop =>', crop);
  const [width, setWidth] = useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const syns: any =
    other_name && other_name.length
      ? other_name.slice(0, 3)
      : 'N/A';

  const renderSynonyms = (names: string[]) => {
    return names?.map((_s: string) => <span key={_s}>{_s}</span>);
  };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 10 }}>
      <CardHeader
        action={
          <IconButton onClick={() => deleteCrop(id.toString())} aria-label="add crop">
            <AddOutlinedIcon color="secondary" />
          </IconButton>
        }
        title={<span className="heading-4">{name}</span>}
        subheader={common_name}
      />
      <Link className="flex-1 h-full" href={`/crops/${id}/page.tsx`} as={`/crops/${id}`}>
        <CardMedia
          component="img"
          sx={{ width: 345, height: 345 }}
          image={default_image?.small_url || default_image?.original_url}
          alt={common_name}
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
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
          <div className="flex ">

            <Image className="mr-4" width={48} height={48} src={renderSunCondition(sunlight).src}
                   alt={renderSunCondition(sunlight).alt} /> {renderSunCondition(sunlight).description}
          </div>
          <div className="flex mt-5">

            <Image className="mr-4" width={48} height={48} src={renderWatering(watering).src}
                   alt={renderWatering(watering).alt} />
            <p>{renderWatering(watering).description}</p>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}