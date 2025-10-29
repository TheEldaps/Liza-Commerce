import CategoryList from "./components/Homepage/CategoryList";
import BannerSection from "./components/Homepage/BannerSection";
import BestDealSection from "./components/Homepage/BestDealSection";
import TopCategorySection from "./components/Homepage/TopCategorySection";
import DailyEssentialsSection from "./components/Homepage/DailyEssentialsSection";
import TopElectronicsBrand from "./components/Homepage/TopElectronicsBrand";

export default function Home() {
  return (
    <div className="min-h-[500vh]">
      <CategoryList />
      <BannerSection />
      <BestDealSection />
      <TopCategorySection />
      <TopElectronicsBrand />
      <DailyEssentialsSection />
      {/* <Footer /> */}

      {/* <Link href="/Login">Home page</Link> */}
    </div>
  );
}
