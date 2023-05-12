import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="grid-container flex_component border-b-2 border-slate-700 bg-slate-100">
      <div className="grid-content flex_component py-4">
        <p className="font-bold text-2xl">Header</p>
        <Navigation />
      </div>
    </header>
  );
};
