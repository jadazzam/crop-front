import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { string } from 'zod';
import { Claims } from '@auth0/nextjs-auth0';
import './navbar.css';

const Nav = (props: { user: Claims | undefined }) => {
  const [width, setWidth] = useState(0);
  const { user } = props;

  return (
    <>
      {/*<Navbar className="bg-cropy" fluid>*/}
      {/*  <Navbar.Brand href="./">*/}
      {/*    <img src="/crop-white.svg" className="mr-3 h-6 sm:h-9" alt="Save My Crop Logo" />*/}
      {/*    <span*/}
      {/*      className="self-center whitespace-nowrap text-xl font-semibold text-white dark:text-white">Save my crop</span>*/}
      {/*  </Navbar.Brand>*/}
      {/*  <div className="flex md:order-2">*/}
      {/*    {!user ? (*/}
      {/*      <div className="nav-btn-sign-in">*/}
      {/*        <a*/}
      {/*          href="/api/auth/login"><Button className="btn-sign-in">Sign*/}
      {/*          in</Button></a>*/}
      {/*      </div>*/}
      {/*    ) : <Dropdown*/}
      {/*      arrowIcon={false}*/}
      {/*      inline*/}
      {/*      label={*/}
      {/*        <Avatar alt="user"*/}
      {/*                img="/Jad.jpg" rounded />*/}
      {/*      }*/}
      {/*    >*/}
      {/*      <Dropdown.Header>*/}
      {/*        <span className="block text-sm">{user.nickname}</span>*/}
      {/*        <span className="block truncate text-sm font-medium">{user.email}</span>*/}
      {/*      </Dropdown.Header>*/}
      {/*      <Dropdown.Item>Dashboard</Dropdown.Item>*/}
      {/*      <Dropdown.Item>Settings</Dropdown.Item>*/}
      {/*      <Dropdown.Item>Earnings</Dropdown.Item>*/}
      {/*      <Dropdown.Divider />*/}
      {/*      <a href="/api/auth/logout"><Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item></a>*/}
      {/*    </Dropdown>}*/}
      {/*    <Navbar.Toggle />*/}
      {/*  </div>*/}
      {/*  <Navbar.Collapse>*/}
      {/*    <Navbar.Link href="#" active>*/}
      {/*      Home*/}
      {/*    </Navbar.Link>*/}
      {/*    <Navbar.Link href="#">About</Navbar.Link>*/}
      {/*    <Navbar.Link href="#">Services</Navbar.Link>*/}
      {/*    <Navbar.Link href="#">Pricing</Navbar.Link>*/}
      {/*    <Navbar.Link href="#">Contact</Navbar.Link>*/}
      {/*  </Navbar.Collapse>*/}
      {/*</Navbar>*/}

    </>

  )
    ;
};

export default Nav;