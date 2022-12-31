import { categories } from "../constants";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    <nav className="mx-auto grid max-w-6xl grid-cols-4 justify-between gap-4 border-b pb-10 text-xs md:grid-cols-7 md:text-sm">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
