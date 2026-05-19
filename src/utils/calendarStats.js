// src/utils/calendarStats.js

export const getMonthlySummary = ({
  daysInMonth,
  todayKey,
  getDateKey,
  getHabitsForDate,
}) => {
  const monthDays = Array.from({ length: daysInMonth }, (_, index) => {
    const dayNumber = index + 1;
    const dateKey = getDateKey(dayNumber);
    const habits = getHabitsForDate(dayNumber);
    const completed = habits.filter((habit) => habit.selected).length;
    const total = habits.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      dayNumber,
      dateKey,
      habits,
      completed,
      total,
      percentage,
      isFuture: dateKey > todayKey,
    };
  });

  const trackedDays = monthDays.filter((day) => !day.isFuture && day.total > 0);

  const totalCompleted = trackedDays.reduce(
    (sum, day) => sum + day.completed,
    0,
  );

  const totalHabits = trackedDays.reduce((sum, day) => sum + day.total, 0);

  const monthlyCompletionRate =
    totalHabits > 0 ? Math.round((totalCompleted / totalHabits) * 100) : 0;

  const perfectDaysCount = trackedDays.filter(
    (day) => day.completed === day.total,
  ).length;

  const lowestDay = trackedDays.reduce((lowest, day) => {
    if (!lowest) return day;
    return day.percentage < lowest.percentage ? day : lowest;
  }, null);

  const habitStats = {};

  trackedDays.forEach((day) => {
    day.habits.forEach((habit) => {
      if (!habitStats[habit.text]) {
        habitStats[habit.text] = {
          text: habit.text,
          completed: 0,
          total: 0,
        };
      }

      habitStats[habit.text].total += 1;

      if (habit.selected) {
        habitStats[habit.text].completed += 1;
      }
    });
  });

  const topHabit = Object.values(habitStats)
    .filter((habit) => habit.completed > 0)
    .sort((a, b) => {
      const aRate = a.completed / a.total;
      const bRate = b.completed / b.total;

      return bRate - aRate;
    })[0];

  const bestStreak = getBestStreak(trackedDays);
  const currentStreak = getCurrentStreak(trackedDays);

  return {
    monthlyCompletionRate,
    perfectDaysCount,
    currentStreak,
    bestStreak,
    topHabit,
    lowestDay,
  };
};

const getBestStreak = (days) => {
  let current = 0;
  let best = 0;

  days.forEach((day) => {
    if (day.completed === day.total) {
      current += 1;
      best = Math.max(best, current);
    } else {
      current = 0;
    }
  });

  return best;
};

const getCurrentStreak = (days) => {
  let streak = 0;

  for (let i = days.length - 1; i >= 0; i--) {
    const day = days[i];

    if (day.completed === day.total) {
      streak += 1;
    } else {
      break;
    }
  }

  return streak;
};
