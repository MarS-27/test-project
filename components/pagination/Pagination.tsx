import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PaginationButton } from '../buttons/PaginationButton';
import { getPaginationTemplate } from '@/utils/getPagination';
import { Fragment } from 'react';

export const Pagination = () => {
  const { query } = useRouter();
  const activePage = parseInt(query.pageNum as string);
  const paginationTemplate = getPaginationTemplate(activePage);

  return (
    <div className="flex justify-center gap-3">
      <PaginationButton variant="prev" activePage={activePage} />
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
                  activePage === item
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
      <PaginationButton variant="next" activePage={activePage} />
    </div>
  );
};
