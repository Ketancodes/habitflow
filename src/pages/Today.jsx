import { useEffect, useRef, useState, useMemo } from "react";
import Reusable from "../components/Reusable";

import Addmodal from "../components/Addmodal";
import Editcont from "../components/Editcont";
import useAppContext from "../context/useAppcontext";
import { getLastNDays } from "../utils/Datehelpers";
import { fireConfetti } from "../utils/confetti";
import toast from "react-hot-toast";
import Todayhero from "../components/today/Todayhero";
import Todayhabitsection from "../components/today/Todayhabitsection";
import Recentdays from "../components/today/Recentdays";

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

      {/* hero section of today  */}
      <Todayhero
        totalHabits={totalHabits}
        completed={completed}
        notCompleted={notCompleted}
        percentage={percentage}
      />

      {/* Today's habit container */}
      <Todayhabitsection
        habits={habits}
        hasOverflowHabits={hasOverflowHabits}
        showinput={showinput}
        setShowinput={setShowinput}
        habittext={habittext}
        setHabittext={setHabittext}
        habitInputref={habitInputref}
        handleSubmit={handleSubmit}
        handleToggle={handleToggle}
        setShowTodayEdit={setShowTodayEdit}
        newmodaldata={newmodaldata}
        setShowAddmodal={setShowAddmodal}
        setShowNewContEdit={setShowNewContEdit}
        handleNewmodaltoggle={handleNewmodaltoggle}
      />

      <Editcont
        key={`today-${habits.length}-${habits.map((h) => h.text).join("|")}`}
        isOpen={showtodayedit}
        onClose={() => setShowTodayEdit(false)}
        containerData={todayContdata}
        onApply={handleTodayapply}
      />

      <Editcont
        key={`new-${newmodaldata.title}-${newmodaldata.habits.length}-${newmodaldata.habits
          .map((h) => h.text)
          .join("|")}`}
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
          onClose={() => setShowAddmodal(false)}
          title={newmodaldata.title || "Today"}
          habits={newmodaldata.habits.length > 0 ? newmodaldata.habits : habits}
          onApply={(updatedContainer) =>
            setAppData((prev) => ({
              ...prev,
              newContainerData: updatedContainer,
            }))
          }
        />
      )}

      {/* second main row */}

      {/* yesterday + last 7 days */}

      <Recentdays yesterdayHabits={yesterdayHabits} last7days={last7days} />
    </section>
  );
}
