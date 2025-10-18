"use client";
import CategoryMaker from "./CategoryMaker";
import { useState } from "react";

export default function CategoryList() {
  const [selected, setSelected] = useState(1);
  return (
    <section className=" w-[90%] mx-auto flex  items-center gap-5 lg:gap-12 overflow-x-scroll scrollbar-hide scroll-smooth mb-[20px]">
      <CategoryMaker
        id={1}
        selected={selected === 1}
        setSelected={setSelected}
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
        id={2}
        selected={selected === 2}
        setSelected={setSelected}
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
        id={3}
        selected={selected === 3}
        setSelected={setSelected}
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
        id={4}
        selected={selected === 4}
        setSelected={setSelected}
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
        id={5}
        selected={selected === 5}
        setSelected={setSelected}
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
        id={6}
        selected={selected === 6}
        setSelected={setSelected}
        title="Beauty"
        options={["Skincare", "Makeup", "Hair", "Fragrance", "Body", "Men"]}
      />

      <CategoryMaker
        id={7}
        selected={selected === 7}
        setSelected={setSelected}
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
        id={8}
        selected={selected === 8}
        setSelected={setSelected}
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
