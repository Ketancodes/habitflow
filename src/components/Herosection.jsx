export default function Herosection() {
  const primaryButton =
    "inline-flex items-center justify-center h-12 px-6 cursor-pointer text-base font-medium text-white rounded-lg bg-[#4f46e5] shadow-md transition-all duration-200 hover:bg-[#4338ca] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-inner focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/40";
  return (
    <>
      <div className="flex flex-col items-center mt-28">
        <div className="text-6xl font-extrabold leading-20">
          <h1>Build Discipline. Stay Consistent.</h1>
          <h1 className="text-center ">
            Track Your Flow <span className="text-[#4f46e5]">Everyday! </span>
          </h1>
        </div>
        <div className="mt-4 text-xl font-normal">
          <p>
            HabitFlow helps you build daily habits, track progress, errors, and
          </p>
          <p className="text-center leading-12">
            stay consistent without distractions to achieve your goals.{" "}
          </p>
        </div>
        <div className=" flex gap-12 mt-6">
          <button className={primaryButton}>Try Habitflow</button>
          <button className={primaryButton}>Learn More</button>
        </div>
      </div>
    </>
  );
}
