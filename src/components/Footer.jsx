import { FaGithub } from "react-icons/fa";
import { AiOutlineDiscord } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import { Infinity as InfinityIcon } from "lucide-react";
export default function Footer() {
  const footerHover =
    "cursor-pointer inline-flex w-fit relative transition-all duration-200 ease-out hover:text-[#ffff]  after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[1.5px] after:bg-[#7c5cff] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";
  return (
    <>
      <footer>
        <section className="w-full text-[#dad7d7]  py-10 mt-6 flex gap-14 justify-around border-t border-[#0e1838]">
          <div className="max-w-[98%]  px-8 flex flex-col">
            <div>
              <div className="flex items-center gap-3">
                <InfinityIcon size={36} className="text-[#7c5cff]" />
                <span className="text-2xl font-bold text-white">
                  Habit <span className="text-[#7c5cff]">flow</span>
                </span>
              </div>
              <div className="flex gap-6 ml-6 mt-4  ">
                <a
                  href="https://github.com/Ketancodes"
                  className="transition hover:scale-110"
                >
                  <FaGithub size={26} />
                </a>
                <a href="" className="transition hover:scale-110">
                  <AiOutlineDiscord size={28} />
                </a>
                <a
                  href="mailto:ketan@example.com"
                  className="transition hover:scale-110"
                >
                  <SiGmail size={24} />
                </a>
              </div>
              <div>
                <p className="text-[#a5a3a3] mt-22 text-center">
                  Built with ❤️ and "passion" by Ketan
                </p>
              </div>
            </div>
          </div>
          <div className="text-[#a3a2a2] text-[15px] flex flex-col gap-3 ">
            <h4 className="text-[#d4d3d3] text-[16px] font-semibold">
              Products
            </h4>
            <p className={footerHover}>Analytics</p>
            <p className={footerHover}>Calendar</p>
            <p className={footerHover}>Goals</p>
            <p className={footerHover}>Journal</p>
            <p className={footerHover}>Pricing</p>
          </div>
          <div className="text-[#a3a2a2] text-[15px] flex flex-col gap-3 ">
            <h4 className="text-[#d4d3d3] text-[16px] font-semibold">
              Company
            </h4>

            <p className={footerHover}>About us</p>
            <p className={footerHover}>Contact</p>
            <p className={footerHover}>Help center</p>
          </div>
          <div className="text-center text-md text-[#7a7979] pb-2 mt-24">
            © {new Date().getFullYear()} HabitFlow. All rights reserved.
          </div>
        </section>
      </footer>
    </>
  );
}
