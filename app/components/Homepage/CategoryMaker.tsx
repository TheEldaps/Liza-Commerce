"use client";

export default function CategoryMaker({
  title,
  options,
  selected,
  setSelected,
  id,
}: {
  selected: boolean;
  setSelected: any;
  title: string;
  options: string[];
  id: number;
}) {
  return (
    <select
      name={title}
      id={title}
      className={` font-[montserrat] text-[black] rounded-2xl px-[10px] py-[5px] hover:bg-[#2318c033] cursor-pointer ${
        selected ? "bg-[#2418c0]" : "bg-[#2318c06b]"
      } `}
      onClick={() => {
        setSelected(id);
      }}
      style={{
        backgroundPosition: "right 0.8rem center", // 👈 push the arrow 5% inward
      }} // 👈 push the arrow 5% inward
    >
      {title}

      {options.map((item: string, index: number) => (
        <option value={index} key={index}>
          {item}
        </option>
      ))}
    </select>
  );
}
