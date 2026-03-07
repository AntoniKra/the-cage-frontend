import { useMemo, useState } from "react";
import { useFighters } from "./useFighters";

function App() {
  const { fighters, addHype } = useFighters();
  const [activeCategory, setActiveCategory] = useState("HOME");

  const filteredFighters = useMemo(() => {
    return fighters.filter(
      (fighter) => activeCategory === fighter.weight_class,
    );
  }, [fighters, activeCategory]);

  const p4pNumberOne = fighters.find(
    (fighter) => fighter.weight_class === "P4P" && fighter.ranking === 1,
  );

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <h1
        onClick={() => setActiveCategory("HOME")}
        className="text-4xl font-black text-center mb-10 text-red-500 tracking-tight cursor-pointer hover:scale-105 transition-transform"
      >
        THE CAGE
      </h1>

      <div className="flex gap-4 justify-center mb-8">
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

      {activeCategory === "HOME" ? (
        <div className="flex flex-col items-center w-full">
          <div className="min-h-[80vh] flex flex-col items-center justify-center w-full bg-gradient-to-b from-neutral-900 to-black rounded-3xl mb-16 shadow-2xl border border-neutral-800">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500 mb-6 drop-shadow-lg text-center">
              Champion Ranking
            </h2>
            <p className="text-xl text-neutral-400 animate-pulse">
              Zjedź w dół, aby poznać króla oktagonu ↓
            </p>
          </div>

          {p4pNumberOne && (
            <div className="w-full max-w-2xl transform hover:scale-105 transition-transform duration-500 mb-10">
              <div className="relative bg-neutral-800 rounded-3xl shadow-[0_0_40px_rgba(239,68,68,0.2)] overflow-hidden border-2 border-red-500">
                <div className="absolute top-4 right-4 bg-red-600 text-white font-black px-6 py-2 rounded-full z-10 shadow-lg text-xl uppercase tracking-wider">
                  #1 P4P King 👑
                </div>
                <img
                  src={p4pNumberOne.image_url}
                  alt={p4pNumberOne.name}
                  className="w-full h-[500px] object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = "/images/default.png";
                  }}
                />
                <div className="p-8 text-center">
                  <h3 className="text-5xl font-black mb-2">
                    {p4pNumberOne.name}
                  </h3>
                  <p className="text-red-500 font-bold text-xl uppercase tracking-widest mb-8">
                    {p4pNumberOne.record || "Brak rekordu"}
                  </p>

                  <div className="flex justify-center gap-12 items-center bg-neutral-900 rounded-2xl p-6 mb-8 border border-neutral-700">
                    <span className="font-bold text-amber-400 text-2xl">
                      🏆 Rank: {p4pNumberOne.ranking}
                    </span>
                    <span className="font-black text-orange-500 text-3xl">
                      🔥 Hype: {p4pNumberOne.hype_score}
                    </span>
                  </div>

                  <button
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-black py-5 px-6 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 active:translate-y-0 text-2xl uppercase tracking-wider"
                    onClick={() => addHype(p4pNumberOne.id)}
                  >
                    Daj Hype Królowi!
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFighters.map((fighter) => (
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
      )}
    </div>
  );
}

export default App;
