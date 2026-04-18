import { CiEdit } from "react-icons/ci";

export default function Myhabitcard({
  title,
  category,
  frequency,
  priority,
  streak,
  onEdit,
}) {
  return (
    <>
      <div className="h-52 w-60 bg-[#272626] rounded-xl  px-3 py-1.5 text-[#bdbaba] hover:bg-[#2e2d2d] cursor-pointer transition-transform duration-150 hover:scale-[1.01]">
        <div className="relative">
          <h4 className="text-center text-semibold text-[17px] text-[#d1cece]">
            {title}
          </h4>

          <div
            className="absolute top-0 right-0 group cursor-pointer"
            onClick={onEdit}
          >
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-[#141414] px-2 py-1 text-[12px] text-[#d6d2d2] opacity-0 transition-all duration-150 group-hover:opacity-100">
              Edit
            </span>
            <CiEdit
              size={26}
              className="rounded-md border-[0.7px] border-[#3a3a3a] px-1 py-1 text-[#9b9999] transition-colors duration-150 hover:bg-[#1a1919] hover:text-[#d8d3d3]"
            />
          </div>
        </div>

        <button className="px-2 py-0.5 text-[11px] rounded-2xl bg-[#494848]">
          {category}
        </button>
        <div className="py-2 flex flex-col gap-1.5 text-[15px]">
          <p>Freequecy : {frequency}</p>
          <p>Priority : {priority}</p>
          <p>Streak : {streak}🔥</p>
        </div>
        <div className="flex  justify-center py-1.5">
          <button className=" w-[90%] px-2 py-1.5 rounded-lg bg-[#525050] hover:bg-[#3f3e3e] text-[#bebaba] cursor-pointer ">
            Add to today
          </button>
        </div>
      </div>
    </>
  );
}
