import { CiSearch } from "react-icons/ci";
import Myhabitcard from "../components/Myhabitcard";
import { useState } from "react";
import Edithabitmodal from "../components/Edithabitmodal";

export default function Myhabits() {
  const [myHabits, setMyhabits] = useState([
    {
      id: 1,
      title: "Study 6 hours",
      category: "Study",
      frequency: "Daily",
      priority: "High",
      streak: 6,
    },
    {
      id: 2,
      title: "Exercise 30 min",
      category: "Health",
      frequency: "Daily",
      priority: "High",
      streak: 4,
    },
    {
      id: 3,
      title: "Read 3 pages",
      category: "Study",
      frequency: "Daily",
      priority: "Medium",
      streak: 3,
    },
    {
      id: 4,
      title: "Walking 2km steps",
      category: "Personal",
      frequency: "mon,wed,sun",
      priority: "Medium",
      streak: 2,
    },
  ]);
  setMyhabits;

  const totalhabits = myHabits.length;

  const [editinghabit, setEditingHabit] = useState(null);

  const handleSaveHabit = (updatedHabit) => {
    setMyhabits((prev) =>
      prev.map((habit) =>
        habit.id === updatedHabit.id ? updatedHabit : habit,
      ),
    );
    setEditingHabit(null);
  };

  // delete habit logic
  const handleDelete = (id) => {
    setMyhabits((prev) => prev.filter((habit) => habit.id !== id));
    setEditingHabit(null);
  };
  return (
    <>
      <section>
        <div>
          {/* main header + input + button */}

          <div className=" px-2.5 flex justify-between">
            <h1 className="ml-8 mt-3 text-2xl text-[#979393]">@My habits</h1>
            <div className=" mt-4 flex gap-14">
              <div className="relative flex items-center">
                <CiSearch
                  size={18}
                  className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#8a8787] "
                />
                <input
                  type="text"
                  placeholder="Search habit"
                  className="h-9 rounded-xl border border-[#646262] bg-[#302e2e] pl-9 pr-3 text-sm text-[#d8d3d3] placeholder:text-[#8a8787] focus:border-[#8d8b8b] outline-none focus:outline-none"
                />
              </div>
              <div>
                <button className="border px-4.5 bg-[#494848] py-1.5 text-[#bebaba] rounded-3xl cursor-pointer">
                  + Add habit
                </button>
              </div>
            </div>
          </div>

          {/* divider line */}
          <div className="mt-6 flex justify-center">
            <div className="h-px w-[94%] bg-[#4a4747]"></div>
          </div>

          <h4 className="ml-8 mt-6 text-lg font-medium text-[#a7a4a4]">
            Your future is built by what you do today!
          </h4>

          {/* habit list  */}
          <div className="ml-12 mt-6 px-2.5 ">
            <div>
              <h2 className="text-[#b4b3b3] text-[17px] py-1.5">
                @My habit list
              </h2>
              <div className="flex flex-col gap-2 text-[16px] text-[#979595]">
                <p>Total habits = {totalhabits}</p>
                <p>Active habits = 3</p>
                <p>Inactive habits = 1</p>
              </div>
            </div>
          </div>

          {/* category list  */}
          <div className="mt-6 ml-12 flex">
            <h4 className="text-[#9b9999] text-lg">Category : </h4>
            <div className=" ml-2 flex gap-6">
              <button className="px-4 py-1 bg-[#383838] text-[#bebaba] rounded-2xl cursor-pointer">
                Health
              </button>
              <button className="px-4 py-1 bg-[#383838] text-[#bebaba] rounded-2xl cursor-pointer">
                Study
              </button>
              <button className="px-4 py-1 bg-[#383838] text-[#bebaba] rounded-2xl cursor-pointer">
                Discipline
              </button>
              <button className="px-4 py-1 bg-[#383838] text-[#bebaba] rounded-2xl cursor-pointer">
                Personal
              </button>
            </div>
          </div>
          <div className="mt-8 ml-12 w-[85%] grid grid-cols-3 gap-6 ">
            {myHabits.map((habit) => (
              <Myhabitcard
                key={habit.id}
                title={habit.title}
                category={habit.category}
                frequency={habit.frequency}
                priority={habit.priority}
                streak={habit.streak}
                onEdit={() => setEditingHabit(habit)}
              />
            ))}

            <div className="h-48 w-60 flex justify-center items-center  bg-[#272626] rounded-xl  px-3 py-1.5 text-[#868585] hover:text-[#a8a6a6] hover:bg-[#2e2d2d] cursor-pointer transition-transform duration-150 hover:scale-[1.01]">
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
          />
        </div>
      </section>
    </>
  );
}
