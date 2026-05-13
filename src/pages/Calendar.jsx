import { useState } from "react";
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
import useAppContext from "../context/useAppcontext";

export default function Calendar() {
  const { appData } = useAppContext();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const monthName = currentMonth.toLocaleString("default", {
    month: "long",
  });
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const totalSlots = startOffset + daysInMonth;
  const calendarBoxcount = totalSlots <= 35 ? 35 : 42;

  // logic for calendar boxes
  const calendarBoxes = Array.from({ length: calendarBoxcount }, (_, index) => {
    const dayNumber = index - startOffset + 1;
    return {
      id: index,
      dayNumber,
      isCurrentMonth: dayNumber >= 1 && dayNumber <= daysInMonth,
    };
  });

  //completion helper for calenddar boxes
  const getDateKey = (dayNumber) => {
    const date = new Date(year, month, dayNumber);
    return date.toLocaleDateString("en-CA");
  };

  const getHabitsForDate = (dayNumber) => {
    const dateKey = getDateKey(dayNumber);

    if (dateKey === appData.todayKey) {
      return appData.todayHabits;
    }

    return appData.history?.[dateKey] || [];
  };

  const getCompletionStats = (dayNumber) => {
    const habits = getHabitsForDate(dayNumber);
    const total = habits.length;
    const completed = habits.filter((habit) => habit.selected).length;

    return { completed, total };
  };

  const getCompletionColor = (completed, total) => {
    if (total === 0) return "border-[#3a3838] bg-[#232222]";

    const percentage = (completed / total) * 100;

    if (percentage === 100) return "border-[#6d8bcc] bg-[#4e51fa]/80";
    if (percentage >= 75) return "border-[#5f72c9] bg-[#4e51fa]/55";
    if (percentage >= 50) return "border-[#53619f] bg-[#4e51fa]/35";
    if (percentage >= 25) return "border-[#454f7c] bg-[#4e51fa]/20";

    return "border-[#3a3838] bg-[#232222]";
  };

  return (
    <>
      <section>
        <div>
          <h1 className="ml-8 mt-3 text-2xl text-[#979393] font-semibold">
            @Calendar
          </h1>
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
            <h2 className=" mt-2 text-xl text-[#bdbcbc]">
              {monthName} {year}
            </h2>

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
            {calendarBoxes.map((box) => {
              const stats = box.isCurrentMonth
                ? getCompletionStats(box.dayNumber)
                : { completed: 0, total: 0 };

              return (
                <div
                  key={box.id}
                  className={`h-20 rounded-xl border p-2 ${getCompletionColor(
                    stats.completed,
                    stats.total,
                  )}`}
                >
                  {box.isCurrentMonth && (
                    <div className="flex h-full flex-col justify-between">
                      <span className="text-right text-sm text-[#dcd8d8]">
                        {box.dayNumber}
                      </span>

                      {stats.total > 0 && (
                        <p className="text-center text-[#f0eeee]">
                          {stats.completed}/{stats.total}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="flex justify-between">
              <div className="h-20 w-22 bg-amber-400"></div>
              <div className="h-20 w-22 bg-[#5f85d8]"></div>
              <div className="h-20 w-22 bg-amber-400"></div>
              <div className="h-20 w-22 bg-amber-400"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
