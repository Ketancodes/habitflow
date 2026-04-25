import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
export default function Calendar() {
  const calendarBoxes = Array.from({ length: 35 }, (_, i) => i + 1);

  return (
    <>
      <section>
        <div>
          <h1 className="ml-8 mt-3 text-2xl text-[#979393]">@Calendar</h1>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-[94%] bg-[#4a4747]"></div>
          </div>
          <div className=" ml-8 flex items-center gap-3">
            <span>
              <PiLessThan
                size={18}
                className="text-[#bdbcbc] mt-2 cursor-pointer"
              />
            </span>
            <h2 className=" mt-2 text-xl text-[#bdbcbc]">April 2026</h2>

            <span>
              <PiGreaterThan
                size={18}
                className="text-[#bdbcbc] mt-2 cursor-pointer"
              />
            </span>
          </div>

          {/* weekday grid */}
          <div className="mt-6 grid grid-cols-7 gap-2 px-8 text-center text-sm text-[#8e8b8b]">
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>
            <p>Sat</p>
            <p>Sun</p>
          </div>
          <div className="mt-3 grid grid-cols-7 gap-2 px-8">
            {calendarBoxes.map((box) => (
              <div
                key={box}
                className="h-20 rounded-xl border border-[#3a3838] bg-[#232222]  p-2"
              >
                {box <= 31 && (
                  <div className="flex h-full flex-col justify-between">
                    <span className="text-right text-sm text-[#bdbcbc]">
                      {box}
                    </span>
                    <p className="text-center text-[#d6d2d2]">3/5</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
