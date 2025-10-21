import Image from "next/image";
import Phone1 from "../../../public/Phone1.png";
export default function BestDealItem() {
  return (
    <div className="rounded-2xl overflow-hidden ">
      <div className="bg-[#F5F5F5] flex flex-col justify-center items-center relative py-[10px]">
        <Image
          src={Phone1}
          width="50"
          height="80"
          alt="Item Image"
          className=""
        />
        <div className="bg-[#008ECC] text-[white] rounded-tr-4xl rounded-bl-4xl">
          56% OFF
        </div>
      </div>

      <div>
        <h3>Galaxy S22 Ultra </h3>
        <p>
          N1,050,000 <span>1,250,000</span>
        </p>
        <p>Save - N200,000</p>
      </div>
    </div>
  );
}
