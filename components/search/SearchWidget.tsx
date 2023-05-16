import { useEffect, useState } from 'react';
import { UserFullInfo } from '@/types/types';
import { SearchedUser } from './SearchedUser';

export const SearchWidget = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchedUsers, setSearchedUsers] = useState<UserFullInfo[]>([]);

  const fetchUsers = async () => {
    const res = await fetch(
      `https://dummyjson.com/users/search?q=${searchValue}`,
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();

    setSearchedUsers(data.users);
  };

  useEffect(() => {
    searchValue ? fetchUsers() : setSearchedUsers([]);
  }, [searchValue]);

  return (
    <div className="flex justify-center items-center relative">
      <input
        className=" w-2/5 p-2 border-slate-700 border-2 rounded-lg bg-slate-100 outline-cyan-500 placeholder:text-stone-500"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value.trimStart())}
        placeholder="Search user"
      />
      {searchValue ? (
        <div className="absolute top-[110%] w-2/5 bg-slate-400 z-50 rounded-lg max-h-52 overflow-y-scroll p-5 flex flex-col gap-2">
          {searchedUsers.length ? (
            searchedUsers.map((user) => (
              <SearchedUser key={user.id} user={user} />
            ))
          ) : (
            <p>User not found!</p>
          )}
        </div>
      ) : null}
    </div>
  );
};
