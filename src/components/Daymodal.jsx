export default function Daymodal({ selectedDay, onClose }) {
  if (!selectedDay) return null;

  // date logic
  const date = new Date(selectedDay.dateKey);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const weekday = date.toLocaleDateString("en-US", {
    weekday: "long",
  });
  // date logic end

  // showing motivational text logic
  const getMotivationText = (percentage) => {
    if (percentage === 100) return "Great job, warrior";
    if (percentage >= 75) return "Strong day, keep pushing";
    if (percentage >= 50) return "Good progress today";
    if (percentage >= 25) return "Small steps still count";
    return "Reset and come back stronger";
  };

  const motivationText = getMotivationText(selectedDay.percentage);

  // sorting habits logic (with completion context)
  const sortedHabits = [...selectedDay.habits].sort((a, b) => {
    return Number(b.selected) - Number(a.selected);
  });

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl border border-[#353754] bg-[#101011] p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            {/* main heading date+ status section */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#202135] text-[#8b8dff]">
                📅
              </div>

              <p className="text-lg font-semibold text-white">
                {formattedDate}, {weekday}
              </p>
            </div>

            <p className="mt-5 text-md font-semibold text-[#8b8dff]">
              {selectedDay.status}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-xl text-[#bdbcbc] transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
          >
            ×
          </button>
        </div>
        {/* heading section end */}

        {/* progress bar section */}
        <div className="mt-8 flex items-center gap-4 rounded-2xl bg-[#1a1919] p-4">
          <div
            className="flex h-22 w-22 shrink-0 items-center justify-center rounded-full text-xl font-semibold text-white"
            style={{
              background: `conic-gradient(#4e51fa ${selectedDay.percentage * 3.6}deg, #11121f 0deg)`,
            }}
          >
            <div className="flex h-16.25 w-16.25 items-center justify-center rounded-full bg-[#202135]">
              {selectedDay.percentage}%
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold text-white">
              {selectedDay.completed}/{selectedDay.total} habits completed
            </p>

            <p className="mt-2 text-sm text-[#9f9c9c]">{motivationText}</p>
          </div>
        </div>
        {/* progress bar section end */}

        {/* habits list section */}
        <div className="mt-7">
          <h3 className="text-base font-semibold text-white">Habits</h3>

          <div className="mt-3 space-y-2">
            {sortedHabits.length > 0 ? (
              sortedHabits.map((habit) => (
                <div
                  key={habit.id}
                  className="flex items-center justify-between rounded-xl bg-[#1a1919] px-4 py-3"
                >
                  <p className="text-sm font-medium text-[#e5e2e2]">
                    {habit.text}
                  </p>

                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold ${
                      habit.selected
                        ? "bg-[#63d66f]/20 text-[#77e86f]"
                        : "bg-[#ff4f75]/20 text-[#ff5578]"
                    }`}
                  >
                    {habit.selected ? "✓" : "×"}
                  </span>
                </div>
              ))
            ) : (
              <div className="rounded-xl bg-[#202135] px-4 py-4">
                <p className="text-sm text-[#9f9c9c]">
                  No habits were tracked on this day.
                </p>
              </div>
            )}
          </div>
        </div>
        {/* habit list section ends */}
        <div className=""></div>
      </div>
    </div>
  );
}
