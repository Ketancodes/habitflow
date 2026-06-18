import { useState } from "react";
import { CalendarDays, Lightbulb } from "lucide-react";
import toast from "react-hot-toast";

const getDisplayDate = (dateKey) => {
  return new Date(dateKey).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function Todayreflection({
  journalEntries = [],
  todayKey,
  setAppData,
}) {
  const todayEntry = journalEntries.find((entry) => entry.dateKey === todayKey);
  const [reflection, setReflection] = useState(todayEntry?.text || "");

  const handleSaveEntry = () => {
    const trimmedReflection = reflection.trim();

    if (!trimmedReflection) {
      toast.error("Write something before saving.");
      return;
    }

    setAppData((prev) => {
      const existingEntries = prev.journalEntries || [];
      const existingEntry = existingEntries.find(
        (entry) => entry.dateKey === todayKey,
      );

      if (existingEntry) {
        return {
          ...prev,
          journalEntries: existingEntries.map((entry) =>
            entry.dateKey === todayKey
              ? {
                  ...entry,
                  text: trimmedReflection,
                  updatedAt: new Date().toISOString(),
                }
              : entry,
          ),
        };
      }

      return {
        ...prev,
        journalEntries: [
          {
            id: Date.now(),
            dateKey: todayKey,
            text: trimmedReflection,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          ...existingEntries,
        ],
      };
    });

    toast.success(todayEntry ? "Entry updated." : "Entry saved.");
  };

  return (
    <div className="mt-6 flex justify-center">
      <div className="w-[96%] md:w-[94%] rounded-3xl border border-[#30313d] bg-[#171820] px-2 py-2 md:px-8 md:py-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold text-white">
            Today&apos;s Reflection
          </h2>

          <span className="flex items-center gap-2 text-sm font-medium text-[#b9bac6]">
            <CalendarDays size={17} />
            {getDisplayDate(todayKey)}
          </span>
        </div>

        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          placeholder={`How did today go?\nWhat did you achieve?\nWhat did you learn?\nWhat should you focus on tomorrow?`}
          className="mt-5 min-h-44 w-full resize-none rounded-2xl border border-[#30313d] bg-[#111219] px-5 py-4 text-base leading-relaxed text-[#e5e7eb] outline-none placeholder:text-[#7f8490] focus:border-[#6d5cff]"
        />

        <div className="mt-5 flex items-center justify-between gap-5">
          <p className="flex items-center gap-2 text-sm text-[#b9bac6]">
            <Lightbulb size={17} className="text-[#fbbf24]" />
            Be honest with yourself. This is your space.
          </p>

          <button
            type="button"
            onClick={handleSaveEntry}
            className="rounded-xl border border-[#6d5cff] bg-[#6d5cff]/15 px-3 md:px-7 py-3 text-sm font-semibold text-[#dcd7ff] transition-colors hover:bg-[#6d5cff]/25 hover:text-white active:scale-[0.98]"
          >
            {todayEntry ? "Update Entry" : "Save Entry"}
          </button>
        </div>
      </div>
    </div>
  );
}
