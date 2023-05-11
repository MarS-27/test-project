import { BASE_URL } from "@/constants/constants";
import { ChangeEvent, useState } from "react";
import { UserFullInfo } from "@/types/types";
import SearchedUser from "./SearchedUser";

export default function SearchWidget() {
  const [searchValue, setSearchValue] = useState("");
  const [searchedUsers, setSearchedUsers] = useState<UserFullInfo[]>([]);
  console.log(searchedUsers);

  const cityHandleInput = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    if (searchValue.length >= 1) {
      const res = await fetch(`${BASE_URL}/search?q=${searchValue}`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const users = await res.json().then((data) => data.users);

      setSearchedUsers(users);
    } else {
      setSearchedUsers([]);
    }
  };

  return (
    <div className="flex justify-center items-center relative">
      <input
        className="
            w-2/5
            p-2
            border-slate-700
            border-2 
            rounded-lg
            bg-slate-100
            outline-cyan-500
            placeholder:text-stone-500
        "
        type="text"
        value={searchValue}
        onChange={cityHandleInput}
        placeholder="Search user"
      />
      {searchValue.length > 1 && (
        <ul
          className="
            absolute 
            top-[110%] 
            w-2/5 
            bg-slate-400 
            z-50 
            rounded-lg 
            max-h-52 
            overflow-y-scroll 
            p-5 
            flex
            flex-col
            gap-2
          "
        >
          {searchedUsers.length ? (
            searchedUsers.map((user) => (
              <SearchedUser key={user.id} user={user} />
            ))
          ) : (
            <li>Nothing not found!</li>
          )}
        </ul>
      )}
    </div>
  );
}
