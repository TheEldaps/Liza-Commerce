import Link from "next/link";
import Image from "next/image";
import SearchIcon from "../../../public/SearchIcon.png";
import MenuIcon from "../../../public/MenuIcon.png";
import UserIcon from "../../../public/UserIcon.png";
import Logo from "../../../public/Logo.png";
import CartIcon from "../../../public/CartIcon.png";

export default function Nav() {
  return (
    <section className="flex justify-between px-[20px] py-[10px] sm:gap-5 border max-w-[90%] m-auto sticky">
      <div className="flex items-center gap-3">
        <Image src={Logo} width="48" height="48" alt="Platform Logo" />
        <h2 className="text-[1.5rem] font-bold font-[montserrat]">Liza-Mart</h2>
      </div>

      {/* Search section */}
      <div className="hidden sm:flex gap-3 justify-between items-center border border-[#2418c0] px-[10px] rounded-md flex-1 max-w-[400px] bg-[#F3F9FB] hover:border-[#2318c051] hover:bg-[#f3f9fb97] ">
        <Image
          src={SearchIcon}
          width="20"
          height="20"
          alt="search icon"
          className="w-[20px] h-auto"
        />
        <input
          type="text"
          placeholder="Search essentials, groceries and more..."
          className="outline-0 flex-1 font-[montserrat] text-[0.8rem]"
        />

        <button>
          <Image src={MenuIcon} width="20" height="20" alt="Menu icon" />
        </button>
      </div>

      <div className="flex text-[0.8rem] font-[montserrat]">
        <Link
          href="/Login"
          className=" flex items-center px-[10px] gap-1 border-r mr-[10px] hover:text-[#2418c0]"
        >
          <Image
            src={UserIcon}
            width="20"
            height="20"
            alt="user icon w-[20px] h-auto"
          />
          Sign Up/Sign In
        </Link>

        <Link
          href="/Cart"
          className="flex items-center gap-1 px-[10px] hover:text-[#2418c0]"
        >
          <Image
            src={CartIcon}
            width="20"
            height="20"
            alt="cart icon"
            className="w-[20px] h-auto"
          />
          Cart
        </Link>
      </div>
    </section>
  );
}
