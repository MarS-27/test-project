import { Fragment, FC } from 'react';
import Link from 'next/link';
import { PaginationButton } from './PaginationButton';
import { getPaginationTemplate } from '@/utils/getPagination';

type PaginationProps = {
  activePageNumber: number;
};

export const Pagination: FC<PaginationProps> = ({ activePageNumber }) => {
  const pagesCount = 10;
  const paginationTemplate = getPaginationTemplate(
    activePageNumber,
    pagesCount,
  );

  return (
    <div className="flex justify-center gap-3">
      <PaginationButton
        variant="prev"
        activePageNumber={activePageNumber}
        pagesCount={pagesCount}
      />
      <div className="flex gap-1 justify-center items-center">
        {paginationTemplate.map((item, i) => (
          <Fragment key={i}>
            {item === '...' ? (
              <p className="font-bold px-1 text-xl tracking-[1.5px]">...</p>
            ) : (
              <Link
                href={`/users/${item}`}
                passHref
                className="block rounded-md"
              >
                <button
                  disabled={activePageNumber === item}
                  className="w-8 h-7 border-2 border-gray-700 rounded-md enabled:hover:bg-teal-300 enabled:bg-slate-100 disabled:bg-teal-300"
                >
                  {item}
                </button>
              </Link>
            )}
          </Fragment>
        ))}
      </div>
      <PaginationButton
        variant="next"
        activePageNumber={activePageNumber}
        pagesCount={pagesCount}
      />
    </div>
  );
};
