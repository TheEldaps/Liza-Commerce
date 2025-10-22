import Image from "next/image";
import AccessoriesCategory from "../../../public/AccessoriesCategory.png";

export default function TopCategoryItem() {
  return (
    <div className=" mt-[30px]">
      <div className="border-2 border-[#2418c0] rounded-full">
        <Image
          src={AccessoriesCategory}
          width="50"
          height="50"
          alt="category image"
          className="block min-w-[100px] h-auto"
        />
      </div>
      <h2 className="text-center text-[0.8rem]">Accessories</h2>
    </div>
  );
}
