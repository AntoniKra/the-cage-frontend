import { CloseIcon } from "../icons/CloseIcon";
import { PlusIcon } from "../icons/PlusIcon";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  weightClasses: string[];
  onOpenModal: () => void;
}

export const Sidebar = ({
  isOpen,
  onClose,
  activeCategory,
  setActiveCategory,
  weightClasses,
  onOpenModal,
}: SidebarProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-70 bg-[#0a0a0a] border-r border-neutral-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
          <span className="text-xl font-black italic tracking-widest text-white uppercase">
            Menu
          </span>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-white cursor-pointer"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-3 overflow-y-auto grow">
          <span className="text-neutral-500 text-[10px] font-black tracking-widest uppercase mb-2">
            Weight Classes
          </span>
          {weightClasses.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                onClose();
              }}
              className={`text-left px-4 py-3 rounded-lg font-bold tracking-wide transition-colors ${
                activeCategory === category
                  ? "bg-red-500/10 text-red-500 border border-red-500/50"
                  : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="p-6 border-t border-neutral-800">
          <button
            onClick={() => {
              onClose();
              onOpenModal();
            }}
            className="w-full cursor-pointer rounded-md flex items-center justify-center gap-2 bg-red-600/90 hover:bg-red-500 text-white font-black px-4 py-4 transition-transform"
          >
            <PlusIcon />
            <span className="text-sm tracking-widest uppercase">
              Propose Fighter
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
