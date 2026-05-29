import { Flame, Grid2X2, Pause, Target, Zap } from "lucide-react";
import themelogo from "../../assets/themelogo.png";

export default function Myhabitsoverview({
  totalHabits,
  activeHabits,
  inactiveHabits,
  bestStreak = 0,
  topCategory = "Study",
}) {
  return (
    <div className="mt-6 flex justify-center">
      <div className="relative w-[94%] overflow-hidden rounded-3xl border border-[#30313d] bg-[#171820] px-8 py-7">
        <div className="relative z-10">
          <div className="flex items-center gap-5">
            <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[#6d5cff]/18 text-[#8b7cff]">
              <Target size={36} />
            </div>

            <div>
              <p className="text-base font-medium text-[#b9bac6]">
                Your Habit Overview
              </p>
              <h2 className="mt-1 text-3xl font-bold text-white">
                Keep building. Keep growing.
              </h2>
              <p className="mt-2 text-lg text-[#9ca3af]">
                Consistency is the real power.
              </p>
            </div>
          </div>

          <div className="mt-8 grid w-[72%] grid-cols-4 divide-x divide-[#30313d]">
            <div className="flex items-center gap-4 pr-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6d5cff]/18 text-[#8b7cff]">
                <Grid2X2 size={28} />
              </div>

              <div>
                <p className="text-3xl font-bold text-white">{totalHabits}</p>
                <p className="mt-1 text-sm text-[#9ca3af]">Total habits</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22c55e]/12 text-[#4ade80]">
                <Zap size={28} />
              </div>

              <div>
                <p className="text-3xl font-bold text-white">{activeHabits}</p>
                <p className="mt-1 text-sm text-[#9ca3af]">Active habits</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f59e0b]/12 text-[#fbbf24]">
                <Pause size={28} />
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  {inactiveHabits}
                </p>
                <p className="mt-1 text-sm text-[#9ca3af]">Inactive habits</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3b82f6]/14 text-[#60a5fa]">
                <Flame size={28} />
              </div>

              <div>
                <p className="text-3xl font-bold text-white">{bestStreak}</p>
                <p className="mt-1 text-sm text-[#9ca3af]">Current streak</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-8 bottom-7 z-10 rounded-3xl border border-[#30313d] bg-[#111219]/70 px-7 py-5 backdrop-blur-md">
          <p className="text-sm text-[#9ca3af]">Top Category</p>
          <div className="mt-2 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[#8b5cf6]"></span>
            <p className="text-2xl font-bold text-[#c4b5fd]">{topCategory}</p>
          </div>
          <p className="mt-1 text-sm text-[#b9bac6]">Most active</p>
        </div>

        <div className="absolute -right-24 -bottom-32 h-96 w-96 rounded-full bg-[#6d5cff]/20 blur-3xl"></div>

        <img
          src={themelogo}
          alt="Mountain"
          className="pointer-events-none absolute right-2 -top-20  w-80  opacity-75 mix-blend-lighten"
        />
      </div>
    </div>
  );
}
