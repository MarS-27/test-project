import { USERS_PAGES } from "@/constants/constants";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Pagination() {
  const { query } = useRouter();
  const activePage = parseInt(query.pageNum as string);

  return (
    <ul className="flex gap-1 justify-center">
      {USERS_PAGES.map((num) => (
        <li
          key={num}
          className={`
            ${activePage === num ? "bg-teal-300" : "bg-slate-100"}
            w-8
            h-7 
            border-2 
            border-gray-700 
            rounded-md 
            hover:bg-teal-300
           `}
        >
          <Link
            href={`/users/${num}`}
            className="
              w-full 
              h-full
              flex 
              items-center 
              justify-center 
            "
          >
            {num}
          </Link>
        </li>
      ))}
    </ul>
  );
}
