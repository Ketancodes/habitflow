import Analyticspre from "../assets/Analyticspre.png";
import { BarChart3, BookOpen, CheckCircle2, Target } from "lucide-react";

// export default function Placeholder() {
//   return (
//     <>
//       <section className="relative overflow-hidden py-12 text-white">
//         {" "}
//         <div className="">
//           <h2 className="text-3xl text-center font-semibold">
//             See <span className="text-[#4f46e5]"> Habitflow</span> in action
//           </h2>
//           <p className="text-[16px] text-center mt-2.5">
//             Powerfull features and pages were designed to keep you focused and
//             consistent!
//           </p>
//         </div>
//         <div></div>
//       </section>
//     </>
//   );
// }
const previewCards = [
  {
    title: "Analytics",
    subtitle: "Deep insights into your habits, streaks and productivity.",
    badge: "Insights",
    icon: BarChart3,
  },
  {
    title: "Today",
    subtitle: "Plan your day, track habits and stay productive.",
    badge: "Daily Focus",
    icon: CheckCircle2,
  },
  {
    title: "Goals",
    subtitle: "Build goals, break them down and achieve more.",
    badge: "Goal Tracking",
    icon: Target,
  },
  {
    title: "Journal",
    subtitle: "Write, reflect and grow every single day.",
    badge: "Personal Growth",
    icon: BookOpen,
  },
];

export default function Placeholder() {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#6d5cff]/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto w-[84%]">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            See <span className="text-[#8b5cf6]">Habitflow</span> in action
          </h2>
          <p className="mt-3 text-base text-[#b9bac6]">
            Powerful features designed to keep you focused and consistent.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6">
          {previewCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-3xl border border-[#30313d] bg-[#111427]/70 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.28)]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6d5cff]/18 text-[#a78bfa]">
                      <Icon size={25} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-1 max-w-md text-sm leading-relaxed text-[#b9bac6]">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-[#6d5cff]/18 px-3 py-1 text-xs font-semibold text-[#c4b5fd]">
                    {card.badge}
                  </span>
                </div>

                {/* screenshot goes here later */}
                <div className="mt-6 flex h-80 items-center justify-center rounded-2xl border border-[#252735] bg-[#080b18]/80 text-sm text-[#6b7280]">
                  Screenshot preview
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
