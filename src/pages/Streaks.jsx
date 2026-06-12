import useAppContext from "../context/useAppcontext";
import Streakoverview from "../components/streaks/Streakoverview";
import Streakcard from "../components/streaks/Streakcard";

export default function Streaks() {
  const { appData } = useAppContext();
  const todayHabits = appData.todayHabits;
  const overallStreak = appData.streaks || {
    currentStreak: 0,
    bestStreak: 0,
    habitStreaks: {},
  };

  const getDateKey = (daysAgo) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString("en-CA");
  };

  // helper function for visual streak calculation
  const getLast7DaysForHabit = (habit) => {
    return Array.from({ length: 7 }, (_, index) => {
      const daysAgo = 6 - index;
      const dateKey = getDateKey(daysAgo);

      const habitsForDate =
        daysAgo === 0 ? todayHabits : appData.history?.[dateKey] || [];

      const matchedHabit = habitsForDate.find(
        (item) =>
          item.id === habit.id ||
          item.text.trim().toLowerCase() === habit.text.trim().toLowerCase(),
      );

      return {
        dateKey,
        isToday: daysAgo === 0,
        completed: matchedHabit?.selected || false,
      };
    });
  };

  // helper function for momentum overview card
  const getMomentumStats = () => {
    const todayKey = new Date().toLocaleDateString("en-CA");

    const monthDays = [
      ...Object.entries(appData.history || {}).map(([dateKey, habits]) => ({
        dateKey,
        habits,
      })),
      {
        dateKey: todayKey,
        habits: todayHabits,
      },
    ].filter((day) => {
      const date = new Date(day.dateKey);
      const today = new Date(todayKey);

      return (
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    });

    const trackedDays = monthDays.filter((day) => day.habits.length > 0);

    const successfulDays = trackedDays.filter((day) =>
      day.habits.every((habit) => habit.selected),
    ).length;

    const brokenStreaks = trackedDays.filter((day) =>
      day.habits.some((habit) => !habit.selected),
    ).length;

    const totalCompleted = trackedDays.reduce((sum, day) => {
      return sum + day.habits.filter((habit) => habit.selected).length;
    }, 0);

    const totalHabits = trackedDays.reduce((sum, day) => {
      return sum + day.habits.length;
    }, 0);

    const consistency =
      totalHabits > 0 ? Math.round((totalCompleted / totalHabits) * 100) : 0;

    return {
      successfulDays,
      brokenStreaks,
      consistency,
    };
  };

  const momentumStats = getMomentumStats();

  return (
    <>
      <section>
        <div>
          <h1 className="ml-2 text-xl lg:ml-8 mt-3 md:text-2xl text-[#979393] font-semibold ">
            @Streaks
          </h1>
          <div className="mt-2 md:mt-6 flex justify-center">
            <div className="h-px w-[94%] bg-[#4a4747]"></div>
          </div>
          <p className="mx-auto mt-4 md:ml-8 py-3 px-3 text-sm md:text-md lg:text-lg lg:mt-0 text-[#bdbcbc] leading-relaxed">
            Track your consistency and see how well you stick to your habits.
            Build momentum by maintaining streaks and showing up every day!.
          </p>

          <Streakoverview
            currentStreak={overallStreak.currentStreak}
            bestStreak={overallStreak.bestStreak}
            momentumStats={momentumStats}
          />

          <div className="mt-8 px-8">
            <div className="mb-5  flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold text-white">
                  Habit Streaks
                </h2>
              </div>

              <span className="rounded-full border border-[#30313d] bg-[#171820] px-4 py-2 text-sm font-semibold text-[#9ca3af]">
                {todayHabits.length} habits
              </span>
            </div>

            {todayHabits.length === 0 ? (
              <div className="flex h-48 items-center justify-center rounded-3xl border border-[#30313d] bg-[#171820] text-[#8f96a3]">
                No habits in today yet
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {todayHabits.map((habit) => {
                  const habitStreak = overallStreak.habitStreaks?.[
                    habit.id
                  ] || {
                    currentStreak: 0,
                    longestStreak: 0,
                  };

                  return (
                    <Streakcard
                      key={habit.id}
                      habit={habit}
                      habitStreak={habitStreak}
                      last7Days={getLast7DaysForHabit(habit)}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
