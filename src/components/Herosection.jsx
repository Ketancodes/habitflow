import Progressimage from "../assets/Progressimage.png";
import Todayimage from "../assets/Todayimage.png";
import Goalsimage from "../assets/Goalsimage.png";
import { Link } from "react-router-dom";

export default function Herosection() {
  const primaryButton =
    "inline-flex h-10 items-center justify-center rounded-lg bg-[#4f46e5] px-4 text-sm font-medium text-white shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-0.5 hover:bg-[#4338ca] active:translate-y-0.5 active:shadow-inner focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/40 md:h-12 md:px-6 md:text-base";
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(72,61,139,0.16),transparent_28%)]"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 h-[42%] w-[58%] bg-[radial-gradient(ellipse_at_bottom,rgba(109,92,255,0.32),transparent_65%)] blur-2xl"></div>

        {/* <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-[94%] items-center gap-12"> */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[94%] flex-col items-center gap-10 py-10 md:min-h-[calc(100vh-96px)] md:flex-row md:gap-12 md:py-0">
          {/* left content */}
          <div className="flex w-full flex-col items-center text-center md:w-[30%] md:items-start md:text-left">
            {" "}
            <div className="inline-flex w-fit">
              <h3 className="px-2 py-1.5 text-[12px] rounded-3xl border border-[#30313d] bg-[#17172a]/85 md:px-4.5 md:py-2.5 md:text-[15px] text-[#bda7ff]">
                Track. Analyze. Improve. Repeat!
              </h3>
            </div>
            <div className="mt-3 flex w-full flex-col text-center text-[34px] font-semibold leading-tight text-white md:mt-5 md:text-left md:text-[44px]">
              <h1>One System.</h1>
              <h1>
                Build <span className="text-[#7c5cff]">Discipline.</span>{" "}
              </h1>
              <h1>
                Track Your Flow{" "}
                <span className="text-[#7c5cff]">Everyday!</span>
              </h1>
            </div>
            <div className="mt-2.5 flex w-full flex-col text-center text-[14px] leading-relaxed text-[#c5c0de] md:mt-4 md:text-left md:text-[16px]">
              {" "}
              <p>From daily habits to lifetime goals,</p>
              <p>Habitflow keeps you focused and consistent.</p>
            </div>
            <div className="mt-6 flex gap-3 md:mt-8 md:gap-6">
              <Link to="/dashboard">
                <button className={primaryButton}>Try Habitflow</button>
              </Link>

              <button className="inline-flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#6d5cff]/50 bg-[#111427]/60 px-4 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8b7cff] hover:bg-[#1a1d35] active:translate-y-0.5 md:h-12 md:px-6 md:text-base">
                Learn More
              </button>
            </div>
          </div>

          {/* right image stack */}
          <div className="relative mx-auto  h-90 w-full max-w-130 md:h-147.5 md:max-w-none md:flex-1">
            {/* left/back today image */}
            {/* <img
              src={Todayimage}
              alt="Today page preview"
              className="absolute -left-6 top-24 w-[50%] rotate-x-[12deg] rotate-y-[-16deg] rounded-3xl  opacity-75 shadow-[0_30px_80px_rgba(0,0,0,0.58)]"
            /> */}

            {/* right/back goals image */}
            <img
              src={Goalsimage}
              alt="Goals page preview"
              className="absolute left-[38%] top-20 w-[72%] -translate-x-1/2 md:translate-x-0  md:-left-12 md:top-30 md:w-[80%] rotate-x-12 rotate-y-[-16deg] rounded-3xl opacity-70 shadow-[0_30px_80px_rgba(0,0,0,0,58)]"
            />
            <div
              className="
                          absolute
                          left-1/2
                          top-8
                          
                          w-[86%]
                          md:left-[58%]
                          md:top-20
                          z-30
                          md:w-[80%]
                          -translate-x-1/2
                          rounded-[26px]
                          border border-[#45475a]
                          bg-[#070a16]
                          p-2
                          shadow-[0_30px_80px_rgba(0,0,0,0.7)]
                          origin-center
                          transform-[perspective(1200px)_rotateX(16deg)_rotateY(-12deg)]
                        "
            >
              {" "}
              <img
                src={Progressimage}
                alt="Progress preview"
                className="w-full rounded-[20px] border border-[#202333]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[linear-gradient(135deg,rgba(255,255,255,0.13),transparent_26%,rgba(109,92,255,0.12)_70%,transparent)]"></div>
            </div>

            <div className="absolute bottom-18 left-1/2 h-24 w-[94%] -translate-x-1/2 rounded-full bg-[#6d5cff]/38 blur-3xl"></div>
          </div>
        </div>

        {/* stas info card */}
        <div className="-mt-14  flex gap-6 text-[#e0dede] md:-mt-8 ml-6 md:text-[16px]">
          <div className="flex flex-col text-center">
            <h4 className="text-[#7c5cff] font-semibold">1.2K</h4>
            <p className="text-[13px] md:text-[14px] text-[#c0bebe]">
              Active users
            </p>
          </div>
          <div className="flex flex-col text-center">
            <h4 className="text-[#7c5cff] font-semibold">100K</h4>
            <p className="text-[13px] md:text-[14px] text-[#c0bebe]">
              Total habit tracked
            </p>
          </div>
          <div className="flex flex-col text-center">
            <h4 className="text-[#7c5cff] font-semibold">98%</h4>
            <p className="text-[13px] md:text-[14px] text-[#c0bebe]">
              User satisfaction
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
