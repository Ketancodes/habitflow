import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { MdToday } from "react-icons/md";
import { MdOutlineChecklist } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { HiFire } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { GrNotes } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

export default function Sidebar() {
  return (
    <>
      <section className="h-screen max-w-60 border-r-2-[#6e6d6d] bg-[#1f1d1d] ">
        {/* Username */}
        <div className="flex pl-2.5 py-2 gap-3 items-center">
          <div className="h-5 w-5  bg-[#444242] text-[#d4cfcf] rounded-sm flex justify-center items-center">
            U
          </div>
          <div className="text-[#dfdada] "> Username</div>
          <RiArrowDropDownLine size={34} className="text-[#a7a5a5] ml-14" />
        </div>

        {/* Main options */}
        <div className="flex flex-col text-[#a5a1a1] text-[15px] gap-1  mt-2 pb-4">
          <h2
            className="relative flex items-center gap-3.5 hover:bg-[#2a2727] px-3.5 py-1.5  hover:rounded-md hover:text-[#e2dddd] transition-colors duration-150 cursor-pointer
          before:absolute before:left-0 before:top-1 before:bottom-1
          before:w-[3px] before:bg-indigo-500 before:rounded "
          >
            <MdDashboard size={18} className=" text-inherit" />
            <span>Dashboard</span>
          </h2>

          <h2 className=" flex items-center gap-3 hover:bg-[#2a2727] px-3.5 py-1.5  hover:rounded-md hover:text-[#e2dddd] transition-colors duration-150 cursor-pointer">
            <MdToday size={18} className="text-inherit" />
            <span>Today</span>
          </h2>
          <h2 className="flex items-center gap-3 hover:bg-[#2a2727] px-3.5 py-1.5  hover:rounded-md hover:text-[#e2dddd] transition-colors duration-150 cursor-pointer ">
            <MdOutlineChecklist size={18} className="text-inherit" />
            <span>My Habits</span>
          </h2>
        </div>

        {/* Insights */}
        <div className="mt-6 flex flex-col text-[#a5a1a1] text-[15px] gap-1 pb-4">
          <h4 className="text-[12px] text-[#868585] ml-2 tracking-wide">
            Insights
          </h4>
          <h2 className="flex items-center gap-3  hover:bg-[#2a2727] px-3.5 py-1.5  hover:rounded-md hover:text-[#e2dddd] transition-colors duration-150 cursor-pointer">
            <GiProgression size={18} className="text-inherit" />
            <span> Progress /Analytics</span>
          </h2>

          <h2 className="flex items-center gap-3 hover:bg-[#2a2727] px-3.5 py-1.5  hover:rounded-md hover:text-[#e2dddd] transition-colors duration-150 cursor-pointer">
            <HiFire size={18} className="text-inherit" />
            <span>Streaks</span>
          </h2>
          <h2 className="flex items-center gap-3 hover:bg-[#2a2727] px-3.5 py-1.5  hover:rounded-md hover:text-[#e2dddd] transition-colors duration-150 cursor-pointer">
            <FaCalendarAlt size={18} className="text-inherit" />
            <span>Calendar</span>
          </h2>
          <h2 className="flex items-center gap-3 hover:bg-[#2a2727] px-3.5 py-1.5  hover:rounded-md hover:text-[#e2dddd] transition-colors duration-150 cursor-pointer">
            <GoGoal size={18} className="text-inherit" />
            <span>Goals</span>
          </h2>
        </div>

        {/* Personal */}
        <div className="mt-5 flex flex-col text-[#a5a1a1] text-[15px] gap-3.5 pb-4">
          <h4 className="text-[12px] text-[#868585] ml-2 tracking-wide">
            Personal
          </h4>
          <h2 className="flex items-center gap-3  hover:bg-[#2a2727] px-3.5 py-1.5  hover:rounded-md hover:text-[#e2dddd] transition-colors duration-150 cursor-pointer">
            <GrNotes size={18} className="text-inherit" />
            <span> Journal</span>
          </h2>
        </div>

        {/* System */}
        <div className="mt-6 flex flex-col text-[#a5a1a1] text-[15px] gap-1">
          <h4 className="text-[12px] text-[#868585] ml-2 tracking-wide">
            System
          </h4>
          <h2 className="flex items-center gap-3  hover:bg-[#2a2727] px-3.5 py-1.5  hover:rounded-md hover:text-[#e2dddd] transition-colors duration-150 cursor-pointer">
            <IoIosNotifications size={18} className="text-inherit" />
            <span> Notifications</span>
          </h2>
          <h2 className="flex items-center gap-3  hover:bg-[#2a2727] px-3.5 py-1.5  hover:rounded-md hover:text-[#e2dddd] transition-colors duration-150 cursor-pointer">
            <IoSettings size={18} className="text-inherit" />
            <span> Settings</span>
          </h2>
        </div>
      </section>
    </>
  );
}
