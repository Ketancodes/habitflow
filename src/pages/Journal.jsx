import Journaloverview from "../components/journal/Journaloverview";
import Todayreflection from "../components/journal/Todayreflection";
import Recententries from "../components/journal/Recententries";
import useAppContext from "../context/useAppcontext";

export default function Journal() {
  const { appData, setAppData } = useAppContext();
  const journalEntries = appData.journalEntries || [];
  const todayKey = appData.todayKey;

  return (
    <>
      <section>
        <div>
          <h1 className="ml-8 mt-3 text-2xl text-[#979393] font-semibold ">
            @Journal
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-[94%] bg-[#4a4747]"></div>
          </div>
          <p className="ml-8 mt-4 max-w-3xl text-base leading-relaxed text-[#b9bac6]">
            Write down your thoughts, celebrate your wins, and plan for a better
            tomorrow. Simple reflections lead to massive growth.
          </p>

          <Journaloverview
            journalEntries={journalEntries}
            todayKey={todayKey}
          />

          <Todayreflection
            key={todayKey}
            journalEntries={journalEntries}
            todayKey={todayKey}
            setAppData={setAppData}
          />

          <Recententries journalEntries={journalEntries} />
        </div>
      </section>
    </>
  );
}
