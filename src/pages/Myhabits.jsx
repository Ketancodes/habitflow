import { CiSearch } from "react-icons/ci";
import Myhabitcard from "../components/Myhabitcard";
import { useState } from "react";
import Edithabitmodal from "../components/Edithabitmodal";
import useAppContext from "../context/useAppcontext";
import Myhabitsoverview from "../components/myhabits/Myhabitsoverview";

export default function Myhabits() {
  const { appData, setAppData } = useAppContext();
  const myHabits = appData.myHabits;

  const totalhabits = myHabits.length;
  const activeHabits = myHabits.filter((habit) =>
    appData.todayHabits.some(
      (todayHabit) =>
        todayHabit.text.trim().toLowerCase() ===
        habit.title.trim().toLowerCase(),
    ),
  ).length;

  const inactiveHabits = totalhabits - activeHabits;

  const bestStreak =
    myHabits.length > 0
      ? Math.max(...myHabits.map((habit) => habit.streak || 0))
      : 0;

  const topCategory = myHabits[0]?.category || "None";

  const [editinghabit, setEditingHabit] = useState(null);
  const [showaddhabitmodal, setShowAddHabitModal] = useState(false);

  //category filter state
  const [selectcategory, setSelectCategory] = useState("All");

  //input filter state
  const [input, setInput] = useState("");

  const handleSaveHabit = (updatedHabit) => {
    setAppData((prev) => ({
      ...prev,
      myHabits: prev.myHabits.map((habit) =>
        habit.id === updatedHabit.id ? updatedHabit : habit,
      ),
    }));
    setEditingHabit(null);
  };

  // delete habit logic
  const handleDelete = (id) => {
    setAppData((prev) => ({
      ...prev,
      myHabits: prev.myHabits.filter((habit) => habit.id !== id),
    }));
    setEditingHabit(null);
  };

  // add habit logic
  const handleAddHabit = (newHabit) => {
    const trimmedTitle = newHabit.title.trim();
    if (!trimmedTitle) return;
    const isDuplicate = myHabits.some(
      (habit) =>
        habit.title.trim().toLowerCase() === trimmedTitle.toLowerCase(),
    );
    if (isDuplicate) return;
    setAppData((prev) => ({
      ...prev,
      myHabits: [
        ...prev.myHabits,
        {
          ...newHabit,
          id: Date.now(),
          streak: 0,
        },
      ],
    }));
    setShowAddHabitModal(false);
  };

  const isHabitAddedToToday = (title) =>
    appData.todayHabits.some(
      (habit) => habit.text.trim().toLowerCase() === title.trim().toLowerCase(),
    );

  const handleAddToToday = (habit) => {
    const trimmedTitle = habit.title.trim();
    if (!trimmedTitle || isHabitAddedToToday(trimmedTitle)) return;

    setAppData((prev) => ({
      ...prev,
      todayHabits: [
        ...prev.todayHabits,
        { id: Date.now(), text: trimmedTitle, selected: false },
      ],
    }));
  };

  //logic for input filter
  const filteredHabits = myHabits.filter((habit) => {
    const matchesCategory =
      selectcategory === "All" || habit.category === selectcategory;

    const matchesInput = habit.title
      .toLowerCase()
      .includes(input.toLowerCase());

    return matchesCategory && matchesInput;
  });

  //catergory buttonn class

  const getCategoryButtonClass = (category) =>
    `rounded-2xl border px-3.5 py-2 md:px-5 md:py-2 cursor-pointer text-sm font-semibold transition-all duration-150 ${
      selectcategory === category
        ? "border-[#6d5cff] bg-[#6d5cff]/15 text-white shadow-[0_0_18px_rgba(109,92,255,0.25)]"
        : "border-[#30313d] bg-[#171820] text-[#b9b6c6] hover:border-[#4b4d63] hover:bg-[#20212b] hover:text-white"
    }`;

  return (
    <>
      <section>
        <div>
          {/* main header + input + button */}

          <div className="px-2.5 flex justify-between">
            <h1 className="text-xl mt-3 lg:ml-8  lg:text-2xl text-[#979393] font-semibold">
              @My habits
            </h1>
            <div className=" mt-4 flex gap-14">
              <div className="relative flex items-center">
                <CiSearch
                  size={18}
                  className="hidden lg:block pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#8a8787] "
                />
                <input
                  type="text"
                  placeholder="Search habit"
                  className="hidden lg:block h-9 rounded-xl border border-[#646262] bg-[#302e2e] pl-9 pr-3 text-sm text-[#d8d3d3] placeholder:text-[#8a8787]  outline-none focus:outline-none focus:border-[#6857ff]"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
              <div>
                <button
                  className="rounded-3xl  px-3 py-1.5 border border-[#6857ff] bg-[#6d5cff]/12 lg:px-4 lg:py-2 text-sm font-semibold text-[#dcd7ff]  transition-all duration-150 hover:bg-[#6d5cff]/20 hover:text-white  active:scale-[0.96] cursor-pointer"
                  onClick={() => setShowAddHabitModal(true)}
                >
                  + Add habit
                </button>
              </div>
            </div>
          </div>

          {/* divider line */}
          <div className="mt-4 lg:mt-6 flex justify-center">
            <div className="h-px w-[94%] bg-[#4a4747]"></div>
          </div>

          <h4 className="mt-4 text-md text-center md:text-left ml-8 lg:mt-6 lg:text-lg font-medium text-[#a7a4a4]">
            Your <span className="text-[#6d8bcc]"> future</span> is built by
            what you do today!
          </h4>

          {/* habit list  */}
          <Myhabitsoverview
            totalHabits={totalhabits}
            activeHabits={activeHabits}
            inactiveHabits={inactiveHabits}
            bestStreak={bestStreak}
            topCategory={topCategory}
          />

          {/* category list  */}
          <div className="mt-10 ml-2 flex flex-col md:mt-8 md:ml-12 sm:flex-row sm:gap-4 items-center">
            <h4 className="text-[#b9bac6] text-lg md:text-xl">Category :</h4>
            <div className="mt-3 grid grid-cols-3 sm:ml-2 sm:flex gap-4">
              <button
                onClick={() => setSelectCategory("All")}
                className={getCategoryButtonClass("All")}
              >
                All
              </button>

              <button
                onClick={() => setSelectCategory("Health")}
                className={getCategoryButtonClass("Health")}
              >
                Health
              </button>
              <button
                onClick={() => setSelectCategory("Study")}
                className={getCategoryButtonClass("Study")}
              >
                Study
              </button>
              <button
                onClick={() => setSelectCategory("Discipline")}
                className={getCategoryButtonClass("Discipline")}
              >
                Discipline
              </button>
              <button
                onClick={() => setSelectCategory("Personal")}
                className={getCategoryButtonClass("Personal")}
              >
                Personal
              </button>
            </div>
          </div>
          <div className="mt-10 md:ml-12 w-full md:w-[94%] grid grid-cols-1 justify-items-center md:gap-6 sm:grid-cols-2 gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {" "}
            {filteredHabits.map((habit) => (
              <Myhabitcard
                key={habit.id}
                title={habit.title}
                category={habit.category}
                frequency={habit.frequency}
                priority={habit.priority}
                streak={habit.streak}
                onEdit={() => setEditingHabit(habit)}
                onAddToToday={() => handleAddToToday(habit)}
                isAddedToToday={isHabitAddedToToday(habit.title)}
              />
            ))}
            <div
              className="flex h-96 w-72 flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-[#3f3a68] bg-[#171820] px-5 py-5 text-[#a78bfa] transition-all duration-150 hover:-translate-y-1 hover:border-[#6d5cff] hover:bg-[#1b1d28] cursor-pointer"
              onClick={() => setShowAddHabitModal(true)}
            >
              {myHabits.length === 0 && (
                <>
                  {" "}
                  <div>NO habits yet </div>
                </>
              )}
              + Add habit
            </div>
          </div>

          {/* Edit habit modal props */}
          <Edithabitmodal
            key={editinghabit?.id || "edit-habit"}
            habit={editinghabit}
            isOpen={!!editinghabit}
            onClose={() => setEditingHabit(null)}
            onSave={handleSaveHabit}
            onDelete={handleDelete}
            mode="edit"
          />

          <Edithabitmodal
            key={showaddhabitmodal ? "add-habit" : "closed-add-habit"}
            habit={null}
            isOpen={showaddhabitmodal}
            onClose={() => setShowAddHabitModal(false)}
            onSave={handleAddHabit}
            onDelete={() => {}}
            mode="add"
          />
        </div>
      </section>
    </>
  );
}
