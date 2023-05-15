import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PaginationButton } from '../buttons/PaginationButton';
import { getPaginationTemplate } from '@/utils/getPagination';

type PaginationProps = {
  pagesCount: number;
};

export const Pagination: React.FC<PaginationProps> = ({ pagesCount }) => {
  const { query } = useRouter();
  const activePage = parseInt(query.pageNum as string);
  const paginationTemplate = getPaginationTemplate(activePage, pagesCount);

  return (
    <div className="flex justify-center gap-3">
      <PaginationButton variant="prev" activePage={activePage} />
      <div className="flex gap-1 justify-center">
        {paginationTemplate.map((item, i) => (
          <>
            {item === '...' ? (
              <p
                key={Math.random() + i}
                className="font-bold px-1 text-xl tracking-[1.5px]"
              >
                ...
              </p>
            ) : (
              <Link
                key={Math.random() + i}
                href={`/users/${item}`}
                className={clsx(
                  'flex items-center justify-center w-8 h-7 border-2 border-gray-700 rounded-md hover:bg-teal-300',
                  {
                    'bg-teal-300': activePage === item,
                    'bg-slate-100': activePage !== item,
                  },
                )}
              >
                {item}
              </Link>
            )}
          </>
        ))}
      </div>
      <PaginationButton variant="next" activePage={activePage} />
    </div>
  );
};
