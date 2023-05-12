import { StaticRoutes } from '@/types/types';

export const BASE_URL = 'https://dummyjson.com/users';
export const USERS_LIMIT = '10';
export const MAX_USERS = '500';
export const PAGINATION_DOTS = '...';
export const USERS_SELECT_PARAMS = 'firstName,lastName,image';

export const STATIC_ROUTES: StaticRoutes = {
  home: {
    name: 'HOME',
    path: '/',
  },
  users: {
    name: 'USERS',
    path: '/users/1',
  },
};
