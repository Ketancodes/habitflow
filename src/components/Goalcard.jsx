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
  isProgressAddedToday,
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
    <div
      className={`flex h-95 w-80 flex-col rounded-3xl border border-[#30313d] bg-[#171820] p-5 text-[#d8d5d5] transition-all duration-150 hover:-translate-y-1 hover:border-[#45475a] hover:bg-[#1b1d28] ${
        !active ? "opacity-65" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#6d5cff]/15 text-2xl">
            {emoji}
          </div>

          <div className="min-w-0">
            <h3 className="max-w-48 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold text-white">
              {title}
            </h3>

            <span
              className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                !active
                  ? "bg-[#64748b]/15 text-[#cbd5e1]"
                  : progress === 100
                    ? "bg-[#22c55e]/12 text-[#4ade80]"
                    : "bg-[#22c55e]/12 text-[#4ade80]"
              }`}
            >
              {!active ? "Archived" : progress === 100 ? "Completed" : "Active"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {progress === 100 && active && (
            <button
              type="button"
              onClick={() => onArchive(id)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#30313d] bg-[#111219] text-[#9ca3af] transition-colors hover:bg-[#242634] hover:text-white"
              title="Archive"
            >
              <MdArchive size={18} />
            </button>
          )}

          <button
            type="button"
            onClick={() => onDelete(id)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#30313d] bg-[#111219] text-[#9ca3af] transition-colors hover:bg-[#242634] hover:text-[#ff6b8a]"
            title="Delete"
          >
            <MdDelete size={18} />
          </button>
        </div>
      </div>

      <p className="mt-4.5 min-h-12 text-sm leading-relaxed text-[#9ca3af]">
        Keep moving forward one day at a time.
      </p>

      <div className="mt-2 flex items-center justify-between text-sm">
        <span className="text-[#9ca3af]">
          {completedDays} / {totalDays} days
        </span>
        <span className="font-semibold text-white">{progress}%</span>
      </div>

      <div className="mt-3 h-2.5 rounded-full bg-[#252735]">
        <div
          className="h-2.5 rounded-full bg-[#8b5cf6] shadow-[0_0_14px_rgba(139,92,246,0.35)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4 grid grid-cols-3 divide-x divide-[#30313d] rounded-2xl border border-[#252735] bg-[#111219] px-3 py-3">
        <div className="text-center">
          <p className="text-xs text-[#8f96a3]">Target</p>
          <p className="mt-1 text-sm font-semibold text-[#d8d5d5]">
            {totalDays || 0}d
          </p>
        </div>

        <div className="text-center">
          <p className="text-xs text-[#8f96a3]">Remaining</p>
          <p className="mt-1 text-sm font-semibold text-[#d8d5d5]">
            {Math.max((totalDays || 0) - completedDays, 0)}d
          </p>
        </div>

        <div className="text-center">
          <p className="text-xs text-[#8f96a3]">Freq.</p>
          <p className="mt-1 truncate text-sm font-semibold text-[#d8d5d5]">
            {frequency || "Daily"}
          </p>
        </div>
      </div>

      <div className="mt-auto">
        {progress === 100 ? (
          <button
            type="button"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#22c55e]/12 text-sm font-semibold text-[#4ade80]"
          >
            <FaCheck size={15} />
            Achieved
          </button>
        ) : (
          <button
            type="button"
            disabled={isProgressAddedToday || !active}
            className={`flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-colors  ${
              isProgressAddedToday || !active
                ? "cursor-not-allowed bg-[#252735] text-[#6b7280]"
                : "bg-[#6d5cff]/15 text-[#a78bfa] hover:bg-[#6d5cff]/25 cursor-pointer"
            }`}
            onClick={() => onAddProgress(id)}
          >
            <span className="text-lg">+</span>
            {isProgressAddedToday ? "Progress added" : "Add Progress"}
          </button>
        )}
      </div>
    </div>
  );
}
