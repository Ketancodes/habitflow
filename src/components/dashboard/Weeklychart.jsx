import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function Weeklycompletionchart({
  data = [],
  weeklyConsistencyTrend,
}) {
  const hasAnyData = data.some((day) => day.total > 0);
  const trend = weeklyConsistencyTrend?.hasEnoughData
    ? weeklyConsistencyTrend.trend
    : 0;

  const isImproved = trend > 0;
  const isDropped = trend < 0;

  return (
    <div className="w-[56%] rounded-3xl border border-[#30313d] bg-[#171820] px-4 py-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">This Week</h3>
          <p className="mt-1 text-sm text-[#9ca3af]">
            Your completion trend this week
          </p>
        </div>

        <span className="rounded-full border border-[#30313d] px-3 py-1 text-sm font-semibold text-[#9ca3af]">
          7 days
        </span>
      </div>

      <div className="mt-6 h-82">
        {hasAnyData ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient
                  id="weeklyCompletionGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#6d5cff" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="#6d5cff" stopOpacity={0.02} />
                </linearGradient>
              </defs>

              <CartesianGrid stroke="#292a38" strokeDasharray="3 3" />

              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#aaa7a7", fontSize: 11 }}
              />

              <YAxis
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                tickFormatter={(value) => `${value}%`}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#aaa7a7", fontSize: 12 }}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#111219",
                  border: "1px solid #30313d",
                  borderRadius: "12px",
                  color: "#fff",
                }}
                formatter={(value, name, item) => [
                  `${value}%`,
                  `${item.payload.completed} / ${item.payload.total} completed`,
                ]}
                labelStyle={{ color: "#d8d5d5" }}
              />

              <Area
                type="monotone"
                dataKey="completion"
                stroke="#6d5cff"
                strokeWidth={3}
                fill="url(#weeklyCompletionGradient)"
                dot={{
                  r: 4,
                  fill: "#6d5cff",
                  stroke: "#9b8cff",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                  fill: "#ffffff",
                  stroke: "#6d5cff",
                  strokeWidth: 3,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-[#30313d] bg-[#111219] px-6 text-center">
            <div>
              <p className="text-base font-semibold text-[#d8d5d5]">
                No weekly data yet
              </p>
              <p className="mt-2 text-sm text-[#8f8c8c]">
                Add or complete today&apos;s habits to start the chart.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-5 rounded-2xl border border-[#30313d] bg-[#20212b] px-4 py-4">
        {weeklyConsistencyTrend?.hasEnoughData ? (
          <div className="flex items-center gap-4">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                isImproved
                  ? "bg-[#22c55e]/10 text-[#22c55e]"
                  : isDropped
                    ? "bg-[#ff5578]/10 text-[#ff5578]"
                    : "bg-[#6d5cff]/10 text-[#8b7cff]"
              }`}
            >
              {isImproved ? (
                <TrendingUp size={22} />
              ) : isDropped ? (
                <TrendingDown size={22} />
              ) : (
                <Minus size={22} />
              )}
            </div>

            <div>
              <p className="text-base font-semibold text-white">
                {isImproved ? (
                  <>
                    You&apos;re{" "}
                    <span className="text-[#22c55e]">{Math.abs(trend)}%</span>{" "}
                    more consistent than last week!
                  </>
                ) : isDropped ? (
                  <>
                    <span className="text-[#ff5578]">{Math.abs(trend)}%</span>{" "}
                    consistency needs improvement.
                  </>
                ) : (
                  "Your consistency is steady this week."
                )}
              </p>

              <p className="mt-1 text-sm text-[#8f96a3]">
                Compared with your previous 7 days.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6d5cff]/10 text-[#8b7cff]">
              <Minus size={22} />
            </div>

            <div>
              <p className="text-base font-semibold text-white">
                Build one more week to unlock consistency insights.
              </p>
              <p className="mt-1 text-sm text-[#8f96a3]">
                We&apos;ll compare this week with your previous 7 days.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
