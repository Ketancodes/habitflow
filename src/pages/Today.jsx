import { useState } from "react";
import Reusable from "../components/Reusable";
import { LiaComment } from "react-icons/lia";
import { CiEdit } from "react-icons/ci";
import { CgPlayListAdd } from "react-icons/cg";
import { MdPlaylistRemove } from "react-icons/md";

export default function Today() {
  const [habits, setHabits] = useState([
    { id: 1, text: "Study 6 hours", selected: false },
    { id: 2, text: "Exercise for 30 min", selected: false },
    { id: 3, text: "Reading book", selected: false },
    { id: 4, text: "walking 1k steps ", selected: false },
  ]);
  const [showinput, setShowinput] = useState(false);
  const [habittext, setHabittext] = useState("");

  const totalHabits = habits.length;
  const completed = habits.filter((habit) => habit.selected).length;
  const notCompleted = habits.length - completed;
  const hasOverflowHabits = habits.length > 3;
  const percentage = totalHabits
    ? Math.round((completed / totalHabits) * 100)
    : 0;

  const handleToggle = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, selected: !habit.selected } : habit,
      ),
    );
  };

  const addHabit = () => {
    const trimmedHabit = habittext.trim();
    if (!trimmedHabit) return;

    setHabits((prev) => [
      ...prev,
      { id: Date.now(), text: trimmedHabit, selected: false },
    ]);
    setHabittext("");
    setShowinput(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit();
  };

  return (
    <section className="w-full min-h-screen bg-[#181717] pt-3">
      <h1 className="ml-8 text-2xl font-semibold text-[#979393]">@Today</h1>
      <h4 className="ml-8 mt-2.5 text-lg font-semibold text-[#979393]">
        24/ 03/ 26
      </h4>
      <p className="ml-8 mt-4 text-lg font-medium text-[#a7a4a4]">
        Welcome Warrior, hope your doing well !
      </p>

      <div className="ml-12 mt-6 w-60 rounded-xl">
        <h3 className="px-3 py-1.5 text-[#9b9999]">@Today</h3>
        <div className="flex flex-col gap-2 px-3 text-[15px] text-[#aca9a9]">
          <h4>
            Completed habits :{" "}
            <span className="text-[#d3cfcf]">{completed}</span>
          </h4>
          <h4>
            Remaining habits :{" "}
            <span className="text-[#d3cfcf]">{notCompleted}</span>
          </h4>
          <h4>
            Today&apos;s streak :{" "}
            <span className="text-[#d3cfcf]">
              {totalHabits === completed ? "🔥" : "Null"}
            </span>
          </h4>
        </div>
      </div>

      <div className="ml-14 mt-6 flex items-end gap-6">
        <div className="w-60">
          <p className="text-sm text-[#a7a4a4]">
            {completed} / {totalHabits} completed
          </p>

          <div className="mt-2 h-2 w-full rounded-full bg-[#2a2a2a]">
            <div
              className="h-2 rounded-full bg-indigo-500 shadow-[0_0_7px_rgba(82,102,225,0.3)] transition-all duration-300"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {completed === 0 && (
          <p className="text-sm text-[#a7a4a4]">Let&apos;s get started 💪</p>
        )}
      </div>

      <div className="relative ml-14 mt-10 flex gap-8">
        <div className="relative flex h-40 w-56 flex-col rounded-xl bg-[#272626] px-3 py-1.5 hover:bg-[#2e2d2d]">
          <div className="flex justify-between">
            <h3 className="py-1.5 text-[#9b9999]">@Today</h3>

            <div className="mt-1.5 flex items-center gap-1.5">
              <div className="relative group">
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-[#141414] px-2 py-1 text-[12px] text-[#d6d2d2] opacity-0 transition-all duration-150 group-hover:opacity-100">
                  Add
                </span>
                <button
                  type="button"
                  onClick={() => setShowinput((prev) => !prev)}
                  className="rounded-md border-[0.7px] border-[#3a3a3a] px-1 py-1 text-[#9b9999] transition-colors duration-150 hover:bg-[#1a1919] hover:text-[#d8d3d3] cursor-pointer"
                >
                  <span className="block w-5 text-center text-lg leading-none">
                    {showinput ? (
                      <MdPlaylistRemove size={18} />
                    ) : (
                      <CgPlayListAdd size={18} />
                    )}
                  </span>
                </button>
              </div>

              <div className="relative group cursor-pointer">
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-[#141414] px-2 py-1 text-[12px] text-[#d6d2d2] opacity-0 transition-all duration-150 group-hover:opacity-100 ">
                  Edit
                </span>
                <CiEdit
                  size={28}
                  className="rounded-md border-[0.7px] border-[#3a3a3a] px-1 py-1 text-[#9b9999] transition-colors duration-150 group-hover:bg-[#1a1919] group-hover:text-[#d8d3d3]"
                />
              </div>
            </div>
          </div>

          <div
            className={`mt-1 flex-1 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
              hasOverflowHabits ? "overflow-y-auto" : "overflow-y-hidden"
            }`}
          >
            <div
              className={`flex flex-col gap-2 text-[14px] text-[#bdbaba] transition-all duration-150 ${
                showinput ? "blur-[1.5px] opacity-35" : ""
              }`}
            >
              {habits.map((habit) => (
                <div key={habit.id}>
                  <Reusable
                    label={habit.text}
                    checked={habit.selected}
                    onChange={() => handleToggle(habit.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {showinput && (
            <div className="absolute inset-x-3 top-11 bottom-3 rounded-md bg-[#272626]/82 p-2 backdrop-blur-[3px]">
              <form
                onSubmit={handleSubmit}
                className="flex h-full flex-col gap-2"
              >
                <input
                  type="text"
                  value={habittext}
                  placeholder="Enter the habit"
                  onChange={(e) => setHabittext(e.target.value)}
                  className="rounded-md border border-[#4a4949] bg-[#1d1c1c] px-3 py-2 text-sm text-[#d8d3d3] outline-none placeholder:text-[#7f7c7c] focus:border-[#6d6b6b]"
                />
                <button
                  type="submit"
                  className="rounded-md bg-[#494848] px-4 py-2 text-sm font-medium text-[#dfdbdb] transition-colors duration-150 hover:bg-[#5a5959]"
                >
                  Save
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="flex h-40 w-56 cursor-pointer items-center justify-center rounded-xl bg-[#1f1e1e] text-[#8b8989] hover:bg-[#2c2b2b] hover:text-[#bbb8b8]">
          <span className="text-xl">+</span> Add new
        </div>

        <button className="mt-28 ml-2 inline-flex cursor-pointer items-center gap-2 text-sm text-[#818080] hover:text-[#bbb8b8]">
          <LiaComment size={18} className="text-inherit" />
          <span>Comments</span>
        </button>
      </div>

      <div className="ml-14 mt-8">
        <div className="relative h-40 w-56 cursor-pointer rounded-xl bg-[#272626] px-3 hover:bg-[#2e2d2d]">
          <h3 className="py-1.5 text-[#9b9999]">@Yesterday</h3>
          <div className="flex flex-col gap-2.5 text-[14px] text-[#bdbaba]">
            <div>
              <Reusable label="Study 6 hours" />
            </div>
            <div>
              <Reusable label="Exercise for 30 min" />
            </div>
            <div>
              <Reusable label="Reading book" />
            </div>
            <button className="cursor-pointer text-[#9b9999] hover:text-[#999999]">
              <span className="text-xl">+</span> Habit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
