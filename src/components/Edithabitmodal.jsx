import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export default function Edithabitmodal({
  habit,
  isOpen,
  onClose,
  onSave,
  onDelete,
}) {
  const [title, setTitle] = useState(habit?.title || "");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [category, setCategory] = useState(habit?.category || "");
  const [frequency, setFrequency] = useState(habit?.frequency || "");
  const [priority, setPriority] = useState(habit?.priority || "");

  if (!isOpen || !habit) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...habit,
      title,
      category,
      frequency,
      priority,
    });
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm py-2.5">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-md rounded-2xl bg-[#232222] p-5 text-[#d6d2d2] shadow-xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-lg text-[#9b9999] transition-colors duration-150 hover:text-[#dfdbdb]"
          aria-label="Close modal"
        >
          <CiCircleRemove size={30} />
        </button>

        <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-5">
          <div className="flex justify-center">
            {isEditingTitle ? (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => setIsEditingTitle(false)}
                autoFocus
                className="border-none bg-transparent text-center text-2xl font-semibold text-[#d8d3d3] outline-none"
              />
            ) : (
              <h2
                onClick={() => setIsEditingTitle(true)}
                className="cursor-pointer text-center text-2xl font-semibold text-[#d8d3d3]"
              >
                {title}
              </h2>
            )}
          </div>

          <div className="h-px w-full bg-[#3f3d3d]" />

          <div className="flex items-center justify-between gap-4">
            <p className="text-[15px] text-[#b9b6b6]">
              Category : <span className="text-[#dfdbdb]">{category}</span>
            </p>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg border border-[#4a4949] bg-[#1d1c1c] px-3 py-1.5 text-sm text-[#d8d3d3] outline-none"
            >
              <option value="Study">Study</option>
              <option value="Health">Health</option>
              <option value="Personal">Personal</option>
              <option value="Discipline">Discipline</option>
            </select>
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-[15px] text-[#b9b6b6]">
              Frequency : <span className="text-[#dfdbdb]">{frequency}</span>
            </p>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="rounded-lg border border-[#4a4949] bg-[#1d1c1c] px-3 py-1.5 text-sm text-[#d8d3d3] outline-none"
            >
              <option value="Daily">Daily</option>
              <option value="Weekends">Weekends</option>
              <option value="Mon,Wed,Sat">Mon,Wed,Sat</option>
            </select>
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-[15px] text-[#b9b6b6]">
              Priority : <span className="text-[#dfdbdb]">{priority}</span>
            </p>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="rounded-lg border border-[#4a4949] bg-[#1d1c1c] px-3 py-1.5 text-sm text-[#d8d3d3] outline-none"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-[15px] text-[#b9b6b6]">Streak</p>
            <span className="rounded-full bg-[#3a3939] px-3 py-1 text-sm text-[#dfdbdb]">
              {habit.streak} 🔥
            </span>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-center items-center">
              <MdDelete
                size={22}
                className="text-[#6d6b6b] hover:text-[#9b9999] cursor-pointer"
                onClick={() => onDelete(habit.id)}
              />
            </div>
            <div className="mt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer rounded-xl bg-[#2f2d2d] px-4 py-2 text-sm text-[#bebaba] transition-colors duration-150 hover:bg-[#3a3838]"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="cursor-pointer rounded-xl bg-[#494848] px-4 py-2 text-sm text-[#dfdbdb] transition-colors duration-150 hover:bg-[#5a5959]"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
