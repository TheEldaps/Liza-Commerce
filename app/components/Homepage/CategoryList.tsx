import CategoryMaker from "./CategoryMaker";

export default function CategoryList() {
  return (
    <section>
      <CategoryMaker
        title="Groceries"
        options={["Vegetables", "Onions", "Spices"]}
      />
    </section>
  );
}
