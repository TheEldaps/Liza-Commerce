import Nav from "./components/Homepage/Nav";
import CategoryList from "./components/Homepage/CategoryList";
import BannerSection from "./components/Homepage/BannerSection";
import BestDealSection from "./components/Homepage/BestDealSection";
import TopCategorySection from "./components/Homepage/TopCategorySection";
import DailyEssentialsSection from "./components/Homepage/DailyEssentialsSection";

export default function Home() {
  return (
    <div className="min-h-[200vh]">
      <Nav />
      <CategoryList />
      <BannerSection />
      <BestDealSection />
      <TopCategorySection />
      <DailyEssentialsSection />
      {/* <Link href="/Login">Home page</Link> */}
    </div>
  );
}
