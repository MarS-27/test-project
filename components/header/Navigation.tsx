import { STATIC_ROUTES } from "@/constants/constants";
import Link from "next/link";

export default function Navigation() {
  const routesNames = Object.keys(STATIC_ROUTES);

  return (
    <nav>
      <ul className="flex gap-5 text-lg">
        {routesNames.map((item) => (
          <li key={item}>
            <Link
              href={STATIC_ROUTES[item].path}
              className="hover:text-teal-300"
            >
              {STATIC_ROUTES[item].name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
