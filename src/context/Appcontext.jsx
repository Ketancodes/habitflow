import { useEffect, useState } from "react";
import { AppContext } from "./contextstore";

const STORAGE_KEY = "habit-tracker-app-data";

const getTodayKey = () => new Date().toLocaleDateString("en-CA");

// the default app data (habits)
const defaultAppData = {
  todayKey: getTodayKey(),
  todayHabits: [
    { id: 1, text: "Study 6 hours", selected: false },
    { id: 2, text: "Exercise for 30 min", selected: false },
    { id: 3, text: "Reading book", selected: false },
    { id: 4, text: "walking 1k steps", selected: false },
  ],
  myHabits: [
    {
      id: 1,
      title: "study 6 hours",
      category: "Study",
      frequency: "Daily",
      priority: "High",
      streak: 6,
    },
  ],
  history: {},
  newContainerData: {
    title: "",
    habits: [],
  },

  streaks: {
    currentStreak: 0,
    bestStreak: 0,
    habitStreaks: {},
  },
  goals: [
    {
      id: 1,
      title: "study 4 hours ",
      frequency: "Daily",
      totalDays: 90,
      completedDays: 30,
      active: true,
      lastProgressDate: null,
    },
  ],
};

// logic for resetting the habit for new day
const resetHabitsForNewDay = (habits) =>
  habits.map((habit) => ({
    ...habit,
    selected: false,
  }));

//logic for updatin the habit of streaks
const updateHabitStreaks = (habits, previousHabitStreaks = {}) => {
  return habits.reduce((streaks, habit) => {
    const previousStreak = previousHabitStreaks[habit.id] || {
      currentStreak: 0,
      longestStreak: 0,
    };

    const nextCurrentStreak = habit.selected
      ? previousStreak.currentStreak + 1
      : 0;

    streaks[habit.id] = {
      currentStreak: nextCurrentStreak,
      longestStreak: Math.max(previousStreak.longestStreak, nextCurrentStreak),
    };

    return streaks;
  }, {});
};

// helper function for overall streak claculation
const updateOverallStreak = (habits, previousStreaks = {}) => {
  const hasHabits = habits.length > 0;
  const allHabitsCompleted =
    hasHabits && habits.every((habit) => habit.selected);

  const previousCurrentStreak = previousStreaks.currentStreak || 0;
  const previousBestStreak = previousStreaks.bestStreak || 0;

  const nextCurrentStreak = allHabitsCompleted ? previousCurrentStreak + 1 : 0;

  return {
    currentStreak: nextCurrentStreak,
    bestStreak: Math.max(previousBestStreak, nextCurrentStreak),
  };
};

// resetting today from yestarday habit
const syncAppDataWithToday = (data) => {
  const today = getTodayKey();

  if (data.todayKey === today) {
    return data;
  }
  const updatedHabitStreaks = updateHabitStreaks(
    data.todayHabits,
    data.streaks?.habitStreaks,
  );
  const updatedOverallStreak = updateOverallStreak(
    data.todayHabits,
    data.streaks,
  );

  return {
    ...data,
    todayKey: today,
    history: {
      ...(data.history || {}),
      [data.todayKey]: data.todayHabits.map((habit) => ({ ...habit })),
    },
    streaks: {
      ...(data.streaks || {}),
      currentStreak: updatedOverallStreak.currentStreak,
      bestStreak: updatedOverallStreak.bestStreak,
      habitStreaks: updatedHabitStreaks,
    },

    todayHabits: resetHabitsForNewDay(data.todayHabits),
  };
};

export default function AppProvider({ children }) {
  //localstorage reading or showing default data logic(usestate)
  const [appData, setAppData] = useState(() => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);

      if (!storedData) return defaultAppData;

      const parsed = JSON.parse(storedData);

      return syncAppDataWithToday({
        ...defaultAppData,
        ...parsed,
      });
    } catch (error) {
      console.error("Failed to load app data from localStorage", error);
      return defaultAppData;
    }
  });

  //saving data logic
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
  }, [appData]);

  return (
    <AppContext.Provider value={{ appData, setAppData, getTodayKey }}>
      {children}
    </AppContext.Provider>
  );
}
