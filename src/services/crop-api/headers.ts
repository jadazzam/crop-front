import jwt from 'jsonwebtoken';
import { getSession } from '@auth0/nextjs-auth0';

export const withAuth = async () => {
  const session = await getSession();
  if (!session) {
    throw new Error('session not found');
  }
  const secret = process.env.AUTH0_SECRET ?? '';
  const token = jwt.sign(session.user, secret, {
    algorithm: 'HS256'
  });
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };
};

export const withoutAuth = {
  'Content-Type': 'application/json'
};