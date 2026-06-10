import { IoIosArrowDown } from "react-icons/io";
import Analyticstopcards from "../components/analytics/Analyticstopcards";
import useAppContext from "../context/useAppcontext";
import {
  getProgressSummary,
  getCompletionChartData,
  getHabitPerformanceData,
  getProductivityTrend,
  getConsistencyHeatmapData,
} from "../utils/progressStats";
import Completiontimechart from "../components/analytics/Completiontimechart";
import Habitperformance from "../components/analytics/Habitperformance";
import Consistencyheatmap from "../components/analytics/Consistencyheatmap";
import Streakcard from "../components/analytics/Streakcard";
import Productivitytrend from "../components/analytics/Productivitytrend";

export default function Progress() {
  const { appData } = useAppContext();
  const summary = getProgressSummary(appData);
  const completionChartData = getCompletionChartData(appData);
  const habitPerformanceData = getHabitPerformanceData(appData);
  const productivityTrend = getProductivityTrend(appData);
  const heatmapData = getConsistencyHeatmapData(appData);
  return (
    <>
      <section>
        <div className="px-4 py-3">
          <div className="flex justify-between">
            <h1 className="text-xl ml-2 mt-1.5 md:text-2xl text-[#979393] font-semibold ">
              @Analytics
            </h1>{" "}
            {/* monthly and yearly filter summary section */}
            <div className="flex gap-3 mr-2">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex h-10 items-center gap-3 rounded-xl border border-[#3c3c3d] bg-[#242323] px-3 text-sm font-semibold text-[#e5e2e2]"
                >
                  Monthly
                  <span className="text-[#d8d8d8] font-semibold">
                    <IoIosArrowDown size={17} className="font-semibold" />
                  </span>
                </button>

                <div className="flex h-10 items-center overflow-hidden rounded-xl border border-[#3c3c3d] bg-[#242323]">
                  <button
                    type="button"
                    className="flex h-full w-10 items-center justify-center text-xl text-[#bdbcbc] transition-colors hover:bg-white/5 hover:text-white"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className="flex h-full items-center gap-3 border-x border-[#2d2f3d] px-5 text-sm font-semibold text-[#e5e2e2]"
                  >
                    May 2026
                    <span className="text-[#e0e0e0]">
                      <IoIosArrowDown size={17} />
                    </span>
                  </button>

                  <button
                    type="button"
                    className="flex h-full w-11 items-center justify-center text-xl text-[#bdbcbc] transition-colors hover:bg-white/5 hover:text-white"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ends here */}

          <Analyticstopcards summary={summary} />
          <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-[3fr_2fr]">
            <Completiontimechart data={completionChartData} />
            <Habitperformance habits={habitPerformanceData} />
          </div>
          <div className="mt-5 grid min-w-0 grid-cols-1 items-stretch gap-4 xl:grid-cols-[2fr_1fr_1fr]">
            {" "}
            <Consistencyheatmap data={heatmapData} />
            <Streakcard summary={summary} />
            <Productivitytrend productivityTrend={productivityTrend} />
          </div>
        </div>
      </section>
    </>
  );
}
