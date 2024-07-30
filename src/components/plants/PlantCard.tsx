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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';


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
  const { id, default_image, scientific_name, common_name, family, other_name, sunlight } = plant;
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

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton onClick={() => addCrop(id.toString())} aria-label="add crop">
            <AddOutlinedIcon />
          </IconButton>
        }
        title={common_name}
        subheader={scientific_name[0]}
      />
      <CardMedia
        component="img"
        height="194"
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
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description</Typography>
          <div style={{ display: 'flex' }}>

            <Image className="mr-4" width={32} height={32} src={renderSunCondition(sunlight).src}
                   alt={renderSunCondition(sunlight).alt} /> {renderSunCondition(sunlight).description}
          </div>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}