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
  history: {},
  newContainerData: {
    title: "",
    habits: [],
  },
  goals: [],
};

// logic for resetting the habit for new day
const resetHabitsForNewDay = (habits) =>
  habits.map((habit) => ({
    ...habit,
    selected: false,
  }));

// resetting today from yestarday habit
const syncAppDataWithToday = (data) => {
  const today = getTodayKey();

  if (data.todayKey === today) {
    return data;
  }

  return {
    ...data,
    todayKey: today,
    history: {
      ...(data.history || {}),
      [data.todayKey]: data.todayHabits.map((habit) => ({ ...habit })),
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
