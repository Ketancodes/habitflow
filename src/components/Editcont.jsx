import { useEffect, useRef, useState } from "react";
import Reusable from "./Reusable";
import { CiCircleRemove } from "react-icons/ci";
import { MdDone } from "react-icons/md";

export default function Editcont({
  isOpen,
  onClose,
  containerData,
  onApply,
  canEditTitle = false,
}) {
  const [editcontHabits, setEditContHabits] = useState(
    containerData.habits || [],
  );

  // habit input logic (clicking on habit opnens input)
  const [showInput, setShowInput] = useState(false);
  const [habitText, setHabitText] = useState("");

  const [editid, setEditid] = useState(null);
  const [edittext, setEdittext] = useState("");

  // title editing state logics
  const [editTitle, setEditTitle] = useState(containerData.title || "Today");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleInput, setTitleInput] = useState(containerData.title || "Today");

  // title save logic
  const handleTitleSave = () => {
    const trimmedTitle = titleInput.trim();
    if (!trimmedTitle) return;

    setEditTitle(trimmedTitle);
    setIsEditingTitle(false);
  };

  // autofocus logic
  const habitInputref = useRef(null);
  useEffect(() => {
    if (showInput) {
      habitInputref.current?.focus();
    }
  }, [showInput]);

  const hasOverflowHabits = editcontHabits.length > 4;

  if (!isOpen) return null;

  // add habit logic
  const handleAddHabit = () => {
    const trimmedHabit = habitText.trim();
    if (!trimmedHabit) return;
    const isDuplicate = editcontHabits.some(
      (habit) => habit.text.trim().toLowerCase() === trimmedHabit.toLowerCase(),
    );

    if (isDuplicate) return;

    setEditContHabits((prev) => [
      ...prev,
      { id: Date.now(), text: trimmedHabit, selected: false },
    ]);
    setHabitText("");
    setShowInput(false);
  };

  // onapply submit logic
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddHabit();
  };

  // handling delete habit
  const handleDlthabit = (id) => {
    setEditContHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  // edit logic (when we click edit)
  const handleEdit = (habit) => {
    setEditid(habit.id);
    setEdittext(habit.text);
  };

  //edit saving logic
  const handleEditSave = () => {
    const trimmedText = edittext.trim();
    if (!trimmedText) return;

    setEditContHabits((prev) =>
      prev.map((habit) =>
        habit.id === editid ? { ...habit, text: trimmedText } : habit,
      ),
    );

    setEditid(null);
    setEdittext("");
  };

  // onapply logic
  const handleApply = () => {
    onApply({
      ...containerData,
      title: editTitle,
      habits: editcontHabits,
    });
    onClose();
  };

  // today date logic
  const getdate = new Date().toLocaleDateString("en-CA");
  const showdate = getdate.split("-").reverse().join(" /");

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
          className="absolute top-4 right-4 cursor-pointer text-lg text-[#9b9999] transition-colors duration-150 hover:text-[#dfdbdb]"
          aria-label="Close modal"
        >
          <CiCircleRemove size={32} />
        </button>

        <div className="mt-2 flex justify-center">
          {/* <h2 className="text-2xl font-semibold text-[#9b9999]">@Today</h2> */}
          {canEditTitle && isEditingTitle ? (
            <input
              type="text"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              onBlur={handleTitleSave}
              autoFocus
              className="min-w-0 border-none bg-transparent text-center text-2xl font-semibold text-[#9b9999] outline-none "
            />
          ) : (
            <h2
              onClick={() => {
                if (!canEditTitle) return;
                setTitleInput(editTitle);
                setIsEditingTitle(true);
              }}
              className={`text-2xl font-semibold text-[#9b9999] ${
                canEditTitle ? "cursor-pointer" : ""
              }`}
            >
              @{editTitle}
            </h2>
          )}
        </div>

        <h4 className="mt-3 text-center text-lg text-[#9b9999]">
          Date : {showdate}
        </h4>

        <div className="relative mt-4 flex justify-center overflow-hidden py-2">
          <div
            className={`h-46 w-72 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
              hasOverflowHabits ? "overflow-y-auto" : "overflow-y-hidden"
            } ${showInput ? "blur-[1.5px] opacity-35" : ""}`}
          >
            <div className="flex flex-col gap-3.5 text-lg text-[#7e7c7c]">
              {editcontHabits.map((habit) => (
                <div key={habit.id} className="flex w-full items-center gap-4">
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
                      className="min-w-0 flex-1 cursor-pointer"
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
                  ref={habitInputref}
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
            className="cursor-pointer text-[#4473da] transition-colors duration-150 hover:text-[#6984be]"
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
            className="cursor-pointer rounded-3xl border bg-[#222121] hover:bg-[#3a3939] px-4.5 py-1.5 text-[#b6b2b2] active:text-[#ffff] active:bg-[#4749e2] transition-transform duration-150 active:scale-[0.98]"
          >
            Apply
          </button>
        </div>
      </div>
    </section>
  );
}
