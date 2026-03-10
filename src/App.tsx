import { useMemo, useState } from "react";
import { useFighters } from "./useFighters";
import { PlusIcon } from "./components/icons/PlusIcon";
import { LogoIcon } from "./components/icons/LogoIcon";
import { MenuIcon } from "./components/icons/MenuIcon";
import { CloseIcon } from "./components/icons/CloseIcon";
import { ProposeFighterModal } from "./components/ProposeFighterModal";

function App() {
  const { fighters, addHype } = useFighters();
  const [activeCategory, setActiveCategory] = useState("P4P");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredFighters = useMemo(() => {
    return fighters.filter(
      (fighter) => activeCategory === fighter.weight_class,
    );
  }, [fighters, activeCategory]);

  const weightClasses = [
    "Flyweight",
    "Bantamweight",
    "Featherweight",
    "Lightweight",
    "P4P",
    "Welterweight",
    "Middleweight",
    "Light Heavyweight",
    "Heavyweight",
  ];

  const topFighters = filteredFighters.slice(0, 3);
  const restFighters = filteredFighters.slice(3);

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="w-full max-w-362.5 mx-auto">
        <div className="flex items-center w-full mb-12 mt-4">
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden text-white hover:text-red-500 transition-colors cursor-pointer"
            >
              <MenuIcon />
            </button>
          </div>

          <div
            onClick={() => setActiveCategory("P4P")}
            className="flex justify-center items-center gap-3 cursor-pointer group"
          >
            <LogoIcon />
            <h1 className="text-3xl font-black italic tracking-widest text-white mb-0.5 whitespace-nowrap">
              HYPE CAGE
            </h1>
          </div>

          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex cursor-pointer rounded-md items-center gap-2 bg-red-600/90 hover:bg-red-500 text-white font-black px-4 py-2 transition-transform hover:scale-105"
            >
              <PlusIcon />
              <span className="text-sm tracking-widest uppercase">
                Propose Fighter
              </span>
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-wrap gap-6 justify-center mb-30">
          {weightClasses.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-100 ease-out ${
                activeCategory === category
                  ? "border border-red-500 bg-red-500/10 text-white shadow-[0_0_150px_rgba(239,68,68,0.9),0_0_350px_rgba(239,68,68,0.7),0_0_600px_rgba(239,68,68,0.5),0_0_900px_rgba(239,68,68,0.3)] "
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full text-center mt-4 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-black italic text-white tracking-[0.2em] uppercase drop-shadow-lg transition-all duration-300">
          {activeCategory}
        </h2>
      </div>

      <div className="flex flex-col gap-12 w-full mt-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 pt-10">
          {topFighters.map((fighter, index) => (
            <div
              key={fighter.id}
              className={`relative bg-neutral-800/50 rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 flex flex-col w-full max-w-[350px] ${
                index === 0
                  ? "border-[#D4AF37] border-2 md:transform md:scale-110 z-10 md:w-85 order-1 md:order-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                  : index === 1
                    ? "border-neutral-700 hover:border-red-500 md:mt-12 md:w-80 order-2 md:order-1 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
                    : "border-neutral-700 hover:border-red-500 md:mt-12 md:w-80 order-3 md:order-3 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
              }`}
            >
              {index === 0 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-black font-black px-6 py-1 rounded-b-xl z-20 text-sm tracking-widest">
                  CHAMPION
                </div>
              )}

              <div className="absolute top-4 left-4 bg-red-600/90 text-white font-black px-3 py-1 rounded-lg z-10 text-sm italic">
                #{index === 0 ? "C" : index}
              </div>

              <img
                src={fighter.image_url}
                alt={fighter.name}
                className="w-[calc(100%-2rem)] h-80 mx-auto mt-10 mb-2 object-cover object-top filter contrast-125 rounded-xl"
                onError={(e) => {
                  e.currentTarget.src = "/images/default.png";
                }}
              />

              <div className="p-6 text-center">
                <p className="text-red-500 text-xs font-bold mb-1 tracking-widest">
                  {index === 0 ? "TITLE HOLDER" : "CONTENDER"}
                </p>
                <h2
                  className={`font-black mb-4 ${index === 0 ? "text-3xl italic" : "text-2xl"}`}
                >
                  {fighter.name}
                </h2>

                <div className="flex justify-between items-center text-sm font-semibold text-neutral-400 border-t border-neutral-700 pt-4 pb-4 mt-auto">
                  <span className="flex items-center gap-2">
                    {fighter.country_code && (
                      <img
                        src={`https://flagcdn.com/w20/${fighter.country_code.toLowerCase()}.png`}
                        alt={fighter.country_code}
                        className="h-4 rounded-sm object-cover opacity-90"
                      />
                    )}
                    <span className="text-neutral-300 font-bold">
                      {fighter.country_code}
                    </span>
                  </span>
                  <span className="tracking-wider">
                    {fighter.record || "0-0-0"}
                  </span>
                </div>

                <button
                  className="cursor-pointer w-full bg-neutral-900 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white font-bold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] flex justify-center items-center gap-2 group"
                  onClick={() => addHype(fighter.id)}
                >
                  <span>HYPE</span>
                  <span className="bg-red-500/10 group-hover:bg-white/20 px-2 py-0.5 rounded-md text-sm transition-colors">
                    🔥 {fighter.hype_score}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto pb-20 mt-12">
          {restFighters.map((fighter, index) => (
            <div
              key={fighter.id}
              className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-0 bg-neutral-800/40 hover:bg-neutral-800/80 transition-colors border border-neutral-700/50 rounded-xl p-4 md:p-5"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-xl md:text-2xl font-black text-neutral-500 italic w-6 md:w-8">
                  #{index + 3}
                </span>

                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-bold">
                    {fighter.name}
                  </span>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-400 mt-1">
                    {fighter.country_code && (
                      <img
                        src={`https://flagcdn.com/w20/${fighter.country_code.toLowerCase()}.png`}
                        alt={fighter.country_code}
                        className="w-4 md:w-5 rounded-sm"
                      />
                    )}
                    <span>{fighter.country_code}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 md:gap-8 w-full md:w-auto mt-2 md:mt-0 pt-3 md:pt-0 border-t border-neutral-700/50 md:border-none">
                <div className="text-neutral-300 font-semibold tracking-widest text-xs md:text-sm">
                  {fighter.record || "0-0-0"}
                </div>

                <div className="text-orange-500 font-bold flex items-center gap-1 text-sm md:text-base">
                  🔥 {fighter.hype_score}
                </div>

                <button
                  onClick={() => addHype(fighter.id)}
                  className="cursor-pointer border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 rounded-lg font-bold transition-colors text-xs md:text-sm tracking-wider"
                >
                  HYPE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 md:hidden ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-70 bg-[#0a0a0a] border-r border-neutral-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
          <span className="text-xl font-black italic tracking-widest text-white uppercase">
            Menu
          </span>
          <button
            onClick={() => setIsSidebarOpen(false)}
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
                setIsSidebarOpen(false);
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
              setIsSidebarOpen(false);
              setIsModalOpen(true);
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

      {isModalOpen && (
        <ProposeFighterModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default App;
