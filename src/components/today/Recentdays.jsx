import { CalendarDays, Star, ThumbsUp, TrendingUp } from "lucide-react";

const getCompletionStats = (habits = []) => {
  const total = habits.length;
  const completed = habits.filter((habit) => habit.selected).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    total,
    completed,
    percentage,
  };
};

const formatRecentDate = (dateKey) => {
  const date = new Date(dateKey);

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const getStatus = (percentage) => {
  if (percentage === 100) {
    return {
      label: "Perfect day",
      icon: Star,
      className: "bg-[#22c55e]/10 text-[#4ade80]",
      ringColor: "#22c55e",
    };
  }

  if (percentage >= 60) {
    return {
      label: "Good job",
      icon: ThumbsUp,
      className: "bg-[#22c55e]/10 text-[#4ade80]",
      ringColor: "#22c55e",
    };
  }

  return {
    label: "Needs work",
    icon: TrendingUp,
    className: "bg-[#f59e0b]/10 text-[#fbbf24]",
    ringColor: "#6d5cff",
  };
};

export default function Recentdays({ last7days = [] }) {
  const recentCards = last7days.slice(0, 7).map((day, index) => ({
    title: index === 0 ? "Yesterday" : formatRecentDate(day.date),
    date: day.date,
    habits: day.habits,
  }));

  return (
    <div className="mt-6 flex justify-center">
      <div className="w-[94%] rounded-3xl  px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CalendarDays size={22} className="text-[#8b5cf6]" />
            <h2 className="text-2xl font-semibold text-white">Recent Days</h2>
          </div>

          <span className="rounded-full border border-[#30313d] px-3 py-1 text-sm font-semibold text-[#9ca3af]">
            {recentCards.length} days
          </span>
        </div>

        <div className="mt-7 grid grid-cols-1 max-w-60 mx-auto sm:grid-cols-2 sm:max-w-none md:grid-cols-3 md:max-w-none   lg:grid-cols-4 lg:max-w-none gap-5">
          {recentCards.map((day) => {
            const { total, completed, percentage } = getCompletionStats(
              day.habits,
            );
            const status = getStatus(percentage);
            const StatusIcon = status.icon;

            return (
              <div
                key={day.date}
                className="rounded-3xl border border-[#30313d] bg-[#111219] px-5 py-5 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-white">
                  {day.title}
                </h3>
                <p className="mt-1 text-sm text-[#9ca3af]">
                  {formatRecentDate(day.date)}
                </p>

                <div className="mt-5 flex justify-center">
                  <div
                    className="flex h-32 w-32 items-center justify-center rounded-full"
                    style={{
                      background: `conic-gradient(
                        ${status.ringColor} ${percentage * 3.6}deg,
                        #252735 ${percentage * 3.6}deg
                      )`,
                    }}
                  >
                    <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#111219]">
                      <span className="text-2xl font-bold text-white">
                        {percentage}%
                      </span>
                      <span className="mt-1 text-sm text-[#9ca3af]">
                        {completed} / {total}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex justify-center">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${status.className}`}
                  >
                    {status.label}
                    <StatusIcon size={15} />
                  </span>
                </div>

                <p className="mt-4 text-center text-sm text-[#a1a1aa]">
                  {completed} completed
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
