export default function Reusable({
  label,
  checked,
  onChange,
  emoji = "",
  labelClassName = "",
}) {
  return (
    <label className="group flex w-full items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />

      <span
        className="
           shrink-0   flex h-4 w-4 items-center justify-center rounded border border-[#3a3a3a] bg-[#222121]
          transition-all duration-150
          group-has-[:checked]:border-blue-600 group-has-[:checked]:bg-blue-600
        "
      >
        <span
          className="
            text-[12px] font-bold text-[#bdbaba] opacity-0 transition-all duration-150
            group-has-[:checked]:opacity-100
          "
        >
          ✓
        </span>
      </span>

      <div className="flex min-w-0 w-full items-center justify-between ">
        <span
          className={`block min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap transition-colors duration-150 ${
            checked ? "line-through" : ""
          } ${labelClassName || (checked ? "text-[#afabab]" : "text-[#bdbaba]")}`}
        >
          {label}
        </span>

        {emoji && (
          <span className="ml-2 shrink-0 text-base leading-none">{emoji}</span>
        )}
      </div>
    </label>
  );
}
