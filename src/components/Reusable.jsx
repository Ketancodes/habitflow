export default function Reusable({
  label,
  checked,
  onChange,
  labelClassName = "",
}) {
  return (
    <label className="group flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />

      <span
        className="
          flex h-4 w-4 items-center justify-center rounded border border-[#3a3a3a] bg-[#222121]
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

      {/* <span
        className={`${
          checked ? "text-[#afabab] line-through" : "text-[#bdbaba]"
        } transition-colors duration-150 ${labelClassName}`}
      > */}
      <span
        className={`transition-colors duration-150 ${
          checked ? "line-through" : ""
        } ${labelClassName || (checked ? "text-[#afabab]" : "text-[#bdbaba]")}`}
      >
        {label}
      </span>
    </label>
  );
}
