import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
export default function Calendar() {
  return (
    <>
      <section>
        <div>
          <h1 className="ml-8 mt-3 text-2xl text-[#979393]">@Calendar</h1>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-[94%] bg-[#4a4747]"></div>
          </div>
          <div className=" ml-8 flex items-center gap-3">
            <span>
              <PiLessThan
                size={18}
                className="text-[#bdbcbc] mt-2 cursor-pointer"
              />
            </span>
            <h2 className=" mt-2 text-xl text-[#bdbcbc]">April 2026</h2>

            <span>
              <PiGreaterThan
                size={18}
                className="text-[#bdbcbc] mt-2 cursor-pointer"
              />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
