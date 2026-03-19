import logo from "../assets/habit-logo-removebg-preview.png";
import { FaGithub } from "react-icons/fa";
import { AiOutlineDiscord } from "react-icons/ai";
export default function Footer() {
  const footerHover =
    "cursor-pointer inline-flex w-fit relative transition-all duration-200 ease-out hover:text-black  after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[1.5px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";
  return (
    <>
      <footer className="w-full bg-[#f8fafc] border-t border-gray-200 py-10 mt-6 flex gap-14 justify-around">
        <div className="max-w-[98%]  px-8 flex flex-col">
          <div>
            <img src={logo} alt="HabitFlow logo" className="h-10 w-auto mb-5" />
            <div className="flex gap-6 ml-10 ">
              <a
                href="https://github.com/Ketancodes"
                className="transition hover:scale-110"
              >
                <FaGithub size={26} />
              </a>
              <a href="" className="transition hover:scale-110">
                <AiOutlineDiscord size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-gray-800 text-md flex flex-col gap-3">
          <p className={footerHover}>About us</p>
          <p className={footerHover}>security</p>
          <p className={footerHover}>Terms and policy</p>
        </div>
        <div className="text-gray-800 text-md flex flex-col gap-3 ">
          <p className={footerHover}>Help center</p>
          <p className={footerHover}>Contact</p>
          <p className={footerHover}>pricing</p>
        </div>
        <div className="text-center text-md text-gray-800 pb-6 mt-20">
          © {new Date().getFullYear()} HabitFlow. All rights reserved.
        </div>
      </footer>
    </>
  );
}
