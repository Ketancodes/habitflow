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
        <section className="mt-6 flex w-full flex-col gap-8 border-t border-[#0e1838] px-6 py-8 text-[#dad7d7] md:flex-row md:justify-around md:gap-14 md:px-0 md:py-10">
          <div className="flex max-w-[98%] flex-col items-center px-0 text-center md:items-start md:px-8 md:text-left">
            <div>
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <InfinityIcon size={36} className="text-[#7c5cff]" />
                <span className="text-2xl font-bold text-white">
                  Habit <span className="text-[#7c5cff]">flow</span>
                </span>
              </div>

              <div className="mt-4 flex justify-center gap-6 md:ml-6 md:justify-start">
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
                <p className="mt-6 text-center text-[#a5a3a3] md:mt-22">
                  Built with ❤️ and "passion" by Ketan
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-between gap-40 px-4 md:w-auto md:px-0">
            <div className="flex flex-col gap-3 text-[15px] text-[#a3a2a2]">
              <h4 className="text-[16px] font-semibold text-[#d4d3d3]">
                Products
              </h4>
              <p className={footerHover}>Analytics</p>
              <p className={footerHover}>Calendar</p>
              <p className={footerHover}>Goals</p>
              <p className={footerHover}>Journal</p>
              <p className={footerHover}>Pricing</p>
            </div>

            <div className="flex flex-col gap-3 text-[15px] text-[#a3a2a2]">
              <h4 className="text-[16px] font-semibold text-[#d4d3d3]">
                Company
              </h4>
              <p className={footerHover}>About us</p>
              <p className={footerHover}>Contact</p>
              <p className={footerHover}>Help center</p>
            </div>
          </div>

          <div className="mt-0 pb-2 text-center text-md text-[#7a7979] md:mt-24">
            © {new Date().getFullYear()} HabitFlow. All rights reserved.
          </div>
        </section>
      </footer>
    </>
  );
}
