import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="flex justify-between items-center border-b-2 border-slate-700 bg-slate-100">
      <div className="flex justify-between items-center w-full py-4 max-w-7xl min-w-[320px] p-4 mx-auto">
        <p className="font-bold text-2xl">Header</p>
        <Navigation />
      </div>
    </header>
  );
};
