import Link from "next/link";
import ElectronicBrandItems from "./ElectronicBrandItems";

export default function TopElectronicsBrand() {
  return (
    <section className="w-[90%] mx-auto font-[montserrat]">
      <div className="flex justify-between mb-[40px] border-b-2 border-b-[grey]">
        <p className="border-b-4 border-[#2418c0] pb-[5px]">
          Top{" "}
          <span className="text-[#2418c0] font-bold">Electronics Brands</span>
        </p>
        <Link
          href="/TopElectronics"
          className="text-[0.7rem] hover:text-[#000000ab] hover:underline my-auto "
        >
          View All <span className="text-[#2418c0] font-bold ml-[]">&gt;</span>{" "}
        </Link>
      </div>
      <div className="flex justify-between flex-wrap ">
        <ElectronicBrandItems />
        <ElectronicBrandItems />
        <ElectronicBrandItems />
        <ElectronicBrandItems />
        <ElectronicBrandItems />
        <ElectronicBrandItems />
        <ElectronicBrandItems />
        <ElectronicBrandItems />
        <ElectronicBrandItems />
      </div>
    </section>
  );
}
