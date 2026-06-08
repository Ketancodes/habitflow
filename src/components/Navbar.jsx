import { Link } from "react-router-dom";
import { Infinity as InfinityIcon, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const hoverunderline =
    "relative inline-block transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#7c5cff] after:transition-transform after:duration-200 hover:text-white hover:after:scale-x-100";
  return (
    <>
      <nav className="w-full bg-[#030612] text-white ">
        <div className="py-2 mx-auto flex max-w-[94%] items-center justify-between px-2 md:py-4.5">
          {" "}
          <div className="flex items-center gap-3">
            <InfinityIcon size={36} className="text-[#7c5cff]" />
            <span className="text-xl md:text-2xl font-bold text-white">
              Habit <span className="text-[#7c5cff]">flow</span>
            </span>
          </div>
          <div className="hidden  items-center gap-16 text-[16px] font-medium text-[#d8d5e5] md:flex">
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
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="block text-[#d8d5e5] md:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
        {open && (
          <div className="flex flex-col gap-5 px-6 pb-6 pt-2 text-[16px] font-medium text-[#d8d5e5] md:hidden">
            <a href="/features" className="cursor-pointer hover:text-white">
              Features
            </a>

            <button className="w-fit cursor-pointer text-left hover:text-white">
              Pricing
            </button>

            <Link to="/signup" className="cursor-pointer hover:text-white">
              Sign up
            </Link>

            <Link to="/login" className="cursor-pointer hover:text-white">
              Login
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
