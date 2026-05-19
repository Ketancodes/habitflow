import { useState } from "react";
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
import useAppContext from "../context/useAppcontext";
import { FaFire } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { FiTrendingDown } from "react-icons/fi";
import { getMonthlySummary } from "../utils/calendarStats";
import Daymodal from "../components/Daymodal";

export default function Calendar() {
  const { appData } = useAppContext();
  const [currentMonth, setCurrentMonth] = useState(
    () => new Date(appData.todayKey),
  );
  const [selectDay, setSelectDay] = useState(null);
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
    if (total === 0) return "border-[#3a3838] bg-[#292828]";

    const percentage = (completed / total) * 100;

    if (percentage === 100) return "border-[#6d8bcc] bg-[#4e51fa]/80";
    if (percentage >= 75) return "border-[#5f72c9] bg-[#4e51fa]/55";
    if (percentage >= 50) return "border-[#53619f] bg-[#4e51fa]/35";
    if (percentage >= 25) return "border-[#454f7c] bg-[#4e51fa]/20";

    return "border-[#3a3838] bg-[#292828]";
  };

  // showing hover tooltip helper functions
  const canShowDayTooltip = (dayNumber) => {
    const dateKey = getDateKey(dayNumber);
    return dateKey <= appData.todayKey;
  };

  const formatTooltipDate = (dayNumber) => {
    const date = new Date(year, month, dayNumber);

    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  };

  const getMissedHabits = (dayNumber) => {
    const habits = getHabitsForDate(dayNumber);

    return habits.filter((habit) => !habit.selected).map((habit) => habit.text);
  };

  // deriving the logic for showing emoji based upon completion
  const getDayStatus = (percentage) => {
    if (percentage === 100) return "🔥 Perfect Day";
    if (percentage >= 75) return "⚡ Productive Day";
    if (percentage >= 50) return "🌱 Steady Progress";
    return "😴 Low Activity";
  };

  // helper function for makign future day inactive
  const isFutureDay = (dayNumber) => {
    const dateKey = getDateKey(dayNumber);
    return dateKey > appData.todayKey;
  };

  const monthlySummary = getMonthlySummary({
    daysInMonth,
    todayKey: appData.todayKey,
    getDateKey,
    getHabitsForDate,
  });

  // legend color showing array
  const completionLegend = [
    {
      label: "Weak day",
      className: "border-[#3a3838] bg-[#232222]",
    },
    {
      label: "Low energy",
      className: "border-[#454f7c] bg-[#4e51fa]/20",
    },
    {
      label: "Steady",
      className: "border-[#53619f] bg-[#4e51fa]/35",
    },
    {
      label: "Productive",
      className: "border-[#5f72c9] bg-[#4e51fa]/55",
    },
    {
      label: "Perfect",
      className: "border-[#6d8bcc] bg-[#4e51fa]/80",
    },
  ];

  // month navigation handler function code
  const getMonthKey = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
  };

  const todayDate = new Date(appData.todayKey);

  const selectedMonthKey = getMonthKey(currentMonth);

  const maxAllowedMonth = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth() + 1,
    1,
  );

  const maxAllowedMonthKey = getMonthKey(maxAllowedMonth);

  const historyDates = Object.keys(appData.history || {}).sort();

  const firstTrackedDate =
    historyDates.length > 0 ? new Date(historyDates[0]) : todayDate;

  const firstTrackedMonthKey = getMonthKey(firstTrackedDate);

  const canGoPrevious = selectedMonthKey > firstTrackedMonthKey;
  const canGoNext = selectedMonthKey < maxAllowedMonthKey;

  const goToPreviousMonth = () => {
    if (!canGoPrevious) return;

    setCurrentMonth((prevMonth) => {
      return new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1, 1);
    });
  };

  const goToNextMonth = () => {
    if (!canGoNext) return;

    setCurrentMonth((prevMonth) => {
      return new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 1);
    });
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
                onClick={goToPreviousMonth}
                className={`mt-2 transition-colors ${
                  canGoPrevious
                    ? "cursor-pointer text-[#bdbcbc] hover:text-white"
                    : "cursor-not-allowed text-[#4a4747]"
                }`}
              />
            </span>
            <h2 className=" mt-2 text-xl text-[#bdbcbc]">
              {monthName} {year}
            </h2>

            <span>
              <PiGreaterThan
                size={18}
                onClick={goToNextMonth}
                className={`mt-2 transition-colors ${
                  canGoNext
                    ? "cursor-pointer text-[#bdbcbc] hover:text-white"
                    : "cursor-not-allowed text-[#4a4747]"
                }`}
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
              const isToday =
                box.isCurrentMonth &&
                getDateKey(box.dayNumber) === appData.todayKey;

              const isFuture = box.isCurrentMonth && isFutureDay(box.dayNumber);
              const percentage =
                stats.total > 0
                  ? Math.round((stats.completed / stats.total) * 100)
                  : 0;

              const perfectDay =
                box.isCurrentMonth &&
                !isFuture &&
                stats.total > 0 &&
                stats.completed === stats.total;
              return (
                <div
                  key={box.id}
                  onClick={() => {
                    if (!box.isCurrentMonth || isFuture) return;

                    setSelectDay({
                      dayNumber: box.dayNumber,
                      dateKey: getDateKey(box.dayNumber),
                      habits: getHabitsForDate(box.dayNumber),
                      completed: stats.completed,
                      total: stats.total,
                      percentage,
                      status: getDayStatus(percentage),
                    });
                  }}
                  className={`group relative h-20 rounded-xl border p-2 transition-all duration-200 ease-out ${
                    isFuture
                      ? "cursor-default border-[#2f2d2d] bg-[#181818] opacity-60"
                      : `cursor-pointer hover:-translate-y-1 hover:scale-[0.96] ${getCompletionColor(
                          stats.completed,
                          stats.total,
                        )}`
                  } ${perfectDay ? "border-[3px] border-[#f59e0b]" : ""} ${
                    isToday
                      ? "ring-1 ring-[#3c3ff3] ring-offset-1 ring-offset-[#393cf1]"
                      : ""
                  }`}
                >
                  {box.isCurrentMonth && canShowDayTooltip(box.dayNumber) && (
                    <div className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-20 hidden w-48 -translate-x-1/2 translate-y-2 rounded-xl border border-[#4a4747] bg-[#111111] px-3 py-2 text-left opacity-0 transition-all duration-200 ease-out group-hover:opacity-100 shadow-xl group-hover:block">
                      <p className="text-[15px] font-semibold text-white">
                        {formatTooltipDate(box.dayNumber)}
                      </p>

                      <p className="mt-3.5 text-[13px] text-[#d6d3d3]">
                        Completed : {stats.completed}/{stats.total} (
                        {(stats.completed / stats.total) * 100 || 0}%)
                      </p>

                      <p className="mt-1.5 text-[13px] text-[#d6d3d3]">
                        Missed :{" "}
                        {getMissedHabits(box.dayNumber).length > 0
                          ? getMissedHabits(box.dayNumber).join("")
                          : "None"}
                      </p>

                      <p className="mt-1.5 text-[13px] text-[#d6d3d3]">
                        Perfect day ?{" "}
                        {stats.total > 0 && stats.completed === stats.total
                          ? "Yes"
                          : "No"}
                      </p>
                      <p className="mt-3.5 text-[13px] text-[#d6d3d3]">
                        🔥 4 day streak
                      </p>

                      <p className="mt-3 text-[#d6d3d3] text-[14px]">
                        {getDayStatus(percentage)}
                      </p>
                    </div>
                  )}

                  {box.isCurrentMonth && (
                    <div className="flex h-full flex-col">
                      <div className="flex items-start justify-between">
                        <span
                          className={`text-left text-sm ${
                            isToday
                              ? "font-semibold text-white"
                              : "text-[#dcd8d8]"
                          }`}
                        >
                          {box.dayNumber}
                        </span>

                        {perfectDay && (
                          <FaFire
                            className="text-[#f59d04]"
                            size={16}
                            title="Perfect day"
                          />
                        )}
                      </div>

                      <div className="flex flex-1 items-center justify-center text-[17px]">
                        {stats.total > 0 && (
                          <p className="text-center text-[#f0eeee]">
                            {stats.completed}/{stats.total}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div>
            {/* legend showing color completion info */}
            <div className="mx-8 mt-5 flex flex-wrap items-center gap-7 text-sm text-[#aaa7a7]">
              {completionLegend.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span
                    className={`h-3 w-8 rounded-full border ${item.className}`}
                  ></span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* whole  monthly summary section  */}
          <div className="mx-8 mt-8 border-t border-dashed border-[#3a3838] pt-6">
            <h2 className="text-xl font-semibold text-[#bdbcbc]">
              Monthly summary 🗓️
            </h2>

            {/* completion rate card */}
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5 ">
              <div className="flex items-center gap-3 rounded-xl border border-[#202135] p-4 bg-[#202135] cursor-pointer hover:scale-[0.98] transition-all duration-200">
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-semibold text-white"
                  style={{
                    background: `conic-gradient(#4e51fa ${monthlySummary.monthlyCompletionRate * 3.6}deg, #11121f 0deg)`,
                  }}
                >
                  <div className="flex h-12.5 w-12.5 justify-center items-center rounded-full bg-[#202135]">
                    {monthlySummary.monthlyCompletionRate}%
                  </div>
                </div>

                <div className="min-w-0">
                  <p className="text-md leading-5 text-[#d8d5d5]">
                    Completion rate
                  </p>
                  <p className="mt-1 text-xl font-semibold text-[#5f72ff]">
                    {monthlySummary.monthlyCompletionRate}%
                  </p>
                </div>
              </div>

              {/* perfect day card */}
              <div className="flex items-center gap-5 rounded-xl border border-[#353754] bg-[#202135] p-5  cursor-pointer hover:scale-[0.98] transition-all duration-200">
                <div className="flex h-16 w-16 items-center justify-center shrink-0 rounded-full bg-[#6d5cff]/25 text-[#9b87ff]">
                  <FaTrophy size={30} />
                </div>

                <div>
                  <p className="text-3xl font-semibold text-white">
                    {monthlySummary.perfectDaysCount}
                  </p>
                  <p className="mt-1 text-[#9b87ff]">Perfect day</p>
                </div>
              </div>

              {/* current streak card */}
              <div className="flex items-center gap-5 rounded-xl border border-[#353754] bg-[#202135] p-5  cursor-pointer hover:scale-[0.98] transition-all duration-200">
                <div className="flex h-16 w-16 items-center justify-center shrink-0 rounded-full bg-[#ff6b4a]/25 text-[#ff7a4f]">
                  <FaFire size={30} />
                </div>

                <div>
                  <p className="text-md font-semibold text-white">
                    {monthlySummary.currentStreak === 0
                      ? "No active streak"
                      : monthlySummary.currentStreak}
                  </p>
                  <p className="mt-1 text-[#ff7a4f]">Current streak</p>
                </div>
              </div>

              {/* top habit card */}
              <div className="flex items-center gap-5 rounded-xl border border-[#353754] bg-[#202135] p-5   cursor-pointer hover:scale-[0.98] transition-all duration-200">
                <div className="flex h-16 w-16 items-center justify-center shrink-0 rounded-full bg-[#63d66f]/25 text-[#77e86f]">
                  <TbTargetArrow size={34} />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    {monthlySummary.topHabit
                      ? monthlySummary.topHabit.text
                      : "No dominant habit yet"}
                  </p>
                  <p className="mt-2 text-[#77e86f]">Top habit!</p>
                </div>
              </div>

              {/* lowest day card */}
              <div className="flex items-center gap-5 rounded-xl border border-[#353754] bg-[#202135] p-5  cursor-pointer hover:scale-[0.98] transition-all duration-200">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#ff4f75]/25 text-[#ff5578]">
                  <FiTrendingDown size={34} />
                </div>

                <div>
                  <p className="text-md font-semibold text-white">
                    {monthlySummary.lowestDay
                      ? `${monthName} ${monthlySummary.lowestDay.dayNumber}`
                      : "None"}
                  </p>
                  <p className="mt-2 font-semibold text-[#ff5578]">
                    {monthlySummary.lowestDay
                      ? `Toughest day (${monthlySummary.lowestDay.percentage}%)`
                      : "No data yet"}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-[#7471ca] text-sm">
              Note:{" "}
              <span className="text-[#646363]">
                Future days are muted and cannot be interacted with.
              </span>
            </p>
          </div>
          <Daymodal
            selectedDay={selectDay}
            onClose={() => setSelectDay(null)}
          />
        </div>
      </section>
    </>
  );
}
