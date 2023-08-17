import clsx from 'clsx';
import { FC } from 'react';

type BurgerButtonProps = {
  isBurgerToggled: boolean;
  handleToggleBurger: () => void;
};

export const BurgerButton: FC<BurgerButtonProps> = ({
  isBurgerToggled,
  handleToggleBurger,
}) => {
  return (
    <button
      className="cursor-pointer p-[6px] hidden max-md:block border-2 border-stone-800 rounded-md hover:bg-teal-300 ease-out duration-300"
      onClick={handleToggleBurger}
    >
      <div
        className={clsx(
          'flex flex-col gap-[6px] transition-all duration-700 ease-[cubic-bezier(0.68,-0.35,0.265,1.35)]',
          isBurgerToggled ? 'rotate-180' : null,
        )}
      >
        <div
          className={clsx(
            'w-7 h-1 bg-stone-800 rounded-md transition-all duration-300 delay-200',
            isBurgerToggled ? 'rotate-45 translate-y-[10px]' : null,
          )}
        ></div>
        <div
          className={clsx(
            'w-7 h-1 bg-stone-800 rounded-md transition-all duration-100 delay-300',
            isBurgerToggled ? 'bg-transparent' : null,
          )}
        ></div>
        <div
          className={clsx(
            'w-7 h-1 bg-stone-800 rounded-md transition-all duration-300 delay-200',
            isBurgerToggled ? '-rotate-45 -translate-y-[10px]' : null,
          )}
        ></div>
      </div>
    </button>
  );
};
