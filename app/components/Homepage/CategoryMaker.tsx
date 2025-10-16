import React from "react";

export default function CategoryMaker({
  title,
  options,
}: {
  title: string;
  options: string[];
}) {
  return (
    <select
      name={title}
      id={title}
      className="bg-[#2418c0] font-[montserrat] text-[white] rounded-sm px-[10px] py-[2px]"
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
