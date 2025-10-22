import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Homepage/Nav";
import CategoryList from "./components/Homepage/CategoryList";
import BannerSection from "./components/Homepage/BannerSection";
import BestDealCategory from "./components/Homepage/BestDealCategory";
import TopCategorySection from "./components/Homepage/TopCategorySection";

export default function Home() {
  return (
    <div className="min-h-[200vh]">
      <Nav />
      <CategoryList />
      <BannerSection />
      <BestDealCategory />
      <TopCategorySection />
      {/* <Link href="/Login">Home page</Link> */}
    </div>
  );
}
