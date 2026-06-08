import {
  BarChart3,
  BookOpen,
  CalendarDays,
  Target,
  CalendarCheck,
} from "lucide-react";

export default function Features() {
  const featureCards = [
    {
      title: "Today",
      description:
        "Get a clear overview of your daily habits, tasks and progress to stay focused and motivated every single day.",
      icon: CalendarCheck,
    },
    {
      title: "Analytics",
      description:
        "Track your progress with powerful insights, streak analytics and detailed performance reports.",
      icon: BarChart3,
    },
    {
      title: "Calendar",
      description:
        "See your consistency over time with heatmaps and daily, weekly & monthly overview.",
      icon: CalendarDays,
    },
    {
      title: "Goals",
      description:
        "Set meaningful goals and break them into daily actions to stay on track every single day.",
      icon: Target,
    },
  ];
  return (
    <>
      {/* heading n subtext */}
      <section className="relative overflow-hidden py-18 text-white">
        {" "}
        {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(109,92,255,0.10),transparent_28%)]"></div> */}
        <div className="pointer-events-none absolute right-0 top-24 h-130 w-130 rounded-full bg-[#6d5cff]/10 blur-3xl"></div>
        <div className="max-w-[98%]">
          <div className="flex flex-col gap-2 text-center">
            <h2 className=" text-3xl text-center font-semibold">
              Everything You Need To Know{" "}
            </h2>
            <h2 className="-mt-2 md:mt-0 text-3xl font-semibold">
              {" "}
              About <span className="text-[#4f46e5]">Habitflow!</span>
            </h2>
          </div>

          <p className="text-[18px] mt-6 text-center md:text-xl  mx-auto mb-12">
            A simple system designed to help you build habits, track progress,
            and stay focused every day.
          </p>

          <div className="mx-auto mt-8 grid w-[92%] grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:w-[96%] lg:grid-cols-4 lg:gap-5">
            {" "}
            {featureCards.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-[#30313d] bg-[#111427]/70 px-4 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition-all duration-200 hover:-translate-y-1 hover:border-[#6d5cff]/70 hover:bg-[#151832]/85 cursor-pointer"
                >
                  <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#6d5cff]/18 blur-3xl transition-opacity duration-200 group-hover:opacity-100"></div>

                  <div className="relative z-10 flex items-center gap-5">
                    <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/40 bg-[#6d5cff]/18 text-[#c4b5fd] shadow-[0_0_30px_rgba(109,92,255,0.25)]">
                      <Icon size={34} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#d8d5e5]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* cards */}
        </div>
      </section>
    </>
  );
}
