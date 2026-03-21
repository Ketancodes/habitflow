import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <>
      <section className="w-full py-12">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">
            Start building better{" "}
            <span className="text-4xl font-semibold text-[#4f46e5]">
              habits
            </span>{" "}
            from today{" "}
          </h2>
          <p className="text-3xl font-medium mt-8">
            Join{" "}
            <span className="text-3xl font-medium text-[#4f46e5]">
              Habitflow
            </span>{" "}
            and take control of your daily routine.
          </p>
          <Link to="/dashboard">
            <button
              className=" mt-8 inline-flex items-center justify-center h-12 px-6 cursor-pointer text-base font-medium text-white rounded-lg bg-[#4f46e5] shadow-md transition-all duration-200  
            hover:bg-[#4338ca] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-inner focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/40"
            >
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
