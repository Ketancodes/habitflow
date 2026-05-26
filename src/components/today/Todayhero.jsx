import { CheckCircle2, Flame, RotateCcw, Star } from "lucide-react";
import themelogo from "../../assets/themelogo.png";

export default function Todayhero({
  totalHabits,
  completed,
  notCompleted,
  percentage,
}) {
  const allCompleted = totalHabits > 0 && completed === totalHabits;

  return (
    <div className="mt-6 flex justify-center">
      <div className="relative flex min-h-68 w-[94%] overflow-hidden rounded-3xl border border-[#30313d] bg-[#171820] px-5 py-5">
        <div className="relative z-10 flex w-full items-start justify-between gap-10">
          <div className="flex items-center gap-10">
            <div
              className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full"
              style={{
                background: `conic-gradient(
                  #6d5cff ${percentage * 3.6}deg,
                  #252735 ${percentage * 3.6}deg
                )`,
              }}
            >
              <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#171820]">
                <span className="text-4xl font-bold text-white">
                  {percentage}%
                </span>
                <span className="mt-2 text-xs text-[#9ca3af]">
                  Today&apos;s Progress
                </span>
              </div>
            </div>

            {/* today herosection stats */}
            <div className="grid grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 size={32} className="text-[#6d5cff]" />
                <span className="mt-4 text-4xl font-bold text-white">
                  {completed}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-[#a1a1aa]">
                  Completed
                  <br />
                  habits
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <RotateCcw size={32} className="text-[#f59e0b]" />
                <span className="mt-4 text-4xl font-bold text-white">
                  {notCompleted}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-[#a1a1aa]">
                  Remaining
                  <br />
                  habits
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <Flame size={32} className="text-[#22c55e]" />
                <span className="mt-4 text-4xl font-bold text-white">
                  {allCompleted ? "🔥" : "0"}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-[#a1a1aa]">
                  Today&apos;s
                  <br />
                  streak
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <Star size={32} className="text-[#4f7cff]" />
                <span className="mt-4 text-base font-semibold text-white">
                  Best streak
                </span>
                <span className="mt-2 text-sm font-semibold text-[#a78bfa]">
                  Not yet
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* ends here... */}

        <div className="absolute left-8 right-8 bottom-4 z-10 border-t border-[#30313d] pt-4">
          <div className="flex items-center justify-between gap-6">
            <p className="text-base text-[#a1a1aa]">
              Small steps today, massive change tomorrow.{" "}
              {completed === 0
                ? "Let's get started 💪"
                : "Keep the momentum going."}
            </p>

            <div className="flex min-w-80 items-center gap-4">
              <span className="text-sm text-[#c8cad3]">
                {completed} / {totalHabits} completed
              </span>

              <div className="h-2 flex-1 rounded-full bg-[#1f222b]">
                <div
                  className="h-2 rounded-full bg-[#6d5cff] shadow-[0_0_12px_rgba(109,92,255,0.45)] transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -right-24 -bottom-28 h-96 w-96 rounded-full bg-[#6d5cff]/20 blur-3xl"></div>

        <img
          src={themelogo}
          alt="Mountain"
          className="pointer-events-none absolute right-4 -bottom-14 w-70 opacity-70 "
        />
      </div>
    </div>
  );
}
