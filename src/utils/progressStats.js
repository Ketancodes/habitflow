export const getProgressSummary = (appData) => {
  const allDays = getTrackedDays(appData);

  const totalCompleted = allDays.reduce((sum, day) => {
    return sum + day.completed;
  }, 0);

  const totalHabits = allDays.reduce((sum, day) => {
    return sum + day.total;
  }, 0);

  const avgCompletion =
    totalHabits > 0 ? Math.round((totalCompleted / totalHabits) * 100) : 0;

  const perfectDays = allDays.filter((day) => {
    return day.total > 0 && day.completed === day.total;
  }).length;

  const toughDays = allDays.filter((day) => {
    return day.total > 0 && day.completed < day.total;
  }).length;

  const currentStreak = getCurrentStreak(allDays);
  const bestStreak = getBestStreak(allDays);

  return {
    avgCompletion,
    currentStreak,
    bestStreak,
    perfectDays,
    totalCompleted,
    toughDays,
  };
};

const getTrackedDays = (appData) => {
  const historyDays = Object.entries(appData.history || {}).map(
    ([dateKey, habits]) => {
      const total = habits.length;
      const completed = habits.filter((habit) => habit.selected).length;

      return {
        dateKey,
        total,
        completed,
      };
    },
  );

  const todayHabits = appData.todayHabits || [];
  const todayTotal = todayHabits.length;
  const todayCompleted = todayHabits.filter((habit) => habit.selected).length;

  const todayDay = {
    dateKey: appData.todayKey,
    total: todayTotal,
    completed: todayCompleted,
  };

  const daysByDate = {
    ...Object.fromEntries(historyDays.map((day) => [day.dateKey, day])),
    [appData.todayKey]: todayDay,
  };

  return Object.values(daysByDate).sort((a, b) => {
    return a.dateKey.localeCompare(b.dateKey);
  });
};

const getCurrentStreak = (days) => {
  let streak = 0;

  for (let i = days.length - 1; i >= 0; i--) {
    const day = days[i];

    if (day.total > 0 && day.completed === day.total) {
      streak += 1;
    } else {
      break;
    }
  }

  return streak;
};

const getBestStreak = (days) => {
  let current = 0;
  let best = 0;

  days.forEach((day) => {
    if (day.total > 0 && day.completed === day.total) {
      current += 1;
      best = Math.max(best, current);
    } else {
      current = 0;
    }
  });

  return best;
};

// data for the charts
export const getCompletionChartData = (appData) => {
  const days = getTrackedDays(appData);

  return days.map((day) => {
    const date = new Date(day.dateKey);

    const label = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    const completion =
      day.total > 0 ? Math.round((day.completed / day.total) * 100) : 0;

    return {
      label,
      completion,
    };
  });
};

//data for the habit performance card

export const getHabitPerformanceData = (appData) => {
  const habitStats = {};

  const addHabitsToStats = (habits = []) => {
    habits.forEach((habit) => {
      const habitText = habit.text;

      if (!habitStats[habitText]) {
        habitStats[habitText] = {
          text: habitText,
          completed: 0,
          total: 0,
        };
      }

      habitStats[habitText].total += 1;

      if (habit.selected) {
        habitStats[habitText].completed += 1;
      }
    });
  };

  Object.values(appData.history || {}).forEach((habits) => {
    addHabitsToStats(habits);
  });

  addHabitsToStats(appData.todayHabits || []);

  return Object.values(habitStats)
    .map((habit) => {
      const percentage =
        habit.total > 0 ? Math.round((habit.completed / habit.total) * 100) : 0;

      return {
        ...habit,
        percentage,
      };
    })
    .sort((a, b) => b.percentage - a.percentage);
};

// data for productivity trend card
export const getProductivityTrend = (appData) => {
  const days = getTrackedDays(appData);

  const today = new Date(appData.todayKey);

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const previousMonthDate = new Date(currentYear, currentMonth - 1, 1);
  const previousMonth = previousMonthDate.getMonth();
  const previousYear = previousMonthDate.getFullYear();

  const currentMonthDays = days.filter((day) => {
    const date = new Date(day.dateKey);

    return (
      date.getMonth() === currentMonth &&
      date.getFullYear() === currentYear &&
      day.total > 0
    );
  });

  const previousMonthDays = days.filter((day) => {
    const date = new Date(day.dateKey);

    return (
      date.getMonth() === previousMonth &&
      date.getFullYear() === previousYear &&
      day.total > 0
    );
  });

  const currentRate = getAverageCompletionRate(currentMonthDays);
  const previousRate = getAverageCompletionRate(previousMonthDays);

  const trend = currentRate - previousRate;

  return {
    trend,
    currentRate,
    previousRate,
    hasEnoughData: currentMonthDays.length > 0 && previousMonthDays.length > 0,
  };
};

const getAverageCompletionRate = (days) => {
  const totalCompleted = days.reduce((sum, day) => sum + day.completed, 0);
  const totalHabits = days.reduce((sum, day) => sum + day.total, 0);

  return totalHabits > 0 ? Math.round((totalCompleted / totalHabits) * 100) : 0;
};
