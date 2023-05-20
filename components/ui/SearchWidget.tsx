import { useEffect, useState } from 'react';
import { Users } from '@/types/types';
import { SearchedUser } from './SearchedUser';
import { useDebounceValue } from '@/hooks/debounce';

type Cache = {
  [key: string]: Users;
};

export const SearchWidget = () => {
  const [searchValue, setSearchValue] = useState('');
  const [cachedUsers, setCachedUsers] = useState<Cache>({});

  const debouncedValue = useDebounceValue(searchValue, 500);

  const handleBlur = () => {
    setSearchValue('');
    setCachedUsers({});
  };

  useEffect(() => {
    const controller = new AbortController();

    if (!cachedUsers[debouncedValue] && debouncedValue) {
      fetch(`https://dummyjson.com/users/search?q=${searchValue}`, {
        signal: controller.signal,
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
          return res.json();
        })
        .then((data) => {
          setCachedUsers({ ...cachedUsers, [debouncedValue]: data.users });
        });
    } else if (!debouncedValue) {
      setCachedUsers({});
    }

    return () => controller.abort();
  }, [debouncedValue]);

  return (
    <div className="flex justify-center items-center relative">
      <input
        className=" w-2/5 p-2 border-slate-700 border-2 rounded-lg bg-slate-100 outline-cyan-500 placeholder:text-stone-500"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value.trim())}
        onBlur={handleBlur}
        placeholder="Search users"
      />
      {debouncedValue ? (
        <div className="absolute top-[110%] w-2/5 bg-slate-400 z-50 rounded-lg max-h-52 overflow-y-scroll p-5 flex flex-col gap-2">
          {cachedUsers[debouncedValue]?.length ? (
            cachedUsers[debouncedValue].map((user) => (
              <SearchedUser key={user.id} user={user} />
            ))
          ) : (
            <p>Users not found!</p>
          )}
        </div>
      ) : null}
    </div>
  );
};
