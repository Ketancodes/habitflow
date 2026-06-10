import Reusable from "../Reusable";
import { CiEdit } from "react-icons/ci";
import { CgPlayListAdd } from "react-icons/cg";
import { MdPlaylistRemove } from "react-icons/md";
import { ListPlus, Pencil, Plus, Target } from "lucide-react";

export default function Todayhabitsection({
  habits,
  hasOverflowHabits,
  showinput,
  setShowinput,
  habittext,
  setHabittext,
  habitInputref,
  handleSubmit,
  handleToggle,
  setShowTodayEdit,
  newmodaldata,
  setShowAddmodal,
  setShowNewContEdit,
  handleNewmodaltoggle,
}) {
  return (
    <div className="mt-6 flex  justify-center">
      <div className="w-[94%] rounded-3xl   px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Target size={22} className="text-[#8b5cf6]" />
            <h2 className="text-2xl font-semibold text-[#ccc9c9]">
              Today&apos;s Habits
            </h2>
          </div>

          <span className="rounded-full border border-[#30313d] px-3 py-1 text-sm font-semibold text-[#9ca3af]">
            {habits.length} habits
          </span>
        </div>

        <div className="mt-6 flex flex-col items-center md:flex-row lg:flex-row gap-6">
          {/* today card */}
          <div className="relative flex h-105 w-86 flex-col rounded-3xl border border-[#30313d] bg-[#111219] p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#c7c4c4]">@Today</h3>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowinput((prev) => !prev)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#30313d] bg-[#171820] text-[#a1a1aa] transition-colors hover:bg-[#222431] hover:text-white"
                  title={showinput ? "Remove input" : "Add habit"}
                >
                  {showinput ? (
                    <MdPlaylistRemove size={20} />
                  ) : (
                    <ListPlus size={20} />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setShowTodayEdit(true)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#30313d] bg-[#171820] text-[#a1a1aa] transition-colors hover:bg-[#222431] hover:text-white"
                  title="Edit habits"
                >
                  <Pencil size={18} />
                </button>
              </div>
            </div>

            <div
              className={`mt-4 flex-1 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
                hasOverflowHabits ? " overflow-y-auto" : "overflow-hidden"
              }`}
            >
              <div
                className={`flex flex-col gap-3 transition-all duration-150 ${
                  showinput ? "blur-[1.5px] opacity-35" : ""
                }`}
              >
                {habits.map((habit) => (
                  <div
                    key={habit.id}
                    className="rounded-2xl border border-[#252735] bg-[#171820] px-3 py-3 transition-colors hover:border-[#3b3d4d] hover:bg-[#1b1d28]"
                  >
                    <Reusable
                      label={habit.text}
                      checked={habit.selected}
                      onChange={() => handleToggle(habit.id)}
                    />

                    <p className="mt-1 pl-7 text-xs text-[#8f96a3]">
                      {habit.selected ? "Completed" : "Focus"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {showinput && (
              <div className="absolute inset-x-5 top-20 bottom-5 rounded-2xl border border-[#30313d] bg-[#111219]/90 p-4 backdrop-blur-md">
                <form
                  onSubmit={handleSubmit}
                  className="flex h-full flex-col justify-center gap-3"
                >
                  <input
                    ref={habitInputref}
                    type="text"
                    value={habittext}
                    placeholder="Enter the habit"
                    onChange={(e) => setHabittext(e.target.value)}
                    className="rounded-xl border border-[#30313d] bg-[#171820] px-4 py-3 text-sm text-[#e5e7eb] outline-none placeholder:text-[#7f8490] focus:border-[#6d5cff]"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-[#6d5cff] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7c6dff]"
                  >
                    Save habit
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* add/new container card */}
          {newmodaldata.habits.length === 0 ? (
            <button
              type="button"
              onClick={() => setShowAddmodal(true)}
              className="flex h-105 w-86 flex-col items-center justify-center rounded-3xl border border-dashed border-[#3f3a68] bg-[#111219] text-center transition-colors hover:border-[#6d5cff] hover:bg-[#171820] cursor-pointer"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#6d5cff] bg-[#6d5cff]/10 text-[#a78bfa]">
                <Plus size={34} />
              </span>
              <span className="mt-5 text-lg font-semibold text-[#c4b5fd]">
                Add New Container
              </span>
              <span className="mt-2 text-sm text-[#8f96a3]">
                Creat another habit group
              </span>
            </button>
          ) : (
            <div className="flex h-88 w-86 flex-col rounded-3xl border border-[#30313d] bg-[#111219] p-5">
              <div className="flex items-center justify-between">
                <h3 className="min-w-0 flex-1 truncate text-xl font-semibold text-white">
                  @{newmodaldata.title}
                </h3>

                <button
                  type="button"
                  onClick={() => setShowNewContEdit(true)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#30313d] bg-[#171820] text-[#a1a1aa] transition-colors hover:bg-[#222431] hover:text-white"
                  title="Edit container"
                >
                  <Pencil size={18} />
                </button>
              </div>

              <div className="mt-5 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex flex-col gap-3">
                  {newmodaldata.habits.map((habit) => (
                    <div
                      key={habit.id}
                      className="rounded-2xl border border-[#252735] bg-[#171820] px-4 py-4 transition-colors hover:border-[#3b3d4d] hover:bg-[#1b1d28]"
                    >
                      <Reusable
                        label={habit.text}
                        checked={habit.selected}
                        onChange={() => handleNewmodaltoggle(habit.id)}
                      />

                      <p className="mt-1 pl-8 text-xs text-[#8f96a3]">
                        {habit.selected ? "Completed" : "Focus"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
