import { FaFire, FaTrophy } from "react-icons/fa";
import { BsCalendar2CheckFill } from "react-icons/bs";

export default function Streakcard({ summary = {} }) {
  const currentStreak = summary.currentStreak ?? 0;
  const bestStreak = summary.bestStreak ?? 0;
  const longestPerfectStreak = summary.bestStreak ?? 0;

  const streakItems = [
    {
      label: "Current Streak",
      value: currentStreak,
      helper: currentStreak > 0 ? "Keep going!" : "Start a new streak",
      icon: <FaFire size={20} />,
      iconClass: "bg-[#ff8a3d]/20 text-[#ff8a3d]",
      helperClass: currentStreak > 0 ? "text-[#63d66f]" : "text-[#aaa7a7]",
    },
    {
      label: "Best Streak",
      value: bestStreak,
      helper: "Your longest run",
      icon: <FaTrophy size={20} />,
      iconClass: "bg-[#f2b705]/20 text-[#f5b814]",
      helperClass: "text-[#aaa7a7]",
    },
    {
      label: "Longest Perfect Streak",
      value: longestPerfectStreak,
      helper: "Best perfect-day chain",
      icon: <BsCalendar2CheckFill size={19} />,
      iconClass: "bg-[#3484ff]/20 text-[#4f91ff]",
      helperClass: "text-[#aaa7a7]",
    },
  ];

  return (
    <div className="flex h-75  flex-col rounded-xl border border-[#30313d] bg-[#171820] p-4">
      <h2 className="text-lg font-semibold text-white">Streak Insights</h2>

      <div className="mt-3 flex-1 divide-y divide-[#2b2c38]">
        {streakItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconClass}`}
            >
              {item.icon}
            </div>

            <div className="min-w-0">
              <p className="text-xs text-[#aaa7a7]">{item.label}</p>

              <p className="mt-0.5 text-xl font-bold leading-none text-white">
                {item.value} days
              </p>

              <p
                className={`mt-1 truncate text-xs font-semibold ${item.helperClass}`}
              >
                {item.helper}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
