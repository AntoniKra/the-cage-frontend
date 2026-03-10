import { MenuIcon } from "../icons/MenuIcon";
import { LogoIcon } from "../icons/LogoIcon";
import { PlusIcon } from "../icons/PlusIcon";

interface HeaderProps {
  onMenuClick: () => void;
  onLogoClick: () => void;
  onProposeClick: () => void;
}

export const Header = ({
  onMenuClick,
  onLogoClick,
  onProposeClick,
}: HeaderProps) => {
  return (
    <header className="flex items-center w-full mb-12 mt-4">
      <div className="flex-1 flex justify-start">
        <button
          onClick={onMenuClick}
          className="md:hidden text-white hover:text-red-500 transition-colors cursor-pointer"
        >
          <MenuIcon />
        </button>
      </div>

      <div
        onClick={onLogoClick}
        className="flex justify-center items-center gap-3 cursor-pointer group"
      >
        <LogoIcon />
        <h1 className="text-3xl font-black italic tracking-widest text-white mb-0.5 whitespace-nowrap">
          HYPE CAGE
        </h1>
      </div>

      <div className="flex-1 flex justify-end">
        <button
          onClick={onProposeClick}
          className="hidden md:flex cursor-pointer rounded-md items-center gap-2 bg-red-600/90 hover:bg-red-500 text-white font-black px-4 py-2 transition-transform hover:scale-105"
        >
          <PlusIcon />
          <span className="text-sm tracking-widest uppercase">
            Propose Fighter
          </span>
        </button>
      </div>
    </header>
  );
};
