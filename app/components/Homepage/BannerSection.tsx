import Image from "next/image";
import BannerImage1 from "../../../public/BannerImg1.png";

export default function BannerSection() {
  return (
    <section className="w-[90%] mx-auto rounded-3xl bg-[#212844] relative overflow-visible">
      <section className="flex px-[5%] md:px-[10%] py-[5%] justify-between items-center text-[white] font-[montserrat] overflow-visible">
        <div className="">
          <h2 className="font-semibold text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] mb-[5px]">
            Best Deal Online{" "}
            <span className="hidden sm:inline"> on Smart Watches</span>
          </h2>
          <h1 className="font-bold text-[1.5rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[3rem] mb-[5px]">
            SMART WEARABLE.
          </h1>
          <h2>UP to 80% OFF</h2>
        </div>
        <Image
          src={BannerImage1}
          width="268"
          height="270"
          alt="Banner Image"
          className="block w-[200px]  "
        />
      </section>

      <button className="block w-[50px] h-[50px]  absolute top-[40%] right-[-25px] text-[1rem] rounded-full bg-[#ffffffd8] hover:bg-[#ffffff77] ">
        &gt;
      </button>
      <button className="block w-[50px] h-[50px] absolute top-[40%] left-[-25px] text-[1rem] rounded-full bg-[#ffffffd8] hover:bg-[#ffffff77] cursor-pointer">
        &lt;
      </button>
    </section>
  );
}
