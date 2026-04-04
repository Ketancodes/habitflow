export default function Reusable({ label }) {
  return (
    <>
      <label className="group flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className="sr-only" />

        <span
          className="
                            flex h-4 w-4 items-center justify-center rounded border border-[#3a3a3a] bg-[#222121]
                            transition-all duration-150
                             group-has-[:checked]:border-blue-600 group-has-[:checked]:bg-blue-600 "
        >
          <span
            className="
                                text-[12px] font-bold text-[#e2dddd] opacity-0 transition-all duration-150
                                group-has-[:checked]:opacity-100 "
          >
            ✓
          </span>
        </span>

        <span className="text-[#bdbaba]">{label}</span>
      </label>
    </>
  );
}
