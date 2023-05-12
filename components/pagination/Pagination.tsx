import { PAGINATION_DOTS } from '@/constants/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const Pagination = ({ pagesCount }: { pagesCount: number }) => {
  const { query } = useRouter();
  const activePage = parseInt(query.pageNum as string);
  const [activePaginationTemplate, setActivePaginationTemplate] = useState<
    (string | number)[]
  >([]);

  const paginationTemlates = {
    forFirstAndLastElem: [
      1,
      2,
      3,
      PAGINATION_DOTS,
      pagesCount - 2,
      pagesCount - 1,
      pagesCount,
    ],
    forThirdElem: [1, 2, 3, 4, PAGINATION_DOTS, pagesCount - 1, pagesCount],
    forLastThirdElem: [
      1,
      2,
      PAGINATION_DOTS,
      pagesCount - 3,
      pagesCount - 2,
      pagesCount - 1,
      pagesCount,
    ],
    forAnotherElem: [
      1,
      PAGINATION_DOTS,
      activePage - 1,
      activePage,
      activePage + 1,
      PAGINATION_DOTS,
      pagesCount,
    ],
  };

  useEffect(() => {
    if (activePage < 3 || activePage > pagesCount - 2) {
      setActivePaginationTemplate(paginationTemlates.forFirstAndLastElem);
    } else if (activePage === 3) {
      setActivePaginationTemplate(paginationTemlates.forThirdElem);
    } else if (activePage === pagesCount - 2) {
      setActivePaginationTemplate(paginationTemlates.forLastThirdElem);
    } else {
      setActivePaginationTemplate(paginationTemlates.forAnotherElem);
    }
  }, [activePage]);

  return (
    <ul className="flex gap-1 justify-center">
      {activePaginationTemplate.map((item, i) => (
        <li
          key={Math.random() + i}
          className={`
            ${activePage === item ? 'bg-teal-300' : 'bg-slate-100'}
            ${
              item === PAGINATION_DOTS
                ? 'text-center bg-transparent'
                : 'w-8 h-7 border-2 border-gray-700 rounded-md hover:bg-teal-300'
            }
           `}
        >
          {item === PAGINATION_DOTS ? (
            <p className="font-bold px-1 text-xl tracking-[1.5px]">
              {PAGINATION_DOTS}
            </p>
          ) : (
            <Link
              href={`/users/${item}`}
              className="
                w-full 
                h-full
                flex 
                items-center 
                justify-center 
              "
            >
              {item}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
