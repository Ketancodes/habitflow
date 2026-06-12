import { CalendarDays, CircleDot, Flag, Target } from "lucide-react";

const getFocusGoal = (goals = []) => {
  return (
    goals.find((goal) => goal.active && goal.completedDays < goal.totalDays) ||
    goals.find((goal) => goal.active) ||
    goals[0]
  );
};

const getGoalProgress = (goal) => {
  if (!goal?.totalDays || goal.totalDays <= 0) return 0;

  return Math.min(Math.round((goal.completedDays / goal.totalDays) * 100), 100);
};

const getTodayLabel = () => {
  return new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function Goaljourney({ goals = [] }) {
  const focusGoal = getFocusGoal(goals);
  const progress = getGoalProgress(focusGoal);

  return (
    <div className="mt-6 flex justify-center">
      <div className="w-[98%] md:w-[94%] rounded-3xl border border-[#30313d] bg-[#171820] px-6 py-4.5">
        <div className="flex items-center gap-3">
          <Target size={22} className="text-[#a78bfa]" />
          <h2 className="text-lg md:text-xl font-semibold text-white">
            Your Goal Journey
          </h2>
        </div>

        {focusGoal ? (
          <div className="mt-4">
            <div className="relative pt-4">
              <div className="absolute left-0 right-0 top-12 h-px border-t border-dashed border-[#4b4d5f]"></div>

              <div
                className="absolute left-0 top-12 h-px border-t border-dashed border-[#22c55e]"
                style={{ width: `${progress}%` }}
              ></div>

              <div className="relative flex items-start justify-between">
                <div className="flex max-w-36 flex-col items-start">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#22c55e] text-[#111219]">
                    <CircleDot size={14} />
                  </span>
                  <p className="mt-3 text-xs md:text-sm font-semibold text-[#d8d5d5]">
                    Started
                  </p>
                  <p className="mt-1 text-xs text-[#9ca3af]">Journey begins</p>
                </div>

                <div
                  className="flex max-w-36 flex-col items-center text-center"
                  style={{
                    transform: `translateX(${progress < 10 ? 0 : 0}px)`,
                  }}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8b5cf6] text-white shadow-[0_0_18px_rgba(139,92,246,0.45)]">
                    <CalendarDays size={13} />
                  </span>
                  <p className="mt-3 text-xs md:text-sm font-semibold text-[#d8d5d5]">
                    Today
                  </p>
                  <p className="mt-1 text-xs text-[#9ca3af]">
                    {getTodayLabel()}
                  </p>
                </div>

                <div className="flex max-w-36 flex-col items-end text-right">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f59e0b] text-[#111219]">
                    <Flag size={13} />
                  </span>
                  <p className="mt-3 text-xs md:text-sm font-semibold text-[#d8d5d5]">
                    Target
                  </p>
                  <p className="mt-1 text-xs text-[#9ca3af]">
                    {focusGoal.totalDays} days
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-[#30313d] bg-[#111219] px-5 py-8 text-center text-[#9ca3af]">
            Create a goal to start your journey.
          </div>
        )}
      </div>
    </div>
  );
}
