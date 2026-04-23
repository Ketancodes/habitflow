export default function Streaks() {
  const streakData = [
    {
      id: 1,
      title: "Study 6 hours",
      currentStreak: 6,
      longestStreak: 14,
    },
    {
      id: 2,
      title: "Exercise 30 min",
      currentStreak: 4,
      longestStreak: 9,
    },
    {
      id: 3,
      title: "Reading a book",
      currentStreak: 4,
      longestStreak: 9,
    },
    {
      id: 4,
      title: "Walking 2km",
      currentStreak: 4,
      longestStreak: 9,
    },
  ];

  return (
    <>
      <section>
        <div>
          <h1 className="ml-8 mt-3 text-2xl text-[#979393]">@Streaks</h1>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-[94%] bg-[#4a4747]"></div>
          </div>
          <p className="ml-8 py-3 px-3 text-md text-[#bdbcbc] leading-relaxed">
            Track your consistency and see how well you stick to your habits.
            Build momentum by maintaining streaks and showing up every day!.
          </p>
          <div className="ml-10 mt-4 py-3 flex flex-col gap-2.5 text-[#a5a4a4]">
            <h2 className="text-[#bdbcbc]">Overall streaks</h2>
            <p>
              Current Streak : <span className="text-[#bdbcbc]">12</span> 🔥
            </p>
            <p>
              Best Streak : <span className="text-[#bdbcbc]">21</span> 🏆
            </p>
          </div>
          <div className="mt-8 grid grid-cols-4 gap-5 px-8">
            {streakData.map((habit) => (
              <div
                key={habit.id}
                className="rounded-2xl bg-[#252424] px-4 py-4 text-[#bdbcbc] hover:bg-[#2e2d2d] hover:scale-[1.01] transition-all"
              >
                <h3 className="text-center text-[17px] text-[#d2cfcf]">
                  {habit.title}
                </h3>

                <div className="mt-4 flex flex-col items-center gap-2 text-sm text-[#c0bebe]">
                  <p>
                    Current streak :{" "}
                    <span className="text-[#d2cfcf]">
                      {habit.currentStreak}
                    </span>{" "}
                    🔥
                  </p>
                  <p className="text-[#a1a1a1]">
                    Longest streak :{" "}
                    <span className="text-[#d2cfcf]">
                      {habit.longestStreak}
                    </span>{" "}
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
