import { Context, createContext } from 'react';
import { UserProfile } from '@auth0/nextjs-auth0/client';

export const UserContext: Context<UserProfile | undefined> = createContext<UserProfile | undefined>(undefined
);