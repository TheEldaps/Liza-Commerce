import Link from "next/link";
import TopCategoryItem from "./BestDealItem";

export default function BestDealCategory() {
  return (
    <section className="w-[90%] mx-auto font-[montserrat]">
      <div className="flex justify-between mb-[20px]">
        <p className="border-b-4 border-[#2418c0] pb-[5px]">
          Shop from
          <span className="text-[#2418c0] font-bold">Top Categories</span>
        </p>
        <Link
          href="/TopCategories"
          className="text-[0.7rem] hover:text-[#000000ab] hover:underline my-auto "
        >
          View All <span className="text-[#2418c0] font-bold ml-[]">&gt;</span>{" "}
        </Link>
      </div>
      <div className="flex justify-between flex-wrap ">
        <TopCategoryItem />
      </div>
    </section>
  );
}
