import Image from "next/image";
import WhatsappLogo from "../../../public/WhatsappLogo.png";
import CallIcon from "../../../public/CallIcon.png";
import AppStoreImage from "../../../public/AppStoreImage.png";
import GooglePlayImage from "../../../public/GooglePlayImage.png";

export default function Footer() {
  return (
    <section className="bg-[#2418c0] mx-auto px-[4%] text-[white] font-[montserrat] text-[0.7rem] pt-[20px]">
      <section className="flex justify-between mb-[20px] gap-0.5 lg:justify-around">
        <section>
          <h1 className="text-[1.7rem] font-bold mb-[20px]">LizaMart</h1>

          <h3 className="text-[0.8rem] font-semibold ">Contact Us</h3>
          <ul className="mb-[25px] ">
            <li className="flex items-center gap-[10px] mb-[10px] ">
              <Image
                src={WhatsappLogo}
                width="50"
                height="50"
                alt="whatsapp logo"
                className="w-[20px] h-auto "
              />
              <div className="">
                <p>Whatsapp</p>
                <p>+234 808 039 2216</p>
              </div>
            </li>

            <li className=" flex items-center gap-[10px]">
              <Image
                src={CallIcon}
                width="50"
                height="50"
                alt="Call logo"
                className="w-[20px] h-auto "
              />
              <div>
                <p>Call Us</p>
                <p>+234 808 039 2216</p>
              </div>
            </li>
          </ul>

          <div className="">
            <h3 className="text-[0.8rem] font-semibold ">Download App</h3>
            <div className="">
              <Image
                src={AppStoreImage}
                width="160"
                height="70"
                alt="App store download banner"
                className="block mb-[5px] w-[100px] h-auto"
              />

              <Image
                src={GooglePlayImage}
                width="160"
                height="70"
                alt="Google play download banner"
                className="block w-[100px] h-auto"
              />
            </div>
          </div>
        </section>

        <section className="pt-[60px] pl-[20px]">
          <h2 className="text-[0.8rem] font-semibold underline">
            Most Popular Categories
          </h2>
          <ul className="flex flex-col gap-[4px] list-disc pl-[20px]">
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetables & Fruits</li>
            <li>Snacks & Foods</li>
            <li>Diary & Bakery</li>
          </ul>
        </section>
        <section className="pt-[60px]">
          <h2 className="text-[0.8rem] font-semibold underline">
            Customer Services
          </h2>
          <ul className="flex flex-col gap-[4px] pl-[20px] list-disc">
            <li>About us</li>
            <li>Terms & condition</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </section>
      </section>
      <p className="py-[10px] text-center border-t-2 border-t-white">
        &copy; 2025 All rights reserved. Reliance Retail Ltd.
      </p>
    </section>
  );
}
