import { CalendarDays, Edit3, Flame, Flag, Plus, Check } from "lucide-react";

const categoryStyles = {
  Study: {
    badge: "bg-[#6d5cff]/15 text-[#a78bfa]",
    icon: "bg-[#6d5cff]/15 text-[#a78bfa]",
    bar: "bg-[#6d5cff]",
    button: "bg-[#6d5cff]/15 text-[#a78bfa] hover:bg-[#6d5cff]/25",
  },
  Health: {
    badge: "bg-[#22c55e]/12 text-[#4ade80]",
    icon: "bg-[#22c55e]/12 text-[#4ade80]",
    bar: "bg-[#22c55e]",
    button: "bg-[#22c55e]/12 text-[#4ade80] hover:bg-[#22c55e]/20",
  },
  Discipline: {
    badge: "bg-[#f59e0b]/12 text-[#fbbf24]",
    icon: "bg-[#f59e0b]/12 text-[#fbbf24]",
    bar: "bg-[#f59e0b]",
    button: "bg-[#f59e0b]/12 text-[#fbbf24] hover:bg-[#f59e0b]/20",
  },
  Personal: {
    badge: "bg-[#3b82f6]/14 text-[#60a5fa]",
    icon: "bg-[#3b82f6]/14 text-[#60a5fa]",
    bar: "bg-[#3b82f6]",
    button: "bg-[#3b82f6]/14 text-[#60a5fa] hover:bg-[#3b82f6]/22",
  },
};

export default function Myhabitcard({
  title,
  category,
  frequency,
  priority,
  streak,
  onEdit,
  onAddToToday,
  isAddedToToday,
}) {
  const styles = categoryStyles[category] || categoryStyles.Study;
  const progress = Math.min((streak || 0) * 12.5, 100);

  return (
    <div className="flex h-96 w-72 flex-col rounded-3xl border border-[#30313d] bg-[#171820] p-5 text-[#d8d5d5] transition-all duration-150 hover:-translate-y-1 hover:border-[#45475a] hover:bg-[#1b1d28] cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles.icon}`}
          >
            <Flame size={24} />
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}
          >
            {category}
          </span>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#30313d] bg-[#111219] text-[#9ca3af] transition-colors hover:bg-[#242634] hover:text-white cursor-pointer"
          title="Edit habit"
        >
          <Edit3 size={17} />
        </button>
      </div>

      <h3 className="mt-5 w-full overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold leading-snug text-white">
        {title}
      </h3>

      <p className="mt-2 min-h-12 text-sm leading-relaxed text-[#9ca3af]">
        Keep showing up. Small wins become strong routines.
      </p>

      <div className="mt-2.5 border-t border-[#30313d] pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-[#9ca3af]">
            <CalendarDays size={16} />
            Frequency
          </span>
          <span className="font-semibold text-[#8b7cff]">{frequency}</span>
        </div>

        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-[#9ca3af]">
            <Flag size={16} />
            Priority
          </span>
          <span className="font-semibold text-[#8b7cff]">{priority}</span>
        </div>

        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-[#9ca3af]">
            <Flame size={16} />
            Streak
          </span>
          <span className="font-semibold text-white">{streak} 🔥</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="h-2 rounded-full bg-[#252735]">
          <div
            className={`h-2 rounded-full ${styles.bar}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <button
        type="button"
        disabled={isAddedToToday}
        onClick={onAddToToday}
        className={`mt-auto flex h-11 items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
          isAddedToToday
            ? "cursor-not-allowed bg-[#252735] text-[#6b7280]"
            : styles.button
        }`}
      >
        {isAddedToToday ? (
          <>
            <Check size={17} />
            Added to today
          </>
        ) : (
          <>
            <Plus size={17} />
            Add to today
          </>
        )}
      </button>
    </div>
  );
}
