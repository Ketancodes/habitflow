import { Flame, Sprout, Trophy } from "lucide-react";

const getStatus = (currentStreak, longestStreak) => {
  if (currentStreak >= 3) {
    return {
      label: "On Fire",
      icon: Flame,
      className: "bg-[#ff5578]/12 text-[#ff6b8a]",
    };
  }

  if (longestStreak > 0) {
    return {
      label: "Building Momentum",
      icon: Sprout,
      className: "bg-[#22c55e]/12 text-[#4ade80]",
    };
  }

  return {
    label: "Starting Again",
    icon: Sprout,
    className: "bg-[#6d5cff]/12 text-[#a78bfa]",
  };
};

export default function Streakcard({ habit, habitStreak, last7Days = [] }) {
  const currentStreak = habitStreak.currentStreak || 0;
  const longestStreak = habitStreak.longestStreak || 0;
  const status = getStatus(currentStreak, longestStreak);
  const StatusIcon = status.icon;

  return (
    <div className="rounded-3xl border border-[#30313d] bg-[#171820] p-5 text-[#d8d5d5] transition-all duration-150 hover:-translate-y-1 hover:border-[#45475a] hover:bg-[#1b1d28]">
      <div className="flex items-start justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#6d5cff]/15 text-[#a78bfa]">
            <Flame size={23} />
          </div>

          <span className="rounded-full bg-[#6d5cff]/12 px-3 py-1 text-xs font-semibold text-[#a78bfa]">
            Habit
          </span>
        </div>
      </div>

      <h3 className="mt-5 truncate text-2xl font-bold text-white">
        {habit.text}
      </h3>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-[#252735] bg-[#111219] px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6d5cff]/15 text-[#a78bfa]">
              <Flame size={18} />
            </div>

            <div>
              <p className="text-2xl font-bold text-white">{currentStreak}</p>
              <p className="text-xs text-[#9ca3af]">Current streak</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#252735] bg-[#111219] px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f59e0b]/12 text-[#fbbf24]">
              <Trophy size={18} />
            </div>

            <div>
              <p className="text-2xl font-bold text-white">{longestStreak}</p>
              <p className="text-xs text-[#9ca3af]">Longest streak</p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-[#b9bac6]">Last 7 days</p>

      <div className="mt-4 flex justify-center gap-3">
        {last7Days.map((day) => (
          <div
            key={day.dateKey}
            title={day.dateKey}
            className={`h-5 w-5 rounded-lg border transition-colors ${
              day.completed
                ? "border-[#d8d5d5] bg-[#d8d5d5]"
                : "border-[#4b4d5f] bg-[#252735]"
            } ${day.isToday ? "ring-2 ring-[#6d8bcc]" : ""}`}
          />
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${status.className}`}
        >
          <StatusIcon size={16} />
          {status.label}
        </span>
      </div>
    </div>
  );
}
