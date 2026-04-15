import Reusable from "./Reusable";
import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { MdDone } from "react-icons/md";

export default function Addmodal({ isOpen, onClose, habits, onApply }) {
  const [modalHabits, setModalHabits] = useState(habits);
  const [showInput, setShowInput] = useState(false);
  const [habitText, setHabitText] = useState("");

  // state for title habit
  const [modaltitle, setModaltitle] = useState("Today");
  const [editingtitle, setEditingtitle] = useState(false);
  const [titleinput, setTitleinput] = useState("Today");

  const handleTitleedit = () => {
    setEditingtitle(true);
    setTitleinput(modaltitle);
  };

  const handleTitlesave = () => {
    const trimmedTitle = titleinput.trim();
    if (!trimmedTitle) return;
    setModaltitle(trimmedTitle);
    setEditingtitle(false);
  };

  // state for habit edit
  const [editid, setEditid] = useState(null);
  const [edittext, setEdittext] = useState("");
  const hasOverflowHabits = modalHabits.length > 4;

  if (!isOpen) return null;

  const handleAddHabit = () => {
    const trimmedHabit = habitText.trim();
    if (!trimmedHabit) return;

    setModalHabits((prev) => [
      ...prev,
      { id: Date.now(), text: trimmedHabit, selected: false },
    ]);
    setHabitText("");
    setShowInput(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddHabit();
  };

  //remove habit logic
  const handleDlthabit = (id) => {
    setModalHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  // edit logic
  const handleEdit = (habit) => {
    setEditid(habit.id);
    setEdittext(habit.text);
  };
  const handleEditSave = () => {
    const trimmedText = edittext.trim();
    if (!trimmedText) return;

    setModalHabits((prev) =>
      prev.map((habit) =>
        habit.id === editid ? { ...habit, text: trimmedText } : habit,
      ),
    );

    setEditid(null);
    setEdittext("");
  };
  const handleApply = () => {
    onApply({
      title: modaltitle,
      habits: modalHabits,
    });
    onClose();
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm py-2.5">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 flex h-[75%] w-[50%] flex-col rounded-2xl bg-[#232222] p-5 text-[#d6d2d2] shadow-xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-lg text-[#9b9999] transition-colors duration-150 hover:text-[#dfdbdb] cursor-pointer"
          aria-label="Close modal"
        >
          <CiCircleRemove size={32} />
        </button>

        <div className="mt-2 flex justify-center">
          {editingtitle ? (
            <div className="flex items-center  gap-1 text-2xl font-semibold text-[#9b9999]">
              <input
                type="text"
                value={titleinput}
                onChange={(e) => setTitleinput(e.target.value)}
                onBlur={handleTitlesave}
                autoFocus
                className="min-w-0 border-none bg-transparent text-center text-2xl font-semibold text-[#9b9999] outline-none"
              />
            </div>
          ) : (
            <h2
              onClick={handleTitleedit}
              className="cursor-pointer text-2xl font-semibold text-[#9b9999]"
            >
              @{modaltitle}
            </h2>
          )}
        </div>

        <h4 className=" mt-3 text-lg text-[#9b9999] text-center">
          Date : 9/ 4/ 26
        </h4>
        <div className="relative mt-4 flex justify-center overflow-hidden py-2">
          <div
            className={`h-[11.5rem] w-72 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
              hasOverflowHabits ? "overflow-y-auto" : "overflow-y-hidden"
            } ${showInput ? "blur-[1.5px] opacity-35" : ""}`}
          >
            <div className="flex flex-col gap-3.5 text-lg text-[#7e7c7c]">
              {modalHabits.map((habit) => (
                <div
                  key={habit.id}
                  className="flex w-full justify-between gap-4"
                >
                  {editid === habit.id ? (
                    <input
                      type="text"
                      value={edittext}
                      onChange={(e) => setEdittext(e.target.value)}
                      autoFocus
                      className="w-full rounded-md border border-[#3b3a3a] bg-[#1d1c1c] px-3 py-2 text-[14px] text-[#d8d3d3] outline-none"
                    />
                  ) : (
                    <div
                      className="w-full cursor-pointer"
                      onClick={() => handleEdit(habit)}
                    >
                      <Reusable
                        label={habit.text}
                        checked={habit.selected}
                        onChange={() => {}}
                      />
                    </div>
                  )}

                  {editid === habit.id ? (
                    <button
                      type="button"
                      onClick={handleEditSave}
                      className="shrink-0 cursor-pointer text-sm text-[#d8d3d3] transition-colors duration-150 hover:text-white"
                    >
                      <MdDone size={24} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleDlthabit(habit.id)}
                      className="shrink-0 cursor-pointer text-[#9b9999] transition-colors duration-150 hover:text-[#dbd8d8]"
                      aria-label={`Remove ${habit.text}`}
                    >
                      <CiCircleRemove size={22} className="text-[#dbd8d8]" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {showInput && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#232222]/45 backdrop-blur-[2px]">
              <form
                onSubmit={handleSubmit}
                className="flex w-60 flex-col gap-1.5"
              >
                <input
                  type="text"
                  value={habitText}
                  onChange={(e) => setHabitText(e.target.value)}
                  placeholder="Enter the habit"
                  className="rounded-md border border-[#4a4949] bg-[#1d1c1c] px-2.5 py-1.5 text-xs text-[#d8d3d3] outline-none placeholder:text-[#7f7c7c]"
                />
                <button
                  type="submit"
                  className="rounded-md bg-[#494848] px-3 py-1.5 text-xs font-medium text-[#dfdbdb]"
                >
                  Save
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="mt-2 flex justify-center">
          <button
            type="button"
            onClick={() => setShowInput((prev) => !prev)}
            className="text-[#9b9999] transition-colors duration-150 hover:text-[#dfdbdb] cursor-pointer"
          >
            {showInput ? (
              <CiCircleRemove size={28} />
            ) : (
              <>
                <span className="text-xl">+</span> Habit
              </>
            )}
          </button>
        </div>
        <div className="mt-12 flex justify-end">
          <button
            onClick={handleApply}
            className="border px-4.5 bg-[#302f2f] py-1.5 text-[#b6b2b2] rounded-3xl cursor-pointer"
          >
            Apply
          </button>
        </div>
      </div>
    </section>
  );
}
