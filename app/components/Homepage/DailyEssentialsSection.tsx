import Link from "next/link";
import DailyEssentialsItems from "./DailyEssentialsItems";

export default function DailyEssentialsCategory() {
  return (
    <section className="w-[90%] mx-auto font-[montserrat] mb-[40px]">
      <div className="flex justify-between mb-[40px]">
        <p className="border-b-4 border-[#2418c0] pb-[5px]">
          Daily <span className="text-[#2418c0] font-bold">Essentials</span>
        </p>
        <Link
          href="/DailyEssentials"
          className="text-[0.7rem] hover:text-[#000000ab] hover:underline my-auto "
        >
          View All <span className="text-[#2418c0] font-bold ml-[]">&gt;</span>{" "}
        </Link>
      </div>
      <div className="flex justify-between flex-wrap ">
        <DailyEssentialsItems />
        <DailyEssentialsItems />
        <DailyEssentialsItems />
        <DailyEssentialsItems />
        <DailyEssentialsItems />
        <DailyEssentialsItems />
        <DailyEssentialsItems />
        <DailyEssentialsItems />
        <DailyEssentialsItems />
        <DailyEssentialsItems />
        <DailyEssentialsItems />
        <DailyEssentialsItems />
        <DailyEssentialsItems />
      </div>
    </section>
  );
}
