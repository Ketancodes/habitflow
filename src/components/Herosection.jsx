import Progressimage from "../assets/Progressimage.png";
import Todayimage from "../assets/Todayimage.png";
import Goalsimage from "../assets/Goalsimage.png";

export default function Herosection() {
  const primaryButton =
    "inline-flex items-center justify-center h-12 px-6 cursor-pointer text-base font-medium text-white rounded-lg bg-[#4f46e5] shadow-md transition-all duration-200 hover:bg-[#4338ca] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-inner focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/40";
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(72,61,139,0.16),transparent_28%)]"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 h-[42%] w-[58%] bg-[radial-gradient(ellipse_at_bottom,rgba(109,92,255,0.32),transparent_65%)] blur-2xl"></div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-[94%] items-center gap-12">
          {/* left content */}
          <div className="flex w-[30%] flex-col">
            <div className="inline-flex w-fit">
              <h3 className="rounded-3xl border border-[#30313d] bg-[#17172a]/85 px-4.5 py-2.5 text-[15px] text-[#bda7ff]">
                Track. Analyze. Improve. Repeat!
              </h3>
            </div>

            <div className="mt-5 flex flex-col text-[44px] font-semibold leading-tight text-white">
              <h1>One System.</h1>
              <h1>
                Build <span className="text-[#7c5cff]">Discipline.</span>{" "}
              </h1>
              <h1>
                Track Your Flow{" "}
                <span className="text-[#7c5cff]">Everyday!</span>
              </h1>
            </div>

            <div className="mt-4 flex flex-col text-[16px] leading-relaxed text-[#c5c0de]">
              <p>From daily habits to lifetime goals,</p>
              <p>Habitflow keeps you focused and consistent.</p>
            </div>

            <div className="mt-8 flex gap-6">
              <button className={primaryButton}>Try Habitflow</button>
              <button className="inline-flex h-12 cursor-pointer items-center justify-center rounded-lg border border-[#6d5cff]/50 bg-[#111427]/60 px-6 text-base font-medium text-white transition-all duration-200 hover:border-[#8b7cff] hover:bg-[#1a1d35] hover:-translate-y-0.5 active:translate-y-0.5">
                Learn More
              </button>
            </div>
          </div>

          {/* right image stack */}
          <div className="relative h-147.5 flex-1">
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
              className="absolute -left-12 top-30 w-[80%] rotate-x-12 rotate-y-[-16deg] rounded-3xl opacity-75 shadow-[0_30px_80px_rgba(0,0,0,0,58)]"
            />
            <div
              className="
                          absolute
                          left-[58%]
                          top-20
                          z-30
                          w-[80%]
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
        <div className="flex gap-6 text-[#e0dede] -mt-8 ml-6 text-[16px]">
          <div className="flex flex-col text-center">
            <h4>1.2K</h4>
            <p className="text-[14px] text-[#c0bebe]">Active users</p>
          </div>
          <div className="flex flex-col text-center">
            <h4>100K</h4>
            <p className="text-[14px] text-[#c0bebe]">Total habit tracked</p>
          </div>
          <div className="flex flex-col text-center">
            <h4>98%</h4>
            <p className="text-[14px] text-[#c0bebe]">User satisfaction</p>
          </div>
        </div>
      </section>
    </>
  );
}
