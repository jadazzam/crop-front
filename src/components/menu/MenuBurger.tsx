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
import { loginItem, logoutItem, navbarItems } from '@/common/helpers';
import { OverridableComponent } from '@mui/types';
import { SvgIconTypeMap } from '@mui/material';
import { ReactNode } from 'react';
import { Claims } from '@auth0/nextjs-auth0';

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

DrawerBlock.Lists = function DrawerBlockLists({ user }: { user: Claims | undefined }) {
  return (
    <>
      <DrawerBlock.List>
        <DrawerBlock.Items items={navbarItems} />
      </DrawerBlock.List>
      <Divider />
      <DrawerBlock.List>
        {user ? (<>
            <ListItem key={98}>
              <span className="mx-auto">{user.email}</span>
            </ListItem>
            <DrawerBlock.ListItem title={logoutItem.title} key={99} link={logoutItem.link} IconSvg={logoutItem.IconSvg}
                                  index={99} />
          </>
        ) : (
          <DrawerBlock.ListItem title={loginItem.title} key={99} link={loginItem.link} IconSvg={loginItem.IconSvg}
                                index={97} />
        )
        }
      </DrawerBlock.List>
    </>
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


export default function MenuBurger({ user }: { user: Claims | undefined }) {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDrawer = () => setOpen(prevState => !prevState);


  return (
    <>
      <Burger toggleDrawer={toggleDrawer} />
      <DrawerBlock open={open} toggleDrawer={toggleDrawer} anchor="right">
        <DrawerBlock.Lists user={user} />
      </DrawerBlock>
    </>
  );
}