import { CiCircleInfo } from "react-icons/ci";

export default function Consistencyheatmap({ data = [] }) {
  const getHeatmapColor = (completion) => {
    if (completion === 100) return "bg-[#28d845]";
    if (completion >= 75) return "bg-[#2EA043]";
    if (completion >= 50) return "bg-[#006d32]";
    if (completion >= 25) return "bg-[#0e4429]";
    if (completion > 0) return "bg-[#033a16]";

    return "bg-[#1d2229]";
  };
  const todayDate = new Date().getDate();

  const currentMonth = new Date().toLocaleString("default", {
    month: "long",
  });

  // const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="flex h-75 min-w-0 flex-col rounded-xl border border-[#30313d] bg-[#171820] p-4">
        {/* heading */}
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-white">
            Consistency Heatmap
          </h2>

          <CiCircleInfo
            size={16}
            className="cursor-pointer font-semibold text-white"
          />
        </div>

        {/* heatmap */}
        <div className="mt-3.5 flex flex-1 items-center justify-center gap-3">
          {/* weekday labels */}
          <div className="flex h-full flex-col justify-between py-1 text-[11px] font-semibold text-[#8e929b]">
            <span></span>
            <span>Mon</span>
            <span></span>
            <span>Wed</span>
            <span></span>
            <span>Fri</span>
            <span></span>
          </div>

          {/* month labels + heatmap */}
          <div className="flex flex-col gap-2">
            {/* month labels */}
            <div className="grid grid-flow-col gap-2 text-[11px] font-semibold text-[#8e929b]">
              <span className="text-center">May</span>
              <span className="text-center">Jun</span>
              <span className="text-center">Jul</span>
              <span className="text-center">Aug</span>
            </div>

            {/* heatmap grid */}

            <div className="grid grid-flow-col grid-rows-7 gap-2">
              {data.map((day) => (
                <div key={day.dateKey} className="relative group">
                  <div
                    className={`h-4.5 w-4.5 cursor-pointer rounded-sm transition-all duration-150 hover:scale-110 ${getHeatmapColor(
                      day.completion,
                    )}`}
                  ></div>

                  {/* custom tooltip */}
                  <div className="pointer-events-none absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-[#30313d] bg-[#111318] px-2 py-1 text-[11px] font-medium text-[#d7dbe4] shadow-lg group-hover:block">
                    {currentMonth} {todayDate} : {day.completed}/{day.total}{" "}
                    completed ({day.completion}%)
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* legend */}
        <div className="mt-3.5 flex items-center gap-2 text-sm text-[#9ca3af]">
          <span>Less</span>

          <div className="h-3 w-3 rounded-[3px] bg-[#1d2229]"></div>
          <div className="h-3 w-3 rounded-[3px] bg-[#033a16]"></div>
          <div className="h-3 w-3 rounded-[3px] bg-[#0e4429]"></div>
          <div className="h-3 w-3 rounded-[3px] bg-[#006d32]"></div>
          <div className="h-3 w-3 rounded-[3px] bg-[#28d845]"></div>

          <span>More</span>
        </div>
      </div>
    </>
  );
}
