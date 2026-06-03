import { Link } from "react-router-dom";
import { SunMoon, Infinity as InfinityIcon } from "lucide-react";

export default function Navbar() {
  const hoverunderline =
    "relative inline-block transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#7c5cff] after:transition-transform after:duration-200 hover:text-white hover:after:scale-x-100";
  return (
    <>
      <nav className="w-full bg-[#030612] text-white ">
        <div className="mx-auto flex max-w-[94%] items-center justify-between px-2 py-4.5">
          {" "}
          {/* <img src={logo} alt="HabitFlow logo" className="h-12 w-auto" /> */}
          <div className="flex items-center gap-3">
            <InfinityIcon size={36} className="text-[#7c5cff]" />
            <span className="text-2xl font-bold text-white">
              Habit <span className="text-[#7c5cff]">flow</span>
            </span>
          </div>
          <div className="flex items-center gap-16 text-[16px] font-medium text-[#d8d5e5]">
            {" "}
            <a href="/features" className={`${hoverunderline} cursor-pointer `}>
              Features
            </a>
            <button className={`${hoverunderline} cursor-pointer `}>
              Pricing
            </button>
            <Link to="/signup" className={`${hoverunderline} cursor-pointer `}>
              Sign up
            </Link>
            <Link to="/login" className={`${hoverunderline} cursor-pointer `}>
              Login
            </Link>
            <button>{<SunMoon size={24} />}</button>
          </div>
        </div>
      </nav>
    </>
  );
}
