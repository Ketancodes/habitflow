import { useState } from "react";
import Goalcard from "../components/Goalcard";
import Goalmodal from "../components/Goalmodal";
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
  const [goalmodal, setGoalModal] = useState(false);
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Gaining 10 kg",
      totalDays: 90,
      completedDays: 60,
      active: true,
    },
    {
      id: 2,
      title: "Study 6 hours",
      totalDays: 21,
      completedDays: 0,
      active: true,
    },
    {
      id: 3,
      title: "Reading 3 pages",
      totalDays: 30,
      completedDays: 0,
      active: true,
    },
  ]);

  const handleAddGoal = (newGoal) => {
    setGoals((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: newGoal.title,
        totalDays: Number(newGoal.totalDays) || null,
        frequency: newGoal.frequency || "",
        completedDays: 0,
        active: true,
      },
    ]);
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
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  // handle add progress logic
  const handleAddProgress = (id) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id &&
        (!goal.totalDays || goal.completedDays < goal.totalDays)
          ? { ...goal, completedDays: goal.completedDays + 1 }
          : goal,
      ),
    );
  };

  //handle archieve logic
  const handleArchive = (id) => {
    setGoals((prev) =>
      prev.map((goal) => (goal.id === id ? { ...goal, active: false } : goal)),
    );
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
              className="border px-2.5 bg-[#3a3939] hover:bg-[#4d4c4c]  py-1 text-[#bebaba] hover:text-[#dad7d7] rounded-3xl cursor-pointer transition-transform duration-150 active:scale-[0.96]"
              onClick={() => setGoalModal(true)}
            >
              + Add goal
            </button>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-[94%] bg-[#4a4747]"></div>
          </div>

          {/* overall goal list */}
          <div className="ml-8 mt-4 text-[#9b9999] text-[16px] leading-relaxed flex flex-col gap-1.5 font-semibold">
            <h2 className="text-[18px] text-[#cac9c9] font-semibold leading-relaxed">
              Overall goals 🎯
            </h2>
            <p>
              Total goal list :{" "}
              <span className="text-[#6d8bcc] font-semibold ">
                {goals.length}
              </span>
            </p>
            <p>
              Active goals :{" "}
              <span className="text-[#6d8bcc] font-semibold ">
                {activeGoals}
              </span>
            </p>
            <p>
              Archived goals :{" "}
              <span className="text-[#6d8bcc] font-semibold ">
                {inactiveGoals}
              </span>
            </p>
            <p>
              Completed goals :{" "}
              <span className="text-[#6d8bcc] font-semibold ">
                {completedGoals}
              </span>
            </p>
          </div>

          {/* main goal card container */}
          <div className=" w-[90%] ml-12 mt-6 grid grid-cols-3 gap-6">
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
              />
            ))}
            <div
              className="h-52 w-60 bg-[#272626] rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#333232] "
              onClick={() => setGoalModal(true)}
            >
              <h4 className="text-xl text-[#7a7878] hover:text-[#a3a3a3] transition-transform duration-150 active:scale-[0.95]">
                + Add Goal
              </h4>
            </div>
          </div>
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
