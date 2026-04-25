import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";

export default function Goalmodal({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [frequency, setFrequency] = useState("");

  if (!isOpen) return null;

  const isFormValid = Boolean(title.trim() && (duration || frequency));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || (!duration && !frequency)) return;

    onSave({
      title: title.trim(),
      totalDays: duration ? Number(duration) : null,
      frequency,
    });

    setTitle("");
    setDuration("");
    setFrequency("");
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 py-2.5 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-120 rounded-2xl bg-[#232222] p-5 text-[#d6d2d2] shadow-xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-[#9b9999] transition-colors duration-150 hover:text-[#dfdbdb]"
          aria-label="Close modal"
        >
          <CiCircleRemove size={30} />
        </button>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mt-2 flex justify-center">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add title"
              autoFocus
              className="w-56 border-none bg-transparent text-center text-2xl font-semibold text-[#9b9999] outline-none placeholder:text-[#7f7c7c]"
            />
          </div>

          <div className="mt-6 flex items-center justify-between rounded-xl bg-[#1d1c1c] px-4 py-3">
            <p className="text-[15px] text-[#b9b6b6]">
              Duration :{" "}
              <span className="text-[#dfdbdb]">
                {duration ? `${duration} days` : frequency ? frequency : "--"}
              </span>
            </p>

            <div className="flex items-center gap-2">
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="90"
                className="w-20 rounded-md border border-[#4a4949] bg-[#232222] px-2.5 py-1.5 text-sm text-[#d8d3d3] outline-none placeholder:text-[#7f7c7c]"
              />

              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="rounded-md border border-[#4a4949] bg-[#232222] px-3 py-1.5 text-sm text-[#d8d3d3] outline-none"
              >
                <option value="">Select</option>
                <option value="Daily">Daily</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-xl bg-[#2f2d2d] px-4 py-2 text-sm text-[#bebaba] transition-colors duration-150 hover:bg-[#3a3838]"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`rounded-xl px-4 py-2 text-sm transition-colors duration-150 ${
                isFormValid
                  ? "cursor-pointer bg-[#494848] text-[#dfdbdb] hover:bg-[#5a5959]"
                  : "cursor-not-allowed bg-[#3a3939] text-[#7f7c7c]"
              }`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
