import { useEffect, useMemo, useState } from "react";
import { useFighters } from "./useFighters";

function App() {
  const { fighters, addHype } = useFighters();
  const [activeCategory, setActiveCategory] = useState("HOME");

  const filteredFighters = useMemo(() => {
    return fighters.filter(
      (fighter) => activeCategory === fighter.weight_class,
    );
  }, [fighters, activeCategory]);

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <h1 className="text-4xl font-black text-center mb-10 text-red-500 tracking-tight">
        Hype Cage <span className="text-white">- Lista Zawodników 🥊</span>
      </h1>

      <div className="flex gap-4 justify-center mb-8">
        <button
          onClick={() => setActiveCategory("P4P")}
          className="bg-neutral-800 px-4 py-2 rounded-lg hover:bg-red-500 font-bold transition-colors"
        >
          P4P Ranking 🏆
        </button>
        <button
          onClick={() => setActiveCategory("Lightweight")}
          className="bg-neutral-800 px-4 py-2 rounded-lg hover:bg-red-500 font-bold transition-colors"
        >
          Lightweight
        </button>
        <button
          onClick={() => setActiveCategory("Heavyweight")}
          className="bg-neutral-800 px-4 py-2 rounded-lg hover:bg-red-500 font-bold transition-colors"
        >
          Heavyweight
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredFighters.map((fighter, index) => (
          <div
            key={fighter.id}
            className="bg-neutral-800 rounded-2xl shadow-xl overflow-hidden border border-neutral-700 hover:border-red-500 transition-colors duration-300"
          >
            <img
              src={fighter.image_url}
              alt={fighter.name}
              className="w-full h-64 object-cover object-top"
              onError={(e) => {
                e.currentTarget.src = "/images/default.png";
              }}
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold mb-1">{fighter.name}</h2>
              <p className="text-neutral-400 text-sm font-semibold mb-4 uppercase tracking-wider">
                {fighter.weight_class}
              </p>

              <div className="flex justify-between items-center bg-neutral-900 rounded-lg p-3 mb-4 border border-neutral-700">
                <span className="font-medium text-amber-400">
                  🏆 Rank: {fighter.ranking}
                </span>
                <span className="font-bold text-orange-500 text-lg">
                  🔥 Hype: {fighter.hype_score}
                </span>
              </div>

              <button
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 active:translate-y-0"
                onClick={() => addHype(fighter.id)}
              >
                Daj Hype!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
