import Analyticspre from "../assets/Analyticspre.png";
import Todaypre from "../assets/Todaypre.png";
import Goalspre from "../assets/Goalspre.png";
import Calendarpre from "../assets/Calendarpre.png";
import { BarChart3, CalendarDays, CheckCircle2, Target } from "lucide-react";
import { motion } from "framer-motion";
motion;
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const previewCards = [
  {
    title: "Analytics",
    subtitle: "Deep insights into your habits, streaks and productivity.",
    badge: "Insights",
    icon: BarChart3,
    image: Analyticspre,
  },
  {
    title: "Today",
    subtitle: "Plan your day, track habits and stay productive.",
    badge: "Daily Focus",
    icon: CheckCircle2,
    image: Todaypre,
  },
  {
    title: "Goals",
    subtitle: "Build goals, break them down and achieve more.",
    badge: "Goal Tracking",
    icon: Target,
    image: Goalspre,
  },
  {
    title: "Calendar",
    subtitle: "Analyze whole month summary at one place.",
    badge: "Personal Growth",
    icon: CalendarDays,
    image: Calendarpre,
  },
];

export default function Placeholder() {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      <div className="pointer-events-none absolute left-1/2 top-20 h-134 w-137 -translate-x-1/2 rounded-full bg-[#6d5cff]/10 blur-3xl"></div>

      <div className="-mt-10 md:mt-0 relative z-10 mx-auto w-[94%]">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            See <span className="text-[#4f46e5]">Habitflow</span> in action
          </h2>
          <p className="mt-3 text-base text-[#b9bac6]">
            Powerful features designed to keep you focused and consistent.
          </p>
        </div>

        <div className="mt-8  grid-cols-1 gap-4 sm:grid-cols-2   md:mt-10 grid lg:grid-cols-2 lg:gap-6 ">
          {previewCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.14,
                  ease: "easeOut",
                }}
                className="rounded-3xl border border-[#30313d] bg-[#111427]/70 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.28)] hover:-translate-y-1
                    hover:border-purple-500/40 transition-all duration-300"
              >
                {/* <div className="flex items-start justify-between gap-3 sm:gap-5">
                  {" "}
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#8b5cf6]/35 bg-[#6d5cff]/18 text-[#c4b5fd] shadow-[0_0_28px_rgba(109,92,255,0.28)]">
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[#8b5cf6]/10 blur-md"></div>
                      <Icon size={25} className="relative z-10" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-1 max-w-md text-sm leading-relaxed text-[#b9bac6]">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#6d5cff]/18 px-3 py-1 text-xs font-semibold text-[#c4b5fd]">
                    {card.badge}
                  </span>
                </div> */}

                <div>
                  <div className="flex items-start justify-between gap-3 sm:gap-5">
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#8b5cf6]/35 bg-[#6d5cff]/18 text-[#c4b5fd] shadow-[0_0_28px_rgba(109,92,255,0.28)]">
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[#8b5cf6]/10 blur-md"></div>
                        <Icon size={25} className="relative z-10" />
                      </div>

                      <h3 className="min-w-0 text-xl font-bold text-white">
                        {card.title}
                      </h3>
                    </div>

                    <span className="shrink-0 rounded-full bg-[#6d5cff]/18 px-2.5 py-1 text-[11px] font-semibold text-[#c4b5fd] sm:px-3 sm:text-xs">
                      {card.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#b9bac6]">
                    {card.subtitle}
                  </p>
                </div>

                {/* screenshot goes here later */}
                <img
                  src={card.image}
                  alt={`${card.title} preview`}
                  className="mt-6 h-auto md:h-92 w-full object-contain rounded-2xl border border-[#252735] md:object-cover object-top"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
