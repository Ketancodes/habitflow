import { CalendarDays, Flame, NotebookText, Quote, Star } from "lucide-react";
import themelogo from "../../assets/themelogo.png";

const getEntryStreak = (entries = [], todayKey) => {
  const entryDates = new Set(entries.map((entry) => entry.dateKey));
  let streak = 0;

  const date = new Date(todayKey);

  while (entryDates.has(date.toLocaleDateString("en-CA"))) {
    streak += 1;
    date.setDate(date.getDate() - 1);
  }

  return streak;
};

const getThisMonthCount = (entries = [], todayKey) => {
  const today = new Date(todayKey);

  return entries.filter((entry) => {
    const entryDate = new Date(entry.dateKey);

    return (
      entryDate.getMonth() === today.getMonth() &&
      entryDate.getFullYear() === today.getFullYear()
    );
  }).length;
};

const getMostActiveMonth = (entries = []) => {
  if (entries.length === 0) return "No entries";

  const monthCounts = entries.reduce((counts, entry) => {
    const date = new Date(entry.dateKey);
    const monthLabel = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    counts[monthLabel] = (counts[monthLabel] || 0) + 1;
    return counts;
  }, {});

  return Object.entries(monthCounts).sort((a, b) => b[1] - a[1])[0][0];
};

export default function Journaloverview({ journalEntries = [], todayKey }) {
  const totalEntries = journalEntries.length;
  const reflectionStreak = getEntryStreak(journalEntries, todayKey);
  const thisMonth = getThisMonthCount(journalEntries, todayKey);
  const mostActiveMonth = getMostActiveMonth(journalEntries);

  return (
    <div className="mt-6 flex  justify-center">
      <div className="relative w-[94%] overflow-hidden rounded-3xl border border-[#30313d] bg-[#171820] px-8 py-7">
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <NotebookText size={23} className="text-[#a78bfa]" />
            <h2 className="text-lg font-semibold text-white">
              Your Reflection Overview
            </h2>
          </div>

          <div className="mt-8 grid w-full  grid-cols-1 sm:grid-cols-2 sm:divide-x sm:divide-y-0  divide-y md:w-[68%] md:grid-cols-4 md:divide-x md:divide-y-0 divide-[#30313d]">
            <div className="flex  items-center  justify-center gap-4 py-5  md:justify-start md:pr-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#6d5cff]/15 text-[#a78bfa]">
                <NotebookText size={27} />
              </div>
              <div className="w-40">
                <p className="text-4xl font-bold text-white">{totalEntries}</p>
                <p className="mt-1 text-sm text-[#b9bac6]">Total Entries</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 py-5 md:justify-start md:px-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ff5578]/12 text-[#ff6b8a]">
                <Flame size={27} />
              </div>
              <div className="w-40">
                <p className="text-4xl font-bold text-white">
                  {reflectionStreak}
                </p>
                <p className="mt-1 text-sm text-[#b9bac6]">Reflection Streak</p>
              </div>
            </div>

            <div className="flex items-center  justify-center gap-4 py-5 md:justify-start md:px-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#3b82f6]/14 text-[#60a5fa]">
                <CalendarDays size={27} />
              </div>
              <div className="w-40">
                <p className="text-4xl font-bold text-white">{thisMonth}</p>
                <p className="mt-1 text-sm text-[#b9bac6]">This Month</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 py-5 md:justify-start md:pl-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f59e0b]/12 text-[#fbbf24]">
                <Star size={27} />
              </div>
              <div className="w-40 min-w-0">
                <p className="max-w-36 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold text-white">
                  {mostActiveMonth}
                </p>
                <p className="mt-1 text-sm text-[#b9bac6]">Most Active Month</p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex w-full md:w-[68%] items-center gap-5 border-t border-[#30313d] pt-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6d5cff]/15 text-[#a78bfa]">
              <Quote size={27} />
            </div>

            <p className="text-base leading-relaxed text-[#b9bac6]">
              Reflection turns experience into progress.
              <br />
              <span className="font-semibold text-[#a78bfa]">Keep going.</span>
            </p>
          </div>
        </div>

        <div className="absolute -right-24 -bottom-28 h-96 w-96 rounded-full bg-[#6d5cff]/20 blur-3xl"></div>

        <img
          src={themelogo}
          alt="Mountain"
          className="pointer-events-none absolute right-0 top-0 h-full w-[45%] object-cover opacity-75 mix-blend-lighten"
        />
      </div>
    </div>
  );
}
