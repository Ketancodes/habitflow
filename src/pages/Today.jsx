import { useEffect, useRef, useState, useMemo } from "react";
import Reusable from "../components/Reusable";
import { LiaComment } from "react-icons/lia";
import { CiEdit } from "react-icons/ci";
import { CgPlayListAdd } from "react-icons/cg";
import { MdPlaylistRemove } from "react-icons/md";
import Addmodal from "../components/Addmodal";
import Editcont from "../components/Editcont";
import useAppContext from "../context/useAppcontext";
import { getLastNDays, formatdate } from "../utils/Datehelpers";
import { fireConfetti } from "../utils/confetti";
import toast from "react-hot-toast";

export default function Today() {
  // context , shared habits logic
  const { appData, setAppData } = useAppContext();
  const habits = appData.todayHabits;
  const newmodaldata = appData.newContainerData;

  //last 7 days of history logic
  const last7days = getLastNDays(appData.history, 7);

  // yesterday data logic
  const getYesterdayData = (history) => {
    const dates = Object.keys(history);
    if (!dates.length) return [];

    const latestDate = dates.sort().at(-1);
    return history[latestDate];
  };
  const yesterdayHabits = useMemo(() => {
    return getYesterdayData(appData.history);
  }, [appData.history]);
  // habit input logic
  const [showinput, setShowinput] = useState(false);
  const [habittext, setHabittext] = useState("");

  // {//modal logic}
  const [showaddmodal, setShowAddmodal] = useState(false);

  // edit mode state
  const [showtodayedit, setShowTodayEdit] = useState(false);
  const [shownewcontedit, setShowNewContEdit] = useState(false);

  //autofocus state logics
  const habitInputref = useRef(null);

  useEffect(() => {
    if (showinput) {
      habitInputref.current.focus();
    }
  }, [showinput]);

  // progress bar stat checking logic
  const totalHabits = habits.length;
  const completed = habits.filter((habit) => habit.selected).length;
  const notCompleted = habits.length - completed;
  const hasOverflowHabits = habits.length > 3;
  const percentage = totalHabits
    ? Math.round((completed / totalHabits) * 100)
    : 0;

  const handleToggle = (id) => {
    setAppData((prev) => ({
      ...prev,
      todayHabits: prev.todayHabits.map((habit) =>
        habit.id === id ? { ...habit, selected: !habit.selected } : habit,
      ),
    }));
  };

  const addHabit = () => {
    const trimmedHabit = habittext.trim();
    if (!trimmedHabit) return;
    const isDuplicate = habits.some(
      (habit) => habit.text.trim().toLowerCase() === trimmedHabit.toLowerCase(),
    );

    if (isDuplicate) return;

    setAppData((prev) => ({
      ...prev,
      todayHabits: [
        ...prev.todayHabits,
        { id: Date.now(), text: trimmedHabit, selected: false },
      ],
    }));
    setHabittext("");
    setShowinput(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit();
  };

  //new container toggle logic
  const handleNewmodaltoggle = (id) => {
    setAppData((prev) => ({
      ...prev,
      newContainerData: {
        ...prev.newContainerData,
        habits: prev.newContainerData.habits.map((habit) =>
          habit.id === id ? { ...habit, selected: !habit.selected } : habit,
        ),
      },
    }));
  };

  const todayContdata = {
    title: "Today",
    habits,
  };
  const handleTodayapply = (updatedata) => {
    setAppData((prev) => ({
      ...prev,
      todayHabits: updatedata.habits,
    }));
    setShowTodayEdit(false);
  };

  // today date logic
  const getdate = new Date().toLocaleDateString("en-CA");
  const showdate = getdate.split("-").reverse().join(" /");

  // confetti logic when all habits are completed
  useEffect(() => {
    if (totalHabits > 0 && totalHabits === completed) {
      fireConfetti();
      toast.success("All habits completed, keep going 🎉");
    }
  }, [totalHabits, completed]);

  return (
    <section className="w-full min-h-screen bg-[#181717] pt-3">
      <h1 className="ml-8 text-2xl font-semibold text-[#979393]">@Today</h1>
      <h4 className="ml-8 mt-2.5 text-lg font-semibold text-[#979393]">
        {showdate}
      </h4>
      {/* devider line */}
      <div className="mt-2 flex justify-center">
        <div className="h-px w-[94%] bg-[#4a4747]"></div>
      </div>
      <p className="ml-8 mt-4 text-lg font-medium text-[#a7a4a4]">
        Welcome <span className="text-[#6d8bcc]"> Warrior</span>, hope your
        doing well ! 💪
      </p>

      {/* stats row  of habits */}
      <div className="ml-12 mt-6 w-60 rounded-xl font-semibold">
        <h3 className="px-3 py-1.5 text-[#c7c4c4] text-[17px]">@Today 🎯</h3>
        <div className="flex flex-col gap-2 px-3 text-[16px] text-[#969494]">
          <h4>
            Completed habits :{" "}
            <span className="text-[#6d8bcc]">{completed}</span>
          </h4>
          <h4>
            Remaining habits :{" "}
            <span className="text-[#6d8bcc]">{notCompleted}</span>
          </h4>
          <h4>
            Today&apos;s streak :{" "}
            <span className="text-[#6d8bcc]">
              {totalHabits === completed ? "🔥" : "Not yet"}
            </span>
          </h4>
        </div>
      </div>

      {/* visual status /progress bar section */}
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

      {/* Today's habit container */}
      <div className="relative ml-14 mt-10 flex gap-8">
        <div className="relative flex h-40 w-56 flex-col rounded-xl bg-[#272626] px-3 py-1.5 hover:bg-[#2e2d2d] cursor-pointer">
          <div className="flex justify-between">
            <h3 className="py-1.5 text-[#cecbcb] ">@Today</h3>

            <div className="mt-1.5 flex items-center gap-1.5">
              <div className="relative group">
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-[#141414] px-2 py-1 text-[12px] text-[#d6d2d2] opacity-0 transition-all duration-150 group-hover:opacity-100">
                  {showinput ? "Remove" : "Add"}
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

              <div
                className="relative group cursor-pointer"
                onClick={() => setShowTodayEdit(true)}
              >
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

          {/* // conditional adding habit logic */}
          {showinput && (
            <div className="absolute inset-x-3 top-11 bottom-3 rounded-md bg-[#272626]/82 p-2 backdrop-blur-[3px]">
              <form
                onSubmit={handleSubmit}
                className="flex h-full flex-col gap-2"
              >
                <input
                  ref={habitInputref}
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

        <Editcont
          key={`today-${habits.length}-${habits.map((h) => h.text).join("|")}`}
          isOpen={showtodayedit}
          onClose={() => setShowTodayEdit(false)}
          containerData={todayContdata}
          onApply={handleTodayapply}
        />

        {/* Adding new container */}

        {newmodaldata.habits.length === 0 ? (
          <>
            <div
              onClick={() => setShowAddmodal(true)}
              className=" flex h-40 w-56 cursor-pointer items-center justify-center rounded-xl bg-[#1f1e1e] text-[#8b8989] hover:bg-[#2c2b2b] hover:text-[#bbb8b8]"
            >
              {" "}
              <span>+</span>Add new
            </div>
          </>
        ) : (
          <div className=" flex flex-col h-40 w-56 rounded-xl bg-[#272626] px-3 py-1.5 text-[#bdbaba] hover:bg-[#2e2d2d] cursor-pointer">
            <div className="flex justify-between">
              <h3 className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap  py-1.5 text-[#9b9999]">
                @{newmodaldata.title}
              </h3>

              <div
                className="relative group mt-1.5 cursor-pointer"
                onClick={() => setShowNewContEdit(true)}
              >
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-[#141414] px-2 py-1 text-[12px] text-[#d6d2d2] opacity-0 transition-all duration-150 group-hover:opacity-100">
                  Edit
                </span>
                <CiEdit
                  size={28}
                  className="rounded-md border-[0.7px] border-[#3a3a3a] px-1 py-1 text-[#9b9999] transition-colors duration-150 group-hover:bg-[#1a1919] group-hover:text-[#d8d3d3]"
                />
              </div>
            </div>
            <div className="mt-1 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col gap-2 text-[14px]">
                {newmodaldata.habits.map((habit) => (
                  <div key={habit.id}>
                    <Reusable
                      label={habit.text}
                      checked={habit.selected}
                      onChange={() => handleNewmodaltoggle(habit.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <Editcont
          key={`new-${newmodaldata.title}-${newmodaldata.habits.length}-${newmodaldata.habits.map((h) => h.text).join("|")}`}
          isOpen={shownewcontedit}
          onClose={() => setShowNewContEdit(false)}
          containerData={newmodaldata}
          canEditTitle={true}
          onApply={(updatedContainer) =>
            setAppData((prev) => ({
              ...prev,
              newContainerData: updatedContainer,
            }))
          }
        />

        {showaddmodal && (
          <Addmodal
            // isOpen={showaddmodal}
            onClose={() => setShowAddmodal(false)}
            title={newmodaldata.title || "Today"}
            habits={
              newmodaldata.habits.length > 0 ? newmodaldata.habits : habits
            }
            // onTogglehabit={handleToggle}
            onApply={(updatedContainer) =>
              setAppData((prev) => ({
                ...prev,
                newContainerData: updatedContainer,
              }))
            }
          />
        )}

        {/* //third add new container */}

        {newmodaldata.habits.length >= 1 && (
          <div
            onClick={() => setShowAddmodal(true)}
            className="flex h-40 w-56 cursor-pointer items-center justify-center rounded-xl bg-[#1f1e1e] text-[#8b8989] hover:bg-[#2c2b2b] hover:text-[#bbb8b8]"
          >
            <span className="text-xl">+</span> Add new
          </div>
        )}
      </div>

      {/* second main row */}

      {/* yesterday + last 7 days */}
      <div className="ml-14 mt-8 grid grid-cols-4 gap-5 ">
        <div className="relative h-40 w-56 flex flex-col cursor-pointer rounded-xl bg-[#272626] opacity-80 px-3 hover:bg-[#2e2d2d]">
          <h3 className="py-1.5 text-[#9b9696]">@Yesterday</h3>

          <div className="mt-1 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-col gap-2.5 text-[14px] text-[#8b8a8a]">
              {yesterdayHabits.length > 0 ? (
                yesterdayHabits.map((habit) => (
                  <div key={habit.id}>
                    <Reusable
                      label={habit.text}
                      checked={habit.selected}
                      // onChange={() => handleYesterdayToggle(habit.id)}
                    />
                  </div>
                ))
              ) : (
                <div className="mt-6 flex flex-col items-center justify-center text-center text-[#7a7978] font-semibold">
                  <p className="text-[16px]">No habits from</p>
                  <p className="text-[16px]">yesterday</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {last7days.slice(1).map(({ date, habits }) => (
          <div
            key={date}
            className="relative h-40 w-56 rounded-xl bg-[#272626] opacity-75 px-3 py-1.5 hover:bg-[#2e2d2d]"
          >
            <h3 className="py-1.5 text-[#9b9696]">@{formatdate(date)}</h3>

            <div className="mt-1 flex h-[calc(100%-2.5rem)] flex-col overflow-y-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col gap-2.5 text-[14px] text-[#8b8a8a]">
                {habits.length > 0 ? (
                  habits.map((habit) => (
                    <Reusable
                      key={habit.id}
                      label={habit.text}
                      checked={habit.selected}
                    />
                  ))
                ) : (
                  <div className="mt-6 flex flex-col items-center justify-center text-center text-[#7a7978] font-semibold">
                    <p className="text-[16px]">No habits</p>
                    <p className="text-[14px]">@{formatdate(date)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
