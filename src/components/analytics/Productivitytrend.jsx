import { IoIosArrowDown } from "react-icons/io";
import { IoTrendingUp, IoTrendingDown } from "react-icons/io5";

export default function Productivitytrend({ productivityTrend }) {
  const trend = productivityTrend?.hasEnoughData ? productivityTrend.trend : 0;
  const hasEnoughData = productivityTrend?.hasEnoughData;
  const isImproved = trend >= 0;
  const progressValue = Math.min(Math.abs(trend), 100);

  return (
    <div className="flex h-75 flex-col rounded-xl border border-[#30313d] bg-[#171820] p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-white">Productivity Trend</h2>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-[#30313d] bg-[#111219] px-3 py-1.5 text-xs font-semibold text-[#d8d5d5]"
        >
          Monthly
          <IoIosArrowDown size={14} />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-6">
        <div
          className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full"
          style={{
            background: `conic-gradient(#6d5cff ${progressValue * 3.6}deg, #111219 0deg)`,
          }}
        >
          <div className="flex h-17.5 w-17.5 items-center justify-center rounded-full bg-[#171820]">
            {isImproved ? (
              <IoTrendingUp size={30} className="text-[#6d5cff]" />
            ) : (
              <IoTrendingDown size={30} className="text-[#ff5578]" />
            )}
          </div>
        </div>

        <div>
          <p
            className={`text-3xl font-bold leading-none ${
              isImproved ? "text-[#63d66f]" : "text-[#ff5578]"
            }`}
          >
            {isImproved ? "+" : "-"}
            {Math.abs(trend)}%
          </p>

          <p className="mt-2 text-sm text-[#aaa7a7]">
            {isImproved ? "Improvement" : "Drop"}
          </p>
        </div>
      </div>

      <div className="mt-auto rounded-xl  px-4 py-3">
        {hasEnoughData ? (
          <>
            <p
              className={`text-sm font-semibold ${
                isImproved ? "text-[#63d66f]" : "text-[#ff5578]"
              }`}
            >
              {isImproved
                ? "You were more consistent this month."
                : "Your consistency dropped this month."}
            </p>

            <p className="mt-1 text-xs text-[#8f8c8c]">
              Compared with the previous month.
            </p>
          </>
        ) : (
          <>
            <p className="text-sm font-semibold text-[#d8d5d5]">
              Not enough data yet
            </p>

            <p className="mt-1 text-xs text-[#8f8c8c]">
              Use the app across two months to see your trend.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
