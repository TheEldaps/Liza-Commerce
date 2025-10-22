import React from "react";
import Image from "next/image";
import DailyEssentials from "../../../public/DailyEssentials.png";

export default function DailyEssentialsItems() {
  return (
    <div className="text-center ">
      <div className="flex items-center w-[80px] h-[80px] mb-[10px] border-1 border-[#2418c0] rounded-xl bg-[#80808092]">
        <Image
          src={DailyEssentials}
          width="50"
          height="50"
          alt="Daily Essentials Items"
          className=" block w-full h-auto"
        />
      </div>
      <h3 className="text-[0.5rem] text-[#222]">Daily Essentials</h3>
      <p className=" text-[0.6rem] font-bold">UP to 50% OFF</p>
    </div>
  );
}
