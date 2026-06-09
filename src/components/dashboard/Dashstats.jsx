import { Activity, Dumbbell, Rocket, Target, Zap } from "lucide-react";

const statCards = [
  {
    title: "Today's Insight",
    icon: Activity,
    iconColor: "text-[#22c55e]",
    iconBg: "bg-[#22c55e]/10",
    body: (
      <>
        You completed <span className="text-[#22c55e]">more habits</span> today
        than yesterday! Keep the momentum going.
      </>
    ),
  },
  {
    title: "Focus Habit",
    icon: Target,
    centerIcon: Dumbbell,
    iconColor: "text-[#f59e0b]",
    iconBg: "bg-[#f59e0b]/10",
    body: (
      <>
        <span className="text-[#f59e0b]">Exercise</span> needs more consistency.
        <br />
        2/7 completed this week.
      </>
    ),
  },
  {
    title: "Momentum Status",
    icon: Zap,
    centerIcon: Rocket,
    iconColor: "text-[#8b5cf6]",
    iconBg: "bg-[#8b5cf6]/10",
    body: (
      <>
        <span className="text-[#8b5cf6]">Building Momentum</span>
        <br />
        You&apos;re on the right track. Stay consistent and great things will
        happen.
      </>
    ),
  },
];

export default function Dashstats() {
  return (
    <div className="mt-6 max-w-100 sm:max-w-none lg:ml-8 grid w-[94%] justify-self-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statCards.map((card) => {
        const Icon = card.icon;
        const CenterIcon = card.centerIcon || card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-[#30313d] bg-[#171820] px-6 py-5"
          >
            <div className="flex items-center gap-2">
              <Icon size={19} className={card.iconColor} />
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            </div>

            <div className="mt-5 flex items-center gap-5">
              <div
                className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${card.iconBg}`}
              >
                <CenterIcon size={36} className={card.iconColor} />
              </div>

              <p className="text-sm font-medium leading-relaxed text-[#a1a1aa]">
                {card.body}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
