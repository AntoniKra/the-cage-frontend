import { Fighter } from "../../hooks/useFighters";

interface FighterCardProps {
  fighter: Fighter;
  position: number;
  onHype: (id: number) => void;
}

export const FighterCard = ({
  fighter,
  position,
  onHype,
}: FighterCardProps) => {
  const isChampion = position === 0;

  return (
    <div
      className={`relative bg-neutral-800/50 rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 flex flex-col w-full max-w-[350px] ${
        isChampion
          ? "border-[#D4AF37] border-2 md:transform md:scale-110 z-10 md:w-85 order-1 md:order-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          : position === 1
            ? "border-neutral-700 hover:border-red-500 md:mt-12 md:w-80 order-2 md:order-1 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
            : "border-neutral-700 hover:border-red-500 md:mt-12 md:w-80 order-3 md:order-3 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
      }`}
    >
      {isChampion && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-black font-black px-6 py-1 rounded-b-xl z-20 text-sm tracking-widest">
          CHAMPION
        </div>
      )}

      <div className="absolute top-4 left-4 bg-red-600/90 text-white font-black px-3 py-1 rounded-lg z-10 text-sm italic">
        #{isChampion ? "C" : position}
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
        <p className="text-red-500 text-xs font-bold mb-1 tracking-widest uppercase">
          {isChampion ? "Title Holder" : "Contender"}
        </p>
        <h2
          className={`font-black mb-4 ${isChampion ? "text-3xl italic" : "text-2xl"}`}
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
          <span className="tracking-wider">{fighter.record || "0-0-0"}</span>
        </div>

        <button
          className="cursor-pointer w-full bg-neutral-900 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white font-bold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] flex justify-center items-center gap-2 group"
          onClick={() => onHype(fighter.id)}
        >
          <span>HYPE</span>
          <span className="bg-red-500/10 group-hover:bg-white/20 px-2 py-0.5 rounded-md text-sm transition-colors">
            🔥 {fighter.hype_score}
          </span>
        </button>
      </div>
    </div>
  );
};
