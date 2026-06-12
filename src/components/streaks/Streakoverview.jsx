import {
  CheckCircle2,
  Flame,
  Link2Off,
  TrendingUp,
  Trophy,
} from "lucide-react";
import themelogo from "../../assets/themelogo.png";

export default function Streakoverview({
  currentStreak,
  bestStreak,
  momentumStats,
}) {
  const successfulDays = momentumStats?.successfulDays || 0;
  const brokenStreaks = momentumStats?.brokenStreaks || 0;
  const consistency = momentumStats?.consistency || 0;
  return (
    <>
      {/* top overview cards */}
      <div className="mt-6  flex justify-center">
        <div className="relative w-[96%] md:w-[94%] overflow-hidden rounded-3xl border border-[#30313d] bg-[#171820] px-6 py-6">
          <div className="relative z-10">
            <p className="text-lg font-medium text-[#d8d5d5]">
              Your Streak Overview
            </p>

            <div className="mt-8 flex w-full flex-col  divide-y sm:flex-row  sm:w-[52%]  sm:divide-x divide-[#30313d] sm:divide-y-0">
              <div className="flex flex-1 items-center pr-2 py-4 gap-6 md:pr-10">
                <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full border border-[#6d5cff]/40 bg-[#6d5cff]/18 text-[#a78bfa]">
                  <Flame size={38} />
                </div>

                <div>
                  <div className="flex items-end gap-0.5 md:gap-2">
                    <span className="text-4xl md:text-6xl font-bold leading-none text-white">
                      {currentStreak}
                    </span>
                    <span className="mb-2 text-lg font-semibold text-white">
                      Days
                    </span>
                  </div>
                  <p className="mt-3 text-base text-[#b9bac6]">
                    Current Streak
                  </p>
                </div>
              </div>

              <div className="flex flex-1 items-center gap-3 py-4 pl-2.5 md:gap-6 md:pl-10">
                <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/14 text-[#fbbf24]">
                  <Trophy size={38} />
                </div>

                <div>
                  <div className="flex items-end gap-0.5 md:gap-2">
                    <span className="text-4xl md:text-6xl font-bold leading-none text-white">
                      {bestStreak}
                    </span>
                    <span className="mb-2 text-lg font-semibold text-white">
                      Days
                    </span>
                  </div>
                  <p className="mt-3 text-base text-[#b9bac6]">Best Streak</p>
                </div>
              </div>
            </div>

            <div className="mt-7 w-[90%] md:w-[52%] border-t border-[#30313d] pt-5">
              <p className="text-lg text-[#b9bac6]">
                Consistency compounds.{" "}
                <span className="font-semibold text-[#a78bfa]">
                  Every day counts.
                </span>
              </p>
            </div>
          </div>

          <div className="absolute -right-24 -bottom-28 h-96 w-96 rounded-full bg-[#6d5cff]/20 blur-3xl"></div>

          <img
            src={themelogo}
            alt="Mountain"
            className="pointer-events-none absolute right-0  -bottom-10 h-full w-[34%] object-cover opacity-75 mix-blend-lighten"
          />
        </div>
      </div>
      {/* ends here... */}

      {/* overall momentum stats */}
      <div className="mt-6 flex justify-center">
        <div className="w-[94%] rounded-3xl border border-[#30313d] bg-[#171820] px-8 py-7">
          <div className="flex items-center gap-3">
            <TrendingUp size={22} className="text-[#c4b5fd]" />
            <h2 className="text-xl font-semibold text-white">
              Overall Momentum
            </h2>
          </div>

          <div className="mt-7 grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x divide-[#30313d] sm:divide-y-0">
            <div className="flex justify-center items-center gap-5 py-5 md:justify-start sm:pr-4 md:pr-8">
              {" "}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#22c55e]/12 text-[#4ade80]">
                <CheckCircle2 size={34} />
              </div>
              <div>
                <p className="text-4xl font-bold text-white">
                  {successfulDays}
                </p>
                <p className="mt-1 text-sm text-[#d8d5d5]">Successful days</p>
                <p className="mt-1 text-xs text-[#8f96a3]">This month</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 py-5 md:justify-start sm:px-4 md:px-8">
              {" "}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff5578]/12 text-[#ff6b8a]">
                <Link2Off size={34} />
              </div>
              <div>
                <p className="text-4xl font-bold text-white">{brokenStreaks}</p>
                <p className="mt-1 text-sm text-[#d8d5d5]">Broken streaks</p>
                <p className="mt-1 text-xs text-[#8f96a3]">This month</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 py-5 md:justify-start sm:pl-4 md:pl-8">
              {" "}
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: `conic-gradient(
                  #8b5cf6 ${consistency * 3.6}deg,
                  #252735 ${consistency * 3.6}deg
                )`,
                }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#171820]">
                  <span className="text-xl font-bold text-white">
                    {consistency}%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-[#c4b5fd]">
                  Consistency
                </p>
                <p className="mt-1 text-sm text-[#d8d5d5]">This month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
