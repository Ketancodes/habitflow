import logo from "../assets/habit-logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { SunMoon } from "lucide-react";

export default function Navbar() {
  const hoverunderline =
    "relative inline-block transition-all duration-300 ease-out after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#000000] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out hover:text-[#4f46e5] hover:after:scale-x-100 ";
  return (
    <>
      <nav className="w-full bg-[#f8fafc] border-b border-b-[#e9e6e6]">
        <div className="max-w-[98%] mx-auto px-8 py-2  flex items-center justify-between">
          <img src={logo} alt="HabitFlow logo" className="h-12 w-auto" />

          <div className=" flex gap-20 items-center text-[17px] text-[#1d1c1c]   ">
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
