import { CiCircleInfo, CiCircleList } from "react-icons/ci";

const habitEmojiMap = [
  { keywords: ["study", "read", "book", "learn", "exam"], emoji: "📚" },
  { keywords: ["gym", "fitness", "workout", "exercise", "run"], emoji: "💪" },
  { keywords: ["walk", "steps", "cardio"], emoji: "🚶" },
  { keywords: ["water", "drink", "hydrate"], emoji: "💧" },
  { keywords: ["sleep", "wake", "morning"], emoji: "🌙" },
  { keywords: ["money", "save", "income", "budget"], emoji: "💰" },
  { keywords: ["weight", "gain", "muscle"], emoji: "🏋️" },
  { keywords: ["meditation", "meditate", "mindful"], emoji: "🧘" },
  { keywords: ["journal", "write", "diary"], emoji: "✍️" },
];

const getHabitEmoji = (text) => {
  const lowerText = text.toLowerCase();

  const match = habitEmojiMap.find((group) =>
    group.keywords.some((word) => lowerText.includes(word)),
  );

  return match ? match.emoji : "✨";
};

export default function Habitperformance({ habits = [] }) {
  const getBarOpacity = (index) => {
    const opacities = [
      "bg-indigo-500",
      "bg-indigo-500/85",
      "bg-indigo-500/70",
      "bg-indigo-500/55",
      "bg-indigo-500/40",
    ];

    return opacities[index] || "bg-indigo-500/30";
  };

  return (
    <div className="h-full rounded-xl border border-[#30313d] bg-[#171820] p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-white">
            Habit Performance
          </h2>
          <CiCircleInfo
            size={16}
            className="cursor-pointer font-semibold text-white"
          />
        </div>
      </div>

      <div className="mt-5 max-h-77.5 space-y-5 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {habits.length > 0 ? (
          habits.map((habit, index) => (
            <div key={habit.text}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <p className="truncate text-sm font-semibold text-white">
                  {getHabitEmoji(habit.text)} {habit.text}
                </p>

                <div className="flex shrink-0 items-center gap-4">
                  <p className="text-sm font-bold text-white">
                    {habit.percentage}%
                  </p>
                  <p className="text-xs text-[#aaa7a7]">
                    {habit.completed}/{habit.total} days
                  </p>
                </div>
              </div>

              <div className="h-2 rounded-full bg-[#13131b]">
                <div
                  className={`h-full rounded-full shadow-[0_0_7px_rgba(82,102,225,0.3)] transition-all duration-300 ${getBarOpacity(index)}`}
                  style={{ width: `${habit.percentage}%` }}
                ></div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-[#30313d] bg-[#111219] px-6 text-center">
            <div>
              <p className="text-base font-semibold text-[#d8d5d5]">
                No habit performance yet
              </p>
              <p className="mt-2 text-sm text-[#8f8c8c]">
                Complete habits to see your ranking.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
