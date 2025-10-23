import Image from "next/image";
import BrandImageIphone from "../../../public/BrandImageIphone.png";
import BrandLogoIphone from "../../../public/BrandLogoIphone.png";

export default function ElectronicBrandItems() {
  return (
    <div className="bg-[#313131] flex items-center mb-[10px] px-[15px] py-[5px] rounded-2xl bg-[url('/ElectronicBrandBg.png')] bg-no-repeat  bg-[length:50%_auto] bg-[position:top_right]">
      <div>
        <p className="bg-[#494949] text-[0.65rem] w-[80%] text-white text-center  py-[4px] rounded-sm mb-[8px]">
          IPHONE
        </p>
        <Image
          src={BrandLogoIphone}
          width="50"
          height="50"
          alt="brand logo"
          className="mb-[8px] w-[40px] h-auto"
        />
        <h2 className="text-[0.7rem] text-white">UP to 80% OFF</h2>
      </div>
      <div className="flex items-center ml-[20px]">
        <Image
          src={BrandImageIphone}
          width="150"
          height="150"
          alt="brand image"
          className="w-[80px] h-auto"
        />
      </div>
    </div>
  );
}
