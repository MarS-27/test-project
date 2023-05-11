import Link from "next/link";

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Pagination() {
  return (
    <ul className="flex gap-1 justify-center">
      {test.map((num) => (
        <li
          key={num}
          className="
            
            w-6 
            h-5 
            border-2 
            border-gray-700 
            rounded-md 
            bg-slate-100
            hover:bg-teal-300
          "
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
