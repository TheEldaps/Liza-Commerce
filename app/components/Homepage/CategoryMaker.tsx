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
      className="bg-black text-[white] rounded-sm px-[10px] py-[5px]"
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
