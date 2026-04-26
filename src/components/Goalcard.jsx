import { MdArchive, MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { fireConfetti } from "../utils/confetti";
import { useRef, useEffect } from "react";
import toast from "react-hot-toast";

export default function Goalcard({
  id,
  title,
  emoji,
  totalDays,
  completedDays,
  active,
  frequency,
  onAddProgress,
  onDelete,
  onArchive,
}) {
  const progress =
    totalDays && totalDays > 0
      ? Math.round((completedDays / totalDays) * 100)
      : 0;
  const prevProgressRef = useRef(progress);
  useEffect(() => {
    if (prevProgressRef.current < 100 && progress === 100) {
      fireConfetti();

      toast.success("Goal achieved! 🎉 ");
    }

    prevProgressRef.current = progress;
  }, [progress]);

  return (
    <>
      <div
        className={`h-52 w-60 rounded-xl px-3 py-1.5 text-[#bdbaba] transition-transform duration-150 ${
          active ? "bg-[#272626] hover:bg-[#2e2d2d]" : "bg-[#242323] opacity-65"
        }`}
      >
        <div className="flex justify-between">
          <h4 className="text-[#c7c5c5]">
            {title}
            <span className="ml-2"> {emoji}</span>
          </h4>
          <div className="flex items-center gap-2.5">
            {progress === 100 && (
              <div className="relative group cursor-pointer">
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-[#141414] px-2 py-1 text-[12px] text-[#d6d2d2] opacity-0 transition-all duration-150 group-hover:opacity-100">
                  Archive
                </span>
                <MdArchive
                  size={18}
                  className="text-[#7d8aa5] transition-colors duration-150 hover:text-[#bcc6dd]"
                  onClick={() => {
                    onArchive(id);
                  }}
                />
              </div>
            )}

            <div className="relative group cursor-pointer">
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-[#141414] px-2 py-1 text-[12px] text-[#d6d2d2] opacity-0 transition-all duration-150 group-hover:opacity-100">
                Delete
              </span>
              <MdDelete
                size={18}
                className="text-[#818080] transition-colors duration-150 hover:text-[#bebcbc]"
                onClick={() => onDelete(id)}
              />
            </div>
          </div>
        </div>

        {/* dynamic status  */}
        {!active ? (
          <button className="mt-2.5 rounded-2xl bg-[#3f434d] px-2 py-0.5 text-[11px] text-[#cfd4dd]">
            Archived
          </button>
        ) : progress === 100 ? (
          <>
            <button className="mt-2.5 rounded-2xl bg-[#5c5a5a] px-2 py-0.5 text-[11px] text-[#cfcece]">
              Completed
            </button>
            <span className="ml-2">🏆</span>
          </>
        ) : (
          <button className="mt-2.5 rounded-2xl bg-[#494848] px-2 py-0.5 text-[11px]">
            Active
          </button>
        )}

        {/* visual progress bar */}
        <div className="mt-6 w-full">
          <div className="h-3.5 w-full rounded-full bg-[#424242]">
            <div
              className="h-3.5 rounded-full bg-indigo-500 shadow-[0_0_9px_rgba(82,102,225,0.35)] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="mt-3 text-center">
          <p className="text-sm text-[#adabab]">
            {frequency
              ? `${frequency} (${progress}%)`
              : `${completedDays} / ${totalDays} days (${progress}%)`}
          </p>
        </div>

        {/* dynamic goal  button jsx */}
        <div className="flex  justify-center">
          {progress === 100 ? (
            <button className="mt-5 flex w-[90%] items-center justify-center gap-3 rounded-lg bg-[#4e51fa] px-2 py-1.5 text-[#d1cccc]">
              <FaCheck size={16} className="text-[#d1cccc]" />
              <span>Achieved</span>
            </button>
          ) : (
            <button
              className="mt-4 w-[90%] px-2 py-1.5 rounded-lg bg-[#3a3a3a] hover:bg-[#4a4a4a] hover:scale-[1.01] text-[#bebaba] cursor-pointer active:bg-[#4e51fa] transition-transform duration-150 active:scale-[0.98]
 "
              onClick={() => onAddProgress(id)}
            >
              <span className="text-xl">+</span> 1 day progress
            </button>
          )}
        </div>
      </div>
    </>
  );
}
