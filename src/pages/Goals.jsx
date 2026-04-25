import { useState } from "react";
import Goalcard from "../components/Goalcard";
import Goalmodal from "../components/Goalmodal";

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
  const activeGoals = goals.filter((goal) => goal.active).length;
  const inactiveGoals = goals.filter((goal) => !goal.active).length;
  const completedGoals = goals.filter(
    (goal) => goal.completedDays >= goal.totalDays,
  ).length;

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

  return (
    <>
      <section>
        <div>
          <div className="px-2.5 mt-3 flex justify-between ">
            <h1 className="ml-8 mt-3 text-2xl text-[#979393]">@Goals</h1>
            <button
              className="border px-4.5 bg-[#494848] py-1.5 text-[#bebaba] rounded-3xl cursor-pointer "
              onClick={() => setGoalModal(true)}
            >
              + Add goal
            </button>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-[94%] bg-[#4a4747]"></div>
          </div>

          {/* overall goal list */}
          <div className="ml-8 mt-2 text-[#a8a8a8] text-[16px] leading-relaxed flex flex-col gap-1.5">
            <h2 className="text-[18px] text-[#bebcbc]">Overall goals 🎯</h2>
            <p>Total goal list : {goals.length}</p>
            <p>Active goals : {activeGoals}</p>
            <p>Inactive goals : {inactiveGoals}</p>
            <p>Completed goals : {completedGoals}</p>
          </div>
          <div className=" w-[90%] ml-12 mt-6 grid grid-cols-3 gap-6">
            {goals.map((goal) => (
              <Goalcard
                key={goal.id}
                id={goal.id}
                title={goal.title}
                totalDays={goal.totalDays}
                completedDays={goal.completedDays}
                onAddProgress={handleAddProgress}
                active={goal.active}
                frequency={goal.frequency}
                onDelete={handleDelete}
              />
            ))}
            <div
              className="h-52 w-60 bg-[#272626] rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#333232] "
              onClick={() => setGoalModal(true)}
            >
              <h4 className="text-xl text-[#7a7878] hover:text-[#a3a3a3]">
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
