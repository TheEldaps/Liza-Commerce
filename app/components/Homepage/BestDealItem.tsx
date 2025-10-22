import Image from "next/image";
import Phone1 from "../../../public/Phone1.png";
export default function BestDealItem() {
  return (
    <div className="rounded-[15px] overflow-hidden border-[grey] mb-[20px] hover:border-[#2418c0] border-2 cursor-pointer">
      <div className="bg-[#F5F5F5] flex flex-col justify-center items-center relative py-[10px] mb-[10px]">
        <Image
          src={Phone1}
          width="50"
          height="80"
          alt="Item Image"
          className=""
        />
        <div className="bg-[#2418c0] text-[white] rounded-tr-[13px] rounded-bl-[15px] text-[0.6rem] px-[10px] py-[5px] absolute top-0 right-0">
          56% <br /> OFF
        </div>
      </div>

      <div className="px-[5px] pb-[5px] text-[#222222]">
        <div className="border-b-[grey] pb-[4px] border-b-1">
          <h3 className=" text-[0.8rem] font-semibold text-[#222222] mb-[5px]">
            Galaxy S22 Ultra{" "}
          </h3>
          <p className="text-[0.7rem] font-bold">
            N1,050,000{" "}
            <span className="line-through inline-block ml-[5px]">
              1,250,000
            </span>
          </p>
        </div>
        <p className="text-[0.7rem] mt-[5px] text-[green]"> Save - N200,000</p>
      </div>
    </div>
  );
}
