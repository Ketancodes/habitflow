import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDashboard, MdToday, MdOutlineChecklist } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { HiFire } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { GrNotes } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

export default function Sidebar() {
  const baseNavItem =
    "relative flex items-center gap-3 px-3.5 py-1.5 transition-colors duration-150 cursor-pointer";

  const defaultNavState =
    "text-[#a5a1a1] hover:bg-[#2a2727] hover:rounded-md hover:text-[#e2dddd]";

  const activeNavState =
    "bg-[#2a2727] rounded-md text-[#e2dddd] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:bg-indigo-500 before:rounded";

  const getLinkClass = ({ isActive }) =>
    `${baseNavItem} ${isActive ? activeNavState : defaultNavState}`;

  return (
    <section className="min-h-screen max-w-60 border-r-2-[#6e6d6d] bg-[#1f1d1d]">
      <div className="flex pl-2.5 py-2 gap-3 items-center">
        <div className="h-5 w-5 bg-[#444242] text-[#d4cfcf] rounded-sm flex justify-center items-center">
          U
        </div>
        <div className="text-[#dfdada]">Username</div>
        <RiArrowDropDownLine size={34} className="text-[#a7a5a5] ml-14" />
      </div>

      <div className="flex flex-col text-[15px] gap-1 mt-2 pb-4">
        <NavLink to="/dashboard" end className={getLinkClass}>
          <MdDashboard size={18} className="text-inherit" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/dashboard/today" className={getLinkClass}>
          <MdToday size={18} className="text-inherit" />
          <span>Today</span>
        </NavLink>

        <NavLink to="/dashboard/myhabits" className={getLinkClass}>
          <MdOutlineChecklist size={18} className="text-inherit" />
          <span>My Habits</span>
        </NavLink>
      </div>

      <div className="mt-6 flex flex-col text-[#a5a1a1] text-[15px] gap-1 pb-4">
        <h4 className="text-[12px] text-[#868585] ml-2 tracking-wide">
          Insights
        </h4>
        <NavLink to="/dashboard/progress" className={getLinkClass}>
          <GiProgression size={18} className="text-inherit" />
          <span>Progress /Analytics</span>
        </NavLink>
        <NavLink to="/dashboard/streaks" className={getLinkClass}>
          <HiFire size={18} className="text-inherit" />
          <span>Streaks</span>
        </NavLink>
        <NavLink to="/dashboard/calendar" className={getLinkClass}>
          <FaCalendarAlt size={18} className="text-inherit" />
          <span>Calendar</span>
        </NavLink>
        <NavLink to="/dashboard/goals" className={getLinkClass}>
          <GoGoal size={18} className="text-inherit" />
          <span>Goals</span>
        </NavLink>
      </div>

      <div className="mt-5 flex flex-col text-[#a5a1a1] text-[15px] gap-3.5 pb-4">
        <h4 className="text-[12px] text-[#868585] ml-2 tracking-wide">
          Personal
        </h4>
        <NavLink to="/dashboard/journal" className={getLinkClass}>
          <GrNotes size={18} className="text-inherit" />
          <span>Journal</span>
        </NavLink>
      </div>

      <div className="mt-6 flex flex-col text-[#a5a1a1] text-[15px] gap-1">
        <h4 className="text-[12px] text-[#868585] ml-2 tracking-wide">
          System
        </h4>
        <NavLink to="/dashboard/notifications" className={getLinkClass}>
          <IoIosNotifications size={18} className="text-inherit" />
          <span>Notifications</span>
        </NavLink>
        <NavLink to="/dashboard/settings" className={getLinkClass}>
          <IoSettings size={18} className="text-inherit" />
          <span>Settings</span>
        </NavLink>
      </div>
    </section>
  );
}
