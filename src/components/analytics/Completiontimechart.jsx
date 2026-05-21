import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Completiontimechart({ data = [] }) {
  const hasEnoughData = data.length >= 7;
  return (
    <div className=" rounded-xl border border-[#30313d] bg-[#171820] p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Completion Over Time
        </h2>

        <div className="flex rounded-full border border-[#30313d] bg-[#111219] p-1 text-xs font-semibold text-[#bdbcbc]">
          <button
            type="button"
            className="rounded-full px-3 py-1 text-[#9f9c9c]"
          >
            Weekly
          </button>

          <button
            type="button"
            className="rounded-full bg-[#6d5cff] px-3 py-1 text-white"
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="mt-6 h-64 ">
        {hasEnoughData ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient
                  id="completionGradient"
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
                tick={{ fill: "#aaa7a7", fontSize: 10 }}
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
                formatter={(value) => [`${value}%`]}
                labelStyle={{ color: "#d8d5d5" }}
              />

              <Area
                type="monotone"
                dataKey="completion"
                stroke="#6d5cff"
                strokeWidth={3}
                fill="url(#completionGradient)"
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
          <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-[#30313d] bg-[#111219] px-6 text-center">
            <div>
              <p className="text-base font-semibold text-[#d8d5d5]">
                Not enough data to show yet
              </p>
              <p className="mt-2 text-sm text-[#8f8c8c]">
                Complete habits for at least 7 tracked days to see your trend.
              </p>
              <p className="mt-3 text-xs font-semibold text-[#6d5cff]">
                {data.length}/7 days tracked
              </p>
            </div>
          </div>
        )}
      </div>

      {hasEnoughData && (
        <p className="mt-4 text-sm text-[#aaa7a7]">
          Consistency is improving. Keep it up.
        </p>
      )}
    </div>
  );
}
