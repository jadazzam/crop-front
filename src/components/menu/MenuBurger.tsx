import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { loginItems, navbarItems } from '@/common/helpers';
import { OverridableComponent } from '@mui/types';
import { SvgIconTypeMap } from '@mui/material';
import { ReactNode } from 'react';

const Burger = ({ toggleDrawer }: { toggleDrawer: () => void }) => (
  <IconButton
    size="large"
    aria-label="account of current user"
    aria-controls="menu-appbar"
    aria-haspopup="true"
    onClick={toggleDrawer}
    sx={{ color: 'white' }}
  >
    <MenuIcon />
  </IconButton>
);

type DrawerBlockProps = {
  open: boolean,
  toggleDrawer: () => void,
  anchor: 'right' | 'left',
  children: ReactNode,
}
export const DrawerBlock = ({ open, toggleDrawer, anchor, children }: DrawerBlockProps) => {
  return (
    <Drawer open={open} onClose={toggleDrawer} anchor={anchor}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
        {children}
      </Box>
    </Drawer>
  );
};

DrawerBlock.List = function DrawerBlockList({ children }: { children: ReactNode }) {
  return (
    <List>
      {children}
    </List>
  );
};

export type ListItemProps = {
  title: string,
  link: string,
  IconSvg: OverridableComponent<SvgIconTypeMap> & { muiName: string; },
  index?: number
}
DrawerBlock.ListItem = function DrawerBlockListItem({ title, link, IconSvg, index }: ListItemProps) {
  return (
    <ListItem key={index} disablePadding>
      <ListItemButton href={link}>
        <ListItemIcon>
          <IconSvg />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};


type DrawerBlockItemsProps = {
  items: ListItemProps[]
}
DrawerBlock.Items = function DrawerBlockItems({ items }: DrawerBlockItemsProps) {
  return items.map((_s: ListItemProps, _i: number) => {
    return (
      <DrawerBlock.ListItem title={_s.title} key={_i} link={_s.link} IconSvg={_s.IconSvg} index={_i} />
    );
  });
};


export default function MenuBurger() {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDrawer = () => setOpen(prevState => !prevState);

  const DrawerList = (
    <>
      <DrawerBlock.List>
        <DrawerBlock.Items items={navbarItems} />
      </DrawerBlock.List>
      <Divider />
      <DrawerBlock.List>
        <DrawerBlock.Items items={loginItems} />
      </DrawerBlock.List>
    </>
  );

  return (
    <>
      <Burger toggleDrawer={toggleDrawer} />
      <DrawerBlock open={open} toggleDrawer={toggleDrawer} anchor="right">
        {DrawerList}
      </DrawerBlock>
    </>
  );
}