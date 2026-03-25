import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex gap-4">
        <Link href="/" className="font-medium text-sm">
          Home
        </Link>
        <Link href="/about" className="font-medium text-sm">
          About
        </Link>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
