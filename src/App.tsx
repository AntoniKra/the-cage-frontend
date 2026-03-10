import { useMemo, useState } from "react";
import { useFighters } from "./useFighters";
import { ProposeFighterModal } from "./components/ProposeFighterModal";
import { FighterCard } from "./components/FighterCard";
import { FighterRow } from "./components/FighterRow";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/header";

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
        <Header
          onMenuClick={() => setIsSidebarOpen(true)}
          onLogoClick={() => setActiveCategory("P4P")}
          onProposeClick={() => setIsModalOpen(true)}
        />

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
            <FighterCard
              key={fighter.id}
              fighter={fighter}
              position={index}
              onHype={addHype}
            />
          ))}
        </div>

        <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto pb-20 mt-12">
          {restFighters.map((fighter, index) => (
            <FighterRow
              key={fighter.id}
              fighter={fighter}
              rank={index + 3}
              onHype={addHype}
            />
          ))}
        </div>
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        weightClasses={weightClasses}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {isModalOpen && (
        <ProposeFighterModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default App;
