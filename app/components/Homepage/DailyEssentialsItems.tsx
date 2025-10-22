import React from "react";
import Image from "next/image";
import DailyEssentials from "../../../public/DailyEssentials.png";

export default function DailyEssentialsItems() {
  return (
    <div>
      <Image
        src={DailyEssentials}
        width="50"
        height="50"
        alt="Daily Essentials Items"
        className=""
      />
      <h3>Daily Essentials</h3>
      <p>UP to 50% OFF</p>
    </div>
  );
}
