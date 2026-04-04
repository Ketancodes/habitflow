import Reusable from "../components/Reusable";

export default function Today() {
  return (
    <>
      <section className="w-full h-screen bg-[#181717] pt-3">
        <h1 className="ml-8  text-2xl text-[#979393] font-semibold">@Today</h1>
        <h4 className="ml-8 mt-2.5 text-lg font-semibold text-[#979393]">
          24/ 03/ 26
        </h4>
        <p className="text-[#a7a4a4] font-medium text-lg ml-8 mt-4">
          Welcome Warrior, hope your doing well !
        </p>

        {/* Today's timeline */}
        <div className="h-40 w-60 ml-14 mt-6 rounded-xl ">
          <h3 className="py-1.5 px-3 text-[#9b9999]">@Today</h3>
          <div className="px-3 flex flex-col gap-1.5 text-[#aca9a9] text-[15px]">
            <h4>
              Completed habits : <span className="text-[#d3cfcf]"> 2</span>
            </h4>
            <h4>
              Remaining habits :<span className="text-[#d3cfcf]"> 2</span>{" "}
            </h4>
            <h4>
              Current completion : <span className="text-[#d3cfcf]"> 70%</span>
            </h4>
            <h4>
              Today's streak : <span className="text-[#d3cfcf]"> Null</span>
            </h4>
          </div>
        </div>

        {/* Habit list  */}
        <div className="flex ml-14 gap-8 mt-8">
          <div className="h-40 w-52 px-3  bg-[#272626] rounded-xl">
            <h3 className="py-1.5  text-[#9b9999]">@Today</h3>
            <div className="flex flex-col gap-2.5 text-[#bdbaba] text-[14px]">
              <div>
                <Reusable label="Study 6 hours" />
              </div>
              <div>
                <Reusable label="Exercise for 30 min" />
              </div>
              <div>
                <Reusable label="Reading book " />
              </div>
              <button className="border-none text-center cursor-pointer">
                <span className="text-lg">+</span> Habit
              </button>
            </div>
          </div>

          {/* Second (yestarday )box */}
          <div className="h-40 w-52 px-3 bg-[#272626] rounded-xl">
            <h3 className="py-1.5  text-[#9b9999]">@Yesterday</h3>
            <div className="flex flex-col gap-2.5 text-[#bdbaba] text-[14px]">
              <Reusable label="Study 6 hours" />

              <div>
                <Reusable label="Exercise for 30 min" />
              </div>
              <div>
                <Reusable label="Reading book" />
              </div>
              <button className="border-none text-center cursor-pointer">
                <span className="text-lg">+</span> Habit
              </button>
            </div>
          </div>

          <div className="h-40 w-52 bg-[#1f1e1e]  rounded-xl flex justify-center items-center text-[#8b8989] cursor-pointer  hover:bg-[#2c2b2b] hover:text-[#bbb8b8]">
            <span className="text-xl">+</span> Add new
          </div>
        </div>
      </section>
    </>
  );
}
