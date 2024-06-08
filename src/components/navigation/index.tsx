'use client';

import Navbar from './navbar';
import { Claims } from '@auth0/nextjs-auth0';

const Navigation = (props: { user?: Claims | undefined }) => {
  return <Navbar user={props?.user} />;
};

export default Navigation;