import Image from "next/image";
import Logo from "../public/Logo.png";
export default function loading() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Image src={Logo} width="100" height="100" alt="" />
    </div>
  );
}
