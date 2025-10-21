import Link from "next/link";
import BestDealItem from "./BestDealItem";

export default function BestDealCategory() {
  return (
    <section className="w-[90%] mx-auto font-[montserrat]">
      <div className="flex justify-between mb-[20px]">
        <p className="border-b-4 border-[#2418c0] pb-[5px]">
          Grab the best deal on{" "}
          <span className="text-[#2418c0] font-bold">Smartphones</span>
        </p>
        <Link href="/Smartphones">
          View All <span className="text-[#2418c0] font-bold ml-[]">&gt;</span>{" "}
        </Link>
      </div>
      <div className="flex justify-between border ">
        <BestDealItem />
        <BestDealItem />
        <BestDealItem />
        <BestDealItem />
      </div>
    </section>
  );
}
