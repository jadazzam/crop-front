import * as React from 'react';
import { useEffect, useState } from 'react';
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

const Sunlight = {
  FullSun: 'full sun',
  PartShade: 'part shade',
  FullShade: 'full_shade', SunPartShade: 'sun-part_shade'
};

type plantProps = {
  plant: plantType;
  addCrop: (id: string) => void;
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

export default function PlantCard({ plant, addCrop }: plantProps) {
  //update the size of the card when the size of the screen changes
  const { id, default_image, scientific_name, common_name, family, other_name, sunlight, watering } = plant;
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
  }, []);

  const imageStyle = {
    borderRadius: '5%',
    border: '1px solid #fff'
  };
  const renderSunCondition = (conditions: string[]) => {
    if (conditions.includes(Sunlight.FullSun)) {
      return {
        src: '/sunny.svg',
        alt: Sunlight.FullSun,
        description: 'Give your plant some sunny love, and watch it thrive!'
      };
    } else if (conditions.includes(Sunlight.SunPartShade)) {
      return {
        src: '/part-sunny.svg',
        alt: Sunlight.SunPartShade,
        description: 'Your plant enjoys a mix of sun and shade to stay happy and healthy!'
      };
    } else if (conditions.includes(Sunlight.PartShade)) {
      return {
        src: '/part-shade.svg',
        alt: Sunlight.PartShade,
        description: 'Give your plant a mix of sun and shade, and it will be one happy camper!'
      };
    } else if (conditions.includes(Sunlight.FullShade)) {
      return {
        src: '/full-shade.svg',
        alt: Sunlight.FullShade,
        description: 'Keep your plant happy by giving it a cozy, shady spot to chill!'
      };
    } else {
      return {
        src: '',
        alt: '',
        description: ''
      };
    }
  };

  const renderWatering = (watering: string) => {
    switch (watering) {
      case 'Minimum':
        return {
          src: '/water-min.svg',
          alt: 'Water minimum',
          description: 'Think of it as the camel of the plant world; a little water goes a long way!'
        };
        break;
      case 'Average':
        return {
          src: '/water-average.svg',
          alt: 'Water average',
          description: 'Water it like Goldilocks: not too dry, not too wet, but just right!'
        };
        break;
      case 'Frequent':
        return {
          src: '/water-frequent.svg',
          alt: 'Water frequent',
          description: 'Think of this plant as always thirsty – it\'s your own little waterholic!'
        };
        break;
      case 'None':
        return {
          src: '/water-none.svg',
          alt: 'Water none',
          description: 'This plant is on a water-free diet – no H2O needed!'
        };
        break;
      default:
        return {
          src: '/water-frequent.svg',
          alt: 'Water frequent',
          description: 'Think of this plant as always thirsty – it\'s your own little waterholic!'
        };
    }

  };
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 10 }}>
      <CardHeader
        action={
          <IconButton onClick={() => addCrop(id.toString())} aria-label="add crop">
            <AddOutlinedIcon color="secondary" />
          </IconButton>
        }
        title={<span className="heading-4">{common_name}</span>}
        subheader={scientific_name[0]}
      />
      <CardMedia
        component="img"
        sx={{ width: 345, height: 345 }}
        image={default_image?.small_url}
        alt={common_name}
      />
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