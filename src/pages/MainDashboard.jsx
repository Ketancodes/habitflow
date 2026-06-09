import { NavLink } from "react-router-dom";
import themelogo from "../assets/themelogo.png";
import useAppContext from "../context/useAppcontext";
import { Check, Circle, Target, ArrowUpRight } from "lucide-react";
import {
  getTodayProgressStats,
  getTodayFocusHabits,
  getWeeklyCompletionChartData,
  getWeeklyConsistencyTrend,
} from "../utils/progressStats";
import Weeklychart from "../components/dashboard/Weeklychart";
import Dashstats from "../components/dashboard/Dashstats";

export default function MainDashboard() {
  const { appData } = useAppContext();

  const { todayTotal, todayCompleted, completionPercent } =
    getTodayProgressStats(appData);

  const todayFocusHabits = getTodayFocusHabits(appData);
  const weeklyCompletionData = getWeeklyCompletionChartData(appData);
  const weeklyConsistencyTrend = getWeeklyConsistencyTrend(appData);

  const todayDate = new Date().getDate();

  const currentMonth = new Date().toLocaleString("default", {
    month: "long",
  });

  return (
    <section>
      <div>
        {/* main title + date n month */}
        <div className="px-4 flex items-center justify-between lg:block lg:px-0">
          <h1 className="text-xl mt-2 lg:ml-8 lg:mt-3 lg:text-2xl text-[#979393] font-semibold">
            @Dashboard
          </h1>
          <h4 className="text-md mt-2 lg:ml-8 lg:mt-3 lg:text-xl text-[#999696] font-semibold">
            {currentMonth} {todayDate}
          </h4>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="h-px w-[94%] bg-[#4a4747]"></div>
        </div>
        <h2 className="mt-4 text-center text-xl text-[#bdbcbc] font-semibold leading-relaxed">
          Good morning,<span className="text-[#6386d1]"> warrior!</span>
        </h2>

        {/* hero section */}
        <div className="mt-6 flex justify-center">
          <div className="relative flex  w-[94%] flex-col overflow-hidden rounded-3xl px-5 py-6 max-w-150 md:max-w-220 md:h-56 md:px-8 lg:h-56 lg:max-w-none border border-[#30313d] bg-[#171820] md:flex-row md:py-2 lg:flex-row lg:px-10 lg:py-0">
            {/* left progress side */}
            <div className="z-10 flex flex-1 flex-col items-center gap-5 text-center md:flex-row md:gap-10 md:text-left lg:flex-row lg:gap-12 lg:text-left">
              {/* progress circle */}
              <div className="relative flex items-center justify-center">
                {/* outer progress */}
                <div
                  className="flex h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 items-center justify-center rounded-full"
                  style={{
                    background: `conic-gradient(
                                     #5d5df5 ${completionPercent * 3.6}deg,
                                     #2a2d3a ${completionPercent * 3.6}deg
                                   )`,
                  }}
                >
                  {/* inner circle */}
                  <div className="flex h-24 w-24 md:h-32 md:w-32 lg:h-38 lg:w-38 flex-col items-center justify-center rounded-full bg-[#171820]">
                    <span className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                      {completionPercent}%
                    </span>

                    <span className="mt-2 text-[12px] md:text-[13px] lg:text-sm text-[#9ca3af]">
                      Today's Progress
                    </span>
                  </div>
                </div>
              </div>

              {/* right content */}
              <div className="max-w-md">
                <h3 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-[#6b63ff]">
                  {todayCompleted}{" "}
                  <span className="text-3xl md:text-4xl lg:text-4xl font-semibold text-white">
                    / {todayTotal}
                  </span>
                </h3>

                <p className="mt-2 text-2xl md:text-3xl lg:text-3xl font-semibold text-white">
                  Habits Completed Today
                </p>

                <p className="mt-5 text-md md:text-lg lg:text-lg leading-relaxed text-[#a1a1aa]">
                  Great job! You're one step closer to becoming unstoppable.
                </p>
              </div>
            </div>

            {/* background glow */}
            <div className="absolute -right-30 -bottom-30 h-96 w-96 rounded-full bg-[#5d5df5]/20 blur-3xl"></div>

            {/* mountain image */}
            <img
              src={themelogo}
              alt="Mountain"
              className="pointer-events-none absolute -right-8 -top-14 w-44 opacity-45 mix-blend-lighten md:w-56 lg:right-4 lg:-top-22 lg:w-70 lg:opacity-85"
            />
          </div>
        </div>

        {/* today's focus section */}
        <div className="mt-6 flex flex-col items-center lg:flex-row  gap-6 lg:ml-8">
          <div className="w-[96%] max-w-130 lg:w-[36%] rounded-3xl border border-[#30313d] bg-[#171820] px-6 py-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Target size={20} className="text-[#6b63ff]" />
                  <h3 className="text-xl font-semibold text-white">
                    Today&apos;s Focus
                  </h3>
                </div>
                <p className="mt-1 text-sm text-[#9ca3af]">
                  Your active habits for today
                </p>
              </div>

              <span className="rounded-full border border-[#30313d] px-3 py-1 text-sm font-semibold text-[#9ca3af]">
                {todayCompleted} / {todayTotal}
              </span>
            </div>

            <div
              className={`mt-5 flex flex-col gap-3 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
                todayFocusHabits.length > 4 ? "max-h-83 overflow-y-auto" : ""
              }`}
            >
              {todayFocusHabits.length > 0 ? (
                todayFocusHabits.map((habit) => (
                  <div
                    key={habit.id}
                    className="flex items-center justify-between rounded-2xl border border-[#2b2d38] bg-[#1d1e27] px-4 py-3"
                  >
                    <div className="min-w-0">
                      <h4
                        className={`truncate text-base font-semibold ${
                          habit.selected ? "text-[#d7fbe2]" : "text-[#e5e7eb]"
                        }`}
                      >
                        {habit.text}
                      </h4>
                      <p className="mt-1 text-sm text-[#8f96a3]">
                        {habit.selected ? "Completed" : "Pending"}
                      </p>
                    </div>

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                        habit.selected
                          ? "border-[#22c55e] bg-[#22c55e]/10 text-[#22c55e]"
                          : "border-[#4b5563] text-[#6b7280]"
                      }`}
                    >
                      {habit.selected ? (
                        <Check size={18} />
                      ) : (
                        <Circle size={18} />
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-[#2b2d38] bg-[#1d1e27] px-4 py-6 text-center text-[#9ca3af]">
                  No habits added for today.
                </div>
              )}
            </div>

            <NavLink
              to="/dashboard/today"
              className=" w-[70%] mt-6 flex gap-2 h-11 justify-self-center items-center text-center justify-center rounded-2xl border border-[#30313d] bg-[#20212b] px-4 text-sm font-semibold text-[#e5e7eb] transition-colors hover:bg-[#292b38]"
            >
              <span>Go to today</span>
              <ArrowUpRight size={18} />
            </NavLink>
          </div>
          <Weeklychart
            data={weeklyCompletionData}
            weeklyConsistencyTrend={weeklyConsistencyTrend}
          />
        </div>
        <Dashstats />
      </div>
    </section>
  );
}
