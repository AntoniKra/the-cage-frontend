import { useState } from "react";
import { CloseIcon } from "./icons/CloseIcon";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { SubmitIcon } from "./icons/SubmitIcon";

interface ProposeFighterModalProps {
  onClose: () => void;
}

export const ProposeFighterModal = ({ onClose }: ProposeFighterModalProps) => {
  const [name, setName] = useState("");
  const [weightClass, setWeightClass] = useState("");
  const [record, setRecord] = useState("");
  const [justification, setJustification] = useState("");
  const [error, setError] = useState("");

  const weightClasses = [
    "Flyweight",
    "Bantamweight",
    "Featherweight",
    "Lightweight",
    "Welterweight",
    "Middleweight",
    "Light Heavyweight",
    "Heavyweight",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();

    if (!trimmedName || !weightClass) {
      setError("Name and Weight Class are required.");
      return;
    }

    const newFighterData = {
      name: trimmedName,
      weight_class: weightClass,
      record: record.trim(),
      justification: justification.trim(),
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/proposals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newFighterData),
      });

      if (response.ok) {
        onClose();
        alert("Proposal sent successfully!");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Coś poszło nie tak.");
      }
    } catch (err) {
      setError("Błąd połączenia z serwerem.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/85 flex flex-col justify-center items-center z-50 p-4 font-sans backdrop-blur-sm">
      <div className="w-full max-w-lg bg-[#151515] rounded-xl overflow-hidden border border-neutral-800 shadow-2xl flex flex-col relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-600 hover:text-white transition-colors cursor-pointer z-10"
        >
          <CloseIcon />
        </button>

        <div className="bg-[#0a0a0a] p-8 pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.75 bg-red-600"></div>
            <span className="text-red-500 text-[10px] font-black tracking-widest uppercase">
              Scouting Department
            </span>
          </div>
          <h2 className="text-3xl font-black italic text-white uppercase tracking-wider mb-2">
            Propose a Fighter
          </h2>
          <p className="text-neutral-500 text-[10px] font-bold tracking-widest uppercase">
            Submit a new athlete for the Hype Cage elite rankings
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-neutral-500 tracking-widest uppercase">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={50}
              placeholder="e.g. Jon Jones"
              className="bg-[#222222] border border-neutral-800 rounded-md px-4 py-3.5 text-neutral-300 text-sm font-medium placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-neutral-500 tracking-widest uppercase">
                Weight Class
              </label>
              <div className="relative">
                <select
                  value={weightClass}
                  onChange={(e) => setWeightClass(e.target.value)}
                  className="w-full bg-[#222222] border border-neutral-800 rounded-md px-4 py-3.5 text-neutral-300 text-sm font-medium appearance-none focus:outline-none focus:border-red-600 transition-colors cursor-pointer"
                >
                  <option value="" disabled hidden>
                    Select Class
                  </option>
                  {weightClasses.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-neutral-500 tracking-widest uppercase">
                Fighter Record
              </label>
              <input
                type="text"
                value={record}
                onChange={(e) => setRecord(e.target.value)}
                placeholder="e.g. 15-0-0"
                className="bg-[#222222] border border-neutral-800 rounded-md px-4 py-3.5 text-neutral-300 text-sm font-medium placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-neutral-500 tracking-widest uppercase">
              Justification / Note
            </label>
            <textarea
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              maxLength={300}
              placeholder="Why should this fighter be in the Hype Cage rankings?"
              rows={3}
              className="bg-[#222222] border border-neutral-800 rounded-md px-4 py-3.5 text-neutral-300 text-sm font-medium placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors resize-none"
            ></textarea>
          </div>

          {error && (
            <div className="text-[#e53935] text-[10px] font-black tracking-widest uppercase text-center mt-2 animate-pulse">
              ⚠️ {error}
            </div>
          )}
          <button
            type="submit"
            className="mt-2 w-full flex items-center justify-center gap-3 py-4 rounded-md border border-[#e53935] text-[#e53935] text-xs font-black tracking-[0.2em] uppercase hover:bg-[#e53935] hover:text-white transition-all duration-300 group cursor-pointer"
          >
            Submit Proposal
            <SubmitIcon />
          </button>
        </form>

        <div className="bg-[#0a0a0a] px-8 py-4 border-t border-neutral-800 flex justify-between items-center">
          <span className="text-neutral-600 text-[9px] font-black tracking-widest uppercase">
            Verification required for elite status
          </span>
        </div>
      </div>
    </div>
  );
};
