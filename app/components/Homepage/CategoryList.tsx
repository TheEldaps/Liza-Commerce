import CategoryMaker from "./CategoryMaker";

export default function CategoryList() {
  return (
    <section className="py-[40px] px-[10%] flex gap-5 items-center border overflow-x-scroll scrollbar-hide scroll-smooth">
      <CategoryMaker
        title="Groceries"
        options={[
          "Beverages",
          "Food",
          "Breakfast",
          "Snacks",
          "Baby food",
          "Canned",
          "Cleaning",
          "Pets",
        ]}
      />

      <CategoryMaker
        title="Premium fruits"
        options={[
          "Imported",
          "Tropical",
          "Citrus",
          "Organic",
          "Baskets",
          "Dried",
          "Seasonal",
        ]}
      />

      <CategoryMaker
        title="Home and kitchen"
        options={[
          "Cookware",
          "Appliances",
          "Tableware",
          "Storage",
          "Decor",
          "Bedding",
          "Lighting",
        ]}
      />

      <CategoryMaker
        title="Fashion"
        options={[
          "Men",
          "Women",
          "Kids",
          "Native",
          "Underwear",
          "Accessories",
          "Footwear",
        ]}
      />

      <CategoryMaker
        title="Electronics"
        options={[
          "Phones",
          "Computers",
          "TVs",
          "Cameras",
          "Gaming",
          "Smart",
          "Power",
        ]}
      />

      <CategoryMaker
        title="Beauty"
        options={["Skincare", "Makeup", "Hair", "Fragrance", "Body", "Men"]}
      />

      <CategoryMaker
        title="Home improvement"
        options={[
          "Tools",
          "Electricals",
          "Plumbing",
          "Paint",
          "Safety",
          "Garden",
          "Building",
        ]}
      />

      <CategoryMaker
        title="Sports, toys & luggage"
        options={[
          "Sports",
          "Fitness",
          "Toys",
          "Ride-ons",
          "Travel",
          "Bags",
          "Outdoor",
        ]}
      />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent"></div>
    </section>
  );
}
