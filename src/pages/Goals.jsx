import { useState } from "react";
import Goalcard from "../components/Goalcard";
import Goalmodal from "../components/Goalmodal";
import useAppContext from "../context/useAppcontext";
import Goalsoverview from "../components/goals/Goalsoverview";
import Goaljourney from "../components/goals/Goaljourney";

const goalEmojiMap = [
  { keywords: ["study", "read", "book", "learn", "exam"], emoji: "📚" },
  { keywords: ["gym", "fitness", "workout", "exercise", "run"], emoji: "💪" },
  { keywords: ["walk", "steps", "cardio"], emoji: "🚶" },
  { keywords: ["water", "drink", "hydrate"], emoji: "💧" },
  { keywords: ["sleep", "wake", "morning"], emoji: "🌙" },
  { keywords: ["money", "save", "income", "budget"], emoji: "💰" },
  { keywords: ["weight", "gain", "muscle"], emoji: "🏋️" },
];

// getting goal emoji logic function
const getGoalEmoji = (title) => {
  const lowerTitle = title.toLowerCase();

  const match = goalEmojiMap.find((group) =>
    group.keywords.some((word) => lowerTitle.includes(word)),
  );

  return match ? match.emoji : "🎯";
};

export default function Goals() {
  const { appData, setAppData } = useAppContext();
  const goals = appData.goals;

  const [goalmodal, setGoalModal] = useState(false);

  // add goal logic
  const handleAddGoal = (newGoal) => {
    const trimmedTitle = newGoal.title.trim();
    if (!trimmedTitle) return;

    const isDuplicate = goals.some(
      (goal) => goal.title.trim().toLowerCase() === trimmedTitle.toLowerCase(),
    );

    if (isDuplicate) return;

    setAppData((prev) => ({
      ...prev,
      goals: [
        ...prev.goals,
        {
          id: Date.now(),
          title: trimmedTitle,
          totalDays: Number(newGoal.totalDays) || null,
          frequency: newGoal.frequency || "",
          completedDays: 0,
          active: true,
          lastProgressDate: null,
        },
      ],
    }));

    setGoalModal(false);
  };

  // all goals counting logic
  const activeGoals = goals.filter(
    (goal) => goal.active && goal.completedDays < goal.totalDays,
  ).length;

  const completedGoals = goals.filter(
    (goal) => goal.active && goal.completedDays >= goal.totalDays,
  ).length;

  const inactiveGoals = goals.filter((goal) => !goal.active).length;

  //delete logic
  const handleDelete = (id) => {
    setAppData((prev) => ({
      ...prev,
      goals: prev.goals.filter((goal) => goal.id !== id),
    }));
  };

  // handle add progress logic
  const handleAddProgress = (id) => {
    const today = new Date().toLocaleDateString("en-CA");

    setAppData((prev) => ({
      ...prev,
      goals: prev.goals.map((goal) => {
        if (goal.id !== id) return goal;
        if (!goal.active) return goal;
        if (goal.lastProgressDate === today) return goal;
        if (goal.totalDays && goal.completedDays >= goal.totalDays) return goal;

        return {
          ...goal,
          completedDays: goal.completedDays + 1,
          lastProgressDate: today,
        };
      }),
    }));
  };

  //handle archive logic
  const handleArchive = (id) => {
    setAppData((prev) => ({
      ...prev,
      goals: prev.goals.map((goal) =>
        goal.id === id ? { ...goal, active: false } : goal,
      ),
    }));
  };

  // order of goals for filterign the goal by status
  const orderedGoals = [
    ...goals.filter(
      (goal) => goal.active && goal.completedDays < goal.totalDays,
    ),
    ...goals.filter(
      (goal) => goal.active && goal.completedDays >= goal.totalDays,
    ),
    ...goals.filter((goal) => !goal.active),
  ];

  return (
    <>
      <section>
        <div>
          <div className="px-2.5 mt-3 flex justify-between ">
            <h1 className="ml-8 mt-3 text-2xl text-[#979393] font-semibold">
              @Goals
            </h1>
            <button
              className="rounded-3xl border border-[#6857ff] bg-[#6d5cff]/12 px-4 py-2 text-sm font-semibold text-[#dcd7ff]  transition-all duration-150 hover:bg-[#6d5cff]/20 hover:text-white  active:scale-[0.96] cursor-pointer"
              onClick={() => setGoalModal(true)}
            >
              + Add goal
            </button>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-[94%] bg-[#4a4747]"></div>
          </div>

          <Goalsoverview
            goals={goals}
            totalGoals={goals.length}
            activeGoals={activeGoals}
            completedGoals={completedGoals}
            inactiveGoals={inactiveGoals}
          />

          {/* main goal card container */}
          <div
            className={`mt-8 grid w-[94%] gap-6 ${
              goals.length === 0
                ? "mx-auto min-h-[45vh] place-items-center"
                : "ml-8 grid-cols-3"
            }`}
          >
            {orderedGoals.map((goal) => (
              <Goalcard
                key={goal.id}
                id={goal.id}
                title={goal.title}
                emoji={getGoalEmoji(goal.title)}
                totalDays={goal.totalDays}
                completedDays={goal.completedDays}
                onAddProgress={handleAddProgress}
                active={goal.active}
                frequency={goal.frequency}
                onDelete={handleDelete}
                onArchive={handleArchive}
                isProgressAddedToday={
                  goal.lastProgressDate ===
                  new Date().toLocaleDateString("en-CA")
                }
              />
            ))}
            <div
              className="flex h-95 w-80 flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-[#3f3a68] bg-[#171820] px-5 py-5 text-[#a78bfa] transition-all duration-150 hover:-translate-y-1 hover:border-[#6d5cff] hover:bg-[#1b1d28] cursor-pointer"
              onClick={() => setGoalModal(true)}
            >
              {goals.length === 0 && (
                <p className="text-base text-md  text-[#8f8c8c]">
                  No goals yet
                </p>
              )}
              <h4 className="text-xl text-[#7a7878] hover:text-[#a3a3a3] transition-transform duration-150 active:scale-[0.95]">
                + Add Goal
              </h4>
            </div>
          </div>

          <Goaljourney goals={goals} />
          <Goalmodal
            isOpen={goalmodal}
            onClose={() => setGoalModal(false)}
            onSave={handleAddGoal}
          />
        </div>
      </section>
    </>
  );
}
