import { useEffect, useState } from "react";
import { AppContext } from "./contextStore";

const STORAGE_KEY = "habit-tracker-app-data";

const getTodayKey = () => new Date().toLocaleDateString("en-CA");

const defaultAppData = {
  todayKey: getTodayKey(),
  todayHabits: [
    { id: 1, text: "Study 6 hours", selected: false },
    { id: 2, text: "Exercise for 30 min", selected: false },
    { id: 3, text: "Reading book", selected: false },
    { id: 4, text: "walking 1k steps", selected: false },
  ],
  newContainerData: {
    title: "",
    habits: [],
  },
  goals: [],
};

export default function AppProvider({ children }) {
  const [appData, setAppData] = useState(() => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      return storedData ? JSON.parse(storedData) : defaultAppData;
    } catch (error) {
      console.error("Failed to load app data from localStorage", error);
      return defaultAppData;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
  }, [appData]);

  return (
    <AppContext.Provider value={{ appData, setAppData, getTodayKey }}>
      {children}
    </AppContext.Provider>
  );
}
