import { MdDelete } from "react-icons/md";
export default function Goalcard({
  id,
  title,
  totalDays,
  completedDays,
  active,
  frequency,
  onAddProgress,
  onDelete,
}) {
  const progress =
    totalDays && totalDays > 0
      ? Math.round((completedDays / totalDays) * 100)
      : 0;
  return (
    <>
      <div className="h-52 w-60 bg-[#272626] rounded-xl  px-3 py-1.5 text-[#bdbaba] hover:bg-[#2e2d2d] cursor-pointer transition-transform duration-150 hover:scale-[1.0]">
        <div className="flex justify-between">
          <h4 className="text-[#c7c5c5]">
            {title}
            <span className="ml-2"> 💪</span>
          </h4>
          <MdDelete
            size={18}
            className="text-[#818080] hover:text-[#bebcbc]"
            onClick={() => onDelete(id)}
          />
        </div>
        <button className="mt-2.5 px-2 py-0.5 text-[11px] rounded-2xl bg-[#494848]">
          {active ? "Active" : "Inactive"}
        </button>

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

        <div className="flex  justify-center">
          <button
            className="mt-4 w-[90%] px-2 py-1.5 rounded-lg bg-[#3a3a3a] hover:bg-[#4a4a4a] text-[#bebaba] cursor-pointer active:bg-[#4e51fa] "
            onClick={() => onAddProgress(id)}
          >
            <span className="text-xl">+</span> 1 day progress
          </button>
        </div>
      </div>
    </>
  );
}
