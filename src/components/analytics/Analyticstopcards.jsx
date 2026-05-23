import { FaFire, FaTrophy } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { FiTrendingDown } from "react-icons/fi";
import { IoTrendingUp } from "react-icons/io5";

export default function Analyticstopcards({ summary }) {
  const analyticsCards = [
    {
      title: "Avg. Completion",
      value: `${summary.avgCompletion}%`,
      subtitle: "↑ 12% vs Apr",
      icon: <TbTargetArrow size={28} />,
      iconClass: "bg-[#6d5cff]/25 text-[#8b7cff]",
      subtitleClass: "text-[#63d66f]",
    },
    {
      title: "Current Streak",
      value: summary.currentStreak,
      subtitle: `Best: ${summary.bestStreak} days`,
      icon: <FaFire size={26} />,
      iconClass: "bg-[#ff7a4f]/20 text-[#ff7a4f]",
      subtitleClass: "text-[#c6c3c3]",
    },
    {
      title: "Perfect Days",
      value: summary.perfectDays,
      subtitle: "This month",
      icon: <FaTrophy size={27} />,
      iconClass: "bg-[#f2b705]/20 text-[#f5b814]",
      subtitleClass: "text-[#c6c3c3]",
    },
    {
      title: "Total Completed",
      value: summary.totalCompleted,
      subtitle: "This month",
      icon: <IoTrendingUp size={30} />,
      iconClass: "bg-[#77e86f]/20 text-[#77e86f]",
      subtitleClass: "text-[#c6c3c3]",
    },
    {
      title: "Tough Days",
      value: summary.toughDays,
      subtitle: "This month",
      icon: <FiTrendingDown size={30} />,
      iconClass: "bg-[#ff4f75]/20 text-[#ff5d7f]",
      subtitleClass: "text-[#c6c3c3]",
    },
  ];
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {analyticsCards.map((card) => (
        <div
          key={card.title}
          className="flex min-h-29.5 items-center gap-4 rounded-xl border border-[#30313d] bg-[#171820] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] cursor-pointer hover:scale-[0.98] transition-all duration-150 ease-out"
        >
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${card.iconClass}`}
          >
            {card.icon}
          </div>

          <div className="min-w-0">
            <p className="text-3xl font-bold leading-none text-white">
              {card.value}
            </p>

            <p className="mt-2 text-sm font-medium text-[#c9c6c6]">
              {card.title}
            </p>

            <p className={`mt-2 text-sm font-semibold ${card.subtitleClass}`}>
              {card.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
