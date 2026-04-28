import Reusable from "../components/Reusable";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const HABITS_STORAGE_KEY = "today-habits";

const habitEmojiMap = [
  { keywords: ["study", "read", "book", "learn", "exam"], emoji: "📚" },
  { keywords: ["gym", "fitness", "workout", "exercise", "run"], emoji: "💪" },
  { keywords: ["walk", "steps", "cardio"], emoji: "🚶" },
  { keywords: ["water", "drink", "hydrate"], emoji: "💧" },
  { keywords: ["sleep", "wake", "morning"], emoji: "🌙" },
  { keywords: ["money", "save", "income", "budget"], emoji: "💰" },
  { keywords: ["weight", "gain", "muscle"], emoji: "🏋️" },
];

const getHabitEmoji = (text) => {
  const lowerText = text.toLowerCase();

  const match = habitEmojiMap.find((group) =>
    group.keywords.some((word) => lowerText.includes(word)),
  );

  return match ? match.emoji : "✨";
};

export default function MainDashboard() {
  const [habits] = useState(() => {
    try {
      const storedHabits = localStorage.getItem(HABITS_STORAGE_KEY);
      return storedHabits ? JSON.parse(storedHabits) : [];
    } catch (error) {
      console.error("Failed to load habits from localStorage", error);
      return [];
    }
  });
  const totalHabits = habits.length;
  const completed = habits.filter((habit) => habit.selected).length;
  const remainingHabits = totalHabits - completed;

  // habit progress bar logic
  const habitCompletionRate = totalHabits
    ? Math.round((completed / totalHabits) * 100)
    : 0;

  const radius = 42;
  const circumference = Math.PI * radius;
  const strokeDashoffset =
    circumference - (habitCompletionRate / 100) * circumference;

  return (
    <section>
      <div>
        <h1 className="ml-8 mt-3 text-2xl text-[#979393] font-semibold">
          @Dashboard
        </h1>
        <h4 className="ml-8 mt-3 text-xl text-[#999696] font-semibold">
          Apr 26
        </h4>
        <div className="mt-4 flex justify-center">
          <div className="h-px w-[94%] bg-[#4a4747]"></div>
        </div>
        <h2 className="mt-4 text-center text-xl text-[#bdbcbc] font-semibold leading-relaxed">
          Good morning,<span className="text-[#6386d1]"> warrior!</span>
        </h2>
        {/* overview panel+ today overview */}
        <div className="ml-8 mt-8 flex gap-12">
          <div>
            <h2 className="text-[#807f7f] text-lg font-semibold py-2.5 px-2 ">
              Overview panel
            </h2>

            {/* overview container */}
            <div className="flex flex-col">
              <div
                className="h-52  w-60 rounded-xl flex flex-col font-semibold leading-relaxed tracking-wide gap-2 px-3 py-1.5 text-[#a09e9e] transition-transform duration-150 
               bg-[#272626] hover:bg-[#2e2d2d]"
              >
                <p className="">
                  Total current habits :{" "}
                  <span className="text-[#5f84d4] font-semibold ">
                    {totalHabits} ⚡
                  </span>
                </p>
                <p>
                  Total active goals :{" "}
                  <span className="text-[#5f84d4] font-semibold ">4 🎯</span>
                </p>
                <p>
                  Current streak :{" "}
                  <span className="text-[#5f85d8] font-semibold ">12 🔥</span>
                </p>
                <p>Completion rate :</p>

                {/* visual progress bar */}
                <div className="mt-2 w-full">
                  <div className="h-3.5 w-full rounded-full bg-[#424242]">
                    <div
                      className="h-3.5 rounded-full bg-indigo-500 shadow-[0_0_9px_rgba(82,102,225,0.35)] transition-all duration-300"
                      style={{ width: `${75}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm text-center">(75%) moderate</p>
              </div>
            </div>

            {/* new habit container created + habit completion progress bar*/}
            <div
              className=" mt-2.5 h-28 w-60 rounded-xl flex flex-col font-semibold leading-relaxed tracking-wide gap-2 px-3 py-1.5 text-[#a09e9e] transition-transform duration-150 
           bg-[#272626] hover:bg-[#2e2d2d]"
            >
              <div className="-mt-2 flex flex-col items-center">
                <svg width="110" height="70" viewBox="0 0 110 70">
                  <defs>
                    <linearGradient
                      id="habitGauge"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#5b67f5" />
                      <stop offset="50%" stopColor="#6d7cff" />
                      <stop offset="100%" stopColor="#8a95ff" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 13 55 A 42 42 0 0 1 97 55"
                    fill="none"
                    stroke="#424242"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />

                  <path
                    d="M 13 55 A 42 42 0 0 1 97 55"
                    fill="none"
                    stroke="url(#habitGauge)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-500"
                  />
                </svg>

                <div className="-mt-2 text-center">
                  <p className="text-lg font-semibold text-[#d6d2d2]">
                    {habitCompletionRate}%
                  </p>
                  <p className="text-sm text-[#adabab]">
                    Habit completion rate
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* habit completion progress bar ends here */}
          {/* second column of today overview panel */}
          <div>
            <h2 className="text-[#807f7f] text-lg font-semibold py-2.5 px-2">
              Today's todo
            </h2>
            <div
              className="py-2 h-80 w-64 rounded-xl flex flex-col font-semibold leading-relaxed tracking-wide gap-2.5 px-3  text-[#a09e9e] transition-transform duration-150 
                bg-[#272626] hover:bg-[#2e2d2d]"
            >
              <div className="flex flex-col gap-2 ">
                <p className="">
                  Total current habits :{" "}
                  <span className="text-[#5f84d4] font-semibold ">
                    {totalHabits} ⚡
                  </span>
                </p>
                <p className="">
                  Habits to complete :{" "}
                  <span className="text-[#5f84d4] font-semibold ">
                    {remainingHabits} 🎯
                  </span>
                </p>
              </div>
              {/* current habit status  */}
              <div className="mt-1.5 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {/* <h4 className="text-sm text-[#9b9898] ">Habits</h4> */}
                <div className="mt-2 w-full flex flex-col gap-3.5 text-[18px] text-[#bdbaba]">
                  {habits.map((habit) => (
                    <div key={habit.id}>
                      <Reusable
                        label={habit.text}
                        emoji={getHabitEmoji(habit.text)}
                        checked={habit.selected}
                        onChange={() => {}}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <NavLink
                  to="/dashboard/today"
                  className="mt-4 w-[90%] px-2 py-1.5 text-center text-[17px] rounded-lg bg-[#3a3a3a] hover:bg-[#4a4a4a] hover:scale-[1.01] text-[#bebaba] cursor-pointer active:bg-[#4e51fa] transition-transform duration-150 active:scale-[0.98]"
                >
                  Go to today
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
