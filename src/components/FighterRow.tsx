import { Fighter } from "../useFighters";

interface FighterRowProps {
  fighter: Fighter;
  rank: number;
  onHype: (id: number) => void;
}

export const FighterRow = ({ fighter, rank, onHype }: FighterRowProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-0 bg-neutral-800/40 hover:bg-neutral-800/80 transition-colors border border-neutral-700/50 rounded-xl p-4 md:p-5">
      <div className="flex items-center gap-4 md:gap-6">
        <span className="text-xl md:text-2xl font-black text-neutral-500 italic w-6 md:w-8">
          #{rank}
        </span>

        <div className="flex flex-col">
          <span className="text-lg md:text-xl font-bold">{fighter.name}</span>
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
          onClick={() => onHype(fighter.id)}
          className="cursor-pointer border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 rounded-lg font-bold transition-colors text-xs md:text-sm tracking-wider"
        >
          HYPE
        </button>
      </div>
    </div>
  );
};
