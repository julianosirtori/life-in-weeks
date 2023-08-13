import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between px-8 py-4 ">
      <h1 className="text-xl text-primary-text">Juliano`s Life in Weeks</h1>
      <nav className="flex flex-row items-center gap-2">
        <Link href="https://github.com/julianosirtori/life-in-weeks">
          <GitHubLogoIcon className="h-6 w-6 text-secondary-text" />
        </Link>
        <Link href="https://www.linkedin.com/in/juliano-sirtori/">
          <LinkedInLogoIcon className="h-6 w-6 text-secondary-text" />
        </Link>
      </nav>
    </header>
  );
};
