import { Users, SortBy } from '../types/types';

export const sortUsers = (users: Users, sortBy: SortBy) => {
  if (sortBy === 'name') {
    return [...users].sort((a, b) => {
      const fullNameA = a.firstName + a.lastName;
      const fullNameB = b.firstName + b.lastName;

      return fullNameB.localeCompare(fullNameA);
    });
  } else {
    return [...users].sort((a, b) => b[sortBy] - a[sortBy]);
  }
};
