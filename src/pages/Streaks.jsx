import useAppContext from "../context/useAppcontext";
export default function Streaks() {
  const { appData } = useAppContext();
  const todayHabits = appData.todayHabits;

  return (
    <>
      <section>
        <div>
          <h1 className="ml-8 mt-3 text-2xl text-[#979393] font-semibold ">
            @Streaks
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-[94%] bg-[#4a4747]"></div>
          </div>
          <p className="ml-8 py-3 px-3 text-md text-[#bdbcbc] leading-relaxed">
            Track your consistency and see how well you stick to your habits.
            Build momentum by maintaining streaks and showing up every day!.
          </p>
          <div className="ml-10 mt-4 py-3 flex flex-col gap-2.5 text-[#9c9a9a] font-semibold">
            <h2 className="text-[#c7c5c5]">Overall streaks ⚡</h2>
            <p>
              Current Streak : <span className="text-[#6d8bcc]">0</span> 🔥
            </p>
            <p>
              Best Streak : <span className="text-[#6d8bcc]">0</span> 🏆
            </p>
          </div>
          <div className="mt-8 grid grid-cols-4 gap-5 px-8">
            {todayHabits.length === 0 && (
              <div className="col-span-4 flex h-48 items-center justify-center rounded-xl bg-[#252424] text-[#8f8c8c]">
                No habits in today yet
              </div>
            )}

            {todayHabits.map((habit) => (
              <div
                key={habit.id}
                className="rounded-2xl bg-[#252424] px-4 py-4 text-[#bdbcbc] hover:bg-[#2e2d2d] hover:scale-[1.01] transition-all"
              >
                <h3 className="text-center text-[17px] text-[#d2cfcf]">
                  {habit.text}
                </h3>

                <div className="mt-4 flex flex-col items-center gap-2 text-sm text-[#c0bebe]">
                  <p>
                    Current streak :{" "}
                    <span className="text-[#6d8bcc] font-semibold ">0</span>
                    🔥
                  </p>
                  <p className="text-[#a1a1a1]">
                    Longest streak :{" "}
                    <span className="text-[#6d8bcc] font-semibold ">0</span>
                    🏆
                  </p>
                  <h4 className="mt-3 text-[13px] text-[#bdbcbc]">
                    Last 7 days
                  </h4>
                  <div className="mt-1 flex gap-2">
                    <div className="h-4 w-4 rounded-md bg-[#bdbcbc]" />
                    <div className="h-4  w-4 rounded-md bg-[#bdbcbc]" />
                    <div className="h-4 w-4 rounded-md bg-[#bdbcbc]" />
                    <div className="h-4  w-4 rounded-md bg-[#bdbcbc]" />
                    <div className="h-4  w-4 rounded-md bg-[#bdbcbc]" />
                    <div className="h-4 w-4 rounded-md bg-[#bdbcbc]" />
                    <div className="h-4  w-4 rounded-md bg-[#444242] border border-[#bdbcbc]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
