import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export default function Cta() {
  return (
    <>
      <section className="w-[98%] py-12">
        <div className="text-center">
          <h2 className="text-[32px] md:text-[35px] font-semibold">
            Start building better{" "}
            <span className="text-[36px] font-semibold text-[#4f46e5]">
              habits
            </span>{" "}
            from today{" "}
          </h2>
          <p className="text-[18px] md:text-[22px] font-medium mt-5">
            Join{" "}
            <span className="text-[20px] md:text-[24px] font-medium text-[#4f46e5]">
              Habitflow
            </span>{" "}
            and take control of your daily routine.
          </p>
          <div className="flex gap-6 items-center justify-center">
            <Link to="/dashboard">
              <button
                className=" mt-8 inline-flex items-center justify-center h-12 px-6 cursor-pointer text-base font-medium text-white rounded-lg bg-[#4f46e5] shadow-md transition-all duration-200  
            hover:bg-[#4338ca] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-inner focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/40"
              >
                Get Started
              </button>
            </Link>
            <button className="inline-flex gap-2 mt-8 h-12 cursor-pointer items-center justify-center rounded-lg border border-[#6d5cff]/50 bg-[#111427]/60 px-6 text-base font-medium text-white transition-all duration-200 hover:border-[#8b7cff] hover:bg-[#1a1d35] hover:-translate-y-0.5 active:translate-y-0.5">
              View Demo <Play size={15} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
