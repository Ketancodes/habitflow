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
      <section className="h-screen max-w-60 border bg-[#1f1d1d] ">
        {/* Username */}
        <div className="flex pl-2.5 py-2 gap-3 items-center">
          <div className="h-5 w-5  bg-[#444242] text-[#d4cfcf] rounded-sm flex justify-center items-center">
            U
          </div>
          <div className="text-[#dfdada] "> Username</div>
          <RiArrowDropDownLine size={34} className="text-[#a7a5a5] ml-14" />
        </div>

        {/* Main options */}
        <div className="flex flex-col text-[#b8b3b3] gap-3 ml-3.5 mt-2 pb-4">
          <h2 className="flex items-center gap-3">
            <MdDashboard size={18} className="text-[#b8b3b3]" />
            <span> Dashboard</span>
          </h2>

          <h2 className="flex items-center gap-3">
            <MdToday size={18} className="text-[#b8b3b3]" />
            <span>Today</span>
          </h2>
          <h2 className="flex items-center gap-3">
            <MdOutlineChecklist size={18} className="text-[#b8b3b3]" />
            <span>My Habits</span>
          </h2>
        </div>

        {/* Insights */}
        <div className="mt-4 flex flex-col text-[#b8b3b3] gap-3.5 pb-4">
          <h4 className="text-sm text-[#868585] ml-2">Insights</h4>
          <h2 className="flex items-center gap-3  ml-3.5">
            <GiProgression size={18} className="text-[#b8b3b3]" />
            <span> Progress /Analytics</span>
          </h2>

          <h2 className="flex items-center gap-3 ml-3.5">
            <HiFire size={18} className="text-[#b8b3b3]" />
            <span>Streaks</span>
          </h2>
          <h2 className="flex items-center gap-3 ml-3.5">
            <FaCalendarAlt size={18} className="text-[#b8b3b3]" />
            <span>Calander</span>
          </h2>
          <h2 className="flex items-center gap-3 ml-3.5">
            <GoGoal size={18} className="text-[#b8b3b3]" />
            <span>Goals</span>
          </h2>
        </div>

        {/* Personal */}
        <div className="mt-5 flex flex-col text-[#b8b3b3] gap-3.5 pb-4">
          <h4 className="text-sm text-[#868585] ml-2">Personal</h4>
          <h2 className="flex items-center gap-3  ml-3.5">
            <GrNotes size={18} className="text-[#b8b3b3]" />
            <span> Journal /Notes</span>
          </h2>
        </div>

        {/* System */}
        <div className="mt-5 flex flex-col text-[#b8b3b3]  gap-3.5">
          <h4 className="text-sm text-[#868585] ml-2">System</h4>
          <h2 className="flex items-center gap-3  ml-3.5">
            <IoIosNotifications size={18} className="text-[#b8b3b3]" />
            <span> Notifications</span>
          </h2>
          <h2 className="flex items-center gap-3  ml-3.5">
            <IoSettings size={18} className="text-[#b8b3b3]" />
            <span> Settings</span>
          </h2>
        </div>
      </section>
    </>
  );
}
