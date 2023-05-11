import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="grid-container flex_component">
      <div className="grid-content flex_component py-4">
        <p className="font-bold text-2xl">Header</p>
        <Navigation />
      </div>
    </header>
  );
}
