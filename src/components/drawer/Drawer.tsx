import React from 'react';
import { Drawer } from '@mui/material';
import Image from 'next/image';


type DrawerProps = Record<string, any>


export default class PlantDrawer extends React.Component<DrawerProps> {
  render() {
    const { plant } = this.props;
    const { id, default_image, scientific_name, common_name, family, other_name, sunlight, watering } = plant;
    return (
      <Drawer
        anchor={'right'}
        open={this.props.open || false}
        onClose={() => this.props.handleDrawer()}
        sx={{
          width: { xs: '90%', sm: '70%', md: '40%', lg: '30%' },  // Control the drawer's width
          height: '100%',  // Control the height of the drawer
          '& .MuiDrawer-paper': { width: 'inherit', height: '100%' }  // Ensure paper follows custom size
        }}
      >
        <div className="flex flex-col items-center">
          <div className="h-[50vh]">

            <Image
              src={default_image?.small_url || default_image?.original_url}
              fill
              alt={common_name}
              loading="lazy"
              style={{
                objectFit: 'cover',
                maxHeight: '50vh', // Ensure image does not exceed the height of the div
                maxWidth: '100vh'
              }}
            />
          </div>
          <div>
            <span className="heading-2 text-lg font-semibold">{common_name}</span>
          </div>
        </div>
      </Drawer>
    );
  }
}