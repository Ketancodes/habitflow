import {
  Archive,
  CalendarDays,
  CheckCircle2,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import themelogo from "../../assets/themelogo.png";

const getGoalProgress = (goal) => {
  if (!goal?.totalDays || goal.totalDays <= 0) return 0;

  return Math.round((goal.completedDays / goal.totalDays) * 100);
};

const getCurrentFocusGoal = (goals = []) => {
  return (
    goals.find((goal) => goal.active && goal.completedDays < goal.totalDays) ||
    goals.find((goal) => goal.active) ||
    goals[0]
  );
};

export default function Goalsoverview({
  goals = [],
  totalGoals,
  activeGoals,
  completedGoals,
  inactiveGoals,
}) {
  const totalTargetDays = goals.reduce((sum, goal) => {
    return sum + (goal.totalDays || 0);
  }, 0);

  const totalCompletedDays = goals.reduce((sum, goal) => {
    return sum + (goal.completedDays || 0);
  }, 0);

  const overallProgress =
    totalTargetDays > 0
      ? Math.round((totalCompletedDays / totalTargetDays) * 100)
      : 0;

  const focusGoal = getCurrentFocusGoal(goals);
  const focusProgress = getGoalProgress(focusGoal);

  return (
    <>
      <div className="mt-6 flex justify-center">
        <div className="relative w-[94%] overflow-hidden rounded-3xl border border-[#30313d] bg-[#171820] px-8 py-8">
          <div className="relative z-10 flex flex-col gap-6 text-center items-center sm:flex-row sm:items-center sm:text-left sm:gap-6 md:gap-10">
            <div>
              <p className="mb-4 text-base font-medium text-[#d8d5d5]">
                Overall Goals Progress
              </p>

              <div
                className="flex h-44 w-44 items-center justify-center rounded-full"
                style={{
                  background: `conic-gradient(
                    #8b5cf6 ${overallProgress * 3.6}deg,
                    #252735 ${overallProgress * 3.6}deg
                  )`,
                }}
              >
                <div className="flex h-34 w-34 flex-col items-center justify-center rounded-full bg-[#171820]">
                  <span className="text-5xl font-bold text-white">
                    {overallProgress}%
                  </span>
                  <span className="mt-2 text-sm text-[#9ca3af]">Overall</span>
                </div>
              </div>
            </div>

            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-[#a78bfa]">
                <Target size={23} />
                <p className="text-base font-semibold">Current Focus Goal</p>
              </div>

              <h2 className="mt-4 max-w-xl overflow-hidden text-ellipsis whitespace-nowrap text-3xl md:text-4xl font-bold text-white">
                {focusGoal?.title || "No goals yet"}
              </h2>

              <div className="mt-5 flex items-center gap-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    focusGoal?.active
                      ? "bg-[#22c55e]/12 text-[#4ade80]"
                      : "bg-[#64748b]/15 text-[#cbd5e1]"
                  }`}
                >
                  {focusGoal?.active ? "Active" : "Archived"}
                </span>

                <span className="flex items-center gap-2 text-sm font-medium text-[#b9bac6]">
                  <CalendarDays size={16} />
                  Target: {focusGoal?.totalDays || 0} days
                </span>
              </div>

              <div className="mt-7 h-3 rounded-full bg-[#252735]">
                <div
                  className="h-3 rounded-full bg-[#8b5cf6] shadow-[0_0_18px_rgba(139,92,246,0.35)]"
                  style={{ width: `${focusProgress}%` }}
                ></div>
              </div>

              <p className="mt-4 text-lg text-[#d8d5d5]">
                {focusGoal
                  ? `${focusGoal.completedDays} / ${focusGoal.totalDays} days completed`
                  : "Create your first goal to begin."}
              </p>
            </div>
          </div>

          <p className="relative z-10 mt-8 text-base text-[#b9bac6]">
            Every day invested today brings the{" "}
            <span className="font-semibold text-[#a78bfa]">future</span> closer.
          </p>

          <div className="absolute -right-24 -bottom-28 h-96 w-96 rounded-full bg-[#6d5cff]/20 blur-3xl"></div>

          <img
            src={themelogo}
            alt="Mountain"
            className="pointer-events-none absolute right-0 top-0 h-full w-[45%] object-cover opacity-75 mix-blend-lighten"
          />
        </div>
      </div>

      {/* goal overview stats section cards */}
      <div className="mt-5 flex justify-center">
        <div className="grid grid-cols-2 w-[94%] sm:grid-cols-3 md:grid-cols-4 gap-5">
          <div className="rounded-3xl border border-[#30313d] bg-[#171820] px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6d5cff]/15 text-[#a78bfa]">
                <Target size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{totalGoals}</p>
                <p className="text-sm text-[#9ca3af]">Total Goals</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#30313d] bg-[#171820] px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22c55e]/12 text-[#4ade80]">
                <Zap size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{activeGoals}</p>
                <p className="text-sm text-[#9ca3af]">Active Goals</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#30313d] bg-[#171820] px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f59e0b]/12 text-[#fbbf24]">
                <Trophy size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">
                  {completedGoals}
                </p>
                <p className="text-sm text-[#9ca3af]">Completed Goals</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#30313d] bg-[#171820] px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3b82f6]/14 text-[#60a5fa]">
                <Archive size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{inactiveGoals}</p>
                <p className="text-sm text-[#9ca3af]">Archived Goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
