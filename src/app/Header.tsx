import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-between p-10">
        <HiMenu className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="text-center font-serif text-4xl uppercase">
            Live{" "}
            <span className="decoration-6 underline decoration-orange-400">
              News
            </span>
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* Dark Mode Button */}
          <DarkModeButton />

          <button className="hidden rounded-full bg-slate-900 px-4 py-2 text-white dark:bg-slate-800 md:inline lg:px-8 lg:py-4">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <NavLinks />

      {/* Search Box */}
      <SearchBox />
    </header>
  );
}

export default Header;
