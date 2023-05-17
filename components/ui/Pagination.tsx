import { Fragment, FC } from 'react';
import clsx from 'clsx';
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
      <PaginationButton variant="prev" activePageNumber={activePageNumber} />
      <div className="flex gap-1 justify-center">
        {paginationTemplate.map((item, i) => (
          <Fragment key={i}>
            {item === '...' ? (
              <p className="font-bold px-1 text-xl tracking-[1.5px]">...</p>
            ) : (
              <Link
                href={`/users/${item}`}
                className={clsx(
                  'flex items-center justify-center w-8 h-7 border-2 border-gray-700 rounded-md hover:bg-teal-300',
                  activePageNumber === item
                    ? 'bg-teal-300 pointer-events-none'
                    : 'bg-slate-100',
                )}
              >
                {item}
              </Link>
            )}
          </Fragment>
        ))}
      </div>
      <PaginationButton variant="next" activePageNumber={activePageNumber} />
    </div>
  );
};
