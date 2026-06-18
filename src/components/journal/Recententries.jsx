import { useMemo, useState } from "react";
import { BookOpen, MoreHorizontal, Search } from "lucide-react";

const formatEntryDate = (dateKey) => {
  const date = new Date(dateKey);

  return {
    day: date.toLocaleDateString("en-US", { day: "2-digit" }),
    weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
    monthYear: date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    }),
  };
};

const formatEntryTime = (dateValue) => {
  if (!dateValue) return "";

  return new Date(dateValue).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
};

const getEntryLines = (text = "") => {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 4);
};

export default function Recententries({ journalEntries = [] }) {
  const [search, setSearch] = useState("");

  const filteredEntries = useMemo(() => {
    return [...journalEntries]
      .sort((a, b) => b.dateKey.localeCompare(a.dateKey))
      .filter((entry) =>
        entry.text.toLowerCase().includes(search.trim().toLowerCase()),
      );
  }, [journalEntries, search]);

  return (
    <div className="mt-8 flex justify-center pb-10">
      <div className="w-[94%]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen size={23} className="text-[#a78bfa]" />
            <h2 className="text-lg md:text-2xl font-semibold text-white">
              Recent Entries
            </h2>
          </div>

          <div className="relative flex items-center">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 text-[#8f96a3]"
            />
            <input
              type="text"
              value={search}
              placeholder="Search entries..."
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 w-80 rounded-2xl border border-[#30313d] bg-[#171820] pl-11 pr-4 text-sm text-[#e5e7eb] outline-none placeholder:text-[#7f8490] focus:border-[#6d5cff]"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-4">
          {filteredEntries.length > 0 ? (
            filteredEntries.map((entry) => {
              const date = formatEntryDate(entry.dateKey);
              const lines = getEntryLines(entry.text);
              const time = formatEntryTime(entry.updatedAt || entry.createdAt);

              return (
                <div
                  key={entry.id}
                  className="flex rounded-3xl border border-[#30313d] bg-[#171820] px-2 py-2 md:px-7 md:py-5"
                >
                  <div className="flex w-24 shrink-0 flex-col items-center border-r border-[#30313d] pr-2 md:pr-6 text-center">
                    <p className="text-2xl md:text-4xl font-bold text-white">
                      {date.day}
                    </p>
                    <p className="mt-1 text-sm text-[#d8d5d5]">
                      {date.weekday}
                    </p>
                    <p className="mt-1 text-sm text-[#9ca3af]">
                      {date.monthYear}
                    </p>
                  </div>

                  <div className="min-w-0 flex-1 px-6">
                    {lines.map((line, index) => (
                      <p
                        key={`${entry.id}-${index}`}
                        className="truncate text-base leading-relaxed text-[#d8d5d5]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="flex shrink-0 items-start gap-5 text-[#9ca3af]">
                    <span className="text-sm">{time}</span>
                    <button
                      type="button"
                      className="text-[#9ca3af] transition-colors hover:text-white"
                    >
                      <MoreHorizontal size={22} />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="rounded-3xl border border-dashed border-[#30313d] bg-[#171820] px-6 py-12 text-center">
              <p className="text-lg font-semibold text-[#d8d5d5]">
                No journal entries yet
              </p>
              <p className="mt-2 text-sm text-[#8f96a3]">
                Save today&apos;s reflection and it will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
