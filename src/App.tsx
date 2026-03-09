import { useMemo, useState } from "react";
import { useFighters } from "./useFighters";

function App() {
  const { fighters, addHype } = useFighters();
  const [activeCategory, setActiveCategory] = useState("P4P");

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
      <h1
        onClick={() => setActiveCategory("P4P")}
        className="text-4xl font-black text-center mb-10 text-red-500 tracking-tight cursor-pointer hover:scale-105 transition-transform"
      >
        THE CAGE
      </h1>

      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {weightClasses.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg font-bold transition-colors ${
              activeCategory === category
                ? "bg-red-500 text-white"
                : "bg-neutral-800 text-neutral-300 hover:bg-red-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-12 w-full mt-8">
        <div className="flex justify-center items-center gap-8 pt-10">
          {topFighters.map((fighter, index) => (
            <div
              key={fighter.id}
              className={`relative bg-neutral-800/50 rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 flex flex-col ${
                index === 0
                  ? "border-amber-400 border-2 transform scale-105 z-10 w-80 order-2"
                  : index === 1
                    ? "border-neutral-700 hover:border-red-500 mt-12 w-72 order-1"
                    : "border-neutral-700 hover:border-red-500 mt-12 w-72 order-3"
              }`}
            >
              {index === 0 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-amber-400 text-black font-black px-6 py-1 rounded-b-xl z-20 text-sm tracking-widest">
                  CHAMPION
                </div>
              )}

              <div className="absolute top-4 left-4 bg-red-600/90 text-white font-black px-3 py-1 rounded-lg z-10 text-sm italic">
                #{index === 0 ? "C" : index}
              </div>

              <img
                src={fighter.image_url}
                alt={fighter.name}
                className="w-full h-80 object-cover object-top filter contrast-125"
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

                <div className="flex justify-between items-center text-sm font-semibold text-neutral-400 border-t border-neutral-700 pt-4 mt-2">
                  <span className="flex items-center gap-2">
                    🔥 {fighter.hype_score} Hype
                  </span>
                  <span>{fighter.record || "0-0-0"}</span>
                </div>

                <button
                  className="w-full mt-6 bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded-lg transition-colors"
                  onClick={() => addHype(fighter.id)}
                >
                  HYPE
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto pb-20">
          {restFighters.map((fighter, index) => (
            <div
              key={fighter.id}
              className="flex justify-between items-center bg-neutral-800/40 hover:bg-neutral-800/80 transition-colors border border-neutral-700/50 rounded-xl p-4"
            >
              <div className="flex items-center gap-6">
                <span className="text-2xl font-black text-neutral-500 italic w-8">
                  #{index + 3}
                </span>

                <div className="flex flex-col">
                  <span className="text-xl font-bold">{fighter.name}</span>
                  <div className="flex items-center gap-2 text-sm text-neutral-400 mt-1">
                    {fighter.country_code && (
                      <img
                        src={`https://flagcdn.com/w20/${fighter.country_code.toLowerCase()}.png`}
                        alt={fighter.country_code}
                        className="w-5 rounded-sm"
                      />
                    )}
                    <span>{fighter.country_code}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-neutral-300 font-semibold tracking-widest text-sm">
                  {fighter.record || "0-0-0"}
                </div>

                <div className="text-orange-500 font-bold flex items-center gap-1 w-24 justify-end">
                  🔥 {fighter.hype_score}
                </div>

                <button
                  onClick={() => addHype(fighter.id)}
                  className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 rounded-lg font-bold transition-colors text-sm  tracking-wider"
                >
                  HYPE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
